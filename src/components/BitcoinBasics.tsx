
import React from 'react';
import { Bitcoin, Book, Code, ChartBar, Globe } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const bitcoinBasicsContent = [
  {
    icon: <Bitcoin className="h-8 w-8 text-bitcoin" />,
    title: "What is Bitcoin?",
    content: "Bitcoin is a decentralized digital currency introduced in 2009 by the pseudonymous creator, Satoshi Nakamoto. It was designed as a peer-to-peer payment system that operates without the need for a central authority."
  },
  {
    icon: <Book className="h-8 w-8 text-bitcoin" />,
    title: "History",
    content: "Bitcoin emerged from a 2008 whitepaper, addressing the need for a secure, digital means of transferring value without intermediaries. Since its inception, it has grown from a niche project to a globally recognized digital asset."
  },
  {
    icon: <Code className="h-8 w-8 text-bitcoin" />,
    title: "Technology",
    content: "At its core, Bitcoin uses blockchain technology—a distributed, immutable ledger that records every transaction. The network relies on a proof-of-work consensus mechanism, where miners validate transactions and secure the network in exchange for new bitcoins."
  },
  {
    icon: <ChartBar className="h-8 w-8 text-bitcoin" />,
    title: "Utility",
    content: "Initially conceived as an alternative to traditional currencies, Bitcoin now functions as both a medium of exchange and a store of value. Its decentralized nature allows for borderless transactions and has positioned it as \"digital gold\" among investors, despite its price volatility."
  },
  {
    icon: <Globe className="h-8 w-8 text-bitcoin" />,
    title: "Current State in Society",
    content: "Today, Bitcoin is widely traded on global exchanges and accepted by numerous businesses. It continues to attract both retail and institutional investors, even as it faces regulatory scrutiny and debates over its environmental impact due to energy-intensive mining practices. Its evolution has also spurred broader innovations in the cryptocurrency and blockchain sectors."
  }
];

const BitcoinBasics = () => {
  return (
    <div className="glass-card p-8 rounded-lg border-none">
      <div className="flex items-center justify-center gap-3 mb-8">
        <Bitcoin className="h-12 w-12 text-bitcoin" />
        <h2 className="text-3xl font-bold">Bitcoin Basics</h2>
      </div>
      
      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {bitcoinBasicsContent.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
            <AccordionTrigger className="text-lg font-medium hover:text-bitcoin py-4">
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 py-4 px-4 bg-white/5 rounded-md">
              <p className="leading-relaxed">{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-8 text-center">
        <p className="text-gray-400 mb-6">
          Want to learn more about Bitcoin and cryptocurrency?
        </p>
        <Button className="bg-bitcoin hover:bg-bitcoin/80 text-white">
          Download Bitcoin Whitepaper
        </Button>
      </div>
    </div>
  );
};

export default BitcoinBasics;
