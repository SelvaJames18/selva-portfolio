/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { cards } from "../assets/assets";

export const Skills = () => {
  const indexToHoverColorMap = {
    0: "hover:text-orange-600",
    1: "hover:text-blue-500",
    2: "hover:text-yellow-300",
    3: "hover:text-cyan-200",
    4: "hover:text-sky-400",
    5: "hover:text-violet-400"
  };

  return (
    <motion.div 
    className="mt-[100px]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 1 }}
  >
    <h1 className="text-3xl font-bold text-center text-white">Skills</h1>
    
    <div className="cards-display grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {cards.map((card, index) => {
        const hoverTextColorClass = indexToHoverColorMap[index] || "";
  
        return (
          <div 
            key={index}
            className={`flex flex-col justify-center items-center px-2 py-6 text-white text-center bg-zinc-600 border-2 border-zinc-800 rounded-xl cursor-pointer transform transition-transform duration-100 hover:scale-105 hover:border-slate-600 hover:bg-zinc-900 ${hoverTextColorClass}`}
          >
            <img className="w-[50px] sm:w-[40px] md:w-[45px] lg:w-[50px]" src={card.image} alt={card.name} />
            <h2 className="mt-3 text-lg font-semibold">{card.name}</h2>
            <p className="font-bold">{card.level}</p>
            <p className="mt-3">{card.desc}</p>
          </div>
        );
      })}
    </div>
  </motion.div>
  );
};
