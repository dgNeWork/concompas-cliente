import { render, screen } from "@testing-library/react";
import { Cabecera } from "./cabecera";

// El selector de tema tiene sus propios tests; aquí solo interesa que la
// cabecera lo incluya, así que se sustituye por un botón simple.
jest.mock("@/components/theme-toggle", () => ({
  ThemeToggle: () => <button type="button">Cambiar tema</button>,
}));

describe("Cabecera", () => {
  it("es la cabecera de la página (landmark banner)", () => {
    render(<Cabecera />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("el logo enlaza al inicio con un nombre accesible", () => {
    render(<Cabecera />);

    expect(screen.getByRole("link", { name: "ConCompas, ir al inicio" })).toHaveAttribute(
      "href",
      "/",
    );
  });

  it("incluye el selector de tema", () => {
    render(<Cabecera />);

    expect(screen.getByRole("button", { name: "Cambiar tema" })).toBeInTheDocument();
  });
});
