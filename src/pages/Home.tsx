import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Truck, Shield, Award, RefreshCw, Star, TrendingUp, Users, Package, Heart, Zap, Play, Sparkles } from 'lucide-react';
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

  const carouselSlides = [
    <div key="slide1" className="relative h-96 bg-gradient-to-r from-accent-purple to-accent-blue rounded-2xl flex items-center justify-center">
      <div className="text-center text-white">
        <h3 className="text-3xl font-bold mb-4">Luxury Collection 2024</h3>
        <p className="text-xl opacity-90">Discover the finest curated pieces</p>
      </div>
    </div>,
    <div key="slide2" className="relative h-96 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-2xl flex items-center justify-center">
      <div className="text-center text-white">
        <h3 className="text-3xl font-bold mb-4">Exclusive Designs</h3>
        <p className="text-xl opacity-90">Limited edition masterpieces</p>
      </div>
    </div>,
    <div key="slide3" className="relative h-96 bg-gradient-to-r from-accent-cyan to-accent-pink rounded-2xl flex items-center justify-center">
      <div className="text-center text-white">
        <h3 className="text-3xl font-bold mb-4">Premium Quality</h3>
        <p className="text-xl opacity-90">Uncompromising excellence</p>
      </div>
    </div>,
  ];

  const tabs = [
    {
      id: 'featured',
      label: 'Featured',
      icon: <Sparkles className="h-4 w-4" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ),
    },
    {
      id: 'exclusive',
      label: 'Exclusive',
      icon: <Award className="h-4 w-4" />,
      content: (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold text-white mb-4">Exclusive Collections</h3>
          <p className="text-white/70 mb-6">Access our most exclusive luxury items</p>
          <AnimatedButton variant="glow">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollAnimation animation="slideRight" duration={1}>
                <div className="space-y-8 z-10 relative">
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
                      <AnimatedButton 
                        size="lg" 
                        variant="glow"
                        className="group"
                        glowColor="rgba(139, 92, 246, 0.6)"
                      >
                        Explore Collection
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </AnimatedButton>
                    </Link>
                    <AnimatedButton 
                      variant="outline" 
                      size="lg" 
                      onClick={() => setShowVideoModal(true)}
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch Story
                    </AnimatedButton>
                  </motion.div>

                  <ScrollAnimation animation="fadeIn" delay={1}>
                    <div className="flex items-center space-x-8 text-sm text-white/60">
                      <div className="flex items-center space-x-2">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map((i) => (
                            <motion.div 
                              key={i} 
                              className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue border-2 border-white/20"
                              whileHover={{ scale: 1.2, zIndex: 10 }}
                            />
                          ))}
                        </div>
                        <span>50K+ Elite Members</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span>4.9/5 Luxury Rating</span>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" duration={1} delay={0.4}>
                <div className="relative z-10">
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
                        className="absolute top-10 -left-10"
                      >
                        <NeumorphicCard size="sm" className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-accent-purple to-accent-blue rounded-xl flex items-center justify-center">
                              <Truck className="h-5 w-5 text-white" />
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
                        className="absolute bottom-10 -right-10"
                      >
                        <NeumorphicCard size="sm" className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-accent-cyan to-accent-pink rounded-xl flex items-center justify-center">
                              <Award className="h-5 w-5 text-white" />
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
                      backContent={
                        <NeumorphicCard className="h-full p-6 text-center">
                          <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-white/70 text-sm leading-relaxed">
                            {feature.details}
                          </p>
                        </NeumorphicCard>
                      }
                    >
                      <NeumorphicCard className="h-full p-8 text-center group">
                        <motion.div 
                          className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {feature.description}
                        </p>
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
                    className="group border-white/30 text-white hover:bg-white/10"
                  >
                    Explore Full Collection
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </AnimatedButton>
                </Link>
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
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollAnimation
                  key={stat.label}
                  animation="scaleIn"
                  delay={index * 0.2}
                >
                  <NeumorphicCard className="text-center">
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
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        title="Our Story"
        size="xl"
      >
        <div className="aspect-video bg-gradient-to-r from-accent-purple to-accent-blue rounded-2xl flex items-center justify-center">
          <div className="text-center text-white">
            <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
            <p className="text-xl">Video content would be embedded here</p>
            <p className="text-white/70 mt-2">Experience the Austoc luxury story</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Home;