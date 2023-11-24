import { product_data } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Product = () => {
  return (
    <div className="bg-gray-50">
      <div className="w-full text-black bg-gray-50 md:pb-">
        <div className="mx-6 md:mx:18 lg:mx-32 py-8">
          <h1 className="uppercase font font-extrabold text-xl lg:text-3xl font-sans mb-3 flex justify-center mx-auto">
            Our Products
          </h1>
          <p className="text-slate-700 max-w-2xl pb-5 flex justify-center mx-auto text-center text-sm lg:text-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            ducimus molestias distinctio quis voluptatem enim, dolores, iusto
            impedit esse ipsum officiis aperiam obcaecati ad magni dolor nostrum
            pariatur laborum iure architecto aliquid vitae, odio sequi. Minus
            deserunt hic quisquam assumenda?
          </p>
        </div>
      </div>
      <div className="md:flex justify-center gap-14 items-center pb-16">
        <Image
          src={"/coffee1.jpg"}
          width={400}
          height={200}
          alt="Image"
          className="hidden md:flex rounded-md"
        />
        <div>
          <h2 className="text-blue-950 text-2xl font-extrabold">Ethiopian Coffee</h2>
          <p className="max-w-xl py-3 pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            iusto voluptatibus? Error quae numquam pariatur ipsa officiis itaque
            quam eaque dolorum harum est sequi, esse, quod dignissimos? Aut
            minima soluta nostrum, sapiente modi totam. Dolor id ipsum delectus
            velit ut sed similique fugit ipsa consequatur. Iure porro dolorum
            aliquid fuga?
          </p>
          <button className="flex justify-center items-center border bg-blue-950 hover:bg-blue-800 rounded-lg px-8 py-3 text-slate-50 font-bold">
            <Link href="/services/export">Learn more</Link>
            <span className="ml-2 flex justify-center items-center">
              <FaArrowRight size={12} className="text-white" />
            </span>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-14 items-center pb-16">
        <div>
          <h2 className=" text-blue-950 text-2xl font-extrabold py-3">
            Ethiopian Spices
          </h2>
          <p className="max-w-xl py-3 pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            iusto voluptatibus? Error quae numquam pariatur ipsa officiis itaque
            quam eaque dolorum harum est sequi, esse, quod dignissimos? Aut
            minima soluta nostrum, sapiente modi totam. Dolor id ipsum delectus
            velit ut sed similique fugit ipsa consequatur. Iure porro dolorum
            aliquid fuga?
          </p>
          <button className="flex justify-center items-center border bg-blue-950 hover:bg-blue-800 rounded-lg px-8 py-3 text-slate-50 font-bold">
            <Link href="/services/export">Learn more</Link>
            <span className="ml-2 flex justify-center items-center">
              <FaArrowRight size={12} className="text-white" />
            </span>
          </button>
        </div>
        <Image
          src={"/spices.jpg"}
          width={400}
          height={200}
          alt="Image"
          className="hidden md:flex rounded-md"
        />
      </div>
      <div className="md:flex justify-center gap-14 items-center pb-16">
        <Image
          src={"/pulse.jpg"}
          width={400}
          height={200}
          alt="Image"
          className="hidden md:flex rounded-md"
        />
        <div>
          <h2 className="text-blue-950 text-2xl font-extrabold">Pulses</h2>
          <p className="max-w-xl py-3 pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            iusto voluptatibus? Error quae numquam pariatur ipsa officiis itaque
            quam eaque dolorum harum est sequi, esse, quod dignissimos? Aut
            minima soluta nostrum, sapiente modi totam. Dolor id ipsum delectus
            velit ut sed similique fugit ipsa consequatur. Iure porro dolorum
            aliquid fuga?
          </p>
          <button className="flex justify-center items-center border bg-blue-950 hover:bg-blue-800 rounded-lg px-8 py-3 text-slate-50 font-bold">
            <Link href="/services/export">Learn more</Link>
            <span className="ml-2 flex justify-center items-center">
              <FaArrowRight size={12} className="text-white" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
