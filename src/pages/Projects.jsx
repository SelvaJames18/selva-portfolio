import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      title: "Food Delivery App",
      image: assets.food_del_image,
      description: "Building a food delivery app in React.js involves integrating UI design with responsive CSS, managing state with hooks for dynamic data handling, and ensuring a smooth user experience across devices.",
      liveLink: "https://tomato-food-delivery1.netlify.app/",
      githubLink: "https://github.com/SelvaJames18/food-delivery-app",
    },
    {
      title: "Music App",
      image: assets.spotify_clone_image,
      description: "Building a music app with React and Tailwind CSS involves integrating responsive design principles with state management using hooks. Tailwind CSS facilitates rapid development by providing utility classes for styling.",
      liveLink: "https://muzic18-app.netlify.app/",
      githubLink: "https://github.com/SelvaJames18/music-app",
    },
    {
      title: "Hotel Booking App",
      image: assets.hotel_booking_image,
      description: "Building a hotel booking app involves leveraging HTML, CSS, JavaScript, Bootstrap, and animations/carousels to create an intuitive and visually appealing user interface.",
      liveLink: "https://ace-hotel1.netlify.app/",
      githubLink: "https://github.com/SelvaJames18/Hotel-booking",
    },
    {
      title: "ToDo List App",
      image: assets.todo_list_image,
      description: "A simple to-do list application using React Js",
      liveLink: "https://todo-list-1p.netlify.app/",
      githubLink: "https://github.com/example/todo-list",
    },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <motion.div
      className="mt-[100px] px-5"
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <h1 className="text-3xl font-bold text-center text-white mb-10">Projects</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group cursor-pointer w-full sm:w-80 md:w-96 lg:w-96"
          >
            <img
              className="h-52 w-full object-cover rounded-lg group-hover:opacity-75 transition-opacity duration-300"
              src={project.image}
              alt={project.title}
            />
            <div
              className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => openModal(project)}
            >
              <p className="bg-red-600 text-white text-sm px-4 py-2 rounded-xl cursor-pointer">Project Details</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-red-300">{project.title}</p>
              <i className="fas fa-arrow-right text-red-300"></i>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-zinc-900 p-6 rounded-lg w-[700px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-red-300">{currentProject.title}</h2>
              <button
                onClick={closeModal}
                className="border bg-zinc-800 border-zinc-600 text-white w-8 rounded-full h-8 hover:bg-zinc-900 hover:border-zinc-800 duration-300 hover:text-red-300"
              >
                <i className=" fas fa-times"></i>
              </button>
            </div>
            <img
              className="w-full h-60 object-cover rounded-lg mb-4"
              src={currentProject.image}
              alt={currentProject.title}
            />
            <p className="text-zinc-200 mb-4"><span className="text-zinc-400">Project-Description: </span>{currentProject.description}</p>
            <div className="flex space-x-4">
              <a
                href={currentProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 border-2 border-zinc-700 text-sm text-red-300 px-6 py-2 rounded-3xl cursor-pointer hover:bg-zinc-900 hover:border-zinc-800 ease-out duration-300"
              >
                Live Site
              </a>
              <a
                href={currentProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 border-2 border-zinc-700 text-sm text-red-300 px-6 py-2 rounded-3xl cursor-pointer hover:bg-zinc-900 hover:border-zinc-800 ease-out duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
