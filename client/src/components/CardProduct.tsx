import Link from "next/link";

interface CardProps {
    _id: Object;
    name: string; // validation: required
    slug: string; // validation: required, unique
    description: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
    images: string[];
    createdAt: Date;
    updatedAt: Date;
}

interface CardPropsArray {
    product: CardProps;
}

export default function CardProduct({ product }: { product: CardProps }) {
    return (
        <>
          <div className="flex flex-wrap justify-center">
            <div className="card card-compact w-78 bg-base-100 shadow-xl">
              <Link href={`/products/${product.slug}`}>
                <figure className="h-64 w-full">
                  <img src={product.thumbnail} alt={product.name} />
                </figure>
              </Link>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </>
      );
}