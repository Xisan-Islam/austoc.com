import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Truck, Shield, Award, RefreshCw, Star, TrendingUp, Users, Package, Heart, Zap, Play, Sparkles, Crown, Gem, Diamond } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ProductCard from '../components/UI/ProductCard';
import AnimatedButton from '../components/UI/AnimatedButton';
import AnimatedCounter from '../components/UI/AnimatedCounter';
import FloatingElements from '../components/3D/FloatingElements';
import LoadingScreen from '../components/UI/LoadingScreen';
import ScrollAnimation from '../components/UI/ScrollAnimations';
import NeumorphicCard from '../components/UI/NeumorphicCard';
import InteractiveCard from '../components/UI/InteractiveCard';
import Modal from '../components/UI/Modal';
import Carousel from '../components/UI/Carousel';
import TabsComponent from '../components/UI/TabsComponent';
import Accordion from '../components/UI/Accordion';
import { products } from '../data/products';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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
      description: 'White-glove delivery service with real-time tracking and premium packaging',
      color: 'from-accent-purple to-accent-blue',
      details: 'Experience luxury from the moment you order. Our premium delivery service includes white-glove handling, premium packaging, and real-time tracking.',
    },
    {
      icon: Shield,
      title: 'Luxury Guarantee',
      description: 'Authenticated luxury products with lifetime warranty coverage',
      color: 'from-accent-blue to-accent-cyan',
      details: 'Every product is authenticated by our luxury experts and comes with comprehensive warranty coverage for your peace of mind.',
    },
    {
      icon: RefreshCw,
      title: 'Concierge Returns',
      description: '60-day luxury return policy with personal concierge assistance',
      color: 'from-accent-cyan to-accent-pink',
      details: 'Our dedicated concierge team handles all returns personally, ensuring a seamless experience with our 60-day return policy.',
    },
    {
      icon: Award,
      title: 'Exclusive Access',
      description: 'Limited edition collections and VIP member benefits',
      color: 'from-accent-pink to-accent-gold',
      details: 'Gain access to exclusive collections, limited editions, and VIP events reserved for our most valued members.',
    },
  ];

  const stats = [
    { number: 50000, label: 'Elite Members', icon: <Users className="h-8 w-8 text-white" /> },
    { number: 2500, label: 'Luxury Products', icon: <Package className="h-8 w-8 text-white" /> },
    { number: 4.9, label: 'Satisfaction Score', suffix: '/5', icon: <Star className="h-8 w-8 text-white" /> },
    { number: 24, label: 'Concierge Support', suffix: '/7', icon: <Zap className="h-8 w-8 text-white" /> },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fashion Designer',
      content: 'Austoc has redefined luxury shopping for me. The quality and service are unmatched.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Tech Executive',
      content: 'The attention to detail and premium experience make every purchase feel special.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Interior Designer',
      content: 'From packaging to delivery, everything screams luxury. Absolutely love it!',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const carouselSlides = [
    <div key="slide1" className="relative h-96 bg-gradient-to-r from-accent-purple to-accent-blue rounded-3xl flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      <div className="text-center text-white relative z-10">
        <motion.h3 
          className="text-4xl font-bold mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Luxury Collection 2024
        </motion.h3>
        <motion.p 
          className="text-xl opacity-90"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Discover the finest curated pieces
        </motion.p>
      </div>
    </div>,
    <div key="slide2" className="relative h-96 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-3xl flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      <div className="text-center text-white relative z-10">
        <motion.h3 
          className="text-4xl font-bold mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Exclusive Designs
        </motion.h3>
        <motion.p 
          className="text-xl opacity-90"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Limited edition masterpieces
        </motion.p>
      </div>
    </div>,
    <div key="slide3" className="relative h-96 bg-gradient-to-r from-accent-cyan to-accent-pink rounded-3xl flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      <div className="text-center text-white relative z-10">
        <motion.h3 
          className="text-4xl font-bold mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Premium Quality
        </motion.h3>
        <motion.p 
          className="text-xl opacity-90"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Uncompromising excellence
        </motion.p>
      </div>
    </div>,
  ];

  const tabs = [
    {
      id: 'featured',
      label: 'Featured',
      icon: <Sparkles className="h-4 w-4" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.slice(0, 3).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ),
    },
    {
      id: 'trending',
      label: 'Trending',
      icon: <TrendingUp className="h-4 w-4" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ),
    },
    {
      id: 'exclusive',
      label: 'Exclusive',
      icon: <Crown className="h-4 w-4" />,
      content: (
        <div className="text-center py-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-24 h-24 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Crown className="h-12 w-12 text-white" />
          </motion.div>
          <h3 className="text-3xl font-bold text-white mb-4">Exclusive Collections</h3>
          <p className="text-white/70 mb-8 text-lg">Access our most exclusive luxury items</p>
          <AnimatedButton variant="glow" size="lg">
            <Crown className="mr-2 h-5 w-5" />
            Explore Exclusive Items
          </AnimatedButton>
        </div>
      ),
    },
  ];

  const faqItems = [
    {
      id: 'shipping',
      title: 'What is included in premium delivery?',
      icon: <Truck className="h-5 w-5" />,
      content: (
        <div>
          <p className="mb-4">Our premium delivery service includes:</p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li>White-glove handling and delivery</li>
            <li>Premium luxury packaging</li>
            <li>Real-time tracking and updates</li>
            <li>Flexible delivery scheduling</li>
            <li>Signature required delivery</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'authenticity',
      title: 'How do you ensure product authenticity?',
      icon: <Shield className="h-5 w-5" />,
      content: (
        <p>Every product undergoes rigorous authentication by our team of luxury experts. We use advanced verification techniques and maintain partnerships with authorized dealers to guarantee authenticity.</p>
      ),
    },
    {
      id: 'returns',
      title: 'What is your return policy?',
      icon: <RefreshCw className="h-5 w-5" />,
      content: (
        <p>We offer a 60-day luxury return policy with personal concierge assistance. Our team will handle the entire return process, including pickup and processing, to ensure a seamless experience.</p>
      ),
    },
    {
      id: 'membership',
      title: 'What are the benefits of membership?',
      icon: <Award className="h-5 w-5" />,
      content: (
        <div>
          <p className="mb-4">Elite members enjoy exclusive benefits:</p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li>Early access to new collections</li>
            <li>Exclusive member-only products</li>
            <li>Priority customer support</li>
            <li>Special member pricing</li>
            <li>VIP event invitations</li>
          </ul>
        </div>
      ),
    },
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
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollAnimation animation="slideRight" duration={1}>
                <div className="space-y-8">
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={heroInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="inline-flex items-center space-x-2 px-6 py-3 glass-effect rounded-full border border-white/20"
                    >
                      <Sparkles className="h-4 w-4 text-accent-purple" />
                      <span className="text-white/80 text-sm font-medium">Luxury Redefined</span>
                      <Crown className="h-4 w-4 text-accent-gold" />
                    </motion.div>
                    
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={heroInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="text-5xl sm:text-6xl lg:text-8xl font-bold font-display text-white leading-tight"
                    >
                      Discover
                      <br />
                      <span className="bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan bg-clip-text text-transparent glow-text relative">
                        Luxury
                        <motion.div
                          className="absolute -top-4 -right-4"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Diamond className="h-8 w-8 text-accent-gold" />
                        </motion.div>
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
                      Experience the pinnacle of sophistication with our curated collection of premium products. Where exclusivity meets innovation in perfect harmony.
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6"
                  >
                    <Link to="/products">
                      <AnimatedButton 
                        size="lg" 
                        variant="glow"
                        className="group text-lg px-8 py-4"
                        glowColor="rgba(139, 92, 246, 0.6)"
                      >
                        <Gem className="mr-2 h-5 w-5" />
                        Explore Collection
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </AnimatedButton>
                    </Link>
                    <AnimatedButton 
                      variant="outline" 
                      size="lg" 
                      onClick={() => setShowVideoModal(true)}
                      className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch Story
                    </AnimatedButton>
                  </motion.div>

                  <ScrollAnimation animation="fadeIn" delay={1}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-white/60">
                      <div className="flex items-center space-x-3">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map((i) => (
                            <motion.div 
                              key={i} 
                              className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue border-2 border-white/20"
                              whileHover={{ scale: 1.2, zIndex: 10 }}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 1.2 + i * 0.1 }}
                            />
                          ))}
                        </div>
                        <span className="font-medium">50K+ Elite Members</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="font-medium">4.9/5 Luxury Rating</span>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" duration={1} delay={0.4}>
                <div className="relative">
                  <InteractiveCard animation="morph" trigger="hover">
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
                      <InteractiveCard 
                        animation="slide" 
                        trigger="auto" 
                        delay={1}
                        className="absolute top-10 -left-10 hidden lg:block"
                      >
                        <NeumorphicCard size="sm" className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-accent-purple to-accent-blue rounded-xl flex items-center justify-center">
                              <Truck className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-white text-sm">Premium Delivery</p>
                              <p className="text-xs text-white/60">White-glove service</p>
                            </div>
                          </div>
                        </NeumorphicCard>
                      </InteractiveCard>

                      <InteractiveCard 
                        animation="slide" 
                        trigger="auto" 
                        delay={2}
                        className="absolute bottom-10 -right-10 hidden lg:block"
                      >
                        <NeumorphicCard size="sm" className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-pink rounded-xl flex items-center justify-center">
                              <Crown className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-white text-sm">Exclusive Access</p>
                              <p className="text-xs text-white/60">Limited editions</p>
                            </div>
                          </div>
                        </NeumorphicCard>
                      </InteractiveCard>
                    </div>
                  </InteractiveCard>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slideUp" duration={1}>
              <div className="text-center mb-20">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center space-x-2 mb-6"
                >
                  <Gem className="h-8 w-8 text-accent-purple" />
                  <span className="text-accent-purple font-semibold text-lg">Premium Experience</span>
                  <Gem className="h-8 w-8 text-accent-blue" />
                </motion.div>
                <h2 className="text-4xl lg:text-6xl font-bold font-display text-white mb-6 glow-text">
                  The Austoc Experience
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                  Immerse yourself in a world where luxury meets innovation, crafted for the most discerning tastes.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <ScrollAnimation
                    key={feature.title}
                    animation="slideUp"
                    delay={index * 0.2}
                    duration={0.8}
                  >
                    <InteractiveCard 
                      animation="scale" 
                      trigger="hover"
                      className="h-full"
                    >
                      <NeumorphicCard className="h-full p-8 text-center group hover:bg-white/5 transition-all duration-500">
                        <motion.div 
                          className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="h-10 w-10 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-accent-purple transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed mb-4">
                          {feature.description}
                        </p>
                        <motion.div
                          className="w-12 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ width: 0 }}
                          whileHover={{ width: 48 }}
                        />
                      </NeumorphicCard>
                    </InteractiveCard>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slideUp" duration={1}>
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-6xl font-bold font-display text-white mb-6 glow-text">
                  Featured Collections
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                  Explore our rotating showcase of premium collections and exclusive designs.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scaleIn" delay={0.3}>
              <Carousel
                autoPlay
                autoPlayInterval={4000}
                className="h-96"
              >
                {carouselSlides}
              </Carousel>
            </ScrollAnimation>
          </div>
        </section>

        {/* Tabbed Products Section */}
        <section ref={productsRef} className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slideUp" duration={1}>
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-6xl font-bold font-display text-white mb-6 glow-text">
                  Curated Excellence
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                  Handpicked luxury products that embody sophistication, quality, and timeless elegance.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.3}>
              <TabsComponent
                tabs={tabs}
                variant="pills"
                className="glass-effect rounded-3xl p-8 border border-white/20"
              />
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.6}>
              <div className="text-center mt-16">
                <Link to="/products">
                  <AnimatedButton 
                    size="lg" 
                    variant="outline" 
                    className="group border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
                  >
                    <Package className="mr-2 h-5 w-5" />
                    Explore Full Collection
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </AnimatedButton>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-accent-blue/10 to-accent-cyan/10" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollAnimation animation="slideUp" duration={1}>
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-6xl font-bold font-display text-white mb-6 glow-text">
                  What Our Elite Say
                </h2>
                <p className="text-xl text-white/70">
                  Testimonials from our distinguished clientele
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scaleIn" delay={0.3}>
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="glass-effect rounded-3xl p-12 border border-white/20 text-center"
                  >
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-2xl text-white/90 mb-8 italic leading-relaxed">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].name}
                        className="w-16 h-16 rounded-full border-2 border-white/20"
                      />
                      <div className="text-left">
                        <p className="text-white font-semibold text-lg">
                          {testimonials[currentTestimonial].name}
                        </p>
                        <p className="text-white/60">
                          {testimonials[currentTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Testimonial Indicators */}
                <div className="flex justify-center space-x-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-accent-purple shadow-lg'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 via-accent-blue/20 to-accent-cyan/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollAnimation animation="slideUp" duration={1}>
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-6xl font-bold font-display text-white mb-6 glow-text">
                  Luxury by Numbers
                </h2>
                <p className="text-xl text-white/70">
                  Our commitment to excellence, measured
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollAnimation
                  key={stat.label}
                  animation="scaleIn"
                  delay={index * 0.2}
                >
                  <NeumorphicCard className="text-center hover:bg-white/5 transition-all duration-500">
                    <AnimatedCounter
                      end={stat.number}
                      label={stat.label}
                      suffix={stat.suffix}
                      icon={stat.icon}
                    />
                  </NeumorphicCard>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slideUp" duration={1}>
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-6xl font-bold font-display text-white mb-6 glow-text">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                  Everything you need to know about our luxury experience.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.3}>
              <Accordion
                items={faqItems}
                variant="bordered"
                iconType="plus"
                allowMultiple
              />
            </ScrollAnimation>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/30 via-accent-blue/30 to-accent-cyan/30" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <ScrollAnimation animation="scaleIn" duration={1}>
              <motion.div
                className="glass-effect rounded-3xl p-16 border border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-24 h-24 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full flex items-center justify-center mx-auto mb-8"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Crown className="h-12 w-12 text-white" />
                </motion.div>
                <h2 className="text-4xl lg:text-5xl font-bold font-display text-white mb-6 glow-text">
                  Join the Elite
                </h2>
                <p className="text-xl text-white/70 mb-8 leading-relaxed">
                  Become part of our exclusive community and experience luxury like never before.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/auth">
                    <AnimatedButton 
                      size="lg" 
                      variant="glow"
                      className="text-lg px-8 py-4"
                    >
                      <Crown className="mr-2 h-5 w-5" />
                      Become a Member
                    </AnimatedButton>
                  </Link>
                  <Link to="/products">
                    <AnimatedButton 
                      variant="outline" 
                      size="lg" 
                      className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
                    >
                      <Gem className="mr-2 h-5 w-5" />
                      Browse Collection
                    </AnimatedButton>
                  </Link>
                </div>
              </motion.div>
            </ScrollAnimation>
          </div>
        </section>
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        title="Our Luxury Story"
        size="xl"
      >
        <div className="aspect-video bg-gradient-to-r from-accent-purple to-accent-blue rounded-2xl flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-30"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <div className="text-center text-white relative z-10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Play className="h-20 w-20 mx-auto mb-6 opacity-80" />
            </motion.div>
            <p className="text-2xl font-semibold mb-2">The Austoc Experience</p>
            <p className="text-white/70 text-lg">Discover our journey of luxury and excellence</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Home;