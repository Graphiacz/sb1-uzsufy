import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Nejnižší poplatky na trhu</h2>
          <p className="text-xl text-gray-600">
            Transparentnost, kterou jinde nenajdete
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-4">Transakční poplatky</h3>
                <div className="space-y-3">
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <Check className="w-5 h-5 text-blue-600" />
                    <span>Od 0,6 % do 1,4 % (dle obratu)</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <Check className="w-5 h-5 text-blue-600" />
                    <span>Žádné měsíční poplatky</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <Check className="w-5 h-5 text-blue-600" />
                    <span>Peníze na účtu do 24 hodin</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                className="md:border-l md:pl-8 border-blue-100"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  Bez skrytých poplatků
                </h3>
                <div className="space-y-3">
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <Check className="w-5 h-5 text-blue-600" />
                    <span>Žádné poplatky za vedení účtu</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <Check className="w-5 h-5 text-blue-600" />
                    <span>Zdarma aktivace terminálu</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <Check className="w-5 h-5 text-blue-600" />
                    <span>Bez závazků a minimálního obratu</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                to="/register"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition hover:scale-105 transform duration-200"
              >
                Spočítat úsporu s PayTech
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}