import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";

function Header() {
    const session = false;
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#f7f7f5] p-4">
      <div className="flex items-center justify-center md:w-1/5 ">
        <Link href="/">
          <div className="relative w-10 h-10 transition opacity-75 cursor-pointer hover:opacity-100 hover:scale-150">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/1Asset_13.png/1599px-1Asset_13.png?20220911113012"
              objectFit="contain"
              layout="fill"
              className="rounded-full"
            />
          </div>
        </Link>
      </div>
      <div className="items-center justify-center flex-1 hidden space-x-8 md:flex">
        <a className="headerLink">All Products</a>
        <a className="headerLink">Explore Store</a>
        <a className="headerLink">Weddings and Party</a>
        <a className="headerLink">Support</a>
      </div>
      <div className="flex items-center justify-center gap-x-5 md:w-1/5">
        <SearchIcon className="headerIcon" />
      <Link href="/checkout">
      <div className="relative cursor-pointer">
        <span className="absolute z-50 flex items-center justify-center w-4 h-4 rounded-full -right-1 -top-1 bg-gradient-to-r from-red-800 to-red-300 text-white text-[10px]">
          5
        </span>
        <ShoppingBagIcon className="headerIcon" />
      </div>
      </Link>

      {
        session? 
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Avatarforecommerce.jpg/960px-Avatarforecommerce.jpg?20220911105512" alt="profileAvatar" className="rounded-full cursor-pointer" width={34} height={34}/> : 
        <UserIcon className="headerIcon"/>
      }

      </div>
    </header>
  );
}

export default Header;
