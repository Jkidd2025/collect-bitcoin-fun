
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import { Bitcoin, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-crypto-dark flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(247,147,26,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <Bitcoin className="h-20 w-20 text-bitcoin animate-float" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl font-bold mb-4 text-gradient"
        >
          404
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-300 mb-8"
        >
          Oops! This page has wandered off the blockchain.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild className="btn-primary">
            <a href="/" className="inline-flex items-center gap-2">
              <Home className="h-5 w-5" /> Return to Home
            </a>
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12"
        >
          <p className="text-amber-500 font-bold py-3 px-6 bg-amber-500/10 rounded-lg inline-block uppercase tracking-wider border border-amber-500/20">
            CRYPTO EXPERIMENT: NO GUARANTEES, HIGH RISK
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
