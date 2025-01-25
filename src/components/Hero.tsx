import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80")'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90"></div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Manutenção Profissional de Computadores
          </h1>
          <p className="text-xl mb-8">
            Soluções técnicas especializadas para seu equipamento com diagnóstico preciso e rápido
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
            >
              Solicite um orçamento
              <ArrowRight className="ml-2" size={20} />
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=5584987993324"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
            >
              Agende seu atendimento
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}