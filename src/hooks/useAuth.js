// src/components/navigation/hooks/useAuth.js
import { useState, useEffect } from "react";
import authService from "../data/api/AuthService";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = authService.isAuthenticated();
      const userData = authService.getUser();

      setIsAuthenticated(authenticated);
      setUser(userData);
      setLoading(false);
    };

    checkAuth();

    // Listen for storage changes (login/logout in other tabs)
    const handleStorageChange = (e) => {
      if (e.key === "authToken" || e.key === "userData") {
        checkAuth();
      }
    };

    // Listen for custom events (login/logout in same tab)
    const handleAuthChange = () => {
      checkAuth();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("authStateChanged", handleAuthChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("authStateChanged", handleAuthChange);
    };
  }, []);

  const logout = async () => {
    await authService.logout();
    setIsAuthenticated(false);
    setUser(null);

    // Trigger custom event
    window.dispatchEvent(new Event("authStateChanged"));

    // Redirect to home
    window.location.href = "/";
  };

  const getDisplayName = () => {
    if (user) {
      return user.name || user.username || user.account || "User";
    }
    return "User";
  };

  return {
    user,
    isAuthenticated,
    loading,
    logout,
    getDisplayName,
  };
};
