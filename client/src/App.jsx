import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import AnimatedBackground from './components/ui/AnimatedBackground';
import Sidebar from './components/layout/Sidebar';
import BottomTabBar from './components/layout/BottomTabBar';
import TopHeader from './components/layout/TopHeader';
import PageLayout from './components/layout/PageLayout';

import Dashboard from './pages/Dashboard';
import About from './pages/About';
import ManageFarm from './pages/ManageFarm';
import HealthMedicine from './pages/HealthMedicine';
import Donate from './pages/Donate';

const PageWrapper = ({ children, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full h-full pb-24 lg:pb-8"
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-deep-void">
      <AnimatedBackground />
      
      {/* Navigation */}
      <Sidebar />
      <BottomTabBar />
      
      <PageLayout>
        <TopHeader />
        
        <main className="w-full flex-grow relative z-10 px-4 lg:px-8 py-6">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Dashboard /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/manage" element={<PageWrapper><ManageFarm /></PageWrapper>} />
              <Route path="/health" element={<PageWrapper><HealthMedicine /></PageWrapper>} />
              <Route path="/donate" element={<PageWrapper><Donate /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
      </PageLayout>
    </div>
  );
};

export default App;
