import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <motion.div className="mt-[100px] sm:px-6 md:px-6"
            id='projects'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}>
            <h1 className="text-3xl font-bold text-center text-white mb-10">Projects</h1>
            <div className='flex flex-wrap justify-center gap-[28px] m-6'>
                <div className="relative group cursor-pointer w-full sm:w-[250px] md:w-[300px] lg:w-[350px]">
                    <img className='h-[210px] w-full object-cover rounded-lg group-hover:opacity-30 duration-300' src={assets.food_del_image} alt="Food Delivery App" />
                    <a href="https://tomato-food-delivery1.netlify.app/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300">
                        <p className="bg-red-600 text-white text-sm px-4 py-2 rounded-xl">Site View</p>
                    </a>
                    <div className='flex items-center gap-2 mt-2'>
                        <p className='text-red-300'>Food-delivery-app</p><i class="fa-solid fa-arrow-right  text-red-300"></i>
                    </div>
                </div>
                <div className="relative group cursor-pointer w-full sm:w-[250px] md:w-[300px] lg:w-[350px]">
                    <img className='h-[210px] w-full object-cover rounded-lg group-hover:opacity-30 duration-300' src={assets.spotify_clone_image} alt="Music-app" />
                    <a href="https://muzic18-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300">
                        <p className="bg-red-600 text-white text-sm px-4 py-2 rounded-xl">Site View</p>
                    </a>
                    <div className='flex items-center gap-2 mt-2'>
                        <p className='text-red-300'>Music-app</p><i class="fa-solid fa-arrow-right text-red-300"></i>
                    </div>
                </div>
                <div className="relative group cursor-pointer w-full sm:w-[250px] md:w-[300px] lg:w-[350px]">
                    <img className='h-[210px] w-full object-cover rounded-lg group-hover:opacity-30 duration-300' src={assets.hotel_booking_image} alt="Movie Website" />
                    <a href="https://ace-hotel1.netlify.app/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300">
                        <p className="bg-red-600 text-white text-sm px-4 py-2 rounded-xl">Site View</p>
                    </a>
                    <div className='flex items-center gap-2 mt-2'>
                        <p className='text-red-300'>Hotel-booking</p><i class="fa-solid fa-arrow-right text-red-300"></i>
                    </div>
                </div>
                <div className="relative group cursor-pointer w-full sm:w-[250px] md:w-[300px] lg:w-[350px]">
                    <img className='h-[210px] w-full object-cover rounded-lg group-hover:opacity-30 duration-300' src={assets.todo_list_image} alt="ToDo List App" />
                    <a href="https://todo-list-1p.netlify.app/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300">
                        <p className="bg-red-600 text-white text-sm px-4 py-2 rounded-xl">Site View</p>
                    </a>
                    <div className='flex items-center gap-2 mt-2'>
                        <p className='text-red-300'>ToDo-list-app</p><i class="fa-solid fa-arrow-right text-red-300"></i>
                    </div>
                </div>
            </div>
        </motion.div>
    )
};

export default Projects;
