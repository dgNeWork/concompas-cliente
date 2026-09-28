import type { MetadataRoute } from "next";

// Manifiesto web de ConCompas. Next.js lo sirve en /manifest.webmanifest y añade
// el <link rel="manifest"> automáticamente (convención de archivo app/manifest.ts).
//
// Es lo que permite "instalar" la web en el móvil como si fuera una app (PWA):
// icono propio en la pantalla de inicio y apertura a pantalla completa sin la
// barra del navegador. Encaja con la estrategia de MVP web: probar el producto
// con usuarios reales antes de invertir en apps nativas.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ConCompas",
    short_name: "ConCompas",
    description:
      "Reserva tu taxi con antelación en la provincia de Cádiz, con precio cerrado.",
    lang: "es",
    start_url: "/",
    display: "standalone",
    // Colores de marca: fondo claro de la app y azul marino para la barra del sistema
    background_color: "#F5F2EC",
    theme_color: "#092349",
    icons: [
      // Icono con esquinas redondeadas para los sistemas que lo muestran tal cual
      { src: "/brand/icono-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icono-512.png", sizes: "512x512", type: "image/png" },
      // Versión a sangre (fondo hasta los bordes) para Android, que recorta el
      // icono con su propia forma (círculo, squircle...). El dibujo queda dentro
      // de la zona segura del 80% para que el recorte no se coma nada importante.
      {
        src: "/brand/icono-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
