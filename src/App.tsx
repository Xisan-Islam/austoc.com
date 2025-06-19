import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import LoadingScreen from './components/UI/LoadingScreen';
import Home from './pages/Home';
import Products from './pages/Products';
import Auth from './pages/Auth';

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 transition-all duration-500">
              <AnimatePresence>
                {isInitialLoading && <LoadingScreen />}
              </AnimatePresence>
              
              {!isInitialLoading && (
                <>
                  <Header />
                  <main className="relative z-10">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/auth" element={<Auth />} />
                      <Route path="/cart" element={
                        <div className="min-h-screen flex items-center justify-center pt-20">
                          <div className="text-center">
                            <h1 className="text-4xl font-bold text-white mb-4 glow-text">Luxury Cart</h1>
                            <p className="text-white/70 text-xl">Coming Soon - Your premium shopping experience</p>
                          </div>
                        </div>
                      } />
                      <Route path="/wishlist" element={
                        <div className="min-h-screen flex items-center justify-center pt-20">
                          <div className="text-center">
                            <h1 className="text-4xl font-bold text-white mb-4 glow-text">Wishlist</h1>
                            <p className="text-white/70 text-xl">Coming Soon - Save your luxury desires</p>
                          </div>
                        </div>
                      } />
                      <Route path="/product/:id" element={
                        <div className="min-h-screen flex items-center justify-center pt-20">
                          <div className="text-center">
                            <h1 className="text-4xl font-bold text-white mb-4 glow-text">Product Details</h1>
                            <p className="text-white/70 text-xl">Coming Soon - Immersive product experience</p>
                          </div>
                        </div>
                      } />
                    </Routes>
                  </main>
                  <Footer />
                </>
              )}
              
              <Toaster
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'white',
                  },
                }}
              />
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;