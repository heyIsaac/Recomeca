"use client";

import { useFormValidation } from "../_hooks/useFormValidation";
import { simulateContactSubmit } from "../_services/contactService";
import { Mail, Phone, User, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const areasOfInterest = [
    { value: "", label: "Selecione uma área" },
    { value: "ia", label: "IA & Automação" },
    { value: "dados", label: "Análise de Dados" },
    { value: "cloud", label: "Computação em Nuvem" },
    { value: "web", label: "Desenvolvimento Web" },
    { value: "gestao", label: "Gestão de Projetos" },
    { value: "seguranca", label: "Segurança Digital" },
    { value: "outra", label: "Outra área" },
];

const experienceLevels = [
    { value: "", label: "Selecione sua experiência" },
    { value: "iniciante", label: "Iniciante - Pouca experiência com tecnologia" },
    { value: "basico", label: "Básico - Conheço o essencial" },
    { value: "intermediario", label: "Intermediário - Tenho alguma experiência" },
    { value: "avancado", label: "Avançado - Domino bem a tecnologia" },
];

export default function ContactForm() {
    const {
        formData,
        errors,
        isSubmitting,
        submitStatus,
        updateField,
        validateForm,
        setIsSubmitting,
        setSubmitStatus,
        resetForm,
    } = useFormValidation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setSubmitStatus("error");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("sending");

        try {
            await simulateContactSubmit(formData);
            setSubmitStatus("success");
            resetForm();
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const getStatusMessage = () => {
        switch (submitStatus) {
            case "success":
                return {
                    message: "Mensagem enviada com sucesso! Entraremos em contato em até 24 horas.",
                    icon: CheckCircle,
                    color: "text-green-600",
                    bgColor: "bg-green-50 border-green-200",
                };
            case "error":
                return {
                    message: "Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.",
                    icon: AlertCircle,
                    color: "text-red-600",
                    bgColor: "bg-red-50 border-red-200",
                };
            case "sending":
                return {
                    message: "Enviando sua mensagem...",
                    icon: Loader2,
                    color: "text-blue-600",
                    bgColor: "bg-blue-50 border-blue-200",
                };
            default:
                return null;
        }
    };

    const statusInfo = getStatusMessage();

    const formatPhone = (value) => {
        // Remove tudo que não é número
        const numbers = value.replace(/\D/g, "");

        // Aplica a máscara (11) 99999-9999
        if (numbers.length <= 11) {
            if (numbers.length <= 2) {
                return numbers;
            } else if (numbers.length <= 6) {
                return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
            } else if (numbers.length <= 10) {
                return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
            } else {
                return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
            }
        }
        return value;
    };

    const handlePhoneChange = (e) => {
        const formatted = formatPhone(e.target.value);
        updateField("phone", formatted);
    };

    return (
        <section id="contato" className="w-full py-20 md:py-28 px-4 md:px-6 bg-gray-50" aria-labelledby="contact-title">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 id="contact-title" className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
                        Comece Sua{" "}
                        <span className="bg-gradient-to-r from-[#FF4589] to-[#7F05EA] bg-clip-text text-transparent">
                            Transformação
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Fale conosco e descubra como podemos ajudar você a se reconectar com o mercado de trabalho
                    </p>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    {statusInfo && (
                        <div
                            className={`mb-6 p-4 rounded-lg border ${statusInfo.bgColor} flex items-center gap-3 transition-all duration-300`}
                        >
                            {statusInfo.icon && (
                                <statusInfo.icon
                                    className={`w-5 h-5 ${statusInfo.color} ${
                                        submitStatus === "sending" ? "animate-spin" : ""
                                    }`}
                                />
                            )}
                            <span className={statusInfo.color}>{statusInfo.message}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                                    Nome Completo *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => updateField("name", e.target.value)}
                                        className={`w-full pl-10 pr-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7F05EA] focus:border-transparent text-lg transition-colors ${
                                            errors.name
                                                ? "border-red-500 bg-red-50"
                                                : "border-gray-300 hover:border-gray-400"
                                        }`}
                                        placeholder="Seu nome completo"
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                        aria-invalid={!!errors.name}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                {errors.name && (
                                    <p
                                        id="name-error"
                                        className="text-red-600 text-sm mt-2 flex items-center gap-1"
                                        role="alert"
                                    >
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => updateField("email", e.target.value)}
                                        className={`w-full pl-10 pr-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7F05EA] focus:border-transparent text-lg transition-colors ${
                                            errors.email
                                                ? "border-red-500 bg-red-50"
                                                : "border-gray-300 hover:border-gray-400"
                                        }`}
                                        placeholder="seu@email.com"
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                        aria-invalid={!!errors.email}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                {errors.email && (
                                    <p
                                        id="email-error"
                                        className="text-red-600 text-sm mt-2 flex items-center gap-1"
                                        role="alert"
                                    >
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
                                    Telefone *
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        className={`w-full pl-10 pr-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7F05EA] focus:border-transparent text-lg transition-colors ${
                                            errors.phone
                                                ? "border-red-500 bg-red-50"
                                                : "border-gray-300 hover:border-gray-400"
                                        }`}
                                        placeholder="(11) 99999-9999"
                                        aria-describedby={errors.phone ? "phone-error" : undefined}
                                        aria-invalid={!!errors.phone}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                {errors.phone && (
                                    <p
                                        id="phone-error"
                                        className="text-red-600 text-sm mt-2 flex items-center gap-1"
                                        role="alert"
                                    >
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.phone}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="area" className="block text-lg font-medium text-gray-700 mb-2">
                                    Área de Interesse *
                                </label>
                                <select
                                    id="area"
                                    value={formData.area}
                                    onChange={(e) => updateField("area", e.target.value)}
                                    className={`w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7F05EA] focus:border-transparent text-lg transition-colors ${
                                        errors.area
                                            ? "border-red-500 bg-red-50"
                                            : "border-gray-300 hover:border-gray-400"
                                    }`}
                                    aria-describedby={errors.area ? "area-error" : undefined}
                                    aria-invalid={!!errors.area}
                                    disabled={isSubmitting}
                                >
                                    {areasOfInterest.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.area && (
                                    <p
                                        id="area-error"
                                        className="text-red-600 text-sm mt-2 flex items-center gap-1"
                                        role="alert"
                                    >
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.area}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="experience" className="block text-lg font-medium text-gray-700 mb-2">
                                Nível de Experiência com Tecnologia *
                            </label>
                            <select
                                id="experience"
                                value={formData.experience}
                                onChange={(e) => updateField("experience", e.target.value)}
                                className={`w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7F05EA] focus:border-transparent text-lg transition-colors ${
                                    errors.experience
                                        ? "border-red-500 bg-red-50"
                                        : "border-gray-300 hover:border-gray-400"
                                }`}
                                aria-describedby={errors.experience ? "experience-error" : undefined}
                                aria-invalid={!!errors.experience}
                                disabled={isSubmitting}
                            >
                                {experienceLevels.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            {errors.experience && (
                                <p
                                    id="experience-error"
                                    className="text-red-600 text-sm mt-2 flex items-center gap-1"
                                    role="alert"
                                >
                                    <AlertCircle className="w-4 h-4" />
                                    {errors.experience}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                                Mensagem *
                            </label>
                            <div className="relative">
                                <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => updateField("message", e.target.value)}
                                    rows={5}
                                    className={`w-full pl-10 pr-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7F05EA] focus:border-transparent text-lg transition-colors resize-none ${
                                        errors.message
                                            ? "border-red-500 bg-red-50"
                                            : "border-gray-300 hover:border-gray-400"
                                    }`}
                                    placeholder="Conte-nos sobre seus objetivos, dúvidas ou como podemos ajudar..."
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                    aria-invalid={!!errors.message}
                                    disabled={isSubmitting}
                                />
                            </div>
                            {errors.message && (
                                <p
                                    id="message-error"
                                    className="text-red-600 text-sm mt-2 flex items-center gap-1"
                                    role="alert"
                                >
                                    <AlertCircle className="w-4 h-4" />
                                    {errors.message}
                                </p>
                            )}
                            <p className="text-sm text-gray-500 mt-2">{formData.message.length}/500 caracteres</p>
                        </div>

                        <div className="pt-4">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full  bg-gradient-to-r from-[#FF4589] to-[#7F05EA] hover:from-[#FF4589]/90 hover:to-[#7F05EA]/90 text-white text-lg font-semibold p-8 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7F05EA] disabled:opacity-50  disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <Mail className="w-5 h-5" />
                                        Enviar Mensagem
                                    </>
                                )}
                            </Button>
                        </div>

                        <div className="text-center">
                            <p className="text-gray-500 text-sm">
                                Ou entre em contato diretamente:{" "}
                                <a
                                    href="tel:+551133333333"
                                    className="text-[#FF4589] hover:text-[#7F05EA] transition-colors font-medium"
                                >
                                    +55 (11) 3333-3333
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
