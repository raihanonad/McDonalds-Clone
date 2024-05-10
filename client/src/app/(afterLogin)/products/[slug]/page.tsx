import { Product } from "@/types";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import AddWishlist from "@/components/AddWishlist";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug;
    const product = await fetchData(slug);
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: product.data.name,
        openGraph: {
            images: ["/some-specific-page-image.jpg", ...previousImages]
        }
    }
}

async function fetchData(slug: string) {
    const response = await fetch(`http://localhost:3000/api/products/${slug}`);
    const data = await response.json();

    return data;
}

export default async function DetailProduct({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    const product: { data: Product } = await fetchData(params.slug);
    return (
        <div className="bg-white">
          <div className="container mx-auto flex justify-center items-start">
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="w-full md:w-1/2 pt-20 ml-24">
                <img
                  src={product?.data.thumbnail}
                  alt={product?.data.name}
                  className="rounded-2xl"
                />
              </div>
              <div className="w-full md:w-1/4 mt-44">
                <h1 className="text-5xl font-bold mb-6">{product?.data.name}</h1>
                <p className="text-xl my-2 text-col text-green-600">
                  Rp {product?.data.price}
                </p>
                <p className="mb-10">{product?.data.description}</p>
                <div className="mb-6">
                  <AddWishlist productId={product?.data._id} />
                </div>
                <Link
                  href="/products"
                  className="hover:underline hover:underline-offset-2"
                >
                  ⟵ Back to All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
    );
}