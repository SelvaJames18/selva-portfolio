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
    4: "hover:text-sky-400"
  };

  return (
    <div className="mt-[50px]">
      <h1 className="heading-2 text-white text-center">Skills</h1>
      <div className="cards-display">
        {cards.map((card, index) => {
          const hoverTextColorClass = indexToHoverColorMap[index] || "";

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              key={index}
              className={`flex flex-col items-center justify-center px-1 text-white text-center bg-zinc-600 border-2 border-zinc-800 rounded-xl h-[300px] w-[300px] cursor-pointer scale-100 hover:scale-105 duration-100 hover:border-slate-600 hover:bg-zinc-900 ${hoverTextColorClass}`}
            >
              <img className="img w-[50px]" src={card.image} alt={card.name} />
              <h2 className="mt-3 text-lg font-semibold">{card.name}</h2>
              <p className="font-bold">{card.level}</p>
              <p className="mt-3">{card.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
