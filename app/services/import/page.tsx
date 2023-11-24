"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  chemical_items,
  food_items,
  pipe_items,
  product_data,
} from "@/constants";

const Page = () => {
  return (
    <div className="w-full text-slate-900 bg-gray-200 mt-24">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <h1 className=" text-blue-950 font-extrabold text-4xl font-sans px-8 py-3">
          Importing Goods
        </h1>
        <div className="mx-4 md:mx:18 lg:mx-24 py-8">
          <h1 className="font-extrabold text-2xl font-sans text-slate-950 mb-5">
            Food Items
          </h1>
          <div className="">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
              {food_items.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-lg shadow-xl my-4 pb-2 flex flex-col mx-auto text-center hover:bg-gray-100 ease-in-out duration-300"
                >
                  <Image
                    src={item.img}
                    width={450}
                    height={30}
                    alt="Project Image"
                    className="mx-auto md:h-[250px]"
                  />
                  <h2 className="font-extrabold font-sans text-gray-900 text-2xl py-3">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 font-sans px-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-4 md:mx:18 lg:mx-24 py-4">
          <h1 className="font-extrabold text-2xl font-sans text-slate-950 mb-5">
            Steel Pipe Casing
          </h1>
          <div className="">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
              {pipe_items.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-lg shadow-xl my-4 pb-2 flex flex-col mx-auto text-center hover:bg-gray-100 ease-in-out duration-300"
                >
                  <Image
                    src={item.img}
                    width={450}
                    height={30}
                    alt="Project Image"
                    className="mx-auto md:h-[250px]"
                  />
                  <h2 className="font-extrabold font-sans text-gray-900 text-2xl py-3">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 font-sans px-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-4 md:mx:18 lg:mx-24 py-4">
          <h1 className="font-extrabold text-2xl font-sans text-slate-950 mb-5">
            Chemical
          </h1>
          <div className="">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
              {chemical_items.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-lg shadow-xl my-4 pb-2 flex flex-col mx-auto text-center hover:bg-gray-100 ease-in-out duration-300"
                >
                  <Image
                    src={item.img}
                    width={450}
                    height={30}
                    alt="Project Image"
                    className="mx-auto md:h-[250px]"
                  />
                  <h2 className="font-extrabold font-sans text-gray-900 text-2xl py-3">
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
