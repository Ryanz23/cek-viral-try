// src/components/navigation/AuthSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Avatar } from '../ui';

const AuthSection = ({ 
  isAuthenticated, 
  user, 
  getDisplayName, 
  logout, 
  isMobile = false,
  onClose 
}) => {
  if (isAuthenticated) {
    return (
      <div className={`flex items-center gap-4 ${isMobile ? 'flex-col w-full' : ''}`}>
        <Link 
          to="/dashboard"
          onClick={onClose}
          className={`flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50 ${
            isMobile ? 'w-full p-3' : 'py-2 px-3'
          }`}
        >
          <Avatar name={getDisplayName()} size="md" />
          <span className="font-medium">{getDisplayName()}</span>
        </Link>
        
        <Button
          variant="danger"
          size={isMobile ? 'md' : 'sm'}
          onClick={() => {
            logout();
            if (onClose) onClose();
          }}
          className={isMobile ? 'w-full' : ''}
        >
          Keluar
        </Button>
      </div>
    );
  }

  return (
    <div className={`flex gap-4 ${isMobile ? 'flex-col w-full' : ''}`}>
      <Button
        variant="ghost"
        to="/login"
        onClick={onClose}
        className={isMobile ? 'w-full border border-gray-200' : ''}
      >
        MASUK
      </Button>
      
      <Button
        variant="primary"
        to="/regist"
        onClick={onClose}
        className={isMobile ? 'w-full' : ''}
      >
        DAFTAR
      </Button>
    </div>
  );
};

export default AuthSection;