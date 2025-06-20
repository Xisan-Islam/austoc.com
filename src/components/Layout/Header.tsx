import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ShoppingBag, 
  User, 
  X, 
  Heart,
  ChevronDown,
  Menu,
  Crown,
  Sparkles
} from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../UI/ThemeToggle';
import ScrollAnimation from '../UI/ScrollAnimations';
import toast from 'react-hot-toast';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Products', path: '/products', icon: '🛍️' },
    { name: 'Collections', path: '/collections', icon: '✨' },
    { name: 'About', path: '/about', icon: '💎' },
    { name: 'Contact', path: '/contact', icon: '📞' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully', {
      style: {
        background: 'rgba(139, 92, 246, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        color: 'white',
      },
    });
    navigate('/');
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'glass-effect shadow-2xl backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Premium Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-accent-blue/10 to-accent-cyan/10"
          animate={{
            opacity: isScrolled ? [0.3, 0.6, 0.3] : [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 group"
            >
              <Link to="/" className="flex items-center space-x-3">
                <motion.div
                  className="relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src="/Site-Logo.jpg.png"
                    alt="Austoc"
                    className="h-12 w-auto filter drop-shadow-2xl"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="hidden sm:block"
                >
                  <span className="text-2xl font-bold font-display text-white glow-text">
                    Austoc
                  </span>
                  <motion.div
                    className="flex items-center space-x-1 text-xs text-accent-purple"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Crown className="h-3 w-3" />
                    <span>Premium</span>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                >
                  <Link
                    to={item.path}
                    className="relative px-6 py-3 text-white/80 hover:text-white transition-all duration-300 font-medium group rounded-xl hover:bg-white/5"
                  >
                    <motion.div
                      className="flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue group-hover:w-3/4 transition-all duration-300"
                      style={{ transform: 'translateX(-50%)' }}
                    />
                    
                    {/* Hover Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(true)}
                className="relative p-3 text-white/80 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-full group overflow-hidden"
              >
                <Search className="h-5 w-5 relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Wishlist */}
              <motion.div 
                whileHover={{ scale: 1.1, y: -2 }} 
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to="/wishlist"
                  className="relative p-3 text-white/80 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-full group overflow-hidden"
                >
                  <Heart className="h-5 w-5 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              {/* Cart */}
              <motion.div 
                whileHover={{ scale: 1.1, y: -2 }} 
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to="/cart"
                  className="relative p-3 text-white/80 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-full group overflow-hidden"
                >
                  <ShoppingBag className="h-5 w-5 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 rounded-full"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {itemCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-gradient-to-r from-accent-purple to-accent-blue text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg z-20"
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </Link>
              </motion.div>

              {/* User Account */}
              {user ? (
                <div className="relative">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 p-2 text-white/80 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10"
                  >
                    {user.avatar ? (
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={user.avatar}
                        alt={user.name}
                        className="h-8 w-8 rounded-full object-cover border-2 border-white/20"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <span className="hidden sm:block text-sm font-medium">
                      {user.name}
                    </span>
                    <motion.div
                      animate={{ rotate: isUserMenuOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.button>
                  
                  {/* User Dropdown */}
                  <AnimatePresence>
                    {isUserMenuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 glass-effect rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
                      >
                        <div className="p-4 border-b border-white/10">
                          <p className="text-white font-medium">{user.name}</p>
                          <p className="text-white/60 text-sm">{user.email}</p>
                        </div>
                        <div className="py-2">
                          <Link
                            to="/profile"
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center space-x-3 px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                          >
                            <User className="h-4 w-4" />
                            <span>Profile</span>
                          </Link>
                          <Link
                            to="/orders"
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center space-x-3 px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                          >
                            <ShoppingBag className="h-4 w-4" />
                            <span>Orders</span>
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                          >
                            <X className="h-4 w-4" />
                            <span>Sign Out</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/auth"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-full hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 font-medium relative overflow-hidden group"
                  >
                    <User className="h-4 w-4" />
                    <span>Sign In</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              )}

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-3 text-white/80 hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-full"
                >
                  <Menu className="h-6 w-6" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden border-t border-white/20 mt-4 overflow-hidden"
              >
                <div className="py-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-all duration-200"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="glass-effect rounded-3xl p-8 w-full max-w-2xl border border-white/20 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 to-accent-blue/10"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="flex items-center space-x-4 relative z-10">
                <Search className="h-6 w-6 text-white/60" />
                <input
                  type="text"
                  placeholder="Search luxury products..."
                  className="flex-1 bg-transparent outline-none text-white text-xl placeholder-white/60"
                  autoFocus
                />
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                >
                  <X className="h-5 w-5 text-white/60" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;