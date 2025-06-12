import React from "react";

const ActionButtons = ({ onGoToHome, onGoBack, onRetry, inputValue }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={onGoToHome}
        className="px-8 py-3 bg-gradient-to-r from-blue-main to-green-main text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
      >
        Cek Teks Lain
      </button>


      <button
        onClick={onGoBack}
        className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-500 transition-all duration-300 font-semibold"
      >
        Kembali
      </button>
    </div>
  );
};

export default ActionButtons;
