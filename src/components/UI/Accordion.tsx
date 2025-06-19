import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  variant?: 'default' | 'bordered' | 'filled' | 'minimal';
  iconType?: 'chevron' | 'plus' | 'custom';
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  variant = 'default',
  iconType = 'chevron',
  className = '',
}) => {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(itemId);
      }
      
      return newSet;
    });
  };

  const variants = {
    default: {
      container: 'space-y-2',
      item: 'glass-effect rounded-2xl border border-white/20 overflow-hidden',
      header: 'p-6 cursor-pointer hover:bg-white/5 transition-colors duration-200',
      content: 'px-6 pb-6',
    },
    bordered: {
      container: 'space-y-4',
      item: 'border-2 border-white/20 rounded-2xl overflow-hidden hover:border-white/40 transition-colors duration-200',
      header: 'p-6 cursor-pointer hover:bg-white/5 transition-colors duration-200',
      content: 'px-6 pb-6 border-t border-white/10',
    },
    filled: {
      container: 'space-y-2',
      item: 'bg-white/10 rounded-2xl overflow-hidden',
      header: 'p-6 cursor-pointer hover:bg-white/20 transition-colors duration-200',
      content: 'px-6 pb-6 bg-white/5',
    },
    minimal: {
      container: 'space-y-1',
      item: 'border-b border-white/10 last:border-b-0',
      header: 'py-4 cursor-pointer hover:text-accent-purple transition-colors duration-200',
      content: 'pb-4',
    },
  };

  const currentVariant = variants[variant];

  const getIcon = (itemId: string, customIcon?: React.ReactNode) => {
    const isOpen = openItems.has(itemId);
    
    switch (iconType) {
      case 'plus':
        return isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />;
      case 'custom':
        return customIcon;
      case 'chevron':
      default:
        return (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        );
    }
  };

  return (
    <div className={`${currentVariant.container} ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        
        return (
          <motion.div
            key={item.id}
            className={currentVariant.item}
            initial={false}
            animate={{
              backgroundColor: isOpen ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <motion.div
              className={`${currentVariant.header} flex items-center justify-between`}
              onClick={() => toggleItem(item.id)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center space-x-3">
                {item.icon && (
                  <div className="text-accent-purple">
                    {item.icon}
                  </div>
                )}
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              
              <motion.div
                className="text-white/60 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
              >
                {getIcon(item.id, item.icon)}
              </motion.div>
            </motion.div>

            {/* Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className={`${currentVariant.content} text-white/80`}>
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Accordion;