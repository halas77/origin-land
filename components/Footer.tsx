import Link from "next/link";
import React from "react";
import { FaFacebook, FaTiktok, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="border-t bg-white w-full mx-auto py-5 px-6 lg:px-16 grid lg:grid-cols-3 gap-4 text-gray-700">
        <div>
          <h1 className="w-full text-3xl font-bold text-slate-950">OriginLand</h1>
          <p className="py-4 text-sm font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odit
            accusantium labore, perferendis alias, natus deserunt ab et rerum
            voluptas accusamus debitis in esse laboriosam asperiores. Doloribus
            ipsum esse corrupti dignissimos quas deleniti aut, culpa eos at
            pariatur, veritatis nisi!
          </p>
          <div className="flex justify-between mx-auto md:w-[80%] my-6">
            <Link href="">
              <FaFacebook
                size={26}
                className="text-gray-900 hover:text-gray-950"
              />
            </Link>
            <Link href="">
              <FaInstagram
                size={26}
                className="text-gray-900 hover:text-gray-950"
              />
            </Link>
            <Link href="">
              <FaTelegram
                size={26}
                className="text-gray-900 hover:text-gray-950"
              />
            </Link>
            <Link href="">
              <FaTiktok
                size={26}
                className="text-gray-900 hover:text-gray-950"
              />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between lg:px-44 mt-6">
          <div>
            <h6 className="font-semibold text-gray-800">Company</h6>
            <ul className="flex flex-col">
              <Link href="/about" className="py-2 text-sm hover:text-gray-950">
                About OriginLand
              </Link>
              <Link
                href="/projects"
                className="py-2 text-sm hover:text-gray-950"
              >
                Our Works
              </Link>
              <Link
                href="/services"
                className="py-2 text-sm hover:text-gray-950"
              >
                Services
              </Link>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-gray-800">Contact</h6>
            <ul>
              <li className="py-2 text-sm">Call Us: +251-922-119955</li>
              <li className="py-2 text-sm">
                Email Us: info@originlandgeneraltradingplc.com
              </li>
              <li className="py-2 text-sm">Address: Bambis, Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white w-full flex justify-center items-center mx-auto pb-2">
        <p className="text-gray-900 mx-auto">
          OriginLand 2023 | All rights reserved &copy;
        </p>
      </div>
    </div>
  );
};

export default Footer;
