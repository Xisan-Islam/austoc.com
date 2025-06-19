import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  icon?: React.ReactNode;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  label,
  prefix = '',
  suffix = '',
  duration = 2.5,
  icon
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center group"
    >
      {/* Icon */}
      {icon && (
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
          className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-accent-purple to-accent-blue rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
        >
          {icon}
        </motion.div>
      )}

      {/* Counter */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-4xl lg:text-5xl font-bold text-white mb-2 glow-text"
      >
        {inView && (
          <CountUp
            start={0}
            end={end}
            duration={duration}
            prefix={prefix}
            suffix={suffix}
            separator=","
          />
        )}
      </motion.div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-white/70 text-lg font-medium tracking-wide"
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export default AnimatedCounter;