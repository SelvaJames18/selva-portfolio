/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Skills } from "../pages/Skills";

import { AnimatePresence } from "framer-motion";
import { Contact } from "../pages/Contact";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </AnimatePresence>
  );
};
