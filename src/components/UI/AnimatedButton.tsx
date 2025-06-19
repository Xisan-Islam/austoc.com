import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface AnimatedButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow' | 'neon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
  glowColor?: string;
  ripple?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  fullWidth = false,
  disabled,
  className = '',
  glowColor = 'rgba(139, 92, 246, 0.5)',
  ripple = true,
  ...props
}) => {
  const [ripples, setRipples] = React.useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple && !disabled && !loading) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newRipple = { id: Date.now(), x, y };
      
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    }
    
    if (props.onClick) {
      props.onClick(e);
    }
  };

  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';
  
  const variants = {
    primary: 'bg-gradient-to-r from-accent-purple to-accent-blue text-white hover:shadow-lg hover:shadow-accent-purple/25 focus:ring-accent-purple/50',
    secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 focus:ring-gray-500',
    outline: 'border-2 border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white focus:ring-accent-purple/50 dark:border-accent-purple dark:text-accent-purple',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800',
    glow: 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg hover:shadow-2xl focus:ring-accent-purple/50',
    neon: 'bg-transparent border-2 border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white hover:shadow-lg hover:shadow-accent-purple/50 focus:ring-accent-purple/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const glowVariants = {
    glow: {
      boxShadow: [
        `0 0 20px ${glowColor}`,
        `0 0 40px ${glowColor}`,
        `0 0 20px ${glowColor}`,
      ],
    },
  };

  return (
    <motion.button
      whileHover={{ 
        scale: disabled || loading ? 1 : 1.02,
        ...(variant === 'glow' ? glowVariants.glow : {}),
      }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      animate={variant === 'glow' ? {
        boxShadow: [
          `0 0 20px ${glowColor}`,
          `0 0 30px ${glowColor}`,
          `0 0 20px ${glowColor}`,
        ],
      } : {}}
      transition={{ 
        duration: variant === 'glow' ? 2 : 0.2,
        repeat: variant === 'glow' ? Infinity : 0,
      }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}

      {/* Loading Spinner */}
      {loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mr-2"
        >
          <Loader2 className="w-4 h-4 animate-spin" />
        </motion.div>
      )}

      {/* Button Content */}
      <motion.span
        animate={{ opacity: loading ? 0.7 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
};

export default AnimatedButton;