"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

// Proveedor del tema (claro / oscuro / sistema) para toda la app.
//
// Envuelve al de next-themes con la configuración de ConCompas para que el
// layout solo tenga que usar <ThemeProvider> sin repetir opciones:
// - attribute="class": añade la clase "dark" a <html>, que es lo que activa la
//   paleta oscura definida en globals.css (.dark { ... }).
// - defaultTheme="system" + enableSystem: por defecto se sigue la preferencia
//   del sistema operativo del usuario; el selector permite cambiarla, y
//   next-themes recuerda la elección en localStorage.
// - disableTransitionOnChange: evita que todos los colores "se animen" a la vez
//   al cambiar de tema, que resulta brusco.
//
// Es un Client Component ("use client") porque necesita el navegador
// (localStorage y la media query del sistema); el layout sigue siendo de servidor.
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
