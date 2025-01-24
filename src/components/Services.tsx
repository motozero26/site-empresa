import React from 'react';
import { HardDrive, Terminal, Shield, Cpu } from 'lucide-react';

const services = [
  {
    icon: HardDrive,
    title: 'Reparo de Hardware',
    description: 'Conserto de componentes com peças originais e garantia.'
  },
  {
    icon: Terminal,
    title: 'Formatação e Sistemas',
    description: 'Instalação e configuração de sistemas operacionais.'
  },
  {
    icon: Shield,
    title: 'Proteção de Dados',
    description: 'Remoção de vírus e backup seguro de seus arquivos.'
  },
  {
    icon: Cpu,
    title: 'Upgrades',
    description: 'Melhorias de performance com as melhores peças do mercado.'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}