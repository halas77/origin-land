"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { service_data } from "@/constants";

const Services = () => {
  return (
    <div className="w-full text-black bg-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="mx-6 md:mx:18 lg:mx-28 py-5">
          <h1 className="font font-extrabold text-xl lg:text-3xl font-sans mb-3 flex justify-center mx-auto">
            SERVICE WE OFFER
          </h1>
          <p className="text-slate-700 max-w-2xl pb-5 flex justify-center mx-auto text-center text-sm lg:text-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            ducimus molestias distinctio quis voluptatem enim, dolores, iusto
            impedit esse ipsum officiis aperiam obcaecati ad magni dolor nostrum
            pariatur laborum iure architecto aliquid vitae, odio sequi. Minus
            deserunt hic quisquam assumenda?
          </p>
          <div className="">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service_data.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 border boredr-gray-100 p-4 py-8 flex flex-col mx-auto text-center rounded-md hover:bg-gray-100 hover:scale-105 ease-in-out duration-300"
                >
                  <Image
                    src={item.img}
                    width={80}
                    height={30}
                    alt="Image"
                    className="mx-auto rounded-xl border p-2"
                  />
                  <h2 className="font-bold text-slate-900 text-xl py-5">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
