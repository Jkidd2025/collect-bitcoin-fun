
import React from 'react';
import { FileCode } from 'lucide-react';

const SmartContractsContent = () => {
  return (
    <div className="education-content">
      <div className="flex items-center mb-6">
        <FileCode className="h-8 w-8 text-bitcoin mr-3" />
        <h2 className="text-2xl font-bold">Smart Contracts</h2>
      </div>
      
      <div className="space-y-6">
        <p className="text-gray-300">
          Smart contracts are self-executing pieces of code on a blockchain that automatically enforce agreements once preset conditions are met. They're used in many areas—for instance, managing token transfers, minting and trading NFTs, automating supply chain tracking, processing insurance claims, and facilitating decentralized voting. They also power complex decentralized finance (DeFi) protocols like lending, borrowing, and yield farming. By eliminating intermediaries, smart contracts reduce costs, boost security, and enhance transparency, making them transformative tools across various industries.
        </p>
        
        <p className="text-gray-300">
          Collect Bitcoin builds on this foundation with a smart contract that goes further than traditional, static reward systems. Running on the Solana blockchain, Collect Bitcoin's contract dynamically calculates rewards based on user engagement and participation instead of relying solely on fixed parameters like the amount of tokens staked. This gamified approach not only incentivizes more active interaction but also creates a vibrant, community-focused environment. For added transparency, you can review the Collect Bitcoin smart contract on Solscan, ensuring that every detail is open for audit and verification.
        </p>
        
        <p className="text-gray-300">
          If you're looking to harness the full potential of blockchain technology, smart contracts like those powering Collect Bitcoin offer a unique opportunity. They not only automate critical processes but also add interactivity and value that can transform your financial engagement and digital asset management. Embrace this innovative technology, explore its benefits, and see firsthand how smart contracts can help your assets work smarter for you.
        </p>
      </div>
    </div>
  );
};

export default SmartContractsContent;
