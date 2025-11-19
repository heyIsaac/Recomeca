"use client";

import Image from "next/image";

import benefitsImage from "./../../public/benefits-img.png";

const benefits = [
    {
        title: "Por que começar com o ReComeçar 60+?",
        description: [
            "Aprenda tecnologia sem complicação, receba apoio",
            "humano em cada etapa e descubra novas oportunidades",
            "no mercado tudo feito especialmente para pessoas 60+.",
        ],
    },
    {
        title: "Aqui, você aprende no seu ritmo",
        description: [
            "Conteúdo simples, suporte dedicado e caminhos reais",
            "para recolocação. Tudo pensado para que você se sinta",
            "seguro(a) para voltar ao mercado com confiança.",
        ],
    },
    {
        title: "Benefícios pensados para você",
        description: [
            "Aprendizado simples, orientação prática e oportunidades profissionais adaptadas para quem tem mais experiência.",
        ],
    },
    {
        title: "Atualize-se sem medo. Evolua com apoio",
        description: [
            "Tecnologia explicada de forma simples, aulas práticas e",
            "acesso a vagas que valorizam sua trajetória.",
        ],
    },
    {
        title: "Tecnologia simples. Apoio humano",
        description: ["Tudo em um só lugar feito para pessoas 60+."],
    },
];

export default function Benefits() {
    return (
        <section
            id="beneficios"
            className="w-full py-20 md:py-28 px-4 md:px-6 bg-white"
            aria-labelledby="beneficios-title"
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    {/* Image - Clean Layout */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden bg-gray-100">
                            <Image
                                src={benefitsImage}
                                alt="Pessoa madura sorrindo enquanto aprende tecnologia"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="mb-12">
                            <h2
                                id="beneficios-title"
                                className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight"
                            >
                                <span className="bg-gradient-to-r from-[#ff4589] to-[#7f05ea] bg-clip-text text-transparent">
                                    Benefícios
                                </span>
                                <br />
                                para começar sua trajetória!
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-[#ff4589] to-[#7f05ea] rounded-full"></div>
                        </div>

                        <div className="space-y-8">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#ff4589] to-[#7f05ea] flex items-center justify-center">
                                        <div className="w-6 h-6 flex items-center justify-center text-white font-bold text-lg">
                                            {index + 1}
                                        </div>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 leading-relaxed">
                                            {benefit.title}
                                        </h3>
                                        <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-1">
                                            {benefit.description.map((line, lineIndex) => (
                                                <p key={lineIndex} className="leading-7">
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
