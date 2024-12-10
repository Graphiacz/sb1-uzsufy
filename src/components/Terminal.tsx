import React from 'react';
import { CreditCard, Wifi, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Terminal() {
  return (
    <section id="terminal" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Moderní terminál, který šetří vaše náklady
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Snadné ovládání, nejnižší poplatky
            </p>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, staggerChildren: 0.2 }}
            >
              {[
                {
                  icon: <CreditCard className="w-6 h-6" />,
                  text: 'Platba kartou od 0,6 % transakčního poplatku',
                },
                {
                  icon: <Wifi className="w-6 h-6" />,
                  text: 'Připojení přes Wi-Fi nebo mobilní data, funguje kdekoliv',
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  text: 'Rychlá aktivace během několika minut',
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  text: 'Podpora všech běžných platebních karet a moderních technologií',
                },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-blue-600">{item.icon}</div>
                  <p className="text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/register"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition hover:scale-105 transform duration-200"
              >
                Vyzkoušejte PayTech
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=600&q=80"
              alt="Payment Terminal"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}