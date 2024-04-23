import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { H2 } from './style';

export const AnimatedTitle = ({ children }: { children: React.ReactNode }) => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: false });

  const animatedStyles = {
    opacity: isInView ? 1 : 0,
  };

  return (
    <motion.div
      ref={textRef}
      initial={{ opacity: 0 }}
      animate={animatedStyles}
      transition={{ duration: 0.5 }}>
      <H2>{children}</H2>
    </motion.div>
  );
};
