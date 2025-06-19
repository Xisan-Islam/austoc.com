import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: 'dark', icon: Moon, color: 'from-slate-600 to-slate-800' },
    { name: 'light', icon: Sun, color: 'from-amber-400 to-orange-500' },
    { name: 'luxury', icon: Palette, color: 'from-purple-500 to-pink-600' },
  ];

  const currentThemeIndex = themes.findIndex(t => t.name === theme);
  const nextTheme = themes[(currentThemeIndex + 1) % themes.length];
  const CurrentIcon = themes[currentThemeIndex].icon;
  const NextIcon = nextTheme.icon;

  const handleToggle = () => {
    setTheme(nextTheme.name as any);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="relative w-16 h-8 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-accent-purple/50 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: `linear-gradient(135deg, ${themes[currentThemeIndex].color.replace('from-', '').replace(' to-', ', ')})`,
      }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-30"
        animate={{
          boxShadow: [
            '0 0 20px rgba(139, 92, 246, 0.3)',
            '0 0 30px rgba(139, 92, 246, 0.6)',
            '0 0 20px rgba(139, 92, 246, 0.3)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Sliding Toggle */}
      <motion.div
        className="relative w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 0 : theme === 'light' ? 16 : 32,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="text-gray-700"
          >
            <CurrentIcon className="h-3 w-3" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Preview Icon */}
      <motion.div
        className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white/70"
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <NextIcon className="h-3 w-3" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;