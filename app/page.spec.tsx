import { render, screen } from "@testing-library/react";
import Home from "./page";

// Portada provisional (la definitiva es el Ticket 36). Se comprueba lo mínimo:
// que tiene un único titular principal, necesario para accesibilidad y SEO.
describe("Portada provisional", () => {
  it("tiene un único titular principal que habla de reservar taxi en Cádiz", () => {
    render(<Home />);

    const titulares = screen.getAllByRole("heading", { level: 1 });
    expect(titulares).toHaveLength(1);
    expect(titulares[0]).toHaveTextContent("Tu taxi en la provincia de Cádiz, con reserva");
  });
});
