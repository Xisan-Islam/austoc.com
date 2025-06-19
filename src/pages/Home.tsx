import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Truck, Shield, Award, RefreshCw, Star, TrendingUp, Users, Package, Heart, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ProductCard from '../components/UI/ProductCard';
import Button from '../components/UI/Button';
import AnimatedCounter from '../components/UI/AnimatedCounter';
import FloatingElements from '../components/3D/FloatingElements';
import LoadingScreen from '../components/UI/LoadingScreen';
import { products } from '../data/products';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const featuredProducts = products.filter(product => product.featured);
  
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Truck,
      title: 'Premium Delivery',
      description: 'White-glove delivery service',
      color: 'from-accent-purple to-accent-blue',
    },
    {
      icon: Shield,
      title: 'Luxury Guarantee',
      description: 'Authenticated luxury products',
      color: 'from-accent-blue to-accent-cyan',
    },
    {
      icon: RefreshCw,
      title: 'Concierge Returns',
      description: '60-day luxury return policy',
      color: 'from-accent-cyan to-accent-pink',
    },
    {
      icon: Award,
      title: 'Exclusive Access',
      description: 'Limited edition collections',
      color: 'from-accent-pink to-accent-gold',
    },
  ];

  const stats = [
    { number: 50000, label: 'Elite Members', icon: <Users className="h-8 w-8 text-white" /> },
    { number: 2500, label: 'Luxury Products', icon: <Package className="h-8 w-8 text-white" /> },
    { number: 4.9, label: 'Satisfaction Score', suffix: '/5', icon: <Star className="h-8 w-8 text-white" /> },
    { number: 24, label: 'Concierge Support', suffix: '/7', icon: <Zap className="h-8 w-8 text-white" /> },
  ];

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className="min-h-screen relative overflow-hidden">
        <FloatingElements />
        
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="space-y-8 z-10 relative"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="inline-block px-4 py-2 glass-effect rounded-full border border-white/20"
                  >
                    <span className="text-white/80 text-sm font-medium">✨ Luxury Redefined</span>
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-6xl lg:text-8xl font-bold font-display text-white leading-tight"
                  >
                    Discover
                    <br />
                    <span className="bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan bg-clip-text text-transparent glow-text">
                      Luxury
                    </span>
                    <br />
                    Redefined
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-xl lg:text-2xl text-white/70 max-w-2xl leading-relaxed font-light"
                  >
                    Experience the pinnacle of sophistication with our curated collection of premium products. Where exclusivity meets innovation.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <Link to="/products">
                    <Button size="lg" className="group bg-gradient-to-r from-accent-purple to-accent-blue hover:shadow-2xl hover:shadow-accent-purple/25 transition-all duration-500">
                      Explore Collection
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    Watch Story
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 1 }}
                  className="flex items-center space-x-8 text-sm text-white/60"
                >
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue border-2 border-white/20" />
                      ))}
                    </div>
                    <span>50K+ Elite Members</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span>4.9/5 Luxury Rating</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative z-10"
              >
                <div className="relative">
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      rotateY: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative z-10"
                  >
                    <img
                      src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Luxury Product"
                      className="w-full h-auto rounded-3xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
                  </motion.div>
                  
                  {/* Floating Cards */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute top-10 -left-10 glass-effect p-6 rounded-2xl border border-white/20 shadow-2xl"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-accent-purple to-accent-blue rounded-xl flex items-center justify-center">
                        <Truck className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Premium Delivery</p>
                        <p className="text-sm text-white/60">White-glove service</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-10 -right-10 glass-effect p-6 rounded-2xl border border-white/20 shadow-2xl"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-pink rounded-xl flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Exclusive Access</p>
                        <p className="text-sm text-white/60">Limited editions</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-6xl font-bold font-display text-white mb-6 glow-text">
                The Austoc Experience
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Immerse yourself in a world where luxury meets innovation, crafted for the most discerning tastes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="glass-effect p-8 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 h-full">
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 text-center">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 text-center leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section ref={productsRef} className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={productsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-6xl font-bold font-display text-white mb-6 glow-text">
                Curated Excellence
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Handpicked luxury products that embody sophistication, quality, and timeless elegance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={productsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-center"
            >
              <Link to="/products">
                <Button size="lg" variant="outline" className="group border-white/30 text-white hover:bg-white/10">
                  Explore Full Collection
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 via-accent-blue/20 to-accent-cyan/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-6xl font-bold font-display text-white mb-6 glow-text">
                Luxury by Numbers
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedCounter
                  key={stat.label}
                  end={stat.number}
                  label={stat.label}
                  suffix={stat.suffix}
                  icon={stat.icon}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;