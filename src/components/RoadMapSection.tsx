
import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Rocket, TreeDeciduous, TrendingUp, Map, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const roadmapSteps = [
  {
    title: "Design and Development",
    icon: <Code className="h-8 w-8 text-bitcoin" />,
    description: "Creating the smart contract architecture and building the user interface to ensure a seamless and secure experience for users.",
    completed: true
  },
  {
    title: "Marketing",
    icon: <Flag className="h-8 w-8 text-bitcoin" />,
    description: "Building community awareness through social media campaigns, partnerships, and strategic outreach to crypto influencers.",
    completed: true
  },
  {
    title: "Launch",
    icon: <Rocket className="h-8 w-8 text-bitcoin" />,
    description: "Official release of the smart contract onto the Solana mainnet enabled across major DEXes for user to interact with $CBTC.",
    completed: false
  },
  {
    title: "Eco-System",
    icon: <TreeDeciduous className="h-8 w-8 text-bitcoin" />,
    description: "Exploring $CBTC uses via partnerships and features, as feasible.",
    completed: false
  }
];

const RoadMapSection = () => {
  return (
    <section id="roadmap" className="bg-crypto-medium py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Our <span className="text-bitcoin">Road Map</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our goal: Enhance $CBTC with practical features and partnerships as the project develops.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-bitcoin/30 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`md:flex ${index % 2 === 0 ? 'md:justify-end' : ''} relative mb-12`}
              >
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8 md:order-2'}`}>
                  <Card className="bg-crypto-dark/80 border-white/5 backdrop-blur-sm hover:border-bitcoin/20 transition-all duration-300">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <div className="p-2 rounded-full bg-bitcoin/10">
                        {step.icon}
                      </div>
                      <CardTitle className="text-xl">
                        {step.title}
                      </CardTitle>
                      {step.completed && (
                        <span className="ml-auto px-2 py-1 text-xs bg-bitcoin/20 text-bitcoin rounded-full">
                          Completed
                        </span>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline node */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-bitcoin hidden md:block">
                  <div className="absolute w-8 h-8 rounded-full bg-bitcoin/20 -top-2 -left-2 animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16 pt-8"
          >
            <TrendingUp className="w-12 h-12 text-bitcoin mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Future Growth</h3>
            <p className="text-gray-300 max-w-xl mx-auto">
              Our roadmap will continue to evolve as we achieve milestones and identify new opportunities for the Collect Bitcoin ecosystem.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;
