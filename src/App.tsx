import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Terminal from './components/Terminal';
import DigitalWallet from './components/Wallet';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Terminal />
      <DigitalWallet />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;