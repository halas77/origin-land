"use client";
import { FaFacebook, FaTiktok, FaInstagram, FaTelegram } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { MdEmail, MdCall, MdShare } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-full text-black bg-white pt-12 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="mx-4 md:mx:24 lg:mx-32 my-12">
          <h1 className="text-blue-950 font font-extrabold text-3xl font-sans mb-10">
            CONTACT US
          </h1>
          <div className="md:flex gap- justify-start items-start">
            <div className="lg:w-[65%] h-full pb-5 md:pb-0">
              <Link href={'https://www.google.com/maps?ll=9.010082,38.769173&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=17215207061957952222'}>
              <Image
                src={"/originmap.png"}
                width={750}
                height={400}
                alt="Image"
                className="bg-cover rounded-lg"
              />
              </Link>
            </div>
            <div className="">
              <div className="mb-5 bg-zinc-200 rounded-lg px-4 flex items-center h-28">
                <div className="bg-zinc-300 p-3 rounded-full">
                  <i className="text-slate-900">
                    <TiLocation size={28} className="text-blue-950" />{" "}
                  </i>
                </div>
                <div className="px-5">
                  <h2 className="pb-2 text-xl font-sans font-bold text-blue-950">
                    Our Address
                  </h2>
                  <p className="font-sans text-gray-600 text-sm">
                    {" "}
                    Bambis, Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
              <div className="mb-5 bg-zinc-200 rounded-lg px-4 flex items-center h-28">
                <div className="bg-zinc-300 p-3 rounded-full">
                  <i className="text-slate-900">
                    <MdEmail size={28} className="text-blue-950" />{" "}
                  </i>
                </div>
                <div className="px-5">
                  <h2 className="pb-2 text-xl font-sans font-bold text-blue-950">
                    Email Us
                  </h2>
                  <p className="font-sans text-gray-600 text-sm">
                    {" "}
                    info@originlandgeneraltradingplc.com
                  </p>
                </div>
              </div>
              <div className="mb-5 bg-zinc-200 rounded-lg px-4 flex items-center h-28">
                <div className="bg-zinc-300 p-3 rounded-full">
                  <i className="text-slate-900">
                    <MdCall size={28} className="text-blue-950" />{" "}
                  </i>
                </div>
                <div className="px-5">
                  <h2 className="pb-2 text-xl font-sans font-bold text-blue-950">
                    Call Us
                  </h2>
                  <p className="font-sans text-gray-600 text-sm">
                    {" "}
                    +251-922-119955 / +251-912-502288
                  </p>
                </div>
              </div>

              <div className="mb-5 bg-zinc-200 rounded-lg p-4 flex items-center h-28 ">
                <div className="bg-zinc-300 p-3 rounded-full">
                  <i className="text-slate-900">
                    <MdShare size={25} />{" "}
                  </i>
                </div>
                <div className="p-5">
                  <h2 className="pb-2 text-xl font-sans font-bold  text-blue-950">
                    Social Links
                  </h2>
                  <div className="flex gap-5 ">
                    <Link
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-gray-700 hover:text-gray-800 ease-in-out duration-300">
                        <FaFacebook size={23} className="text-blue-950" />
                      </div>
                    </Link>
                    <Link
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-gray-700 hover:text-gray-800 ease-in-out duration-300">
                        <FaInstagram size={23} className="text-blue-950" />
                      </div>
                    </Link>
                    <Link
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-gray-700 hover:text-gary-800 ease-in-out duration-300">
                        <FaTelegram size={23} className="text-blue-950" />
                      </div>
                    </Link>

                    <Link
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-gray-700 hover:text-gray-800 ease-in-out duration-300">
                        <FaTiktok size={23} className="text-blue-950" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
