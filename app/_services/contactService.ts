// Simulação por agora
export const simulateContactSubmit = async (formData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simula 90% de sucesso e 10% de erro
            const isSuccess = Math.random() > 0.1;

            if (isSuccess) {
                console.log("Dados que seriam enviados:", formData);
                resolve({
                    success: true,
                    message: "Mensagem enviada com sucesso!",
                });
            } else {
                reject({
                    success: false,
                    message: "Erro simulado no envio. Tente novamente.",
                });
            }
        }, 2000); // Simula delay de net
    });
};
