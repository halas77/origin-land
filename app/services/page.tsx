import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const page = () => {
  return (
    <div className=" mt-32 mx-5 pb-10">
      <div className="md:flex justify-center gap-14 items-center pb-16">
        <Image src={"/hero1.jpg"} width={400} height={200} alt="Image" className="hidden md:flex rounded-md"/>
        <div>
          <h2 className= "text-blue-950 text-xl font-bold">Import</h2>
          <p className="max-w-xl py-3 pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            iusto voluptatibus? Error quae numquam pariatur ipsa officiis itaque
            quam eaque dolorum harum est sequi, esse, quod dignissimos? Aut
            minima soluta nostrum, sapiente modi totam. Dolor id ipsum delectus
            velit ut sed similique fugit ipsa consequatur. Iure porro dolorum
            aliquid fuga?
          </p>
          <button className="flex justify-center items-center border bg-blue-950 hover:bg-blue-800 rounded-sm px-8 py-3 text-slate-50 font-bold">
            <Link href="/services/import">Learn more</Link>
            <span className="ml-2 flex justify-center items-center">
              <FaArrowRight size={12} className="text-white"/>
            </span>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-14 items-center">
        <Image src={"/hero1.jpg"} width={400} height={200} alt="Image" className="hidden md:flex rounded-md" />
        <div>
          <h2 className=" text-blue-950 text-xl font-bold py-3">Export</h2>
          <p className="max-w-xl py-3 pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            iusto voluptatibus? Error quae numquam pariatur ipsa officiis itaque
            quam eaque dolorum harum est sequi, esse, quod dignissimos? Aut
            minima soluta nostrum, sapiente modi totam. Dolor id ipsum delectus
            velit ut sed similique fugit ipsa consequatur. Iure porro dolorum
            aliquid fuga?
          </p>
          <button className="flex justify-center items-center border bg-blue-950 hover:bg-blue-800 rounded-sm px-8 py-3 text-slate-50 font-bold">
            <Link href="/services/import">Learn more</Link>
            <span className="ml-2 flex justify-center items-center">
              <FaArrowRight size={12} className="text-white"/>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
