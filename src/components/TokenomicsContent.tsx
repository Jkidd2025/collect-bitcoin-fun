
import React from 'react';
import { Coins, Wallet, Users, BarChart3, Briefcase, PieChart, Percent } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface AllocationCardProps {
  percentage: string;
  tokens: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
}

const AllocationCard = ({ percentage, tokens, title, description, icon, iconBgColor }: AllocationCardProps) => (
  <div className="relative">
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
  </div>
);

const TokenomicsContent = () => {
  const allocations = [
    {
      percentage: "20%",
      tokens: "200,000,000 tokens",
      title: "Presale",
      description: "Reserved for early investors and presale participants.",
      icon: <Wallet className="w-6 h-6 text-bitcoin" />,
      iconBgColor: "#F7931A"
    },
    {
      percentage: "30%",
      tokens: "300,000,000 tokens",
      title: "Community, Rewards & Incentives",
      description: "Used for airdrops, staking rewards, community giveaways, and liquidity mining.",
      icon: <Users className="w-6 h-6 text-accent" />,
      iconBgColor: "#4D94FF"
    },
    {
      percentage: "20%",
      tokens: "200,000,000 tokens",
      title: "Liquidity Pool",
      description: "Permanently locked in DEX liquidity pool to ensure market stability.",
      icon: <Coins className="w-6 h-6 text-green-500" />,
      iconBgColor: "#10B981"
    },
    {
      percentage: "15%",
      tokens: "150,000,000 tokens",
      title: "Development & Ecosystem",
      description: "Allocated for development team, partnerships, and future enhancements.",
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      iconBgColor: "#8B5CF6"
    },
    {
      percentage: "10%",
      tokens: "100,000,000 tokens",
      title: "Marketing & Partnerships",
      description: "Dedicated to promotional activities and ecosystem expansion.",
      icon: <Briefcase className="w-6 h-6 text-pink-500" />,
      iconBgColor: "#EC4899"
    },
    {
      percentage: "5%",
      tokens: "50,000,000 tokens",
      title: "Advisors & Strategic Partners",
      description: "Allocated to advisors and key partners supporting project growth.",
      icon: <PieChart className="w-6 h-6 text-yellow-500" />,
      iconBgColor: "#F59E0B"
    }
  ];

  return (
    <div className="education-content">
      <div className="flex items-center mb-6">
        <Coins className="h-8 w-8 text-bitcoin mr-3" />
        <h2 className="text-2xl font-bold">Tokenomics</h2>
      </div>
      
      <div className="space-y-6">
        <p className="text-gray-300">
          Tokenomics is the study of the economic ecosystem surrounding a cryptocurrency. It examines how tokens are created, distributed, and used within a blockchain network. Understanding tokenomics is crucial for evaluating the long-term viability and potential value of a cryptocurrency project.
        </p>
        
        <div className="bg-white/5 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-semibold mb-4">Key Components of Tokenomics</h3>
          <ul className="space-y-3 list-disc pl-5 text-gray-300">
            <li><span className="font-semibold text-bitcoin">Token Supply:</span> Total, circulating, and maximum supply of tokens</li>
            <li><span className="font-semibold text-bitcoin">Distribution Model:</span> How tokens are allocated across stakeholders</li>
            <li><span className="font-semibold text-bitcoin">Token Utility:</span> The function and use cases of the token</li>
            <li><span className="font-semibold text-bitcoin">Emission Schedule:</span> Rate at which new tokens are created</li>
            <li><span className="font-semibold text-bitcoin">Burning Mechanisms:</span> Processes for removing tokens from circulation</li>
            <li><span className="font-semibold text-bitcoin">Governance:</span> How token holders participate in decision-making</li>
          </ul>
        </div>
        
        <h3 className="text-xl font-semibold mb-4">$CBTC Token Distribution</h3>
        <p className="text-gray-300 mb-6">
          Total Supply: 1,000,000,000 $CBTC tokens
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {allocations.map((allocation, index) => (
            <AllocationCard
              key={index}
              percentage={allocation.percentage}
              tokens={allocation.tokens}
              title={allocation.title}
              description={allocation.description}
              icon={allocation.icon}
              iconBgColor={allocation.iconBgColor}
            />
          ))}
        </div>
        
        <div className="glass-card p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Solana Blockchain Service Fee</h3>
          
          <div className="bg-white/5 p-6 rounded-xl mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-bitcoin/10 p-3 rounded-full">
                <Percent className="w-8 h-8 text-bitcoin" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">5% Service Fee on Every Swap</h4>
                <p className="text-gray-400">Applied on all swaps and transfer operations</p>
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
              <p className="text-gray-400">Added back into the liquidity pool, paired with the native token, to enhance network stability and smart contract operations.</p>
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
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/10">
          <h4 className="text-xl font-semibold mb-4 text-center">How It Works</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="font-bold text-xl mb-2">01</div>
              <p className="text-gray-400">Swap and hold $CBTC in your wallet</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="font-bold text-xl mb-2">02</div>
              <p className="text-gray-400">Automatic reward calculation</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="font-bold text-xl mb-2">03</div>
              <p className="text-gray-400">WBTC rewards sent directly to your wallet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsContent;
