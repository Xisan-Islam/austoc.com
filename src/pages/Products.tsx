import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, Grid, List, SlidersHorizontal, Star, Crown, Gem, Sparkles } from 'lucide-react';
import ProductCard from '../components/UI/ProductCard';
import AnimatedButton from '../components/UI/AnimatedButton';
import ScrollAnimation from '../components/UI/ScrollAnimations';
import { products, categories } from '../data/products';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, priceRange]);

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header */}
        <ScrollAnimation animation="slideDown" duration={0.8}>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 mb-6"
            >
              <Crown className="h-8 w-8 text-accent-purple" />
              <span className="text-accent-purple font-semibold text-lg">Premium Collection</span>
              <Gem className="h-8 w-8 text-accent-blue" />
            </motion.div>
            <h1 className="text-4xl lg:text-6xl font-bold font-display text-white mb-6 glow-text">
              Luxury Products
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Discover our complete collection of premium products, each carefully curated for the discerning connoisseur.
            </p>
          </div>
        </ScrollAnimation>

        {/* Search and Filter Bar */}
        <ScrollAnimation animation="slideUp" delay={0.2}>
          <motion.div
            className="glass-effect rounded-3xl shadow-2xl p-8 mb-12 border border-white/20"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Search luxury products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 glass-effect border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-purple/50 text-white placeholder-white/40 transition-all duration-300"
                />
              </div>

              {/* Controls */}
              <div className="flex items-center space-x-4 w-full lg:w-auto">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-4 glass-effect border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-purple/50 text-white bg-transparent min-w-[180px]"
                >
                  <option value="name" className="bg-gray-800">Sort by Name</option>
                  <option value="price-low" className="bg-gray-800">Price: Low to High</option>
                  <option value="price-high" className="bg-gray-800">Price: High to Low</option>
                  <option value="rating" className="bg-gray-800">Highest Rated</option>
                </select>

                {/* View Mode */}
                <div className="flex glass-effect rounded-2xl p-1 border border-white/20">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      viewMode === 'grid'
                        ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg'
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Grid className="h-5 w-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      viewMode === 'list'
                        ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg'
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <List className="h-5 w-5" />
                  </motion.button>
                </div>

                {/* Filters Toggle */}
                <AnimatedButton
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-white/30 text-white hover:bg-white/10 flex items-center space-x-2"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Filters</span>
                </AnimatedButton>
              </div>
            </div>

            {/* Filters Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 pt-8 border-t border-white/20"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Categories */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                        <Sparkles className="h-5 w-5 text-accent-purple" />
                        <span>Categories</span>
                      </h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <motion.button
                            key={category}
                            whileHover={{ scale: 1.02, x: 5 }}
                            onClick={() => setSelectedCategory(category)}
                            className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                              selectedCategory === category
                                ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg'
                                : 'glass-effect text-white/70 hover:text-white border border-white/10 hover:border-white/30'
                            }`}
                          >
                            {category}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                        <Crown className="h-5 w-5 text-accent-gold" />
                        <span>Price Range</span>
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <input
                            type="range"
                            min="0"
                            max="2000"
                            step="50"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                            className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                          />
                          <div className="flex justify-between text-sm text-white/60 mt-2">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Filters */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                        <Filter className="h-5 w-5 text-accent-blue" />
                        <span>Quick Filters</span>
                      </h3>
                      <div className="space-y-2">
                        {['On Sale', 'Featured', 'In Stock', 'Premium'].map((filter) => (
                          <motion.button
                            key={filter}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="block w-full text-left px-4 py-3 rounded-xl glass-effect text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-300"
                          >
                            {filter}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </ScrollAnimation>

        {/* Results Count */}
        <ScrollAnimation animation="fadeIn" delay={0.4}>
          <div className="mb-8">
            <p className="text-white/60 text-lg flex items-center space-x-2">
              <Gem className="h-5 w-5 text-accent-purple" />
              <span>
                Showing <span className="text-white font-semibold">{filteredAndSortedProducts.length}</span> of{' '}
                <span className="text-white font-semibold">{products.length}</span> luxury products
              </span>
            </p>
          </div>
        </ScrollAnimation>

        {/* Products Grid */}
        <ScrollAnimation animation="fadeIn" delay={0.6}>
          <motion.div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
                : 'space-y-8'
            }
            layout
          >
            <AnimatePresence>
              {filteredAndSortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <ProductCard product={product} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </ScrollAnimation>

        {/* No Results */}
        {filteredAndSortedProducts.length === 0 && (
          <ScrollAnimation animation="scaleIn" delay={0.8}>
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="w-32 h-32 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full flex items-center justify-center mx-auto mb-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Search className="h-16 w-16 text-white" />
              </motion.div>
              <h3 className="text-3xl font-semibold text-white mb-4 glow-text">
                No products found
              </h3>
              <p className="text-white/60 mb-8 text-lg max-w-md mx-auto">
                Try adjusting your search criteria or browse our premium categories
              </p>
              <AnimatedButton
                variant="glow"
                size="lg"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setPriceRange([0, 2000]);
                }}
              >
                <Crown className="mr-2 h-5 w-5" />
                Clear Filters
              </AnimatedButton>
            </motion.div>
          </ScrollAnimation>
        )}

        {/* Load More Button */}
        {filteredAndSortedProducts.length > 0 && (
          <ScrollAnimation animation="slideUp" delay={1}>
            <div className="text-center mt-16">
              <AnimatedButton
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Load More Products
              </AnimatedButton>
            </div>
          </ScrollAnimation>
        )}
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Products;