
import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Coins, ArrowRight, Download, Circle } from 'lucide-react';

const FlowChartProcess = () => {
  const steps = [
    {
      icon: <Wallet className="w-12 h-12 text-bitcoin" />,
      title: "01. Solana Defi Wallet",
      description: "Solana Defi Wallet"
    },
    {
      icon: <Circle className="w-12 h-12 text-accent" />,
      title: "02. Smart Contract",
      description: "Automatic reward calculation, if conditions allow—rewards not guaranteed."
    },
    {
      icon: <Coins className="w-12 h-12 text-green-500" />,
      title: "03. Rewards",
      description: "Rewards, if any, are sent to your wallet depending on market performance."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <div className="relative">
        {/* Flow chart steps */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col items-center mb-8 md:mb-0 relative"
            >
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-4 border border-white/10">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
              <p className="text-gray-400 text-center max-w-[200px]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Connection lines (only visible on md screens and up) */}
        <div className="hidden md:block absolute top-12 left-0 right-0 z-0">
          <div className="flex justify-center items-center w-full h-full">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="w-[80%] h-0.5 bg-gradient-to-r from-bitcoin via-accent to-green-500 relative"
            >
              <ArrowRight className="w-5 h-5 text-accent absolute top-1/2 left-1/3 transform -translate-y-1/2" />
              <ArrowRight className="w-5 h-5 text-accent absolute top-1/2 right-1/3 transform -translate-y-1/2" />
            </motion.div>
          </div>
        </div>

        {/* Mobile connection arrows (only visible below md screens) */}
        <div className="md:hidden">
          {[0, 1].map((index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center my-2"
            >
              <Download className="w-6 h-6 text-accent transform rotate-180" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Important Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        viewport={{ once: true }}
        className="mt-12 glass-card p-6 border-t-2 border-bitcoin"
      >
        <h4 className="text-lg font-semibold mb-2 text-center text-bitcoin">Important Notice:</h4>
        <p className="text-gray-300 text-center">
          Cryptocurrency carries high risks, including total loss of value. $CBTC is an experimental project, not a financial product. Rewards depend on market performance and are not assured.
        </p>
      </motion.div>
    </div>
  );
};

export default FlowChartProcess;
