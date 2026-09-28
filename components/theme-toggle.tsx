"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Opciones del selector. Se definen como datos (y no como tres bloques de JSX
// repetidos) para que añadir o renombrar una opción sea tocar una sola línea.
const OPCIONES_TEMA = [
  { valor: "light", etiqueta: "Claro", Icono: Sun },
  { valor: "dark", etiqueta: "Oscuro", Icono: Moon },
  { valor: "system", etiqueta: "Como el sistema", Icono: Monitor },
] as const;

// Botón para elegir el tema de la web: claro, oscuro o el del sistema.
//
// El icono del botón (sol o luna) se decide con CSS (clases dark:) y no con el
// valor de useTheme(): en el servidor no se conoce el tema del usuario, y si el
// icono dependiera de JavaScript, el HTML del servidor y el del navegador no
// coincidirían (error de hidratación) o se vería un parpadeo al cargar.
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* relative: para superponer sol y luna en el mismo sitio.
            size-10 (40 px): área táctil cómoda para el dedo en móvil. */}
        <Button variant="ghost" size="icon" className="relative size-10" aria-label="Cambiar tema">
          <Sun className="size-5 scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute size-5 scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* Grupo de opciones excluyentes: marca con un punto la elegida */}
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {OPCIONES_TEMA.map(({ valor, etiqueta, Icono }) => (
            <DropdownMenuRadioItem key={valor} value={valor}>
              <Icono className="size-4" aria-hidden="true" />
              {etiqueta}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
