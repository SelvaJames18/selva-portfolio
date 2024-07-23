import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import PreLoader from "./components/PreLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader /> 
      ) : (
        <>
          <Navbar />
          <AnimatedRoutes />
        </>
      )}
    </>
  );
};

export default App;