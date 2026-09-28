import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

// Nunito: sans-serif redondeada, cercana a la tipografía del logo "concompas" y
// muy legible en pantallas pequeñas. next/font la descarga en el build y la sirve
// desde nuestro propio dominio (sin peticiones a Google desde el navegador del
// usuario) y evita el salto de maquetación al cargar la fuente.
// Se expone como variable CSS (--font-nunito) que globals.css asigna a font-sans.
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ConCompas",
  description:
    "Plataforma de intermediación de transporte en taxi para la provincia de Cádiz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
