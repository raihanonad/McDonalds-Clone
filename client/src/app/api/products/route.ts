import ProductModel from "@/db/models/product";

export async function GET(request: Request) {
    const products = await ProductModel.getAllProducts();

    return Response.json(
        {
            data: products
        },
        {
            status: 200
        }
    )
}