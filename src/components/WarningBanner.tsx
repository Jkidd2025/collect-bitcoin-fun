
import React from 'react';
import { motion } from 'framer-motion';

interface WarningBannerProps {
  className?: string;
}

const WarningBanner = ({ className = '' }: WarningBannerProps) => {
  return (
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`text-amber-500 font-bold py-3 px-6 bg-amber-500/10 rounded-lg inline-block uppercase tracking-wider border border-amber-500/20 ${className}`}
    >
      CRYPTO EXPERIMENT: NO GUARANTEES, HIGH RISK
    </motion.p>
  );
};

export default WarningBanner;
