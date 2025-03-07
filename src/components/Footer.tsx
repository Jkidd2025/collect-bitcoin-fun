import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bitcoin, X, BarChart3, MessageCircle, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-crypto-dark relative overflow-hidden pt-16 pb-8">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6 md:mb-0"
          >
            <Bitcoin className="h-8 w-8 text-bitcoin" />
            <span className="text-xl font-bold tracking-tight">Collect<span className="text-bitcoin">Bitcoin</span></span>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-400 mb-4">
              Collect Bitcoin ($CBTC) is the first memecoin on Solana that rewards holders with WBTC.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <X className="h-5 w-5 text-white" />
              </a>
              <a href="https://t.me/" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <BarChart3 className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {['Home', 'Features', 'Rewards', 'Roadmap', 'Community', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-bitcoin transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Important</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#roadmap" className="hover:text-bitcoin transition-colors">Road Map</a></li>
              <li><a href="#" className="hover:text-bitcoin transition-colors">Tokenomics</a></li>
              <li><a href="#" className="hover:text-bitcoin transition-colors">Contract Address</a></li>
              <li><Link to="/privacy-policy" className="hover:text-bitcoin transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-bitcoin transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Collect Bitcoin. All rights reserved.</p>
          <p className="mt-2 md:mt-0">$CBTC is not affiliated with Bitcoin or any specific entity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
