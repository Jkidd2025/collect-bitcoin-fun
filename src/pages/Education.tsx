
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Lightbulb, Book, Brain, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const educationResources = [
  {
    icon: <Book className="h-10 w-10 text-bitcoin" />,
    title: 'Bitcoin Basics',
    description: 'Learn the fundamental concepts behind Bitcoin and blockchain technology.',
    link: '#',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-bitcoin" />,
    title: 'Crypto Investing',
    description: 'Understand strategies for responsible investing in cryptocurrency markets.',
    link: '#',
  },
  {
    icon: <Brain className="h-10 w-10 text-bitcoin" />,
    title: 'Technical Analysis',
    description: 'Master chart patterns and indicators for better trading decisions.',
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
                <motion.div key={index} variants={itemVariants}>
                  <Card className="glass-card h-full border-none">
                    <CardHeader className="text-center pt-8">
                      <div className="mx-auto mb-4">
                        {resource.icon}
                      </div>
                      <CardTitle className="text-xl font-bold">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-400 text-center">
                        {resource.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-center pb-8">
                      <Button variant="outline" className="border-bitcoin hover:bg-bitcoin hover:text-white transition-colors">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
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
