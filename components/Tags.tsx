import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-8 lg:py-10 md:px-10 max-sm:py-6 bg-blue-400">
      <div className="conatiner px-4 mx-auto">
        <div className="lg:flex justify-center items-center">
          <div className="lg:w-5/12 lg:ml-20">
            <Image
              src={"/company.jpeg"}
              width={500}
              height={50}
              alt="Image"
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="lg:w-6/12 mb-10 lg:mb-0 lg:p-10 py-4">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-7 text-blue-950 ">
              ORIGINLAND
            </h2>
            <p className="leading-relaxed text-gray-50 text-[18px] mb-4 max-w-lg">
              ORIGINLAND GENERAL TRADING PLC is registered in Ethiopia to engage
              in Agricultural products export mainly Green Arabica Coffee,
              Roasted Coffee, Minerals, oil seeds, pulses, spices industrial and
              chemical products import to Ethiopia.
            </p>
            <button className="hover:ml-4 flex items-center text-[16px] max-md:my-3 py-4 px-8 bg-blue-950 text-gray-50 max-md:text-lg font-bold font-sans rounded-lg duration-300 transition-all ease-in-out hover:bg-blue-900 hover:shadow-lg relative top-0">
              <Link href="/about">More about us</Link>
              <span className="ml-2 flex justify-center items-center">
                <FaArrowRight size={12} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
