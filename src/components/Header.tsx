import React from 'react';
import { Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Wallet className="w-8 h-8" />
          <span className="text-2xl font-bold">PayTech</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <a href="#terminal" className="hover:text-blue-200 transition">Terminál</a>
          <a href="#wallet" className="hover:text-blue-200 transition">Peněženka</a>
          <a href="#pricing" className="hover:text-blue-200 transition">Ceník</a>
        </div>
        <Link 
          to="/register"
          className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition"
        >
          Registrovat
        </Link>
      </nav>
    </header>
  );
}