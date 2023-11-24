import { wegen_data } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Companies = () => {
  return (
    <div className="p-2 m-2 pt-20 w-full flex flex-col justify-center items-center">
      <div className="flex items-start justify-start text-blue-950 font-sans text-2xl lg:text-4xl font-bold mb-5">
        Wogen Holdings
      </div>
      <div className="flex gap-4 mt-5">
        {wegen_data.map((item, index) => (
          <Link
            href={item.href}
            className="border p-2 flex justify-center items-center rounded-2xl"
          >
            <Image
              key={item.img}
              src={item.img}
              width={100}
              height={50}
              alt="Image"
              className="flex justify-center items-center"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Companies;
