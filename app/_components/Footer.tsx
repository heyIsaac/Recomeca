"use client";

import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

import Logo from "../../public/logo.png";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-50 border-t border-gray-200" role="contentinfo">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
                    <div className="space-y-4 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src={Logo}
                                width={120}
                                height={120}
                                alt="logo"
                                className="text-xl font-semibold text-gray-900"
                            />
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed max-w-md">
                            Transformando carreiras através de educação digital acessível para a melhor idade.
                        </p>
                        <div className="flex gap-3 pt-2">
                            {[
                                { icon: Linkedin, label: "LinkedIn", href: "#" },
                                { icon: Twitter, label: "Twitter", href: "#" },
                            ].map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="p-3 bg-white border border-gray-300 rounded-lg hover:border-[#FF4589] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F05EA]"
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5 text-gray-600 hover:text-[#FF4589] transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {[
                        {
                            title: "Navegação",
                            links: [
                                { label: "Benefícios", href: "#beneficios" },
                                { label: "Como Funciona", href: "#como-funciona" },
                                { label: "Depoimentos", href: "#depoimentos" },
                                { label: "Sobre Nós", href: "#sobre-nos" },
                            ],
                        },
                        {
                            title: "Suporte",
                            links: [
                                { label: "Perguntas Frequentes", href: "#" },
                                { label: "Contato", href: "#contato" },
                                { label: "Política de Privacidade", href: "#" },
                                { label: "Termos de Uso", href: "#" },
                            ],
                        },
                        {
                            title: "Cursos",
                            links: [
                                { label: "Tecnologia Básica", href: "#" },
                                { label: "Ferramentas Digitais", href: "#" },
                                { label: "Mercado de Trabalho", href: "#" },
                                { label: "Certificados", href: "#" },
                            ],
                        },
                    ].map((section) => (
                        <div key={section.title} className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-base text-gray-600 hover:text-[#FF4589] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F05EA]"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="py-8 border-t border-gray-200 space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Fale Conosco</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Mail, text: "contato@recomecar60.com.br" },
                            { icon: Phone, text: "+55 (11) 3333-3333" },
                            { icon: MapPin, text: "São Paulo, SP - Brasil" },
                        ].map(({ icon: Icon, text }, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-3 rounded-lg hover:bg-white transition-colors"
                            >
                                <div className="p-2 bg-gradient-to-r from-[#FF4589] to-[#7F05EA] rounded-lg">
                                    <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                                </div>
                                <span className="text-base text-gray-700">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 flex flex-col lg:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-base text-center lg:text-left">
                        © 2025 ReComeçar 60+. Todos os direitos reservados.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <span className="text-gray-500 text-sm">Parceiros certificadores:</span>
                        <div className="flex gap-2">
                            {["Google", "AWS", "Microsoft"].map((cert) => (
                                <span
                                    key={cert}
                                    className="px-3 py-1 bg-white border border-gray-300 text-gray-600 text-sm rounded-lg hover:border-[#FF4589] transition-colors"
                                >
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
