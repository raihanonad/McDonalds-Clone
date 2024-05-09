import { Wishlist } from "@/types";
import { db } from "../config/mongo";
import { z } from "zod";
import { ObjectId } from "mongodb";

const WishlistValidation = z.object({
  userId: z.string({
    required_error: "User ID cant be empty",
  }),
  productId: z.string({
    required_error: "Product ID cant be empty",
  }),
});

export default class WishlistModel {
  static wishlistCollection() {
    return db.collection<Wishlist>("wishlists");
  }

  static async getWishlist(userId: string, productId: string) {
    const idUser = new ObjectId(userId);
    const idProduct = new ObjectId(productId);
    const data = await this.wishlistCollection().findOne({
      userId: idUser,
      productId: idProduct,
    });

    return data;
  }

  static async createWishlist(userId: string, productId: string) {
    const validate = await this.getWishlist(userId, productId);

    if (validate) {
      throw new Error("Food already in wishlist");
    } else {
      const newWishlist = {
        userId: new ObjectId(userId),
        productId: new ObjectId(productId),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const data = await this.wishlistCollection().insertOne(newWishlist);

      return data;
    }
  }

  static async showWishlist(userId: string) {
    const id = new ObjectId(userId);
    const data = await this.wishlistCollection()
      .aggregate([
        {
          $match: {
            userId: id,
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "productDetails",
          },
        },
        {
          $unwind: "$productDetails",
        },
        {
          $project: {
            _id: 1,
            userId: 1,
            productId: 1,
            createdAt: 1,
            updatedAt: 1,
            "productDetails.name": 1,
            "productDetails.slug": 1,
            "productDetails.description": 1,
            "productDetails.excerpt": 1,
            "productDetails.price": 1,
            "productDetails.tags": 1,
            "productDetails.thumbnail": 1,
            "productDetails.images": 1,
            "productDetails.createdAt": 1,
            "productDetails.updatedAt": 1,
          },
        },
      ])
      .toArray();

    return data;
  }

  static async deleteWishlist(id: string) {
    const data = await this.wishlistCollection().deleteOne({
      _id: new ObjectId(id),
    });

    return data;
  }
}
