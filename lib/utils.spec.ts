import { cn } from "./utils";

// cn() combina clases de Tailwind. Todos los componentes la usan para mezclar
// sus clases por defecto con las que se les pasan desde fuera, así que su
// comportamiento es un contrato del que depende toda la interfaz: si al
// actualizar la librería cambiara, estos tests lo detectarían.
describe("cn", () => {
  it("une varias clases en una sola cadena", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2");
  });

  it("ignora valores falsos, para poder aplicar clases condicionales", () => {
    const activo = false;
    expect(cn("px-4", activo && "bg-primary", undefined, null)).toBe("px-4");
  });

  it("resuelve conflictos de Tailwind: gana la última clase", () => {
    // Permite que un componente acepte className y sobrescriba su estilo por defecto
    expect(cn("px-2 bg-primary", "px-4")).toBe("bg-primary px-4");
  });
});
