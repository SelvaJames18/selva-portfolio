/* eslint-disable no-unused-vars */
import React, { Fragment } from "react"
import { assets } from "../assets/assets";

export const AboutMe = () => {
  return (
    <div id="about-me">
      <div className="bg-zinc-900 h-screen px-[190px] ">
        <div className=" flex justify-end items-center mt-[50px] pt-[130px] animation-fade-down">
        <img src={assets.bg_image}></img>
          <div className="">
            <p className="text-sky-100  font-semibold text-xl leading-8">
              Studied at Hindusthan college of Arts and Science,Coimbatore. As a
              fresh graduate, I am dedicated and enthusiastic front-end
              developer passionate about creating user interfaces with the
              strong foundation in HTML, CSS, and JavaScript
            </p>
            <button className="mt-7 bg-red-500 border-2 border-red-500 text-bold text-sky-100 px-[24px] p-3 rounded-3xl cursor-pointer hover:bg-red-600 hover:border-red-600 ease-out duration-300">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
