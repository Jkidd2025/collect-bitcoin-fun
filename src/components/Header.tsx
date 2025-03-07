
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Bitcoin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-crypto-dark/90 backdrop-blur-lg shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link to="/" className="flex items-center gap-2">
            <Bitcoin className="h-8 w-8 text-bitcoin" />
            <span className="text-xl font-bold tracking-tight">Collect<span className="text-bitcoin">Bitcoin</span></span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          {['Features', 'Rewards', 'Community', 'FAQ'].map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              href={`/#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button className="btn-primary">
              Buy $CBTC
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-crypto-dark/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
            <Link 
              to="/"
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            {['Features', 'Rewards', 'Community', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="btn-primary w-full">
              Buy $CBTC
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
