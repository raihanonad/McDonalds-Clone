"use client";

import CardWishlist from "@/components/CardWishlist";
import { ObjectId } from "mongodb";
import { useEffect, useState } from "react";

interface Product {
    _id: ObjectId;
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
    images: string[];
    createdAt: Date;
    updatedAt: Date;
}

interface Wishlist {
    _id: string;
    userId: string;
    productId: string;
    createdAt: Date;
    updatedAt: Date;
    productDetails: Product;
}

interface ArrayOfWishlist {
    data: Wishlist[];
}

const WishlistPage = () => {
    const [wishlistItems, setWishlistItems] = useState<Wishlist[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWishlistItems = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`,
                    {
                        method: "GET"
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch wishlist items");
                }

                const data = await response.json();

                setWishlistItems(data);
            } catch (error) {
                console.error("Error fetching wishlist items", error); 
            } finally {
                setLoading(false);
            }
        };

        fetchWishlistItems();
    }, []);

    const handleRemoveItem = (id: string) => {
        setWishlistItems(wishlistItems.filter((item) => item._id !== id));
    };

    return (
        <>
          <main className="bg-white">
            <h1 className="text-4xl font-bold text-center pt-6 pb-2">
              My Wishlist
            </h1>
            <h1 className="text-small text-center pb-5">Refresh page to update</h1>
            {loading ? (
              <p className="text-center mt-20">Loading...</p>
            ) : (
              <div className="flex flex-col space-y-4 overflow-auto max-h-[90vh]">
                {wishlistItems &&
                  wishlistItems.map((item, index) => (
                    <CardWishlist
                      key={index}
                      product={item.productDetails}
                      _id={item._id}
                      onRemove={handleRemoveItem}
                    />
                  ))}
              </div>
            )}
          </main>
        </>
    );
}

export default WishlistPage;