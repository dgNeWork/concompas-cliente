import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Cabecera } from "@/components/layout/cabecera";
import { Pie } from "@/components/layout/pie";
import { ThemeProvider } from "@/components/theme-provider";
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
    // suppressHydrationWarning: next-themes añade la clase "dark" a <html> en el
    // navegador antes de que React tome el control (para evitar un destello de
    // tema claro). Esa diferencia con el HTML del servidor es intencionada, así
    // que se silencia el aviso SOLO en esta etiqueta, no en sus hijos.
    <html
      lang="es"
      className={`${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {/* Estructura común a todas las páginas: cabecera fija, contenido que
              ocupa el espacio sobrante (flex-1, así el pie queda abajo aunque la
              página tenga poco contenido) y pie */}
          <Cabecera />
          <main className="flex flex-1 flex-col">{children}</main>
          <Pie />
        </ThemeProvider>
      </body>
    </html>
  );
}
