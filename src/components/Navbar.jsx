import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  const [active, setActive] = useState("");
  const [navbar, setNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("Home");
    } else if (location.pathname === "/skills") {
      setActive("Skills");
    } else if (location.pathname === "/projects") {
      setActive("Projects");
    } else if (location.pathname === "/aboutme") {
      setActive("AboutMe"); 
    } else if (location.pathname === "/contact") {
      setActive("Contact");
    }
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div className={`${navbar ? "bg-gray-800 shadow-lg" : "bg-transparent"} fixed w-full top-0 z-50 transition duration-300`}>
      <div className="container mx-auto p-10 flex justify-between items-center h-16 font-semibold">
        <div>
          <Link to="/" className="text-2xl font-bold text-red-300 animation-fade-down">
            SJ
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 fade-in">
          <Link
            to="/"
            onClick={() => setActive("Home")}
            className={`${active === "Home" ? "text-red-300" : "text-white"} hover:text-red-300 cursor-pointer`}
          >
            Home
          </Link>
          <Link
            to="/skills"
            onClick={() => setActive("Skills")}
            className={`${active === "Skills" ? "text-red-300" : "text-white"} hover:text-red-300 cursor-pointer`}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            onClick={() => setActive("Projects")}
            className={`${active === "Projects" ? "text-red-300" : "text-white"} hover:text-red-300 cursor-pointer`}
          >
            Projects
          </Link>
          <Link
            to="/aboutme"
            onClick={() => setActive("AboutMe")}
            className={`${active === "AboutMe" ? "text-red-300" : "text-white"} hover:text-red-300 cursor-pointer`}
          >
            About Me
          </Link>
          <Link
            to="/contact"
            onClick={() => setActive("Contact")}
            className={`${active === "Contact" ? "text-red-300" : "text-white"} hover:text-red-300 cursor-pointer`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center fade-in">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 z-40 flex flex-col items-center justify-center text-center space-y-8 fade-in">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white "
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div>
            <Link to="/" className="text-4xl font-bold text-red-300">
              SJ
            </Link>
          </div>
          <ul className="space-y-6 text-xl font-semibold">
            <li>
              <Link
                to="/"
                onClick={() => {
                  setActive("Home");
                  setIsMenuOpen(false);
                }}
                className={`${active === "Home" ? "text-red-300" : "text-white"} hover:text-red-300 cursor-pointer`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={() => {
                  setActive("Skills");
                  setIsMenuOpen(false);
                }}
                className={`${active === "Skills" ? "text-red-300" : "text-white"} hover:text-red-300 cursor-pointer`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={() => {
                  setActive("Projects");
                  setIsMenuOpen(false);
                }}
                className={`${active === "Projects" ? "text-red-300" : "text-white"} hover:text-red-300 cursor-pointer`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/aboutme"
                onClick={() => {
                  setActive("AboutMe");
                  setIsMenuOpen(false);
                }}
                className={`${active === "AboutMe" ? "text-red-300" : "text-white"} hover:text-red-300 cursor-pointer`}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => {
                  setActive("Contact");
                  setIsMenuOpen(false);
                }}
                className={`${active === "Contact" ? "text-red-300" : "text-white"} hover:text-red-300 cursor-pointer`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
