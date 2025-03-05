
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Bitcoin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen w-full relative overflow-hidden pt-20 grid-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-crypto-dark/80 via-crypto-dark to-crypto-dark pointer-events-none"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-16 h-16 bg-bitcoin/10 rounded-full blur-xl"
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-bitcoin/20 rounded-full blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <Bitcoin className="w-16 h-16 md:w-24 md:h-24 text-bitcoin animate-float relative z-10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-6"
        >
          <span className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/80 inline-block mb-4">
            $CBTC
          </span>
          <h1 className="heading-xl mb-4 max-w-4xl mx-auto">
            <span className="text-gradient">Collect Bitcoin</span>
            <br /> Earn WBTC Every Minute
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            The first memecoin on Solana that rewards holders with WBTC just for holding. No staking, no complications - pure passive income.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Button className="btn-primary">
            Buy $CBTC
          </Button>
          <Button variant="outline" className="btn-secondary">
            Read Whitepaper
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToFeatures}
        >
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
