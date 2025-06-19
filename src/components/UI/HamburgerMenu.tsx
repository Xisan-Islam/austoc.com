import React from 'react';
import { motion } from 'framer-motion';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
  color?: string;
  size?: number;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  onClick,
  className = '',
  color = 'currentColor',
  size = 24,
}) => {
  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0,
      opacity: 1,
    },
    open: {
      rotate: 0,
      y: 0,
      opacity: 1,
    },
  };

  const topLineVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },
    open: {
      rotate: 45,
      y: 8,
    },
  };

  const middleLineVariants = {
    closed: {
      opacity: 1,
      x: 0,
    },
    open: {
      opacity: 0,
      x: -20,
    },
  };

  const bottomLineVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },
    open: {
      rotate: -45,
      y: -8,
    },
  };

  return (
    <motion.button
      onClick={onClick}
      className={`relative p-2 focus:outline-none ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle menu"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Line */}
        <motion.line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          variants={topLineVariants}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ originX: '50%', originY: '50%' }}
        />
        
        {/* Middle Line */}
        <motion.line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          variants={middleLineVariants}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        
        {/* Bottom Line */}
        <motion.line
          x1="3"
          y1="18"
          x2="21"
          y2="18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          variants={bottomLineVariants}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ originX: '50%', originY: '50%' }}
        />
      </svg>
    </motion.button>
  );
};

export default HamburgerMenu;