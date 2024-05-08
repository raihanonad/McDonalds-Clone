import ProductModel from "@/db/models/product"
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
    try {
        const data = await ProductModel.getFeaturedProducts();

        return NextResponse.json(
            {
                data: data
            },
            {
                status: 200
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Internal server error"
            },
            {
                status: 500
            }
        )
    }
}