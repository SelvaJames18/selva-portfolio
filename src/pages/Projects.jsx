import React from 'react'
import { assets } from '../assets/assets'

const Projects = () => {
    return (
        <div className="mt-[50px]">
            <h1 className="heading-2 text-white text-center mb-10">Projects</h1>
            <div className='flex '>
                <div className=" cursor-pointer">
                    <img className='h-[210px] hover:opacity-10 duration-300' src={assets.food_del_image} alt="" />
                    <a href="https://github.com/SelvaJames18/food-delivery-app"><button className="border-2 px-2 py-1 rounded-2xl text-red-600 text-sm border-red-600 hover:text-white hover:bg-red-600 duration-200">View On Github</button></a>
                </div>
                <div className=" cursor-pointer">
                    <img className='h-[210px] hover:opacity-30 duration-300' src={assets.spotify_clone_image} alt="" />
                    <button className="border-2 px-2 py-1 rounded-2xl text-red-600 text-sm border-red-600 hover:text-white hover:bg-red-600 duration-200">View On Github</button>
                </div>
            </div>
        </div>
    )
}

export default Projects
