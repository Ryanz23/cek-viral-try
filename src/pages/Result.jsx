import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const value = location.state?.value || "value is here";
  return (
    <>
      <div className="w-full h-svh bg-blue-400 flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl font-bold text-center ">
          Result
        </h1>
        <p className="text-2xl text-white  text-center">
          You entered: <span className="font-bold">{value}</span>
        </p>
      </div>
      
    </>
  );
};

export default Result;
