import NavbarHome from "@/components/NavbarHome";
import Carousel from "@/components/Carousel";
import Card from "@/components/Card";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | McDonald's",
  description: "**"
}

interface featured {
  name: string;
  slug: string;
  desctiption: string;
  excerpts: string;
  price: number;
  tags: [string];
  thumbnail: string;
  images: [string];
  createdAt: string;
  upadatedAt: string;
}

interface ArrayOfFeatured {
  data: featured[];
}

const fetchData = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/featuredProducts`,
    {method: "get"}
  );
  return await data.json();
}

export default async function Home() {
  let result = await fetchData();
  const data = result.data;

  return (
    <div className="bg-white">
      {/* NavBar */}
      <NavbarHome />

      {/* Carousel */}
      <Carousel />

      {/* Products */}
      <div>
        <h1 className="text-center text-gray-800 text-3xl font-bold mt-10 mb-10">
          Menu Favorit
        </h1>
        <div className="grid grid-cols-5 mt-10">
          {data.map((item: featured, idx: string) => (
            <Card key={idx} product={item} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/products">
            <button className="btn btn-wide mt-10 bg-red-600 hover:bg-red-700 ml-16">
              <h6 className="text-gray-100">Lihat Semua Menu</h6>
            </button>
          </Link>
        </div>
      </div>

      {/* Banner */}
      <Banner />
      <Footer />
    </div>
  );
}
