import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    account: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Login</h2>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="account">
            Account
          </label>
          <input
            type="text"
            name="account"
            id="account"
            value={form.account}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                      text-gray-900 placeholder-gray-400 focus:outline-none
                      focus:ring-2 focus:ring-blue-400 focus:border-transparent
                      transition"
            placeholder="Masukkan akun"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                      text-gray-900 placeholder-gray-400 focus:outline-none
                      focus:ring-2 focus:ring-blue-400 focus:border-transparent
                      transition"
            placeholder="Masukkan password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-center text-gray-600">
          Belum punya akun?{" "}
          <Link to="/regist" className="text-blue-500 hover:underline">
            Daftar di sini
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
