/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 130) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "navbar active" : "navbar "}>
      <div>
        <Link to='./' href="#home-page" className="text-2xl font-bold text-red-300 animation-fade-down">
          SJ
        </Link>
      </div>
      <div>
        <ul className="flex gap-10">
          <Link
            to="/"
            onClick={() => setActive("Home")}
            className={`${
              active === "Home" ? "text-red-300" : "text-sky-100"
            } hover:text-red-300 cursor-pointer`}
          >
            Home
          </Link>
          <Link
            to="/skills"
            onClick={() => setActive("Skills")}
            className={`${
              active === "Skills" ? "text-red-300" : "text-sky-100"
            } hover:text-red-300 cursor-pointer`}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            onClick={() => setActive("Projects")}
            className={`${
              active === "Projects" ? "text-red-300" : "text-sky-100"
            } hover:text-red-300 cursor-pointer`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => setActive("Contact")}
            className={`${
              active === "Contact" ? "text-red-300" : "text-sky-100"
            } hover:text-red-300 cursor-pointer`}
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};
