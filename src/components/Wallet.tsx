import React from 'react';
import { Wallet, LineChart, Gift, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

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

export default function DigitalWallet() {
  return (
    <section id="wallet" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Peníze vždy pod kontrolou</h2>
          <p className="text-xl text-gray-600">
            Kompletní přehled a správa financí na jednom místě
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              icon: <Wallet className="w-8 h-8" />,
              title: 'Digitální peněženka',
              description: 'Okamžité platby a převody mezi účty'
            },
            {
              icon: <LineChart className="w-8 h-8" />,
              title: 'Sledování transakcí',
              description: 'Přehled o výdajích v reálném čase'
            },
            {
              icon: <Gift className="w-8 h-8" />,
              title: 'Věrnostní program',
              description: 'Integrovaný systém odměn a bonusů'
            },
            {
              icon: <Lock className="w-8 h-8" />,
              title: 'Bezpečné bankovnictví',
              description: 'Jednoduché a zabezpečené funkce'
            }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}