// src/services/authService.js
const API_BASE_URL = "https://auth-service-2-231745028467.asia-southeast2.run.app";

class AuthService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.defaultHeaders = {
      "Content-Type": "application/json",
    };
  }

  // Generic API call method
  async apiCall(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const config = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...(options.headers || {}),
      },
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      return {
        success: response.ok,
        data: data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      console.error(`API call failed for ${endpoint}:`, error);
      return {
        success: false,
        error: error.message,
        data: null,
      };
    }
  }

  // Authentication methods
  async login(credentials) {
    return await this.apiCall("/login", {
      method: "POST",
      body: JSON.stringify({
        email: credentials.account,
        password: credentials.password,
      }),
    });
  }

  async register(userData) {
    return await this.apiCall("/signup", {
      method: "POST",
      body: JSON.stringify({
        name: userData.username,
        email: userData.account,
        password: userData.password,
      }),
    });
  }

  async logout() {
    const token = this.getToken();
    if (token) {
      const result = await this.apiCall("/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      // Clear local storage regardless of API response
      this.clearAuth();
      return result;
    }
    return { success: true };
  }

  async verifyToken(token = null) {
    const authToken = token || this.getToken();
    if (!authToken) {
      return { success: false, error: "No token found" };
    }

    return await this.apiCall("/verify", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  }

  async getProfile() {
    const token = this.getToken();
    if (!token) {
      return { success: false, error: "No token found" };
    }

    return await this.apiCall("/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  // Token management
  saveToken(token) {
    try {
      localStorage.setItem("authToken", token);
      return true;
    } catch (error) {
      console.error("Failed to save token:", error);
      return false;
    }
  }

  getToken() {
    try {
      return localStorage.getItem("authToken");
    } catch (error) {
      console.error("Failed to get token:", error);
      return null;
    }
  }

  removeToken() {
    try {
      localStorage.removeItem("authToken");
      return true;
    } catch (error) {
      console.error("Failed to remove token:", error);
      return false;
    }
  }

  // User data management
  saveUser(userData) {
    try {
      localStorage.setItem("userData", JSON.stringify(userData));
      return true;
    } catch (error) {
      console.error("Failed to save user data:", error);
      return false;
    }
  }

  getUser() {
    try {
      const userData = localStorage.getItem("userData");
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error("Failed to get user data:", error);
      return null;
    }
  }

  removeUser() {
    try {
      localStorage.removeItem("userData");
      return true;
    } catch (error) {
      console.error("Failed to remove user data:", error);
      return false;
    }
  }

  // Authentication helpers
  isAuthenticated() {
    const token = this.getToken();
    return token !== null && token !== "";
  }

  clearAuth() {
    this.removeToken();
    this.removeUser();
  }

  // Error handling
  getErrorMessage(error, defaultMessage = "Terjadi kesalahan yang tidak terduga") {
    if (typeof error === "string") return error;
    if (error?.message) return error.message;
    if (error?.data?.message) return error.data.message;
    return defaultMessage;
  }

  // Common error messages
  get errorMessages() {
    return {
      network: "Terjadi kesalahan jaringan. Periksa koneksi internet Anda.",
      server: "Server sedang bermasalah. Silakan coba lagi nanti.",
      unauthorized: "Sesi Anda telah berakhir. Silakan login kembali.",
      forbidden: "Anda tidak memiliki akses untuk melakukan tindakan ini.",
      notFound: "Data yang dicari tidak ditemukan.",
      validation: "Data yang dimasukkan tidak valid.",
      default: "Terjadi kesalahan yang tidak terduga. Silakan coba lagi.",
    };
  }
}

// Create and export a singleton instance
const authService = new AuthService();
export default authService;