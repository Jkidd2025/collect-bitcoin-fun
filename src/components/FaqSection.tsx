
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
      answer: "A Solana smart contract for community experimentation, potentially distributing WBTC based on market conditions."
    },
    {
      question: "How do I earn WBTC rewards?",
      answer: "Hold $CBTC in your wallet; rewards may occur if SOL conversion succeeds, but aren't guaranteed."
    },
    {
      question: "Is there a minimum amount of $CBTC required to earn rewards?",
      answer: "No minimum, but rewards scale with holdings and market performance."
    },
    {
      question: "How are the WBTC rewards funded?",
      answer: "Rewards come from SOL conversion within the smart contract, subject to availability and market risks."
    },
    {
      question: "Where can I swap for $CBTC?",
      answer: "Available on major Solana DEXes—check our site for links."
    },
    {
      question: "Is $CBTC safe and has the contract been audited?",
      answer: "Audit pending as of March 2025; targeting completion by Q3 2025, pending resources. $CBTC is experimental—use at your own risk. Important Notice: Code is unaudited but tested internally—full audit in progress."
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
          
          <p className="text-amber-500 font-bold mt-4 py-3 px-6 bg-amber-500/10 rounded-lg inline-block uppercase tracking-wider border border-amber-500/20">
            CRYPTO EXPERIMENT: NO GUARANTEES, HIGH RISK
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
