import { useEffect, useState } from 'react';

export const useScreen = () => {
  // const [width, setWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState(0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1280;
  const isDesktop = width >= 1280;
  const isTabletOrDesktop = width >= 768;

  return { isMobile, isTablet, isDesktop, isTabletOrDesktop };
};
