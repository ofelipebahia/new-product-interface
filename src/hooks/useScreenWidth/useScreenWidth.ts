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
  const getWindow = () =>
    typeof window !== 'undefined'
      ? window
      : {
          innerWidth: 0,
          addEventListener: () => {},
          removeEventListener: () => {},
        };

  const [screenWidth, setScreenWidth] = useState(getWindow().innerWidth);
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
    const handleResize = () => setScreenWidth(getWindow().innerWidth);

    getWindow().addEventListener('resize', handleResize);

    return () => getWindow().removeEventListener('resize', handleResize);
  }, []);

  return {
    breakpoints,
  };
};
