
import React from 'react';
import { Lightbulb, Shield, Wallet, RefreshCw, Building, Coins, Bitcoin, Users } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const bestPracticesContent = [
  {
    icon: <Shield className="h-8 w-8 text-bitcoin" />,
    title: "General Principles",
    content: (
      <div className="space-y-2">
        <p className="font-medium">Do Your Own Research (DYOR)</p>
        <p className="text-gray-300 mb-2">Always verify information from multiple trusted sources before making any financial decisions.</p>
        
        <p className="font-medium">Risk Management</p>
        <p className="text-gray-300 mb-2">Only invest what you can afford to lose and diversify your exposure.</p>
        
        <p className="font-medium">Security First</p>
        <p className="text-gray-300">Protect your digital assets using strong passwords, two-factor authentication, and hardware wallets for long-term storage.</p>
      </div>
    )
  },
  {
    icon: <Wallet className="h-8 w-8 text-bitcoin" />,
    title: "Cryptocurrency Wallets",
    content: (
      <div className="space-y-3">
        <div>
          <p className="font-medium mb-2">Types of Wallets:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li><span className="font-medium text-white">Hardware Wallets:</span> Provide offline storage and are best for holding significant amounts of cryptocurrency.</li>
            <li><span className="font-medium text-white">Software Wallets:</span> Mobile or desktop applications that are convenient for daily use but require extra care against malware.</li>
            <li><span className="font-medium text-white">Custodial Wallets:</span> Offered by exchanges or third-party services; while convenient, they put control in the hands of another party.</li>
          </ul>
        </div>
        
        <div>
          <p className="font-medium mb-2">Best Practices:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li><span className="font-medium text-white">Backup Your Seed Phrase:</span> Write it down and store it in a secure location—never share it.</li>
            <li><span className="font-medium text-white">Use Reputable Providers:</span> Research wallet providers and ensure they have strong security measures and positive user reviews.</li>
            <li><span className="font-medium text-white">Keep Software Updated:</span> Regularly update wallet software to patch vulnerabilities.</li>
            <li><span className="font-medium text-white">Use Multiple Wallets:</span> Consider using a combination of hot (for quick access) and cold storage (for long-term holding).</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-bitcoin" />,
    title: "Decentralized Exchanges (DEX)",
    content: (
      <div className="space-y-3">
        <div>
          <p className="font-medium mb-2">Overview:</p>
          <p className="text-gray-300">DEXs allow peer-to-peer trading without an intermediary, giving you full control over your funds.</p>
        </div>
        
        <div>
          <p className="font-medium mb-2">Best Practices:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li><span className="font-medium text-white">Smart Contract Audits:</span> Only use DEX platforms with well-audited contracts.</li>
            <li><span className="font-medium text-white">Verify URLs:</span> Avoid phishing by double-checking the website's URL.</li>
            <li><span className="font-medium text-white">Test Small Amounts:</span> Start with smaller trades to understand the process and fee structures.</li>
            <li><span className="font-medium text-white">Monitor Gas Fees:</span> Transactions on blockchain networks can have volatile fees; plan trades when fees are lower if possible.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    icon: <Building className="h-8 w-8 text-bitcoin" />,
    title: "Centralized Exchanges (CEX)",
    content: (
      <div className="space-y-3">
        <div>
          <p className="font-medium mb-2">Overview:</p>
          <p className="text-gray-300">CEXs are platforms where a third party holds your assets and provides a user-friendly trading interface.</p>
        </div>
        
        <div>
          <p className="font-medium mb-2">Best Practices:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li><span className="font-medium text-white">Choose Reputable Exchanges:</span> Look for well-known names with strong security records and regulatory compliance.</li>
            <li><span className="font-medium text-white">Enable 2FA:</span> Always use two-factor authentication for an extra layer of security.</li>
            <li><span className="font-medium text-white">Withdrawal Practices:</span> Do not store large amounts on the exchange; move funds to a secure wallet.</li>
            <li><span className="font-medium text-white">Stay Informed:</span> Monitor news about the exchange for any potential issues or updates.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    icon: <Coins className="h-8 w-8 text-bitcoin" />,
    title: "Meme & Alt Coins",
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-medium mb-1">Meme Coins Overview:</p>
          <p className="text-gray-300 mb-2">Meme coins are typically high-volatility assets driven by social media trends rather than solid fundamentals.</p>
          
          <p className="font-medium mb-1">Best Practices:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
            <li><span className="font-medium text-white">Invest Cautiously:</span> Only allocate a very small portion of your portfolio to meme coins.</li>
            <li><span className="font-medium text-white">Research the Token:</span> Understand the token's background, community, and development activity.</li>
            <li><span className="font-medium text-white">Beware of Hype:</span> Avoid decisions based solely on social media buzz; look for transparency and credible leadership.</li>
            <li><span className="font-medium text-white">Exit Strategy:</span> Have a clear plan for taking profits or cutting losses.</li>
          </ul>
        </div>
        
        <div>
          <p className="font-medium mb-1">Alt Coins Overview:</p>
          <p className="text-gray-300 mb-2">Alt coins are alternative cryptocurrencies to Bitcoin, offering a variety of features and use cases.</p>
          
          <p className="font-medium mb-1">Best Practices:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li><span className="font-medium text-white">Evaluate Fundamentals:</span> Read the whitepaper, understand the technology, and assess the team behind the project.</li>
            <li><span className="font-medium text-white">Diversification:</span> Spread investments across multiple projects to mitigate risk.</li>
            <li><span className="font-medium text-white">Monitor Development:</span> Follow project updates and community discussions to gauge ongoing viability.</li>
            <li><span className="font-medium text-white">Liquidity and Exchange Listings:</span> Check where the alt coin is traded and its trading volume to ensure liquidity.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    icon: <Bitcoin className="h-8 w-8 text-bitcoin" />,
    title: "Bitcoin",
    content: (
      <div className="space-y-3">
        <div>
          <p className="font-medium mb-2">Overview:</p>
          <p className="text-gray-300">As the first and most established cryptocurrency, Bitcoin is often seen as a "digital gold."</p>
        </div>
        
        <div>
          <p className="font-medium mb-2">Best Practices:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li><span className="font-medium text-white">Secure Storage:</span> Use hardware wallets or other secure storage options.</li>
            <li><span className="font-medium text-white">Long-Term Perspective:</span> Many consider Bitcoin a store of value; decide whether you are trading or holding long term.</li>
            <li><span className="font-medium text-white">Keep Abreast of Developments:</span> Bitcoin's ecosystem evolves with scaling proposals, regulatory news, and adoption trends.</li>
            <li><span className="font-medium text-white">Diversification within Bitcoin:</span> Consider using layered solutions (like Lightning Network for smaller transactions) if your needs extend beyond simple holding.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    icon: <Users className="h-8 w-8 text-bitcoin" />,
    title: "Community Engagement",
    content: (
      <div className="space-y-3">
        <div>
          <p className="font-medium mb-2">Overview:</p>
          <p className="text-gray-300">Crypto communities are vibrant sources of information, opinions, and trends—but they also require cautious navigation.</p>
        </div>
        
        <div>
          <p className="font-medium mb-2">Best Practices:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li><span className="font-medium text-white">Verify Information:</span> Cross-check news and rumors from community chats with reliable sources.</li>
            <li><span className="font-medium text-white">Join Reputable Channels:</span> Look for groups moderated by experienced users or linked to verified projects.</li>
            <li><span className="font-medium text-white">Protect Your Privacy:</span> Use pseudonyms and avoid sharing personal or sensitive information.</li>
            <li><span className="font-medium text-white">Beware of Scams:</span> Be on guard for pump and dump schemes, phishing attempts, and "too-good-to-be-true" promises.</li>
            <li><span className="font-medium text-white">Engage Respectfully:</span> Participate in discussions but remain critical of hype-driven or unverified advice.</li>
            <li><span className="font-medium text-white">Follow Thought Leaders:</span> Identify experts and analysts with proven track records and cross-reference their opinions with your own research.</li>
          </ul>
        </div>
      </div>
    )
  }
];

const CryptoBestPractices = () => {
  return (
    <div className="glass-card p-8 rounded-lg border-none">
      <div className="flex items-center justify-center gap-3 mb-8">
        <Lightbulb className="h-12 w-12 text-bitcoin" />
        <h2 className="text-3xl font-bold">Crypto Best Practices</h2>
      </div>
      
      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {bestPracticesContent.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
            <AccordionTrigger className="text-lg font-medium hover:text-bitcoin py-4">
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 py-4 px-4 bg-white/5 rounded-md">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-8 text-center">
        <p className="text-gray-400 mb-6">
          Remember that entering the world of cryptocurrencies requires a balanced approach of enthusiasm and caution.
        </p>
      </div>
    </div>
  );
};

export default CryptoBestPractices;
