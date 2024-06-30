/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className=" mt-[100px]"
    >
      <h2 className="text-3xl font-bold text-center text-white">
        Get in Touch
      </h2>
      <div className="flex flex-wrap gap-[150px] justify-center mt-[60px] mb-[70px]">
        <div className="text-center">
          <i className="fa-solid fa-envelope"></i>
          <p className="text-white mt-1">Email</p>
          <p className="text-zinc-400 mt-1 ">selvajames418@gmail.com</p>
        </div>
        <div className="text-center">
          <i className="fa-solid fa-phone"></i>
          <p className="text-white mt-1">Phone</p>
          <p className="text-zinc-400 mt-1 ">+91 9360201726</p>
        </div>
        <div className="text-center">
          <i className="fa-solid fa-location-dot"></i>
          <p className="text-white mt-1">Address</p>
          <p className="text-zinc-400 mt-1 ">Tirunelveli, Tamil Nadu-627425</p>
        </div>
      </div>
      <form className="max-w-lg mx-4 sm:mx-auto mb-10">
        <div className="mb-4">
          <label htmlFor="name" className="block text-red-300 text-[12px] mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-800 hover:border-zinc-800 hover:bg-zinc-900 transition duration-200"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-red-300 text-[12px] mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-800 hover:border-zinc-800 hover:bg-zinc-900 transition duration-200"
            placeholder="example@example.com"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-red-300 text-[12px] mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-3 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-800 hover:border-zinc-800 hover:bg-zinc-900 transition duration-200"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-zinc-800 border-2 border-zinc-700 text-sm text-red-300 px-6 py-2 rounded-3xl cursor-pointer hover:bg-zinc-900 hover:border-zinc-800 ease-out duration-300"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};
