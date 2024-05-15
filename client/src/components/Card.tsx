interface featured {
  name: string;
  slug: string;
  description: string;
  excerpts: string;
  price: number;
  tags: [string];
  thumbnail: string;
  images: string[];
  createdAt: string;
  upadatedAt: string;
}

interface ArrayOfFeatured {
  data: featured[];
}

export default function Card({product}: {product: featured}) {
    return (
        <>
          <div className="flex flex-wrap ml-6">
            <div className="card card-compact w-64 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={product.thumbnail}
                  alt={product.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </>
    );
}