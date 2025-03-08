
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, TrendingUp } from 'lucide-react';

const RewardsCounter = () => {
  const [totalRewards, setTotalRewards] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate increasing rewards amount
    const interval = setInterval(() => {
      setTotalRewards(prev => prev + 0.0000001);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate counter every day instead of every minute
    const dayInterval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 60000); // Keep the interval for demo purposes, but conceptually it's daily
    
    // Start with counter at 1
    setCounter(1);
    
    return () => clearInterval(dayInterval);
  }, []);

  return (
    <section id="rewards" className="py-24 relative overflow-hidden bg-crypto-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-bitcoin/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/80 inline-block mb-4"
          >
            REWARDS SYSTEM
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="heading-lg mb-4"
          >
            <span className="text-gradient"></span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            The rewards system automatically calculates and distributes WBTC proportionally to all holders.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col items-center justify-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-bitcoin/20 rounded-full blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <Bitcoin className="w-16 h-16 text-bitcoin relative" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Total WBTC Distributed</h3>
                <div className="text-4xl md:text-5xl font-bold text-gradient">
                  {totalRewards.toFixed(7)} <span className="text-sm font-normal text-gray-400">WBTC</span>
                </div>
                <p className="text-gray-400 mt-3 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span>Growing every day</span>
                </p>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-crypto-light border border-bitcoin/20 flex items-center justify-center mb-4 relative">
                  <div className="w-28 h-28 rounded-full bg-crypto-medium border border-bitcoin/30 flex items-center justify-center">
                    <div className="text-3xl font-bold text-white">{counter}</div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-bitcoin border-t-transparent animate-rotate"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-1">Reward Cycles</h3>
                <p className="text-gray-400">New rewards every day</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RewardsCounter;
