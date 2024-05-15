"use client";

import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

interface RemoveProps {
    wishlistId: string;
}

const RemoveWishlist: React.FC<RemoveProps> = ({wishlistId}) => {
    const router = useRouter();

    const remove = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlists`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({_id: wishlistId})
                }
            );

            if (!response.ok) {
                throw new Error('Failed to remove item from wishlist');
            }
            redirect("/wishlist");
            } catch (error) {
                console.error("Erorr removing item from wishlist", error);
            }
        }

    return (
        <button
            onClick={remove}
            className="btn btn-outline btn-error"
        >
            <h1 className="hover:text-gray-100">Remove from Wishlist</h1>
        </button>
    );

}

export default RemoveWishlist;