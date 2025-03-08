
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import RewardsCounter from '../components/RewardsCounter';
import RoadMapSection from '../components/RoadMapSection';
import CommunitySection from '../components/CommunitySection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

const Index = () => {
  // Effect to handle fade-in sections based on scroll position
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(element => observer.observe(element));

    return () => {
      fadeElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-crypto-dark text-white overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <main>
            <HeroSection />
            <FeatureSection />
            <RewardsCounter />
            <RoadMapSection />
            <CommunitySection />
            <FaqSection />
          </main>
          <Footer />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Index;
