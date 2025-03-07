
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Lightbulb, Book, Brain, Video, Bitcoin, Globe, Lock, ChartBar, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    link: '#bitcoin-basics',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-bitcoin" />,
    title: 'Crypto Investing',
    description: 'Understand strategies for responsible investing in cryptocurrency markets.',
    link: '#',
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

const bitcoinBasicsContent = [
  {
    icon: <Bitcoin className="h-8 w-8 text-bitcoin" />,
    title: "What is Bitcoin?",
    content: "Bitcoin is a decentralized digital currency introduced in 2009 by the pseudonymous creator, Satoshi Nakamoto. It was designed as a peer-to-peer payment system that operates without the need for a central authority."
  },
  {
    icon: <Book className="h-8 w-8 text-bitcoin" />,
    title: "History",
    content: "Bitcoin emerged from a 2008 whitepaper, addressing the need for a secure, digital means of transferring value without intermediaries. Since its inception, it has grown from a niche project to a globally recognized digital asset."
  },
  {
    icon: <Code className="h-8 w-8 text-bitcoin" />,
    title: "Technology",
    content: "At its core, Bitcoin uses blockchain technology—a distributed, immutable ledger that records every transaction. The network relies on a proof-of-work consensus mechanism, where miners validate transactions and secure the network in exchange for new bitcoins."
  },
  {
    icon: <ChartBar className="h-8 w-8 text-bitcoin" />,
    title: "Utility",
    content: "Initially conceived as an alternative to traditional currencies, Bitcoin now functions as both a medium of exchange and a store of value. Its decentralized nature allows for borderless transactions and has positioned it as \"digital gold\" among investors, despite its price volatility."
  },
  {
    icon: <Globe className="h-8 w-8 text-bitcoin" />,
    title: "Current State in Society",
    content: "Today, Bitcoin is widely traded on global exchanges and accepted by numerous businesses. It continues to attract both retail and institutional investors, even as it faces regulatory scrutiny and debates over its environmental impact due to energy-intensive mining practices. Its evolution has also spurred broader innovations in the cryptocurrency and blockchain sectors."
  }
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
                      <Button 
                        variant="outline" 
                        className="border-bitcoin hover:bg-bitcoin hover:text-white transition-colors"
                        onClick={() => {
                          if (resource.link.startsWith('#')) {
                            const element = document.querySelector(resource.link);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }}
                      >
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
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
              <div className="glass-card p-8 rounded-lg border-none">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Bitcoin className="h-12 w-12 text-bitcoin" />
                  <h2 className="text-3xl font-bold">Bitcoin Basics</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                  {bitcoinBasicsContent.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                      <AccordionTrigger className="text-lg font-medium hover:text-bitcoin py-4">
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <span>{item.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 py-4 px-4 bg-white/5 rounded-md">
                        <p className="leading-relaxed">{item.content}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-8 text-center">
                  <p className="text-gray-400 mb-6">
                    Want to learn more about Bitcoin and cryptocurrency?
                  </p>
                  <Button className="bg-bitcoin hover:bg-bitcoin/80 text-white">
                    Download Bitcoin Whitepaper
                  </Button>
                </div>
              </div>
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
