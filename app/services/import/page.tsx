"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { product_data } from "@/constants";


const Page = () => {

  return (
    <div className="w-full text-slate-900 bg-gray-200 mt-24">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
      <div className="mx-4 md:mx:18 lg:mx-24 py-8">
        <h1 className="font font-extrabold text-2xl font-sans mb-5">
          First Item
        </h1>
        <div className="">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {product_data.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl my-4 pb-10 flex flex-col mx-auto text-center hover:bg-gray-100 ease-in-out duration-300"
              >
                <Image
                  src={item.img}
                  width={450}
                  height={30}
                  alt="Project Image"
                  className="mx-auto md:h-[200px]"
                />
                <h2 className="font-extrabold font-sans text-gray-900 text-xl pt-7 pb-5">
                  {item.title}
                </h2>
                <p className="text-gray-600 font-sans px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx:18 lg:mx-24 py-4">
        <h1 className="font font-extrabold text-2xl font-sans mb-5">
          Second Item
        </h1>
        <div className="">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {product_data.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl my-4 pb-10 flex flex-col mx-auto text-center hover:bg-gray-100 ease-in-out duration-300"
              >
                <Image
                  src={item.img}
                  width={450}
                  height={30}
                  alt="Project Image"
                  className="mx-auto md:h-[200px]"
                />
                <h2 className="font-extrabold font-sans text-gray-900 text-xl pt-7 pb-5">
                  {item.title}
                </h2>
                <p className="text-gray-600 font-sans px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx:18 lg:mx-24 py-4">
        <h1 className="font font-extrabold text-2xl font-sans mb-5">
          Third Item
        </h1>
        <div className="">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {product_data.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl my-4 pb-10 flex flex-col mx-auto text-center hover:bg-gray-100 ease-in-out duration-300"
              >
                <Image
                  src={item.img}
                  width={450}
                  height={30}
                  alt="Project Image"
                  className="mx-auto md:h-[200px]"
                />
                <h2 className="font-extrabold font-sans text-gray-900 text-xl pt-7 pb-5">
                  {item.title}
                </h2>
                <p className="text-gray-600 font-sans px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Page;
