import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Eye, Sparkles, Crown, Gem } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart`, {
      style: {
        background: 'rgba(139, 92, 246, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        color: 'white',
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative glass-effect rounded-3xl shadow-2xl hover:shadow-accent-purple/20 transition-all duration-500 overflow-hidden border border-white/20 hover:border-white/40"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-t-3xl">
        <Link to={`/product/${product.id}`}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </Link>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <motion.button
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 glass-effect rounded-full shadow-lg backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 group/btn"
          >
            <Heart className="h-5 w-5 text-white group-hover/btn:text-red-400 transition-colors duration-300" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className="p-4 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full shadow-lg hover:shadow-accent-purple/50 transition-all duration-300 relative overflow-hidden group/btn"
          >
            <ShoppingCart className="h-5 w-5 text-white relative z-10" />
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <Link to={`/product/${product.id}`}>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 glass-effect rounded-full shadow-lg backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 group/btn"
            >
              <Eye className="h-5 w-5 text-white group-hover/btn:text-accent-blue transition-colors duration-300" />
            </motion.button>
          </Link>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 space-y-2">
          {product.featured && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg"
            >
              <Crown className="h-3 w-3" />
              <span>Featured</span>
            </motion.span>
          )}
          {product.originalPrice && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
            >
              Sale
            </motion.span>
          )}
        </div>

        {/* Premium Badge */}
        <div className="absolute top-4 right-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 bg-gradient-to-r from-accent-gold to-yellow-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <Gem className="h-4 w-4 text-white" />
          </motion.div>
        </div>

        {/* Stock Badge */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center backdrop-blur-sm">
            <span className="bg-red-600 text-white px-6 py-3 rounded-2xl font-semibold text-lg shadow-2xl">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <span className="text-sm text-accent-purple font-medium tracking-wide uppercase flex items-center space-x-1">
            <Sparkles className="h-3 w-3" />
            <span>{product.category}</span>
          </span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-semibold text-white mb-3 hover:text-accent-purple transition-colors duration-300 line-clamp-2 group-hover:glow-text">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <Star
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-white/30'
                  }`}
                />
              </motion.div>
            ))}
          </div>
          <span className="text-sm text-white/60">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <motion.span 
              className="text-2xl font-bold text-white glow-text"
              whileHover={{ scale: 1.05 }}
            >
              ${product.price}
            </motion.span>
            {product.originalPrice && (
              <span className="text-sm text-white/50 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          {product.inStock && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="px-4 py-2 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-xl hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 text-sm font-medium relative overflow-hidden group/btn"
            >
              <span className="relative z-10">Add to Cart</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          )}
        </div>

        {/* Premium Indicator */}
        <motion.div
          className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center space-x-2 text-xs text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Crown className="h-3 w-3 text-accent-gold" />
          <span>Premium Quality Guaranteed</span>
          <Gem className="h-3 w-3 text-accent-blue" />
        </motion.div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-accent-blue/10 to-accent-cyan/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
            'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
            'linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default ProductCard;