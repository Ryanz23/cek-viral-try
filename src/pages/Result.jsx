import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const value = location.state?.value || "value is here";
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-lg w-full text-center">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
            Hasil Kamu!
          </h1>
          <p className="text-gray-700 text-lg">
            Kamu telah memasukkan:
          </p>
          <p className="text-2xl font-semibold text-blue-500 mt-3">
            {value}
          </p>
          <div className="mt-6">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-200"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
