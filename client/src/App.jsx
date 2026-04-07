import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layouts
import DashboardLayout from './components/layout/DashboardLayout';
import StorefrontLayout from './components/layout/StorefrontLayout';

// Storefront Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';

// Dashboard Pages
import Dashboard from './pages/Dashboard';
import ManageFarm from './pages/ManageFarm';
import HealthMedicine from './pages/HealthMedicine';
import Donate from './pages/Donate';

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full relative bg-texture font-inter text-charcoal">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          
          {/* Storefront Routes */}
          <Route element={<StorefrontLayout />}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/shop" element={<PageWrapper><Shop /></PageWrapper>} />
            <Route path="/cart" element={<PageWrapper><Cart /></PageWrapper>} />
            <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          </Route>

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<PageWrapper><Dashboard /></PageWrapper>} />
            <Route path="manage" element={<PageWrapper><ManageFarm /></PageWrapper>} />
            <Route path="health" element={<PageWrapper><HealthMedicine /></PageWrapper>} />
            <Route path="donate" element={<PageWrapper><Donate /></PageWrapper>} />
          </Route>

        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
