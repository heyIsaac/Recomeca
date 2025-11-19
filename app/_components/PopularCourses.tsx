"use client";

import { Clock, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const courses = [
    {
        id: 1,
        title: "Fundamentos de IA e Automação",
        category: "ia",
        duration: "6 semanas",
        level: "Iniciante",
        students: 3200,
        description: "Entenda como IA está transformando o mercado de trabalho de forma simples e prática",
        image: "/ai-course.avif",
    },
    {
        id: 2,
        title: "Data Science Aplicado ao Business",
        category: "dados",
        duration: "8 semanas",
        level: "Intermediário",
        students: 2100,
        description: "Análise de dados para tomada de decisão estratégica com exemplos reais",
        image: "/data_science-course.avif",
    },
    {
        id: 3,
        title: "Cloud Computing - AWS Essencial",
        category: "cloud",
        duration: "5 semanas",
        level: "Iniciante",
        students: 2800,
        description: "Implante aplicações na nuvem com confiança e segurança",
        image: "/cloud_comp-course.avif",
    },
    {
        id: 4,
        title: "Desenvolvimento Web Moderno",
        category: "web",
        duration: "10 semanas",
        level: "Intermediário",
        students: 4100,
        description: "Crie sites modernos com tecnologias atuais do mercado",
        image: "/web-course.avif",
    },
    {
        id: 5,
        title: "Gestão de Projetos Ágil",
        category: "gestao",
        duration: "4 semanas",
        level: "Iniciante",
        students: 1900,
        description: "Metodologias Scrum e Kanban na prática para gestão eficiente",
        image: "/project-course.avif",
    },
    {
        id: 6,
        title: "Cibersegurança - Proteção de Dados",
        category: "seguranca",
        duration: "7 semanas",
        level: "Avançado",
        students: 1200,
        description: "Proteja sistemas e dados em ambiente corporativo com técnicas atualizadas",
        image: "/cyber-course.avif",
    },
];

const categories = [
    { id: "all", label: "Todos" },
    { id: "ia", label: "IA & Automação" },
    { id: "dados", label: "Análise de Dados" },
    { id: "cloud", label: "Computação em Nuvem" },
    { id: "web", label: "Desenvolvimento Web" },
    { id: "gestao", label: "Gestão" },
    { id: "seguranca", label: "Segurança Digital" },
];

export default function PopularCourses() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredCourses =
        selectedCategory === "all" ? courses : courses.filter((c) => c.category === selectedCategory);

    return (
        <section id="cursos" className="w-full py-20 md:py-28 px-4 md:px-6 bg-white" aria-labelledby="cursos-title">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 id="cursos-title" className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
                        Cursos Populares
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Escolha entre cursos especializados em tecnologias do futuro, feitos para o seu ritmo de
                        aprendizado
                    </p>
                </div>

                <div
                    className="flex flex-wrap justify-center gap-3 mb-16"
                    role="group"
                    aria-label="Filtrar cursos por categoria"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-6 py-3 text-lg font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7F05EA] ${
                                selectedCategory === cat.id
                                    ? "rounded-full bg-gradient-to-r from-[#FF4589] to-[#7F05EA] text-white shadow-lg"
                                    : "rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                            }`}
                            aria-pressed={selectedCategory === cat.id}
                            aria-label={`Filtrar por ${cat.label}`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course) => (
                        <article
                            key={course.id}
                            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#7F05EA]"
                        >
                            <div className="relative h-48 bg-gray-100 overflow-hidden">
                                <Image
                                    src={course.image}
                                    alt={`Imagem do curso ${course.title}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute top-4 left-4">
                                    <span
                                        className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
                                            course.level === "Iniciante"
                                                ? "bg-green-100 text-green-700"
                                                : course.level === "Intermediário"
                                                ? "bg-blue-100 text-blue-700"
                                                : "bg-purple-100 text-purple-700"
                                        }`}
                                    >
                                        {course.level}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-[#FF4589] transition-colors">
                                        {course.title}
                                    </h3>
                                </div>

                                {/* Course Description */}
                                <p className="text-base text-gray-600 leading-relaxed mb-6">{course.description}</p>

                                {/* Course Meta */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Clock className="w-5 h-5 text-[#FF4589]" aria-hidden="true" />
                                        <span className="text-base">{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Users className="w-5 h-5 text-[#7F05EA]" aria-hidden="true" />
                                        <span className="text-base">{course.students.toLocaleString()} alunos</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-6">
                                    <button
                                        className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-gray-100 hover:bg-gradient-to-r hover:from-[#FF4589] hover:to-[#7F05EA] text-gray-700 hover:text-white rounded-xl transition-all duration-300 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F05EA]"
                                        aria-label={`Inscrever-se no curso ${course.title}`}
                                    >
                                        <span className="text-base font-semibold">Inscrever-se</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-600">Nenhum curso encontrado nesta categoria. Tente outra!</p>
                    </div>
                )}
            </div>
        </section>
    );
}
