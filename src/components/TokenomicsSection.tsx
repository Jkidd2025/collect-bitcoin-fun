import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Coins, Percent, PieChart, Users, BarChart3, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface AllocationCardProps {
  percentage: string;
  tokens: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
  delay: number;
}

const AllocationCard = ({ percentage, tokens, title, description, icon, iconBgColor, delay }: AllocationCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    viewport={{ once: true, margin: "-50px" }}
    className="relative"
  >
    <Card className="glass-card p-6 h-full border-t-4" style={{ borderTopColor: iconBgColor }}>
      <div className={`p-3 rounded-lg w-fit mb-4`} style={{ backgroundColor: `${iconBgColor}20` }}>
        {icon}
      </div>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-xl font-bold text-bitcoin">{percentage}</span>
      </div>
      <p className="text-sm text-gray-400 mb-2">{tokens}</p>
      <p className="text-sm text-gray-400">{description}</p>
    </Card>
  </motion.div>
);

const TokenomicsSection = () => {
  const allocations = [
    {
      percentage: "20%",
      tokens: "200,000,000 tokens",
      title: "Presale",
      description: "Reserved for early investors and presale participants.",
      icon: <Wallet className="w-6 h-6 text-bitcoin" />,
      iconBgColor: "#F7931A",
      delay: 0.1
    },
    {
      percentage: "30%",
      tokens: "300,000,000 tokens",
      title: "Community, Rewards & Incentives",
      description: "Used for airdrops, staking rewards, community giveaways, and liquidity mining.",
      icon: <Users className="w-6 h-6 text-accent" />,
      iconBgColor: "#4D94FF",
      delay: 0.2
    },
    {
      percentage: "20%",
      tokens: "200,000,000 tokens",
      title: "Liquidity Pool",
      description: "Permanently locked in DEX liquidity pool to ensure market stability.",
      icon: <Coins className="w-6 h-6 text-green-500" />,
      iconBgColor: "#10B981",
      delay: 0.3
    },
    {
      percentage: "15%",
      tokens: "150,000,000 tokens",
      title: "Development & Ecosystem",
      description: "Allocated for development team, partnerships, and future enhancements.",
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      iconBgColor: "#8B5CF6",
      delay: 0.4
    },
    {
      percentage: "10%",
      tokens: "100,000,000 tokens",
      title: "Marketing & Partnerships",
      description: "Dedicated to promotional activities and ecosystem expansion.",
      icon: <Briefcase className="w-6 h-6 text-pink-500" />,
      iconBgColor: "#EC4899",
      delay: 0.5
    },
    {
      percentage: "5%",
      tokens: "50,000,000 tokens",
      title: "Advisors & Strategic Partners",
      description: "Allocated to advisors and key partners supporting project growth.",
      icon: <PieChart className="w-6 h-6 text-yellow-500" />,
      iconBgColor: "#F59E0B",
      delay: 0.6
    }
  ];

  return (
    <section id="tokenomics" className="py-24 relative overflow-hidden bg-crypto-medium">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(247,147,26,0.05),transparent_70%)]"></div>
      <div className="grid-pattern absolute inset-0 opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/80 inline-block mb-4"
          >
            TOKENOMICS
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="heading-lg mb-4"
          >
            Token <span className="text-gradient">Distribution</span> & Mechanics
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Total Supply: 1,000,000,000 $CBTC tokens
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {allocations.map((allocation, index) => (
            <AllocationCard
              key={index}
              percentage={allocation.percentage}
              tokens={allocation.tokens}
              title={allocation.title}
              description={allocation.description}
              icon={allocation.icon}
              iconBgColor={allocation.iconBgColor}
              delay={allocation.delay}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8 mt-12"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Solana Blockchain Service Fee</h3>
          
          <div className="bg-white/5 p-6 rounded-xl mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-bitcoin/10 p-3 rounded-full">
                <Percent className="w-8 h-8 text-bitcoin" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">5% Service Fee on Every Swap</h4>
                <p className="text-gray-400">Applied on all buy, sell, and transfer operations</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 border-l-4 border-bitcoin">
              <h4 className="text-lg font-semibold mb-3">50% to Holders as $WBTC</h4>
              <p className="text-gray-400">Distributed as $WBTC reflections among all token holders, rewarding long-term holding with real Bitcoin value.</p>
            </div>
            
            <div className="glass-card p-6 border-l-4 border-accent">
              <h4 className="text-lg font-semibold mb-3">50% to Liquidity</h4>
              <p className="text-gray-400">Added back into the liquidity pool, paired with the native token, to enhance liquidity and minimize price slippage.</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center justify-center">
              <div className="text-center max-w-xl">
                <h4 className="text-lg font-semibold mb-3">Collection & Conversion Process</h4>
                <p className="text-gray-400">All fees are directed to a dedicated collection account and periodically converted to WBTC (Wrapped Bitcoin) before distribution.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
