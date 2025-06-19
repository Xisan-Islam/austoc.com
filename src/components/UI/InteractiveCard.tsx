import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'flip' | 'scale' | 'fade' | 'slide' | 'rotate' | 'morph';
  trigger?: 'hover' | 'click' | 'auto';
  delay?: number;
  duration?: number;
  backContent?: React.ReactNode;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = '',
  animation = 'scale',
  trigger = 'hover',
  delay = 0,
  duration = 0.6,
  backContent,
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isTriggered, setIsTriggered] = React.useState(false);

  React.useEffect(() => {
    if (trigger === 'auto') {
      const timer = setTimeout(() => {
        setIsTriggered(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [trigger, delay]);

  const animations = {
    flip: {
      initial: { rotateY: 0 },
      animate: { rotateY: isFlipped ? 180 : 0 },
      hover: { rotateY: 180 },
    },
    scale: {
      initial: { scale: 1 },
      animate: { scale: isTriggered ? 1.05 : 1 },
      hover: { scale: 1.05 },
    },
    fade: {
      initial: { opacity: 1 },
      animate: { opacity: isTriggered ? 0.8 : 1 },
      hover: { opacity: 0.8 },
    },
    slide: {
      initial: { x: 0, y: 0 },
      animate: { x: isTriggered ? 10 : 0, y: isTriggered ? -10 : 0 },
      hover: { x: 10, y: -10 },
    },
    rotate: {
      initial: { rotate: 0 },
      animate: { rotate: isTriggered ? 5 : 0 },
      hover: { rotate: 5 },
    },
    morph: {
      initial: { borderRadius: '1rem' },
      animate: { borderRadius: isTriggered ? '2rem' : '1rem' },
      hover: { borderRadius: '2rem' },
    },
  };

  const currentAnimation = animations[animation];

  const handleInteraction = () => {
    if (trigger === 'click') {
      if (animation === 'flip') {
        setIsFlipped(!isFlipped);
      } else {
        setIsTriggered(!isTriggered);
      }
    }
  };

  const hoverProps = trigger === 'hover' ? {
    whileHover: currentAnimation.hover,
  } : {};

  const tapProps = trigger === 'click' ? {
    whileTap: { scale: 0.95 },
    onClick: handleInteraction,
  } : {};

  if (animation === 'flip' && backContent) {
    return (
      <div className="relative preserve-3d" style={{ perspective: '1000px' }}>
        <motion.div
          className={`relative w-full h-full ${className}`}
          initial={currentAnimation.initial}
          animate={currentAnimation.animate}
          transition={{ duration, type: 'spring', stiffness: 300, damping: 30 }}
          style={{ transformStyle: 'preserve-3d' }}
          {...hoverProps}
          {...tapProps}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 w-full h-full backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {children}
          </div>
          
          {/* Back Side */}
          <div
            className="absolute inset-0 w-full h-full backface-hidden"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            {backContent}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className={`relative ${className}`}
      initial={currentAnimation.initial}
      animate={trigger === 'auto' ? currentAnimation.animate : currentAnimation.initial}
      transition={{ duration, delay, type: 'spring', stiffness: 300, damping: 30 }}
      {...hoverProps}
      {...tapProps}
    >
      {children}
      
      {/* Overlay Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 rounded-inherit opacity-0 pointer-events-none"
        whileHover={{ opacity: trigger === 'hover' ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default InteractiveCard;