import WishlistModel from "@/db/models/wishlist";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    try {
        const userId = request.headers.get("x-user-id");

        if (!userId) {
            return NextResponse.json(
                {
                    message: "User ID not found"
                },
                {
                    status: 404
                }
            );
        }

        const body = await request.json();
        const { productId } = body;

        const wishlistItem = await WishlistModel.createWishlist(userId, productId);

        return NextResponse.json(
            {
                message: "Wishlist item added",
                data: wishlistItem
            },
            {
                status: 201
            }
        )
    } catch (error) {
        return NextResponse.json(
            {
                message: "Internal server error"
            },
            {
                status: 500
            }
        );
    }
};

export async function GET(request: Request) {
    try {
        const userId = request.headers.get("x-user-id") as string;

        if (!userId) {
            return NextResponse.json(
                {
                    message: "User ID not found"
                },
                {
                    status: 404
                }
            );
        }

        const getWishlist = await WishlistModel.showWishlist(userId);

        return new Response(JSON.stringify(getWishlist), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            }
        })
    } catch (error) {
        return NextResponse.json(
            {
                message: "Internal server error"
            },
            {
                status: 500
            }
        );
    }
}

