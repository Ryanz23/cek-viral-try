// src/components/ui/Avatar.jsx
import React from "react";

const Avatar = ({ name, size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
  };

  return (
    <div
      className={`bg-gradient-to-r from-blue-main to-green-main rounded-full flex items-center justify-center text-white font-semibold ${sizeClasses[size]} ${className}`}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
