
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface EducationResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const EducationResourceCard = ({ icon, title, description, link }: EducationResourceCardProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Card className="glass-card h-full border-none">
        <CardHeader className="text-center pt-8">
          <div className="mx-auto mb-4">
            {icon}
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-400 text-center">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-center pb-8">
          <Button 
            variant="outline" 
            className="border-bitcoin hover:bg-bitcoin hover:text-white transition-colors"
            onClick={() => {
              if (link.startsWith('#')) {
                const element = document.querySelector(link);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default EducationResourceCard;
