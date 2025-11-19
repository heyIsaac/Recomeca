import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
    title: "ReColocação Digital",
    description:
        "Prepare-se para o futuro do trabalho. Cursos especializados, certificações reconhecidas e comunidade de profissionais em recolocação.",

    openGraph: {
        title: "O Futuro do Trabalho",
        description: "Transforme sua carreira com habilidades digitais",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <head>
                <meta name="theme-color" content="#FF4589" />
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            </head>
            <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-white text-gray-900`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
