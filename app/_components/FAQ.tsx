"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
    {
        id: 1,
        question: "Como funciona a recolocação profissional?",
        answer: "Nosso programa combina aprendizado técnico com orientação de carreira. Você escolhe um curso, aprende na prática, obtém certificação e tem suporte de mentores para encontrar oportunidades no mercado.",
        category: "Programa",
    },
    {
        id: 2,
        question: "Preciso ter experiência prévia em tecnologia?",
        answer: "Não! Oferecemos cursos para todos os níveis, desde iniciante até avançado. Recomendamos começar pelos fundamentais se você não tem experiência anterior.",
        category: "Requisitos",
    },
    {
        id: 3,
        question: "Quanto tempo leva para completar um curso?",
        answer: "Cada curso tem uma duração específica (4-10 semanas). Você pode estudar no seu próprio ritmo, com acesso vitalício ao conteúdo.",
        category: "Cursos",
    },
    {
        id: 4,
        question: "As certificações são reconhecidas pelo mercado?",
        answer: "Sim! Nossas certificações são validadas por empresas como Google, Microsoft e Amazon. Elas agregam valor real ao seu currículo.",
        category: "Certificados",
    },
    {
        id: 5,
        question: "Qual é a idade ideal para recolocação?",
        answer: "Não há limite de idade! Profissionais entre 35 e 60+ anos têm obtido excelentes resultados. O mercado digital valoriza experiência combinada com novas habilidades.",
        category: "Programa",
    },
    {
        id: 6,
        question: "Há suporte para quem tem pouco tempo disponível?",
        answer: "Totalmente! Nossas aulas são assíncronas (você assiste quando quer) e há um programa intensivo de 4 semanas para quem tem pressa.",
        category: "Requisitos",
    },
];

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section
            id="faq"
            className="w-full py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-[#7F05EA]/5 to-white"
            aria-labelledby="faq-title"
        >
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 space-y-4">
                    <h2 id="faq-title" className="section-title">
                        Perguntas Frequentes
                    </h2>
                    <p className="section-subtitle">
                        Respostas para as dúvidas mais comuns sobre recolocação profissional
                    </p>
                </div>

                <div className="space-y-3" role="region" aria-label="Perguntas frequentes">
                    {faqItems.map((item) => (
                        <div
                            key={item.id}
                            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
                        >
                            <button
                                onClick={() => toggleAccordion(item.id)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F05EA]"
                                aria-expanded={openId === item.id}
                                aria-controls={`answer-${item.id}`}
                            >
                                <div className="flex items-start gap-4 flex-1">
                                    <span className="inline-block px-3 py-1 bg-[#FF4589]/10 text-[#FF4589] text-xs font-semibold rounded-full flex-shrink-0 mt-1">
                                        {item.category}
                                    </span>
                                    <h3 className="font-bold text-gray-900 text-balance">{item.question}</h3>
                                </div>
                                <ChevronDown
                                    className={`w-5 h-5 text-[#7F05EA] flex-shrink-0 ml-4 transition-transform duration-300 ${
                                        openId === item.id ? "rotate-180" : ""
                                    }`}
                                    aria-hidden="true"
                                />
                            </button>

                            {openId === item.id && (
                                <div
                                    id={`answer-${item.id}`}
                                    className="px-6 py-4 bg-gradient-to-br from-[#7F05EA]/5 to-[#FF4589]/5 border-t border-gray-200"
                                    role="region"
                                >
                                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-8 bg-gradient-to-br from-[#FF4589]/10 to-[#7F05EA]/10 rounded-lg text-center">
                    <p className="text-gray-700 mb-4">Ainda tem dúvidas? Nossa equipe está pronta para ajudar!</p>
                    <button className="btn-primary" aria-label="Entrar em contato com suporte">
                        Fale com um Especialista
                    </button>
                </div>
            </div>
        </section>
    );
}
