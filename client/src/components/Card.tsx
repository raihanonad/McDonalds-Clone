interface featured {
  name: string;
  slug: string;
  desctiption: string;
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

}