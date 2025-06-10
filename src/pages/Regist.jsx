import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../data/api/authService";

const Regist = () => {
  const [formData, setFormData] = useState({
    username: "",
    account: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Check if user is already authenticated
  useEffect(() => {
    if (authService.isAuthenticated()) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear messages when user starts typing
    if (error) setError("");
    if (success) setSuccess("");
  };

  const validateForm = () => {
    const { username, account, password, confirmPassword } = formData;

    if (!username.trim()) {
      setError("Username harus diisi");
      return false;
    }

    if (username.length < 3) {
      setError("Username minimal 3 karakter");
      return false;
    }

    if (!account.trim()) {
      setError("Akun harus diisi");
      return false;
    }

    if (!password.trim()) {
      setError("Password harus diisi");
      return false;
    }

    if (password.length < 6) {
      setError("Password minimal 6 karakter");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Konfirmasi password tidak cocok");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Remove confirmPassword from the data sent to API
      const { confirmPassword, ...registrationData } = formData;
      
      const result = await authService.register(registrationData);

      if (result.success) {
        console.log("Registration successful:", result.data);
        setSuccess("Registrasi berhasil! Anda akan diarahkan ke halaman login dalam 3 detik.");
        
        // Reset form
        setFormData({
          username: "",
          account: "",
          password: "",
          confirmPassword: "",
        });

        // Redirect to login after 3 seconds
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 3000);
      } else {
        // Handle registration failure
        const errorMessage = authService.getErrorMessage(
          result.data || result.error,
          "Registrasi gagal. Silakan periksa data Anda."
        );
        setError(errorMessage);
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError(authService.errorMessages.network);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md ring-1 ring-gray-200">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Daftar
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                        text-gray-900 placeholder-gray-400 focus:outline-none
                        focus:ring-2 focus:ring-blue-400 focus:border-transparent
                        transition disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Masukkan username (min. 3 karakter)"
              required
              disabled={loading}
              autoComplete="username"
              minLength={3}
            />
          </div>

          <div>
            <label
              htmlFor="account"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Akun
            </label>
            <input
              type="text"
              name="account"
              id="account"
              value={formData.account}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                        text-gray-900 placeholder-gray-400 focus:outline-none
                        focus:ring-2 focus:ring-blue-400 focus:border-transparent
                        transition disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Masukkan akun Anda"
              required
              disabled={loading}
              autoComplete="username"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                        text-gray-900 placeholder-gray-400 focus:outline-none
                        focus:ring-2 focus:ring-blue-400 focus:border-transparent
                        transition disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Masukkan password (min. 6 karakter)"
              required
              disabled={loading}
              autoComplete="new-password"
              minLength={6}
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Konfirmasi Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                        text-gray-900 placeholder-gray-400 focus:outline-none
                        focus:ring-2 focus:ring-blue-400 focus:border-transparent
                        transition disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Ulangi password Anda"
              required
              disabled={loading}
              autoComplete="new-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg 
                     hover:bg-blue-600 transition-all duration-300 shadow-md 
                     hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed 
                     flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg 
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Memproses...
              </>
            ) : (
              "Daftar"
            )}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Sudah punya akun?{" "}
          <Link 
            to="/login" 
            className="text-blue-500 hover:text-blue-600 hover:underline font-medium"
          >
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regist;