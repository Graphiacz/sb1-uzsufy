import React from 'react';
import { Wallet } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Wallet className="w-8 h-8" />
            <span className="text-2xl font-bold">PayTech</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#terminal" className="hover:text-blue-400 transition">Terminál</a>
            <a href="#wallet" className="hover:text-blue-400 transition">Peněženka</a>
            <a href="#pricing" className="hover:text-blue-400 transition">Ceník</a>
            <a href="#contact" className="hover:text-blue-400 transition">Kontakt</a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} PayTech. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}