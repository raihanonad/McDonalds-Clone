import { z } from "zod";
import { db } from "../config/mongo";
import { Product } from "@/types";

const ProductValidation = z.object({
    name: z.string({
        required_error: "Name cant be empty"
    }),
    slug: z.string({
        required_error: "Slug cant be empty"
    })
});

export default class ProductModel {
    static productCollection() {
        return db.collection<Product>("products")
    }

    static async getAllProducts() {
        const data = await this.productCollection().find().toArray();

        return data;
    }

    static async getFeaturedProducts() {
        const data = await this.getAllProducts();
        const featured = data.slice(0, 5);

        return featured;
    }
}