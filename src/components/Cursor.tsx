import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor: React.FC = () => {
  useEffect(() => {
    // Remove the custom cursor class to show the original system cursor
    document.body.classList.remove('disable-cursor');
    
    return () => {
      // Clean up - remove the class when component unmounts
      document.body.classList.remove('disable-cursor');
    };
  }, []);

  // Return null to not render any custom cursor elements
  return null;
};

export default Cursor;