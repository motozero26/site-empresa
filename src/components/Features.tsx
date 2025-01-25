import React from 'react';
import { Clock, Award, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Atendimento Ágil',
    description: 'Resposta rápida e eficiente para seu problema'
  },
  {
    icon: Award,
    title: 'Peças Originais',
    description: 'Utilizamos apenas componentes de qualidade'
  },
  {
    icon: Shield,
    title: 'Garantia no Serviço',
    description: 'Todos os reparos com garantia'
  },
  {
    icon: Users,
    title: 'Equipe Qualificada',
    description: 'Técnicos certificados e experientes'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Por que nos escolher?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}