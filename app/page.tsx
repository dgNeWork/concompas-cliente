import { Simbolo } from "@/components/marca/simbolo";

// Portada PROVISIONAL. La portada real, con los botones "Quiero que me lleven" y
// "Yo te llevo, soy taxista", es el Ticket 36. Esta solo sirve para ver la base
// visual del Ticket 22 (paleta, tipografía, modo oscuro) mientras tanto.
export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-6 px-4 py-16 text-center sm:px-6">
      <Simbolo className="size-28 sm:size-36" />
      <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
        Tu taxi en la provincia de Cádiz, <span className="text-marca-terracota">con reserva</span>
      </h1>
      <p className="max-w-xl text-lg text-pretty text-muted-foreground">
        Plataforma de intermediación de transporte en taxi para la provincia de Cádiz.
      </p>
      <p className="text-sm font-medium text-muted-foreground">Muy pronto.</p>
    </section>
  );
}
