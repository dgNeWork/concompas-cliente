import { cn } from "@/lib/utils";
import { Simbolo } from "./simbolo";

type LogoProps = {
  className?: string;
};

// Logo completo: símbolo + nombre "concompas".
//
// El nombre va como texto real y no como imagen: se ve nítido a cualquier
// tamaño, se adapta al modo oscuro, lo leen los buscadores y los lectores de
// pantalla. Igual que en el logo original, "con" va en azul marino y "compas"
// en terracota, en minúsculas.
//
// El tamaño se controla con el font-size del contenedor (text-xl, text-3xl...):
// el símbolo mide en "em", así que crece y encoge siempre en proporción al texto.
export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-extrabold tracking-tight", className)}>
      <Simbolo className="size-[1.6em]" />
      <span className="leading-none">
        <span className="text-marca-azul">con</span>
        <span className="text-marca-terracota">compas</span>
      </span>
    </span>
  );
}
