import { product_data } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Product = () => {
  return (
    <div className="bg-gray-50">
      <div className="w-full text-black bg-gray-50 md:pb-32">
        <div className="mx-6 md:mx:18 lg:mx-32 py-8">
          <div className="md:flex justify-center gap-10">
            <h1 className="text-slate-950 font-extrabold text-3xl font-sans mb-3 text-center uppercase">
              Our Products
            </h1>
            <p className="text-gray-700 max-w-2xl pb-5 text-center md:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae ducimus molestias distinctio quis voluptatem enim,
              dolores, iusto impedit esse ipsum officiis aperiam obcaecati ad
              magni dolor nostrum pariatur laborum iure architecto aliquid
              vitae, odio sequi. Minus deserunt hic quisquam assumenda?
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 justify-center mx-2 mt-[-10%]">
        {product_data.map((item) => (
          <div
            key={item.title}
            className="bg-gray-100 shadow-lg pb-5 flex flex-col mx-auto text-center rounded-md"
          >
            <Image
              src={item.img}
              width={220}
              height={30}
              alt="Project Image"
              className="mx-auto w-96 h-52 rounded-t-md"
            />
            <h2 className="font-bold font-sans text-gray-900 text-xl pt-4 pb-4">
              {item.title}
            </h2>
            <p className="text-gray-700 font-sans px-2">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center py-8">
        <button className="flex justify-center items-center border border-gray-700 hover:border-gray-400 rounded-xl px-8 py-3 text-slate-900 font-bold">
          <Link href="/">Learn more</Link>
          <span className="ml-2 flex justify-center items-center">
            <FaArrowRight size={12} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Product;
