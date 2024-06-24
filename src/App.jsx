/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar } from "./components/Navbar";
import { AnimatedRoutes } from "./components/AnimatedRoutes";

export const App = () => {
  return (
    <div>
      <Navbar />
      <AnimatedRoutes/>
    </div>
  );
};

export default App;
