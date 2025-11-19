"use client";

import { Button } from "@/app/_components/ui/button";
import { Dialog, DialogContent } from "@/app/_components/ui/dialog";
import { ArrowLeft, Briefcase, Calendar, User, Award, TrendingUp, Target, Lightbulb } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Story = {
    id: number;
    name: string;
    age: number;
    location: string;
    quote: string;
    from: string;
    to: string;
    photo: string;
    stats: {
        projetos: number;
        entrevistas: number;
        ofertas: number;
        meses: number;
    };
    resultado: string;
    desafios: string;
    cursos: string[];
    dica: string;
};

interface StoryDetailModalProps {
    story: Story;
    onClose: () => void;
}

export default function StoryDetailModal({ story, onClose }: StoryDetailModalProps) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent className="w-screen h-screen max-w-none max-h-none bg-white rounded-none overflow-y-auto p-0 border-0 m-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />

                <div className="p-6 md:p-8 lg:p-12 max-w-7xl mx-auto">
                    <div className="mb-8">
                        <Button
                            variant="ghost"
                            onClick={onClose}
                            className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 p-2 h-auto rounded-lg hover:bg-gray-100 transition-all duration-200"
                            aria-label="Voltar para lista de histórias"
                        >
                            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
                            <span className="text-sm font-medium">Voltar</span>
                        </Button>
                    </div>

                    <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-12">
                        <div className="space-y-8">
                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
                                {story.photo ? (
                                    <>
                                        <Image
                                            src={story.photo}
                                            alt={`Foto de ${story.name}`}
                                            fill
                                            className={`object-cover transition-all duration-500 ${
                                                imageLoaded ? "opacity-100" : "opacity-0"
                                            }`}
                                            onLoad={() => setImageLoaded(true)}
                                            priority
                                        />
                                        {!imageLoaded && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                        <User className="h-16 w-16" />
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <StatCard
                                    value={story.stats.projetos}
                                    label="Projetos"
                                    icon={<Briefcase className="h-4 w-4" />}
                                />
                                <StatCard
                                    value={story.stats.entrevistas}
                                    label="Entrevistas"
                                    icon={<User className="h-4 w-4" />}
                                />
                                <StatCard
                                    value={story.stats.ofertas}
                                    label="Ofertas"
                                    icon={<Award className="h-4 w-4" />}
                                />
                                <StatCard
                                    value={story.stats.meses}
                                    label="Meses"
                                    icon={<Calendar className="h-4 w-4" />}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="space-y-3">
                                <h2 className="text-3xl lg:text-4xl font-light text-gray-900">{story.name}</h2>
                                <div className="flex items-center gap-2 text-gray-500">
                                    <span className="text-sm">{story.age} anos</span>
                                    <span>•</span>
                                    <span className="text-sm">{story.location}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="text-center">
                                    <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">De</div>
                                    <div className="text-sm font-medium text-gray-700">{story.from}</div>
                                </div>

                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200">
                                    <TrendingUp className="h-4 w-4 text-gray-600" />
                                </div>

                                <div className="text-center">
                                    <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Para</div>
                                    <div className="text-sm font-semibold text-gray-900">{story.to}</div>
                                </div>
                            </div>

                            <div className="border-l-4 border-gray-300 pl-6 py-2">
                                <p className="text-lg text-gray-700 italic leading-relaxed">{story.quote}</p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <ContentSection
                                        icon={<Target className="h-4 w-4" />}
                                        title="Resultado"
                                        content={story.resultado}
                                    />

                                    <ContentSection
                                        icon={<Briefcase className="h-4 w-4" />}
                                        title="Cursos Realizados"
                                        isList
                                    >
                                        <ul className="space-y-2">
                                            {story.cursos.map((curso, index) => (
                                                <li key={index} className="flex items-start gap-3 text-gray-600">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400" />
                                                    <span className="text-sm flex-1">{curso}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </ContentSection>
                                </div>

                                <div className="space-y-6">
                                    <ContentSection
                                        icon={<TrendingUp className="h-4 w-4" />}
                                        title="Desafios Superados"
                                        content={story.desafios}
                                    />

                                    <ContentSection
                                        icon={<Lightbulb className="h-4 w-4" />}
                                        title="Dica para Iniciantes"
                                        content={story.dica}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

function StatCard({ value, label, icon }: { value: number; label: string; icon: React.ReactNode }) {
    return (
        <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="flex items-center justify-between mb-2">
                <div className="text-2xl font-light text-gray-900">{value}</div>
                <div className="text-gray-400">{icon}</div>
            </div>
            <div className="text-xs text-gray-500 font-medium">{label}</div>
        </div>
    );
}

function ContentSection({
    icon,
    title,
    content,
    children,
    isList = false,
}: {
    icon: React.ReactNode;
    title: string;
    content?: string;
    children?: React.ReactNode;
    isList?: boolean;
}) {
    return (
        <div>
            <div className="flex items-center gap-3 mb-3">
                <div className="text-gray-600">{icon}</div>
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            </div>
            {isList ? children : <p className="text-gray-600 leading-relaxed text-sm pl-7">{content}</p>}
        </div>
    );
}
