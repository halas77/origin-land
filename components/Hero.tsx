"use client";

import React from "react";
import {motion} from 'framer-motion'
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";

const slideImages = [
  {
    img: "/coffee1.jpg",
    title: "Ethiopian Coffee",
    desc: "Embark on a journey of unity and cultural richness with our exceptional coffee blends, each sip echoing heritage, fostering connections, and uplifting lives across diverse landscapes worldwide.",
  },
  {
    img: "/beans.jpg",
    title: "Beans Beyond Borders",
    desc: "Traverse the globe with our beans, embodying diverse origins, nurturing communities, and revolutionizing gastronomic experiences. From farm to cup, each brew encapsulates a unique journey, enriching palates globally.",
  },
  {
    img: "/spices.jpg",
    title: "Spices Rediscovered",
    desc: "Rediscover ancient spice routes through our premium offerings, intertwining diverse flavors that transcend continents, awakening palates, celebrating heritage, and embracing global culinary diversity with every aromatic blend.",
  },
  {
    img: "/sesam.jpg",
    title: "Sesam Global Growth",
    desc: "Sow the seeds of opportunity across nations, cultivating quality produce, empowering agricultural trade, and fostering a sustainable global ecosystem. Join us in nurturing a prosperous tomorrow through cross-border partnerships and innovation.",
  },
];

const divStyle = {};

const Hero = () => {
  return (
    <div className="w-full">
      <div className="slide-container">
        <Fade duration={3000} arrows={false}>
          {slideImages.map((image, index) => (
            <div key={index}>
              <div
                className="flex items-center justify-center bg-cover h-[550px] md:h-[700px]"
                style={{ ...divStyle, backgroundImage: `url(${image.img})` }}
              >
                  <div className="bg-gray-200 rounded flex flex-col p-5 max-w-xl absolute md:left-20 m-3 opacity-90 duration-500 ease-in-out">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-950 pb-5">
                      {" "}
                      {image.title}{" "}
                    </h1>
                    <p className="font-sans text-gray-700">{image.desc} </p>
                  </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
