"use client"
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white-100">
          <div className="max-w-5xl mx-auto ">
            <div className="sm:flex flex justify-around sm:flex-wrap sm:-mx-4 md:py-4">
              <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                <h5 className="text-xl font-bold mb-3">McDonald's</h5>
                <ul className="list-none footer-links">
                  <li className="mb-2">
                    <a href="#" className="border-b border-transparent hover:border-gray-900 transition ease-in-out duration-300 hover:translate-x-2 ...">Tentang Kami</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="border-b border-transparent hover:border-gray-900">Kebijakan Privasi</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="border-b border-transparent hover:border-gray-900">Ketentuan Layanan</a>
                  </li>
                </ul>
              </div>
              <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                <h5 className="text-xl font-bold mb-3">Layanan</h5>
                <ul className="list-none footer-links">
                  <li className="mb-2">
                    <a href="#" className="border-b border-transparent hover:border-gray-900">Daftar Reseller</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="border-b border-transparent hover:border-gray-900">Hubungi Kami</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="border-b border-transparent hover:border-gray-900">Peta Situs</a>
                  </li>
                </ul>
              </div>  
              <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                <h5 className="text-xl font-bold mb-3">Akun Saya</h5>
                <ul className="list-none footer-links">
                  <li className="mb-2">
                    <a href="#" className="border-b border-transparent hover:border-gray-900">Profile Saya</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="border-b border-transparent hover:border-gray-900">Riwayat Pesanan</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="border-b border-transparent hover:border-gray-900">Wishlist</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="border-b border-transparent hover:border-gray-900">Newsletter</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 mt-4 mb-4 border-t border-gray-400 text-center">
              McDonald's Indonesia © 2024
            </div>
          </div>
        </footer>
    );
}

export default Footer;