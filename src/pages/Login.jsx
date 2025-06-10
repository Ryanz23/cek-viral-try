import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../data/api/AuthService";

const Login = () => {
  const [formData, setFormData] = useState({
    account: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
    
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.account.trim() || !formData.password.trim()) {
      setError("Semua field harus diisi");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await authService.login(formData);

      if (result.success) {
        console.log("Login successful:", result.data);
        
        // Save authentication data
        if (result.data.token) {
          authService.saveToken(result.data.token);
        }
        
        if (result.data.user) {
          authService.saveUser(result.data.user);
        }

        // Navigate to dashboard
        navigate("/dashboard", { replace: true });
      } else {
        // Handle login failure
        const errorMessage = authService.getErrorMessage(
          result.data || result.error,
          "Login gagal. Periksa kembali akun dan password Anda."
        );
        setError(errorMessage);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(authService.errorMessages.network);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Masuk
        </h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label 
              className="block mb-2 text-sm font-medium text-gray-700" 
              htmlFor="account"
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
              className="block mb-2 text-sm font-medium text-gray-700" 
              htmlFor="password"
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
              placeholder="Masukkan password Anda"
              required
              disabled={loading}
              autoComplete="current-password"
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
              "Masuk"
            )}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Belum punya akun?{" "}
          <Link 
            to="/register" 
            className="text-blue-500 hover:text-blue-600 hover:underline font-medium"
          >
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;