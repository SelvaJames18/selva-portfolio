import React from 'react'
import { assets } from '../assets/assets';
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className="mt-[100px]"
        >
            <h1 className="text-3xl font-bold text-center text-white mb-10">About <span className='text-red-300'>Me</span></h1>
            <div className=" flex justify-center items-center w-screen px-20">
                <img className="w-[300px] max-md:hidden" src={assets.bg_image} alt="Background" />
                <div className="text-white text-center md:text-left max-md:mt-5">
                    <h2 className='heading-2 mb-4'>Hello<span className='wave'>👋</span></h2>
                    <p className="font-medium mb-5">
                         I am a dedicated and enthusiastic front-end developer passionate about creating user interfaces with a strong foundation in HTML, CSS, JavaScript and modern JavaScript frameworks like React.js. I am excited about the opportunity to leverage my technical skills and creativity to build intuitive interfaces that enhance user interaction and satisfaction.
                    </p>
                    <a href={assets.resume} download={assets.resume}>
                        <button className="bg-zinc-800 border-2 border-zinc-700 text-sm text-red-300 px-6 py-2 rounded-3xl cursor-pointer hover:bg-zinc-900 hover:border-zinc-800 ease-out duration-300">
                            Download CV
                        </button>
                    </a>
                </div>

            </div>

        </motion.div>
    )
}

export default AboutMe
