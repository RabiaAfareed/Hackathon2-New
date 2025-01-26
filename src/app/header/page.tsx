import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";

function Header() {
  return (
    <div className="w-full">
      <div className="w-full h-auto px-4 sm:px-6 lg:px-12">
        {/* Top Content */}
        <div className="w-full flex justify-between items-center py-4">
          {/* Search Icon */}
          <CiSearch size={24} className="text-gray-700 sm:text-[32px]" />
          {/* Logo */}
          <h1 className="text-[20px] sm:text-[25px] leading-[30px] font-[400] text-[#22202E]">
            Avicon
          </h1>
          {/* Icons */}
          <div className="flex gap-2">
            <Link href={"/shopingBasket"}>
              <CiShoppingCart
                size={24}
                className="text-gray-700 sm:text-[32px]"
              />
            </Link>
            <Link href={"/about"}>
              <IoIosContact size={24} className="text-gray-700 sm:text-[32px]" />
            </Link>
          </div>
        </div>

        {/* Line Content */}
        <div className="w-full h-[1px] sm:h-[2px] bg-gray-500 mt-4"></div>

        {/* Bottom Content */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-[44px] mt-4 sm:mt-[20px] mb-8 sm:mb-[60px]">
          <Link href={"/creamics"}>
            <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] font-[400] text-[#000000]">
              Ceramics
            </p>
          </Link>
          <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] font-[400] text-[#000000]">
            Tables
          </p>
          <Link href={"/productListing"}>
            <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] font-[400] text-[#000000]">
              Chairs
            </p>
          </Link>
          <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] font-[400] text-[#000000]">
            Crockery
          </p>
         <Link href={"/productCard"}>
         <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] font-[400] text-[#000000]">
            Tableware
          </p>
         </Link>
          <Link href={"/brand"}>
            <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] font-[400] text-[#000000]">
              Cutlery
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
