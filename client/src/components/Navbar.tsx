"use client";

import Link from "next/link";
import Image from "next/image";
import mcdonald from "../../assets/mcdonald.png";
import LogoutButton from "./LogOut";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 static top-0">
          <div className="navbar-start px-12 text-yellow-500">
            <Link href={"/products"}>
              <Image alt="logo" src={mcdonald} className="w-16" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex font-bold text-gray-600">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/products">Menus</Link>
              </li>
              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <LogoutButton />
          </div>
        </div>
      );
}