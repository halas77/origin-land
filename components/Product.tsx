import { product_data } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Product = () => {
  return (
    <div className="w-full text-black bg-blue-950 pb-10">
      <div className="mx-6 md:mx:18 lg:mx-32 py-12">
        <h1 className="text-white font-extrabold text-3xl font-sans mb-3 flex justify-center mx-auto">
          Our Products
        </h1>
        <p className="text-gray-300 max-w-2xl pb-5 flex justify-center mx-auto text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          ducimus molestias distinctio quis voluptatem enim, dolores, iusto
          impedit esse ipsum officiis aperiam obcaecati ad magni dolor nostrum
          pariatur laborum iure architecto aliquid vitae, odio sequi. Minus
          deserunt hic quisquam assumenda?
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 justify-center mx-2">
        {product_data.map((item) => (
          <div
            key={item.title}
            className="border border-gray-700 pb-5 flex flex-col mx-auto text-center rounded-md"
          >
            <Image
              src={item.img}
              width={220}
              height={30}
              alt="Project Image"
              className="mx-auto w-96 h-60 rounded-md"
            />
            <h2 className="font-bold font-sans text-gray-50 text-xl pt-4 pb-4">
              {item.title}
            </h2>
            <p className="text-gray-300 font-sans px-2">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center pt-12">
        <button className="flex justify-center items-center border border-gray-500 hover:border-gray-100 rounded-xl px-8 py-3 text-white font-bold">
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
