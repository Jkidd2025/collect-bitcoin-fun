
import React from 'react';
import { motion } from 'framer-motion';
import { X, BarChart3, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'X',
    icon: <X className="h-6 w-6" />,
    url: 'https://x.com/cbtconsol?s=21',
    color: 'bg-[#000000]/10 text-[#000000]'
  },
  {
    name: 'Telegram',
    icon: <MessageCircle className="h-6 w-6" />,
    url: 'https://t.me/collect_btc_chat',
    color: 'bg-[#0088cc]/10 text-[#0088cc]'
  },
  {
    name: 'Dex Screen',
    icon: <BarChart3 className="h-6 w-6" />,
    url: '#',
    color: 'bg-white/10 text-white'
  }
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 relative overflow-hidden bg-crypto-medium">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(247,147,26,0.1),transparent_60%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/80 inline-block mb-4"
          >
            JOIN THE MOVEMENT
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="heading-lg mb-4"
          >
            Join Our <span className="text-gradient">Community</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Join the $CBTC experiment—connect with our community to explore this project.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-card p-6 flex flex-col items-center group hover:border-bitcoin/30 transition-all duration-300"
              >
                <div className={`${link.color} p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{link.name}</h3>
                <p className="text-gray-400 text-sm">Follow us on {link.name}</p>
              </motion.a>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <h3 className="text-2xl font-semibold mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Get the latest updates on $CBTC rewards, project performance, and community announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-crypto-dark border border-white/10 rounded-full px-4 py-3 flex-grow focus:outline-none focus:border-bitcoin/50 transition-colors"
              />
              <Button className="btn-primary whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
