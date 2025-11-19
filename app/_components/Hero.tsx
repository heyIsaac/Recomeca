"use client";
import { Button } from "@/app/_components/ui/button";
import Image from "next/image";
import { Play } from "lucide-react";

import woman from "./../../public/woman.png";

export default function Hero() {
    return (
        <section id="inicio" className="relative w-full h-screen bg-white overflow-hidden" aria-label="Seção principal">
            <div className="max-w-7xl mx-auto relative">
                <div className="pt-24 md:pt-32 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative z-10 max-w-2xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                                Aprenda tecnologia <br />
                                no seu ritmo na{" "}
                                <span className="bg-gradient-to-r from-[#ff4589] to-[#7f05ea] bg-clip-text text-transparent">
                                    ReComeçar
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                                Se atualize com praticidade e recupere seu espaço no mercado de trabalho.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Button
                                    className=" rounded-full h-14 px-8 text-lg font-semibold bg-gradient-to-r from-[#ff4589] to-[#7f05ea] hover:from-[#ff4589]/90 hover:to-[#7f05ea]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    aria-label="Saiba mais sobre o programa"
                                >
                                    Saiba mais!
                                </Button>

                                <Button
                                    variant="outline"
                                    className=" rounded-full h-14 px-8 text-lg font-semibold border-2 border-gray-300 hover:border-[#ff4589] bg-white hover:bg-gray-50 transition-all duration-300 group"
                                    aria-label="Assistir vídeo demonstrativo"
                                >
                                    <Play className="h-5 w-5 mr-2 text-[#ff4589] group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-700 group-hover:text-[#ff4589] transition-colors">
                                        Veja esse vídeo
                                    </span>
                                </Button>
                            </div>

                            <div className="border-t border-gray-200 pt-8">
                                <p className="text-sm text-gray-500 mb-4 font-medium">Empresas parceiras:</p>
                                <div className="flex flex-wrap gap-6 md:gap-8 items-center">
                                    {["duolingo", "Canva", "LinkedIn", "Adobe"].map((company) => (
                                        <div
                                            key={company}
                                            className="text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {company}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative flex justify-center items-center">
                            <div className="absolute w-full h-full max-w-2xl max-h-2xl bg-gradient-to-r from-[#ff4589]/5 to-[#7f05ea]/5 rounded-full blur-3xl -z-10" />

                            <div className="absolute top-[-206px]  w-full max-w-lg aspect-3/4">
                                <Image
                                    src={woman}
                                    alt="Mulher madura sorrindo enquanto usa um tablet, representando o público da ReComeçar"
                                    fill
                                    className="object-contain object-center drop-shadow-2xl"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-[#ff4589] to-[#7f05ea] " />
        </section>
    );
}
