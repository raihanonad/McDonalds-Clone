import UserModel from '@/db/models/user';
import { createToken } from '@/lib/jwt';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { ZodError, z } from 'zod';

const UserValidation = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(13)
});

export async function POST(request: Request) {
    try {
        const { email, password }: { email: string, password: string } = 
            await request.json();
        const validation = UserValidation.safeParse({email, password});

        if (!validation.success) {
            throw validation.error;
        }

        const dataLogin = await UserModel.getUserByEmail(email);
        if (!dataLogin) {
            return NextResponse.json(
                {
                message: "Wrong Email/Password"
                },
                {
                   status: 401
                }
            );
        };

        const accessToken = createToken({
            id: dataLogin._id,
            email: dataLogin.email,
        });

        cookies().set("Authorization", `Bearer ${accessToken}`);

        return NextResponse.json(
            {
                message: "Login Success",
                data: {accessToken}
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        if (error instanceof ZodError) {
            const errorPath = error.issues[0].path[0];
            const errorMessage = error.issues[0].message;

            return NextResponse.json({
                message: `${errorPath} ${errorMessage}`,
            })
        }

        return NextResponse.json(
            {
                message: "Internal Server Error",
            },
            {
               status: 500
            }
        )
    }
}