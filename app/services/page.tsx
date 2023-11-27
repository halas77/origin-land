"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion"

const page = () => {
  return (
    <div className=" mt-32 mx-5 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="md:flex justify-center gap-14 items-center pb-16">
          <Image
            src={"/import.jpeg"}
            width={400}
            height={200}
            alt="Image"
            className="mb-3 md:mb-0 md:flex rounded-md"
          />
          <div>
            <h2 className="text-blue-950 text-2xl font-extrabold">Import</h2>
            <p className="max-w-xl py-3 pb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              iusto voluptatibus? Error quae numquam pariatur ipsa officiis
              itaque quam eaque dolorum harum est sequi, esse, quod dignissimos?
              Aut minima soluta nostrum, sapiente modi totam. Dolor id ipsum
              delectus velit ut sed similique fugit ipsa consequatur. Iure porro
              dolorum aliquid fuga?
            </p>
            <button className="flex justify-center items-center border bg-blue-950 hover:bg-blue-800 rounded-lg px-8 py-3 text-slate-50 font-bold">
              <Link href="/services/import">Learn more</Link>
              <span className="ml-2 flex justify-center items-center">
                <FaArrowRight size={12} className="text-white" />
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center gap-14 items-center">
          <div>
            <h2 className=" text-blue-950 text-2xl font-extrabold py-3">
              Export
            </h2>
            <p className="max-w-xl py-3 pb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              iusto voluptatibus? Error quae numquam pariatur ipsa officiis
              itaque quam eaque dolorum harum est sequi, esse, quod dignissimos?
              Aut minima soluta nostrum, sapiente modi totam. Dolor id ipsum
              delectus velit ut sed similique fugit ipsa consequatur. Iure porro
              dolorum aliquid fuga?
            </p>
            <button className="flex justify-center items-center border bg-blue-950 hover:bg-blue-800 rounded-lg px-8 py-3 text-slate-50 font-bold">
              <Link href="/services/export">Learn more</Link>
              <span className="ml-2 flex justify-center items-center">
                <FaArrowRight size={12} className="text-white" />
              </span>
            </button>
          </div>
          <Image
            src={"/export.jpeg"}
            width={400}
            height={200}
            alt="Image"
            className="mb-3 md:mb-3 md:flex rounded-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default page;
