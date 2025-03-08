
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Wallet, Lock, Trophy } from 'lucide-react';
import { Card } from '@/components/ui/card';
import FlowChartProcess from './FlowChartProcess';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <Card className="glass-card p-6 h-full">
      <div className="bg-bitcoin/10 p-3 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  </motion.div>
);

const FeatureSection = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-bitcoin" />,
      title: "Rewards",
      description: "Our smart contract automates the rewards process by converting SOL into $CBTC. Once the conversion occurs, holders are rewarded for interacting with the smart contract by receiving WBTC."
    },
    {
      icon: <Wallet className="w-6 h-6 text-bitcoin" />,
      title: "No Staking Required",
      description: "Keep your tokens in your own wallet. No need to lock them up or use complicated staking platforms."
    },
    {
      icon: <Lock className="w-6 h-6 text-bitcoin" />,
      title: "Loyalty Based Rewards Allocation",
      description: "As a loyal $CBTC holder, our smart contract may distribute WBTC rewards based on market conditions"
    },
    {
      icon: <Trophy className="w-6 h-6 text-bitcoin" />,
      title: "SPL Rewards Smart Contract",
      description: "No additional steps are required to be rewarded with WBTC."
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden bg-crypto-medium">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(247,147,26,0.15),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/80 inline-block mb-4"
          >
            FEATURES
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="heading-lg mb-4"
          >
            Why <span className="text-gradient">Collect Bitcoin Smart Contract</span>?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            $CBTC simplifies crypto rewards with innovative token mechanics that benefit all holders.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 max-w-5xl mx-auto"
        >
          <h4 className="text-xl font-semibold mb-6 text-center">How It Works</h4>
          <FlowChartProcess />
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
