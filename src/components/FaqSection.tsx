
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  delay: number;
}

const FaqItem = ({ question, answer, isOpen, toggleOpen, delay }: FaqItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    viewport={{ once: true }}
    className="border-b border-white/10 last:border-0"
  >
    <button
      onClick={toggleOpen}
      className="w-full text-left py-5 flex justify-between items-center focus:outline-none"
    >
      <h3 className="text-lg font-medium">{question}</h3>
      <ChevronDown 
        className={`h-5 w-5 text-bitcoin transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
      />
    </button>
    <div 
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="text-gray-400">{answer}</p>
    </div>
  </motion.div>
);

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Collect Bitcoin ($CBTC)?",
      answer: "Collect Bitcoin ($CBTC) is the first memecoin on the Solana blockchain that automatically rewards holders with WBTC (Wrapped Bitcoin) every minute, simply for holding the token. No staking or complicated processes required."
    },
    {
      question: "How do I earn WBTC rewards?",
      answer: "Simply buy and hold $CBTC tokens in your wallet. The rewards system automatically calculates and distributes WBTC to all holders proportionally every minute. The longer you hold, the more rewards you receive."
    },
    {
      question: "Is there a minimum amount of $CBTC required to earn rewards?",
      answer: "No, there is no minimum amount required. All holders receive rewards proportionally to their holdings, regardless of how much $CBTC they own. However, larger holdings will naturally receive larger rewards."
    },
    {
      question: "How are the WBTC rewards funded?",
      answer: "A portion of each transaction fee is allocated to the WBTC rewards pool. This creates a sustainable reward mechanism that benefits all holders while encouraging long-term holding."
    },
    {
      question: "Where can I buy $CBTC?",
      answer: "Currently, $CBTC is available on decentralized exchanges on the Solana network. Connect your wallet and swap SOL or USDC for $CBTC. Check our website for the official contract address."
    },
    {
      question: "Is $CBTC safe and has the contract been audited?",
      answer: "Yes, the $CBTC smart contract has undergone a comprehensive security audit by leading blockchain security firms. The contract code is transparent and available for review on our website."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-crypto-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-bitcoin/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/80 inline-block mb-4"
          >
            FAQ
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="heading-lg mb-4"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Everything you need to know about Collect Bitcoin and how to earn WBTC rewards.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-card p-8"
        >
          <div className="divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFaq(index)}
                delay={0.1 * index}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Still have questions? Reach out to our community on 
            <a href="#" className="text-bitcoin hover:underline ml-1">Telegram</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
