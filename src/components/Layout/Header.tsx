import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ShoppingBag, 
  User, 
  X, 
  Heart,
  ChevronDown
} from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../UI/ThemeToggle';
import HamburgerMenu from '../UI/HamburgerMenu';
import ScrollAnimation from '../UI/ScrollAnimations';
import toast from 'react-hot-toast';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
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
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <>
      <ScrollAnimation animation="slideDown" duration={0.8}>
        <motion.header
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
            isScrolled 
              ? 'glass-effect shadow-2xl backdrop-blur-xl' 
              : 'bg-transparent'
          }`}
          animate={{
            backgroundColor: isScrolled 
              ? 'rgba(15, 23, 42, 0.8)' 
              : 'rgba(15, 23, 42, 0)',
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src="/Site-Logo.jpg.png"
                  alt="Austoc"
                  className="h-12 w-auto filter drop-shadow-lg"
                />
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-2xl font-bold font-display text-white glow-text hidden sm:block"
                >
                  Austoc
                </motion.span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <ScrollAnimation
                    key={item.name}
                    animation="slideDown"
                    delay={0.1 * index}
                    duration={0.6}
                  >
                    <Link
                      to={item.path}
                      className="relative text-white/80 hover:text-white transition-colors duration-300 font-medium group"
                    >
                      {item.name}
                      <motion.div
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue group-hover:w-full transition-all duration-300"
                        whileHover={{ width: '100%' }}
                      />
                    </Link>
                  </ScrollAnimation>
                ))}
              </nav>

              {/* Right Section */}
              <div className="flex items-center space-x-4">
                {/* Search */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsSearchOpen(true)}
                  className="p-3 text-white/80 hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-full relative overflow-hidden group"
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
                    className="p-3 text-white/80 hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-full relative overflow-hidden group"
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
                    className="relative p-3 text-white/80 hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-full group overflow-hidden"
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
                  <div className="relative group">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 p-2 text-white/80 hover:text-white transition-colors duration-300"
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
                      <ChevronDown className="h-4 w-4" />
                    </motion.button>
                    
                    {/* Dropdown */}
                    <motion.div 
                      className="absolute right-0 mt-2 w-48 glass-effect rounded-xl shadow-2xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      <div className="py-2">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
                        >
                          Profile
                        </Link>
                        <Link
                          to="/orders"
                          className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
                        >
                          Orders
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
                        >
                          Sign Out
                        </button>
                      </div>
                    </motion.div>
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
                  <HamburgerMenu
                    isOpen={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    color="rgba(255, 255, 255, 0.8)"
                  />
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
                  className="lg:hidden border-t border-white/20 mt-4"
                >
                  <div className="py-6 space-y-4">
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
                          className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      </ScrollAnimation>

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
              className="glass-effect rounded-2xl p-8 w-full max-w-2xl border border-white/20 relative overflow-hidden"
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