
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Lightbulb, Book, Video, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BitcoinBasics from '../components/BitcoinBasics';
import CryptoBestPractices from '../components/CryptoBestPractices';
import EducationResourceCard from '../components/EducationResourceCard';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const educationResources = [
  {
    icon: <Book className="h-10 w-10 text-bitcoin" />,
    title: 'Bitcoin Basics',
    description: 'Learn the fundamental concepts behind Bitcoin and blockchain technology.',
    link: '#bitcoin-basics',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-bitcoin" />,
    title: 'Crypto Best Practices',
    description: 'Learn essential security and usage guidelines for cryptocurrency.',
    link: '#crypto-best-practices',
  },
  {
    icon: <Code className="h-10 w-10 text-bitcoin" />,
    title: 'Blockchain & Smart Contracts',
    description: 'Explore the technology behind cryptocurrencies and decentralized applications.',
    link: '#',
  },
  {
    icon: <Video className="h-10 w-10 text-bitcoin" />,
    title: 'Video Tutorials',
    description: 'Watch step-by-step guides on wallet setup, security, and trading.',
    link: '#',
  },
];

const Education = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-crypto-dark text-white overflow-x-hidden">
      <Header />
      <main>
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="heading-lg mb-4">
                  Crypto <span className="text-bitcoin">Education</span>
                </h1>
                <p className="text-gray-400 text-lg">
                  Empowering our community with knowledge and resources to navigate the world of cryptocurrency confidently.
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {educationResources.map((resource, index) => (
                <EducationResourceCard 
                  key={index}
                  icon={resource.icon}
                  title={resource.title}
                  description={resource.description}
                  link={resource.link}
                />
              ))}
            </motion.div>

            {/* Bitcoin Basics Section */}
            <motion.div
              id="bitcoin-basics"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-24 max-w-4xl mx-auto"
            >
              <BitcoinBasics />
            </motion.div>

            {/* Crypto Best Practices Section */}
            <motion.div
              id="crypto-best-practices"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-24 max-w-4xl mx-auto"
            >
              <CryptoBestPractices />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <div className="glass-card max-w-3xl mx-auto p-8">
                <div className="flex justify-center mb-6">
                  <GraduationCap className="h-12 w-12 text-bitcoin" />
                </div>
                <h3 className="text-xl font-bold mb-4">Ready to become a crypto expert?</h3>
                <p className="text-gray-400 mb-6">
                  Join our weekly webinars and interactive learning sessions to deepen your understanding of blockchain technology and cryptocurrency investing.
                </p>
                <Button className="btn-primary">
                  Join Education Program
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
