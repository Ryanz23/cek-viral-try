import React from "react";
import { useNavigate } from "react-router-dom";
import authService from "../data/api/authService";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = authService.getUser();

  const handleLogout = () => {
    authService.logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Selamat Datang</h1>
        <p className="text-gray-600 mb-6">
          {user ? `Halo, ${user.username || user.account || "User"}!` : "User tidak ditemukan."}
        </p>
        
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-gradient-to-r from-blue-main to-green-main 
                     text-white font-semibold rounded-lg cursor-pointer"
        >
          Keluar
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
