
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

const BlockchainsContent = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Understanding <span className="text-bitcoin">Blockchains</span></h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Below is an overview of five of the most popular blockchains, including their official websites 
          and the key tools they provide to help both developers and everyday users tap into their technology.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="bitcoin" className="glass-card border-none rounded-lg overflow-hidden">
          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-800/50">
            <div className="flex items-center gap-3 text-left">
              <div className="bg-bitcoin/20 p-2 rounded-full">
                <img 
                  src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg"
                  alt="Bitcoin Logo"
                  className="h-8 w-8"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bitcoin</h3>
                <p className="text-sm text-gray-400">The original blockchain</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-2">
            <div className="space-y-4">
              <p className="text-gray-300">
                Bitcoin is the original blockchain designed primarily for digital currency and store-of-value applications. 
                As the first decentralized cryptocurrency, it laid the foundation for blockchain technology.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-bitcoin">Key Tools & Resources:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    <strong>Wallets:</strong> The Bitcoin Core client and various third‑party wallets (e.g., Electrum) enable secure storage and transactions.
                  </li>
                  <li>
                    <strong>Block Explorers:</strong> Tools like Blockchain.com and Blockstream.info help users track transactions and view the blockchain ledger.
                  </li>
                  <li>
                    <strong>Developer & Educational Materials:</strong> The website offers guides, documentation, and community resources for those interested in learning or building on the Bitcoin protocol.
                  </li>
                </ul>
              </div>
              
              <div className="pt-2">
                <Button variant="outline" className="border-bitcoin hover:bg-bitcoin hover:text-white" asChild>
                  <a href="https://bitcoin.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit Official Website <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="ethereum" className="glass-card border-none rounded-lg overflow-hidden">
          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-800/50">
            <div className="flex items-center gap-3 text-left">
              <div className="bg-[#627EEA]/20 p-2 rounded-full">
                <img 
                  src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"
                  alt="Ethereum Logo"
                  className="h-8 w-8"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Ethereum</h3>
                <p className="text-sm text-gray-400">Smart contract platform</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-2">
            <div className="space-y-4">
              <p className="text-gray-300">
                Ethereum expanded the blockchain concept by introducing smart contracts, enabling a whole ecosystem 
                of decentralized applications (dApps) including decentralized finance (DeFi) and non‑fungible tokens (NFTs).
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-bitcoin">Key Tools & Resources:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    <strong>Smart Contract Development:</strong> Languages such as Solidity and Vyper, along with development environments like Remix IDE, help developers write and deploy smart contracts.
                  </li>
                  <li>
                    <strong>Wallets & dApp Browsers:</strong> Popular tools like MetaMask, Trust Wallet, and Coinbase Wallet facilitate interactions with dApps.
                  </li>
                  <li>
                    <strong>Block Explorers & Testnets:</strong> Etherscan provides a user-friendly explorer for monitoring transactions, and various test networks (e.g., Ropsten, Goerli) allow developers to experiment before going live.
                  </li>
                  <li>
                    <strong>Community & Documentation:</strong> Extensive guides, tutorials, and forums are available to educate users on best practices and new innovations.
                  </li>
                </ul>
              </div>
              
              <div className="pt-2">
                <Button variant="outline" className="border-bitcoin hover:bg-bitcoin hover:text-white" asChild>
                  <a href="https://ethereum.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit Official Website <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="bnb" className="glass-card border-none rounded-lg overflow-hidden">
          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-800/50">
            <div className="flex items-center gap-3 text-left">
              <div className="bg-[#F3BA2F]/20 p-2 rounded-full">
                <img 
                  src="https://cryptologos.cc/logos/bnb-bnb-logo.svg"
                  alt="BNB Chain Logo"
                  className="h-8 w-8"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Binance Smart Chain (BNB Chain)</h3>
                <p className="text-sm text-gray-400">High-performance, low-fee blockchain</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-2">
            <div className="space-y-4">
              <p className="text-gray-300">
                Binance Smart Chain (now often referred to as BNB Chain) offers a high-performance environment with lower fees, 
                making it popular for DeFi applications, yield farming, and a wide range of dApps—all while being integrated with the larger Binance ecosystem.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-bitcoin">Key Tools & Resources:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    <strong>Wallets & Integration:</strong> The Binance Chain Wallet and compatibility with popular wallets like MetaMask facilitate secure interactions.
                  </li>
                  <li>
                    <strong>Block Explorers:</strong> BscScan serves as a robust explorer for tracking transactions and smart contract activity.
                  </li>
                  <li>
                    <strong>Developer Documentation:</strong> Comprehensive guides and API documentation help developers build, deploy, and manage dApps on the network.
                  </li>
                  <li>
                    <strong>DeFi & Ecosystem Tools:</strong> A suite of tools for creating and managing BEP‑20 tokens, decentralized exchanges (DEXs), and yield farming protocols is available to both developers and end‑users.
                  </li>
                </ul>
              </div>
              
              <div className="pt-2">
                <Button variant="outline" className="border-bitcoin hover:bg-bitcoin hover:text-white" asChild>
                  <a href="https://bnbchain.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit Official Website <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cardano" className="glass-card border-none rounded-lg overflow-hidden">
          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-800/50">
            <div className="flex items-center gap-3 text-left">
              <div className="bg-[#0033AD]/20 p-2 rounded-full">
                <img 
                  src="https://cryptologos.cc/logos/cardano-ada-logo.svg"
                  alt="Cardano Logo"
                  className="h-8 w-8"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Cardano</h3>
                <p className="text-sm text-gray-400">Research-driven blockchain platform</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-2">
            <div className="space-y-4">
              <p className="text-gray-300">
                Cardano is known for its research‑driven, peer‑reviewed approach to blockchain development. 
                It focuses on scalability, security, and sustainability using a proof‑of‑stake consensus mechanism.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-bitcoin">Key Tools & Resources:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    <strong>Smart Contract Platforms:</strong> Cardano's Plutus and Marlowe frameworks enable the development of secure smart contracts and financial applications.
                  </li>
                  <li>
                    <strong>Wallets:</strong> Daedalus and Yoroi provide secure options for storing ADA and interacting with the network.
                  </li>
                  <li>
                    <strong>Block Explorers:</strong> Tools like CardanoScan offer insight into network transactions and blockchain data.
                  </li>
                  <li>
                    <strong>Developer & Community Resources:</strong> Extensive documentation, tutorials, and active community forums help newcomers and experienced developers alike to build on Cardano.
                  </li>
                </ul>
              </div>
              
              <div className="pt-2">
                <Button variant="outline" className="border-bitcoin hover:bg-bitcoin hover:text-white" asChild>
                  <a href="https://cardano.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit Official Website <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="solana" className="glass-card border-none rounded-lg overflow-hidden">
          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-800/50">
            <div className="flex items-center gap-3 text-left">
              <div className="bg-[#14F195]/20 p-2 rounded-full">
                <img 
                  src="https://cryptologos.cc/logos/solana-sol-logo.svg"
                  alt="Solana Logo"
                  className="h-8 w-8"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Solana</h3>
                <p className="text-sm text-gray-400">High-throughput blockchain</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-2">
            <div className="space-y-4">
              <p className="text-gray-300">
                Solana is distinguished by its exceptionally high throughput and low transaction fees, 
                making it a preferred choice for high‑performance decentralized applications, including those in DeFi and NFT marketplaces.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-bitcoin">Key Tools & Resources:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    <strong>Developer Ecosystem:</strong> The Solana Program Library (SPL) and comprehensive developer documentation facilitate the creation of fast, efficient dApps.
                  </li>
                  <li>
                    <strong>Wallets:</strong> User-friendly wallets like Phantom and Sollet provide streamlined access to the network.
                  </li>
                  <li>
                    <strong>Block Explorers:</strong> Solana Explorer helps users monitor network performance and transaction details.
                  </li>
                  <li>
                    <strong>Educational Content:</strong> Tutorials, workshops, and community initiatives make it easier for developers and users to adopt and innovate on the platform.
                  </li>
                </ul>
              </div>
              
              <div className="pt-2">
                <Button variant="outline" className="border-bitcoin hover:bg-bitcoin hover:text-white" asChild>
                  <a href="https://solana.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit Official Website <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-8 text-center text-gray-400">
        <p>
          Each of these blockchains brings unique strengths to the table—from Bitcoin's pioneering role in digital currency to Ethereum's versatile smart contract platform, 
          Binance Smart Chain's fast and cost‑effective ecosystem, Cardano's academic rigor and sustainability, and Solana's speed and scalability. 
          Their official websites not only offer technical documentation and developer tools but also serve as hubs for community engagement and education, 
          enabling the public to explore and benefit from blockchain technology.
        </p>
      </div>
    </div>
  );
};

export default BlockchainsContent;
