import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import FAQSection from './components/FAQ/FAQSection';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <Features />
      <FAQSection />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}

export default App;