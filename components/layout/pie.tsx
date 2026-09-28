import { Simbolo } from "@/components/marca/simbolo";

// Pie de página común. De momento, sobrio: marca, qué es ConCompas y el año.
// Los enlaces legales (términos, privacidad) llegarán con el Ticket 12; no se
// ponen antes para no enlazar a páginas que aún no existen.
export function Pie() {
  // Se calcula al generar la página: el año se actualiza solo en cada despliegue
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-4 py-8 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <div className="flex items-center gap-2">
          <Simbolo className="size-6" />
          <span>Taxi con reserva en la provincia de Cádiz</span>
        </div>
        <p>© {anio} ConCompas</p>
      </div>
    </footer>
  );
}
