"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { nav_links } from "@/constants";
import { HiBars3, HiPhone } from "react-icons/hi2";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const navHandle = () => {
    setNav(!nav);
  };

  return (
    <>
      <header className="top-0 left-0 w-full fixed z-[9999] py-3 md:px-8 px-4 bg-white border-b opacity-90">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="xl:pl-10">
              <Link href={"/"}>
                <Image
                  src={"/origin_logo.png"}
                  width={200}
                  height={200}
                  alt="Image"
                />
              </Link>
            </div>

            {/* Navigation Menu  */}

            <div className="hidden lg:block">
              <ul className="flex space-x-14 font-sans">
                {nav_links.map((item, index) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className={
                        pathname === item.href
                          ? "text-blue-950  font-bold uppercase"
                          : "text-blue-950 hover:text-blue-950 hover:font-semibold ease-in-out duration-300 font-sans uppercase"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="font-sans text-sm">
              <div className="hidden lg:flex flex-col">
                <div className="flex gap-3 justify-start items-center pb-1">
                  <HiPhone size={19} className="text-blue-900" />
                  <p>+251-922-119955 / +251-912-502288 </p>
                </div>
                <div className="flex gap-3 justify-center items-center pb-1">
                  <IoIosMail size={24} className="text-blue-900" />
                  <p>info@originlandgeneraltradingplc.com</p>
                </div>
                <div className="flex gap-3 justify-start items-center">
                  <FaLocationDot size={22} className="text-blue-900" />
                  <p>Bambis, Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <button className="block lg:hidden" onClick={navHandle}>
                {!nav ? <HiBars3 size={35} /> : <LiaTimesSolid size={35} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}

      <div
        className={
          nav
            ? "z-[9999] fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-950 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex items-center justify-center py-3">
          <Link href={"/"}>
            <Image
              src={"/origin_logo.png"}
              width={200}
              height={200}
              alt="Image"
            />
          </Link>
        </div>

        <ul className="p-4">
          {nav_links.map((link) => (
            <li key={link.key} className="p-4 border-b border-gray-900">
              <a href={link.href} className="uppercase text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
