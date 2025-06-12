// src/components/navigation/hooks/useNavigation.js
import { useState, useEffect } from 'react';
import { NAV_CONFIG } from '../../constants/navigation';

export const useNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > NAV_CONFIG.SCROLL_THRESHOLD);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isScrolled };
};