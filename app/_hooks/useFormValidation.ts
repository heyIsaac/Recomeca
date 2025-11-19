import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
    name: z
        .string()
        .min(2, "Nome deve ter pelo menos 2 caracteres")
        .max(50, "Nome muito longo")
        .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),
    email: z.string().email("Email inválido"),
    phone: z
        .string()
        .min(10, "Telefone deve ter pelo menos 10 dígitos")
        .regex(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, "Formato inválido. Use: (11) 99999-9999"),
    area: z.string().min(1, "Selecione uma área de interesse"),
    experience: z.string().min(1, "Selecione seu nível de experiência"),
    message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(500, "Mensagem muito longa"),
});

export const useFormValidation = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        area: "",
        experience: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");

    const validateField = (field, value) => {
        try {
            contactSchema.pick({ [field]: true }).parse({ [field]: value });
            setErrors((prev) => ({ ...prev, [field]: "" }));
            return true;
        } catch (error) {
            const fieldError = error.errors[0]?.message || "Campo inválido";
            setErrors((prev) => ({ ...prev, [field]: fieldError }));
            return false;
        }
    };

    const validateForm = () => {
        try {
            contactSchema.parse(formData);
            setErrors({});
            return true;
        } catch (error) {
            const newErrors = {};
            error.errors.forEach((err) => {
                if (err.path[0]) {
                    newErrors[err.path[0]] = err.message;
                }
            });
            setErrors(newErrors);
            return false;
        }
    };

    const updateField = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));

        // Validação em tempo real apenas após o primeiro erro
        if (errors[field]) {
            validateField(field, value);
        }
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            area: "",
            experience: "",
            message: "",
        });
        setErrors({});
        setSubmitStatus("");
    };

    return {
        formData,
        errors,
        isSubmitting,
        submitStatus,
        updateField,
        validateForm,
        setIsSubmitting,
        setSubmitStatus,
        resetForm,
    };
};
