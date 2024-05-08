"use client";

import CardProduct from "@/components/CardProduct";
import Footer from "@/components/Footer";
import { Product } from "@/types";
import Image from "next/image";
import { useState } from "react";

interface ArrayOfProducts {
  data: Product[];
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    return (
        <div className="bg-white">
          {/* banner product */}
          <div className="w-full">
            <Image alt="bannerProduct" src={bannerProduct} className="w-full" />
          </div>
    
          {/* body product */}
          <h1 className="text-center text-gray-800 text-4xl font-bold mt-14 mb-10">
            Semua Menu Kami
          </h1>
          <div className="flex items-center justify-center mb-10 ml-10">
                <input
                  type="text"
                  placeholder="Search your favourite menus"
                  className="w-96 p-2 border border-gray-300 rounded-lg "
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
                <FaSearch className="ml-4 text-gray-500 cursor-pointer" />
              </div>
          <div>
            <div className="grid grid-cols-4 gap-10 mt-10">
              {search
                ? searchProduct.map((product, idx) => (
                    <CardProduct key={idx} product={product} />
                  ))
                : products.map((product, idx) => (
                    <CardProduct key={idx} product={product} />
                  ))}
            </div>
    
            {/* banner footer */}
            <div className="w-full">
              <Image alt="bannerProduct2" src={bannerProduct2} className="w-full" />
            </div>
          </div>
          <div className="mt-12 ">
            <Footer />
          </div>
        </div>
    );
}