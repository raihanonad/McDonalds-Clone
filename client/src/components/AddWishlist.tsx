"use client";

import React from "react";
import Swal from "sweetalert2";

interface AddWishlistProps {
    productId: Object;
}

const AddWishlist: React.FC<AddWishlistProps> = ({productId}) => {
    const handleAddToWishlist = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlists`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({productId})
                });

            if (!response.ok) {
                throw new Error('Failed to add item to wishlist');
            }

            const result = await response.json();
            Swal.fire({
                icon: "success",
                text: `${result.message}`
                });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You cannot add the same food twice"
            });
        }
    }
    
    return (
        <button onClick={handleAddToWishlist} className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
            Add To Wishlist
        </button>
    );
}

module.exports = AddWishlist;