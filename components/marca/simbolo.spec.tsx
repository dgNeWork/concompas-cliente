import { render, screen } from "@testing-library/react";
import { Simbolo } from "./simbolo";

describe("Simbolo", () => {
  it("es decorativo por defecto: los lectores de pantalla lo ignoran", () => {
    const { container } = render(<Simbolo />);
    const svg = container.querySelector("svg");

    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).not.toHaveAttribute("role");
  });

  it("con título, se anuncia como imagen con ese nombre", () => {
    render(<Simbolo titulo="ConCompas" />);

    expect(screen.getByRole("img", { name: "ConCompas" })).toBeInTheDocument();
  });

  it("usa los colores de la paleta para adaptarse al modo claro y oscuro", () => {
    const { container } = render(<Simbolo />);
    const html = container.innerHTML;

    expect(html).toContain("var(--marca-azul)");
    expect(html).toContain("var(--marca-rojo)");
  });

  it("genera una máscara distinta en cada símbolo para que no se pisen", () => {
    // Caso real: el símbolo aparece a la vez en la cabecera y en el pie
    const { container } = render(
      <>
        <Simbolo />
        <Simbolo />
      </>,
    );
    const ids = Array.from(container.querySelectorAll("mask")).map((m) => m.id);

    expect(ids).toHaveLength(2);
    expect(new Set(ids).size).toBe(2);
    // Y cada anillo usa la máscara de su propio símbolo
    container.querySelectorAll("svg").forEach((svg, i) => {
      expect(svg.querySelector("g[mask]")).toHaveAttribute("mask", `url(#${ids[i]})`);
    });
  });
});
