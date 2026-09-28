import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Plus Jakarta Sans: sans-serif geométrica y moderna, muy usada en fintech y
// startups. Encaja con el objetivo de diseño de ConCompas: atractiva para gente
// joven y, a la vez, seria y profesional para un público de negocios (una fuente
// muy redondeada como Nunito quedaba demasiado informal en titulares grandes).
//
// next/font la descarga en el build y la sirve desde nuestro propio dominio (sin
// peticiones a Google desde el navegador del usuario) y evita el salto de
// maquetación al cargar la fuente. Se expone como variable CSS (--font-jakarta)
// que globals.css asigna a font-sans.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
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
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
