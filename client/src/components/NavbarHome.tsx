"use client";
import Link from "next/link";
import Image from "next/image";
import mcdonald from "../../assets/mcdonald.png";

export default function NavbarHome() {
    return (
        <div className="navbar bg-base-100 static top-0">
          <div className="navbar-start px-12 text-yellow-500">
            <Link href={"/"}>
              <Image alt="logo" src={mcdonald} className="w-16" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex font-bold text-gray-600">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/products">
                  Menus
                </Link>
              </li>
              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn btn-outline mr-6">
              <Link href={"/login"}>Login</Link>
            </button>
          </div>
        </div>
      );
}