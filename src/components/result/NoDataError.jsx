import React from "react";

const NoDataError = ({ onGoToHome }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
          Data Tidak Ditemukan
        </h1>
        <p className="text-gray-600 mb-6">
          Tidak ada data hasil analisis. Silakan kembali ke halaman utama.
        </p>
        <button
          onClick={onGoToHome}
          className="px-8 py-3 bg-gradient-to-r from-blue-main to-green-main text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
};

export default NoDataError;
