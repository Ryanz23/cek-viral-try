import React from 'react';
import { toast } from 'react-hot-toast'; // atau library toast yang Anda pakai

const Loading = () => {
  const showLoadingToast = (message = "Silakan tunggu, kami sedang memproses...") => {
    return toast.success(message, {
      duration: 2000,
      position: 'top-center',
    });
  };

  // const handleLoadingSubmit = (callback, delay = 2000) => {
  //   showLoadingToast();
    
  //   setTimeout(() => {
  //     callback();
  //   }, delay);
  // };

  return { showLoadingToast, };
};

export default Loading;