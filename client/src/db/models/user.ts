import { User } from '@/types';
import { db } from '../config/mongo';
import { z } from 'zod';
import bcryptjs from 'bcryptjs';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

interface Login {
    email: string;
    password: string;
}

interface newUser {
    name: string;
    username: string; // validation: reuired, unique
    email: string; // validation: reuired, unique, email format
    password: string; // validation: required, length min 5
}

const UserValidation = z.object({
    username: z.string({required_error: "Username cant be empty"}),
    email: z.string({required_error: "Email cant be empty"}).email(),
    password: z.string({required_error: "Password cant be empty"}).min(5)
});

export default class UserModel {
    static userCollection() {
        return db.collection<User>('users')
    }

    static async getUserByEmail(email: string) {
        return (await this.userCollection().findOne({ email })) as User | null;
    }

    static async create(newUser: newUser) {
        const validation = UserValidation.safeParse(newUser);

        if (!validation.success) {
          const errors = validation.error;
          throw errors;
        }

        const user = {
            ...newUser,
            password: bcryptjs.hashSync(newUser.password),
        }

        const [validateUser] = await this.userCollection()
            .find({
                $or: [
                    {username: user.username},
                    {email: user.email}
                ]
            }).toArray();

        if (validateUser) throw new Error('Username/Email already registered');

        const data = await this.userCollection().insertOne(user);
        return data;
    }

    static async getUserById(id: string) {
        const _id = new ObjectId(id);

        const data = (await this.userCollection().findOne({_id})) as User | null;

        if (!data) {
            return NextResponse.json(
                {
                    message: "User not found"
                },
                {
                  status: 404
                }
            )
        }

        return data;
    }

    static async findAll() {
        return (await this.userCollection().find({}).toArray()) as User[];
    }
}
