/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import { assets } from "../assets/assets";
import "./Home.css";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div
      id="home-page"
      className="text-sky-100 flex items-center flex-col max-w-lg mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <div className="effect-wrap">
        <div className="effect effect-1"></div>
        <div className="effect effect-2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="effect effect-3">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="effect effect-4"></div>
        <div className="effect effect-5"></div>
        <div className="effect effect-6"></div>
        <div className="effect effect-7"></div>
        <div className="effect effect-8"></div>
      </div>
      <img
        className="mt-[50px] rounded-full w-[200px]"
        src={assets.main_image}
      ></img>
      <h3 className="heading-3 mt-2">Hello, my name is </h3>
      <h1 className="heading-1">
        Selva <span className="text-red-400">James</span>{" "}
      </h1>
      <h1 className="heading-2">Forntend Webdevloper </h1>
      <div className="mt-5 flex gap-5">
        <button className="bg-transparent border-2 border-red-500 text-bold text-red-500 px-[24px] p-3 rounded-3xl cursor-pointer hover:bg-red-500 hover:text-white ease-out duration-300">
          Portfolio
        </button>
        <a href="#about-me">
          <button className="bg-red-500 border-2 border-red-500 text-bold text-sky-100 px-[24px] p-3 rounded-3xl cursor-pointer hover:bg-red-600 hover:border-red-600 ease-out duration-300">
            About Me
          </button>
        </a>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Home;
