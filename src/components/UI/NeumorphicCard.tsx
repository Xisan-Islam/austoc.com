import React from 'react';
import { motion } from 'framer-motion';

interface NeumorphicCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  pressed?: boolean;
  variant?: 'elevated' | 'inset' | 'flat';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const NeumorphicCard: React.FC<NeumorphicCardProps> = ({
  children,
  className = '',
  hover = true,
  pressed = false,
  variant = 'elevated',
  size = 'md',
  onClick,
}) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const variants = {
    elevated: {
      light: 'bg-gray-100 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]',
      dark: 'bg-gray-800 shadow-[8px_8px_16px_#1a1a1a,-8px_-8px_16px_#2a2a2a]',
      hover: {
        light: 'shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff]',
        dark: 'shadow-[12px_12px_24px_#1a1a1a,-12px_-12px_24px_#2a2a2a]',
      },
      pressed: {
        light: 'shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]',
        dark: 'shadow-[inset_8px_8px_16px_#1a1a1a,inset_-8px_-8px_16px_#2a2a2a]',
      },
    },
    inset: {
      light: 'bg-gray-100 shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]',
      dark: 'bg-gray-800 shadow-[inset_8px_8px_16px_#1a1a1a,inset_-8px_-8px_16px_#2a2a2a]',
      hover: {
        light: 'shadow-[inset_12px_12px_24px_#d1d9e6,inset_-12px_-12px_24px_#ffffff]',
        dark: 'shadow-[inset_12px_12px_24px_#1a1a1a,inset_-12px_-12px_24px_#2a2a2a]',
      },
      pressed: {
        light: 'shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]',
        dark: 'shadow-[8px_8px_16px_#1a1a1a,-8px_-8px_16px_#2a2a2a]',
      },
    },
    flat: {
      light: 'bg-gray-100 shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]',
      dark: 'bg-gray-800 shadow-[4px_4px_8px_#1a1a1a,-4px_-4px_8px_#2a2a2a]',
      hover: {
        light: 'shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]',
        dark: 'shadow-[6px_6px_12px_#1a1a1a,-6px_-6px_12px_#2a2a2a]',
      },
      pressed: {
        light: 'shadow-[2px_2px_4px_#d1d9e6,-2px_-2px_4px_#ffffff]',
        dark: 'shadow-[2px_2px_4px_#1a1a1a,-2px_-2px_4px_#2a2a2a]',
      },
    },
  };

  const sizes = {
    sm: 'p-4 rounded-xl',
    md: 'p-6 rounded-2xl',
    lg: 'p-8 rounded-3xl',
  };

  const getClassName = () => {
    const baseClass = `transition-all duration-300 ${sizes[size]}`;
    const themeClass = document.documentElement.classList.contains('dark') 
      ? variants[variant].dark 
      : variants[variant].light;
    
    return `${baseClass} ${themeClass} ${className}`;
  };

  const getHoverClassName = () => {
    const themeClass = document.documentElement.classList.contains('dark')
      ? variants[variant].hover?.dark
      : variants[variant].hover?.light;
    
    return themeClass || '';
  };

  const getPressedClassName = () => {
    const themeClass = document.documentElement.classList.contains('dark')
      ? variants[variant].pressed?.dark
      : variants[variant].pressed?.light;
    
    return themeClass || '';
  };

  return (
    <motion.div
      className={getClassName()}
      whileHover={hover ? { 
        scale: 1.02,
        className: `${getClassName()} ${getHoverClassName()}`,
      } : {}}
      whileTap={onClick ? { 
        scale: 0.98,
        className: `${getClassName()} ${getPressedClassName()}`,
      } : {}}
      onTapStart={() => setIsPressed(true)}
      onTap={() => setIsPressed(false)}
      onTapCancel={() => setIsPressed(false)}
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {children}
    </motion.div>
  );
};

export default NeumorphicCard;