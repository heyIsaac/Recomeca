"use client";

import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const imgLogo1 = "https://www.figma.com/api/mcp/asset/ac516521-8261-4a46-936b-71a45d89b03b";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "Benefícios", href: "#beneficios" },
        { label: "Como Funciona", href: "#como-funciona" },
        { label: "Depoimentos", href: "#depoimentos" },
        { label: "Sobre Nós", href: "#sobre-nos" },
        { label: "Contato", href: "#contato" },
    ];

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 backdrop-blur-sm"
            role="banner"
            aria-label="Cabeçalho principal"
        >
            <nav
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
                aria-label="Navegação principal"
            >
                {/* Logo */}
                <a
                    href="#inicio"
                    className="h-12 w-48 relative shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7f05ea] transition-transform hover:scale-105 duration-200"
                    aria-label="ReComeçar 60+ - Voltar para o início"
                >
                    <Image
                        src={imgLogo1}
                        alt="Logo ReComeçar 60+"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </a>

                {/* Desktop Navigation - Clean and Minimal */}
                <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação desktop">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-lg font-medium text-gray-700 hover:text-[#ff4589] transition-colors duration-200 py-2 px-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7f05ea] whitespace-nowrap"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA Button */}
                <div className="hidden lg:flex items-center">
                    <Button
                        className="px-8 py-3 rounded-xl text-lg font-semibold h-auto bg-gradient-to-r from-[#ff4589] to-[#7f05ea] hover:from-[#ff4589]/90 hover:to-[#7f05ea]/90 transition-all duration-300 shadow-md hover:shadow-lg"
                        aria-label="Inscrever-se no programa"
                    >
                        Inscrever-se
                    </Button>
                </div>

                {/* Mobile Menu Trigger */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="lg:hidden">
                        <button
                            className="p-3 hover:bg-gray-100 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7f05ea] transition-colors"
                            aria-label="Abrir menu de navegação"
                        >
                            <Menu className="h-7 w-7 text-gray-700" />
                        </button>
                    </SheetTrigger>

                    {/* Mobile Menu Content - Clean Design */}
                    <SheetContent side="right" className="w-full sm:w-96 p-0 bg-white">
                        <div className="flex flex-col h-full">
                            {/* Header with Logo */}
                            <div className="p-6 border-b border-gray-200">
                                <div className="h-12 w-48 relative">
                                    <Image
                                        src={imgLogo1}
                                        alt="Logo ReComeçar 60+"
                                        fill
                                        className="object-contain object-left"
                                    />
                                </div>
                            </div>

                            {/* Navigation Links - Larger Touch Targets */}
                            <nav className="flex-1 p-6 space-y-2" aria-label="Menu mobile">
                                {navItems.map((item) => (
                                    <button
                                        key={item.href}
                                        onClick={() => handleNavClick(item.href)}
                                        className="w-full text-left px-4 py-4 text-xl font-medium text-gray-700 hover:text-[#ff4589] hover:bg-gray-50 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7f05ea]"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>

                            {/* CTA Button - Prominent in Mobile */}
                            <div className="p-6 border-t border-gray-200 bg-gray-50">
                                <Button
                                    className="w-full px-6 py-4 rounded-xl text-xl font-semibold h-auto bg-gradient-to-r from-[#ff4589] to-[#7f05ea] hover:from-[#ff4589]/90 hover:to-[#7f05ea]/90 transition-all duration-300 shadow-md"
                                    aria-label="Inscrever-se no programa"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Inscrever-se
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
}
