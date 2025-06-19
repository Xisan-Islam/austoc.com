import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface TabsComponentProps {
  tabs: Tab[];
  defaultTab?: string;
  variant?: 'default' | 'pills' | 'underline' | 'cards';
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  onTabChange?: (tabId: string) => void;
}

const TabsComponent: React.FC<TabsComponentProps> = ({
  tabs,
  defaultTab,
  variant = 'default',
  orientation = 'horizontal',
  className = '',
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultTab || tabs[0]?.id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const tabVariants = {
    default: {
      base: 'px-6 py-3 font-medium transition-all duration-200 relative',
      active: 'text-accent-purple',
      inactive: 'text-white/70 hover:text-white',
    },
    pills: {
      base: 'px-6 py-3 font-medium rounded-full transition-all duration-200',
      active: 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg',
      inactive: 'text-white/70 hover:text-white hover:bg-white/10',
    },
    underline: {
      base: 'px-6 py-3 font-medium transition-all duration-200 relative border-b-2',
      active: 'text-accent-purple border-accent-purple',
      inactive: 'text-white/70 hover:text-white border-transparent',
    },
    cards: {
      base: 'px-6 py-3 font-medium rounded-t-lg transition-all duration-200',
      active: 'bg-white/10 text-white border-b-2 border-accent-purple',
      inactive: 'text-white/70 hover:text-white hover:bg-white/5',
    },
  };

  const currentVariant = tabVariants[variant];
  const isVertical = orientation === 'vertical';

  return (
    <div className={`${isVertical ? 'flex' : ''} ${className}`}>
      {/* Tab List */}
      <div className={`${isVertical ? 'flex-col mr-6' : 'flex'} flex border-b border-white/20 ${isVertical ? 'border-b-0 border-r' : ''}`}>
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`${currentVariant.base} ${
              activeTab === tab.id ? currentVariant.active : currentVariant.inactive
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-2">
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
            </div>

            {/* Active Indicator for Default Variant */}
            {variant === 'default' && activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={`${isVertical ? 'flex-1' : 'mt-6'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {tabs.find(tab => tab.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabsComponent;