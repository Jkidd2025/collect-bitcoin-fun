
import React from 'react';
import { Coins } from 'lucide-react';

const TokenomicsContent = () => {
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
        
        <p className="text-gray-300">
          In the case of Collect Bitcoin ($CBTC), the tokenomics model is designed to create sustainable value for holders through a balanced distribution approach. The total supply is fixed at 1 billion tokens, with allocations divided among presale participants, community rewards, liquidity pools, development funds, marketing efforts, and strategic partnerships.
        </p>
        
        <p className="text-gray-300">
          A key feature of $CBTC's tokenomics is the 5% service fee applied to swaps, which is split between distributing WBTC rewards to token holders and enhancing liquidity. This mechanism creates an incentive for long-term holding while maintaining market stability. The tokenomics of $CBTC are specifically designed to reward community participation and create a sustainable ecosystem that grows in value over time.
        </p>
      </div>
    </div>
  );
};

export default TokenomicsContent;
