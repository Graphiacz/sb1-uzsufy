import React from 'react';
import { Percent, Package, FileText, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Percent className="w-8 h-8 text-blue-600" />,
    title: 'Úspora nákladů',
    description: 'Nejnižší poplatky na trhu – od 0,6 %.'
  },
  {
    icon: <Package className="w-8 h-8 text-blue-600" />,
    title: 'Komplexní řešení',
    description: 'Od platebního terminálu až po věrnostní programy a správu financí.'
  },
  {
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    title: 'Transparentnost',
    description: 'Jednoduché podmínky bez skrytých poplatků.'
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: 'Rychlost',
    description: 'Snadná registrace a okamžité spuštění.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

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

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="inline-block p-4 bg-blue-50 rounded-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}