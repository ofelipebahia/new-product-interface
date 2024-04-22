import { useState, useEffect, useMemo } from 'react';
import { screenSize } from './breakpoints';

interface ScreenWidthHook {
  breakpoints: {
    lessThan: {
      desktop: boolean;
      tablet: boolean;
    };
    greaterThan: {
      desktop: boolean;
      tablet: boolean;
    };
  };
}

export const useScreenWidth = (): ScreenWidthHook => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const breakpoints = useMemo(
    () => ({
      greaterThan: {
        desktop: screenWidth >= screenSize.extraLarge,
        tablet: screenWidth >= screenSize.large,
      },
      lessThan: {
        desktop: screenWidth < screenSize.extraLarge,
        tablet: screenWidth < screenSize.large,
      },
    }),
    [screenWidth]
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    breakpoints,
  };
};
