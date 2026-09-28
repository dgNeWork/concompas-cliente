import Link from "next/link";
import { Logo } from "@/components/marca/logo";
import { ThemeToggle } from "@/components/theme-toggle";

// Cabecera común a todas las páginas de la web del cliente.
//
// - sticky + top-0: se queda arriba al hacer scroll, para tener siempre a mano
//   la vuelta al inicio y el cambio de tema.
// - Fondo semitransparente con desenfoque (backdrop-blur): el contenido se
//   intuye por debajo al hacer scroll. Es un recurso moderno pero discreto,
//   acorde con el objetivo de diseño (atractiva y a la vez sobria).
// - El contenido se limita a max-w-6xl y se centra, igual que el resto de la
//   página, para que en pantallas anchas no se estire de lado a lado.
export function Cabecera() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="ConCompas, ir al inicio"
          className="rounded-md text-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <Logo />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
