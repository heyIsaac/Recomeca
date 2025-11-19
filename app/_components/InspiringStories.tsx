"use client";

import storiesData from "@/data/stories.json";
import Image from "next/image";
import { useState } from "react";
import StoryDetailModal from "./StoryDetailModal";

export default function InspiringStories() {
    const [selectedStory, setSelectedStory] = useState<(typeof storiesData.stories)[0] | null>(null);

    const handleCardClick = (story: (typeof storiesData.stories)[0]) => {
        setSelectedStory(story);
    };

    const handleCloseModal = () => {
        setSelectedStory(null);
    };

    return (
        <>
            <section
                id="depoimentos"
                className="w-full py-20 md:py-24 px-4 md:px-6 bg-white"
                aria-label="Histórias que Inspiram"
            >
                <div className="max-w-6xl mx-auto">
                    {/* Header - Com fontes maiores */}
                    <div className="flex flex-col gap-6 items-center justify-center mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
                            Histórias que Inspiram
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl">
                            Veja como profissionais em recolocação transformaram suas carreiras
                        </p>
                    </div>

                    {/* Stories Grid - Com textos maiores */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {storiesData.stories.map((story) => (
                            <button
                                key={story.id}
                                onClick={() => handleCardClick(story)}
                                className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 overflow-hidden transition-all duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#ff4589] focus-visible:ring-offset-2 cursor-pointer"
                                aria-label={`Ver história de ${story.name}`}
                            >
                                {/* Image Container */}
                                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                                    <Image
                                        src={story.photo}
                                        alt={story.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Gradient Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff4589]/0 to-[#7f05ea]/0 group-hover:from-[#ff4589]/5 group-hover:to-[#7f05ea]/5 transition-all duration-300" />
                                </div>

                                {/* Content - Textos maiores */}
                                <div className="p-6 space-y-6">
                                    {/* Quote - Tamanho maior para melhor leitura */}
                                    <div>
                                        <p className="text-lg text-gray-700 leading-relaxed line-clamp-3 text-left italic">
                                            "{story.quote}"
                                        </p>
                                    </div>

                                    {/* Separator com mais contraste */}
                                    <div className="h-0.5 w-full bg-gradient-to-r from-[#ff4589]/30 via-[#ff4589]/15 to-[#7f05ea]/30" />

                                    {/* Name and Career Transition - Fontes maiores */}
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-semibold text-gray-900 text-left group-hover:text-[#ff4589] transition-colors duration-300">
                                            {story.name}
                                        </h3>
                                        <div className="text-base text-gray-600 space-y-2 text-left">
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium">De:</span>
                                                <span>{story.from}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium">Para:</span>
                                                <span className="bg-gradient-to-r from-[#ff4589] to-[#7f05ea] bg-clip-text text-transparent font-semibold">
                                                    {story.to}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal de Detalhes */}
            {selectedStory && <StoryDetailModal story={selectedStory} onClose={handleCloseModal} />}
        </>
    );
}
