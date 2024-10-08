import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import "./Home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <motion.div
      id="home-page"
      className="text-white flex items-center flex-col max-w-lg mx-auto"
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
          <div className="w-screen h-screen flex justify-center items-center max-md:flex-col-reverse max-md:mt-0 max-md:justify-center max-md:text-center fade-in">
            <div className="max-md:mt-6">
              <p className="font-light text-neutral-300">Hello, My name is</p>
              <h1 className="heading-1  max-sm:text-[40px]">Selva <span className="text-red-300">James</span></h1>
              <h2 className="heading-2 text-neutral-200  max-sm:text-xl">Frontend Web Developer</h2>
              <div className="flex gap-4 mt-5 max-md:justify-center">
              <Link to='/aboutme'><button className="bg-zinc-800 border-2 border-zinc-700 text-sm text-red-300 px-6 py-2 rounded-3xl cursor-pointer hover:bg-zinc-900 hover:border-zinc-800 ease-out duration-300">About Me</button></Link>
                <Link to='/projects'><button className="bg-zinc-800 border-2 border-zinc-700 text-sm text-red-300 px-6 py-2 rounded-3xl cursor-pointer hover:bg-zinc-900 hover:border-zinc-800 ease-out duration-300">Projects</button></Link>
              </div>
              <div className="flex gap-4 mt-5 max-md:justify-center max-sm:text-sm">
                <a href="https://github.com/SelvaJames18"><i className="border bg-zinc-800 border-zinc-600 text-red-300 rounded-full p-2 scale-100 hover:scale-110 hover:bg-zinc-900 hover:border-zinc-800 duration-300 cursor-pointer fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/selva-james-342083281/"><i className="border bg-zinc-800 border-zinc-600 text-red-300 rounded-full p-2 scale-100 hover:scale-110 hover:bg-zinc-900 hover:border-zinc-800 duration-300 cursor-pointer fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/s.e.l.v.a_18/?next=%2F"><i className="border bg-zinc-800 border-zinc-600 text-red-300 rounded-full p-2 scale-100 hover:scale-110 hover:bg-zinc-900 hover:border-zinc-800 duration-300 cursor-pointer fa-brands fa-instagram"></i></a>
              </div>
            </div>
            <div className="ml-[14%] max-md:ml-0 max-md:mt-6 ">
              <img className="rounded-full w-[300px] h-[300px] object-cover scale-100 hover:scale-105 duration-300 max-md:w-[280px] max-md:h-[280px] max-sm:w-[230px] max-sm:h-[230px]" src={assets.main_image} alt="Selva James"></img>
            </div>
          </div>
    </motion.div >
  );
};

export default Home;
