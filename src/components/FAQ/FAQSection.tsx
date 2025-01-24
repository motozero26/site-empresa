import React from 'react';
import FAQItem from './FAQItem';

const faqItems = [
  {
    question: "Qual o prazo médio para conserto de um computador?",
    answer: "O prazo varia de acordo com o problema, mas geralmente entre 24-48 horas para problemas comuns. Casos mais complexos podem levar até 5 dias úteis."
  },
   {
    question: "É cobrado algum valor para analisar equipamentos?",
    answer: "Não, é totalmente gratuíto, após o analise passamos o orçamento para o cliente."
  },
  {
    question: "Vocês fazem backup dos dados antes do reparo?",
    answer: "Sim, realizamos backup completo dos dados antes de qualquer procedimento para garantir a segurança das suas informações."
  },
  {
    question: "Oferecem garantia nos serviços?",
    answer: "Sim, todos nossos serviços possuem garantia de 90 dias. Peças substituídas têm garantia conforme especificação do fabricante."
  },
  {
    question: "Fazem atendimento em domicílio?",
    answer: "Sim, realizamos atendimento em domicílio para região de Natal mediante agendamento prévio."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartões de crédito/débito, PIX e dinheiro."
  }
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Dúvidas Frequentes</h2>
        <p className="text-gray-600 text-center mb-12">
          Encontre respostas para as perguntas mais comuns sobre nossos serviços
        </p>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}