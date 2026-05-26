"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Page = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
    console.log(`${menu} clicked`);
  };

  const navItems = [
    "Home",
    "Menu",
    "Brands",
    "Shop",
    "Contact",
  ];

  return (
    <div className="flex justify-center items-center">
      <nav className="flex items-center justify-between gap-20 px-6 py-3 rounded-3xl border border-white/20 bg-secondary l shadow-xl">

        {/* Logo */}
        <div>
          <Image
            src={logo}
            className="w-20 object-contain"
            alt="logo"
          />
        </div>

        {/* Nav Items */}
        <ul className="hidden md:flex gap-7 items-center font-medium text-gray-800">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleMenuClick(item)}
              className="group flex items-center gap-1 cursor-pointer transition-all duration-300 hover:text-[#FE8433]"
            >
              <span className="relative">
                {item}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#FE8433] transition-all duration-300 group-hover:w-full"></span>
              </span>

              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  activeMenu === item ? "rotate-180" : ""
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex gap-5 items-center">
          <div className="flex gap-4 items-center text-xl text-gray-700">
            <button className="hover:text-[#FE8433] transition duration-300 cursor-pointer">
              <IoSearch />
            </button>

            <button className="hover:text-[#FE8433] transition duration-300 cursor-pointer">
              <FiShoppingBag />
            </button>
          </div>

          <button className="px-5 py-2 rounded-xl bg-[#FE8433] text-white font-medium shadow-lg hover:scale-105 hover:bg-[#ff7418] transition-all duration-300">
            Login / Register
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Page;