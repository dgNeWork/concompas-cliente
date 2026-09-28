import { render, screen } from "@testing-library/react";
import { Logo } from "./logo";

describe("Logo", () => {
  it("muestra el nombre como texto, con 'con' y 'compas' en sus colores de marca", () => {
    render(<Logo />);

    expect(screen.getByText("con")).toHaveClass("text-marca-azul");
    expect(screen.getByText("compas")).toHaveClass("text-marca-terracota");
  });

  it("incluye el símbolo como decorativo, porque el nombre ya se lee en el texto", () => {
    const { container } = render(<Logo />);

    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("acepta clases extra para ajustar el tamaño", () => {
    const { container } = render(<Logo className="text-3xl" />);

    expect(container.firstChild).toHaveClass("text-3xl");
  });
});
