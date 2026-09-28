import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./theme-toggle";

// Se simula next-themes: el test comprueba que el selector muestra las opciones
// y pide el tema correcto, no el funcionamiento interno de la librería.
jest.mock("next-themes", () => ({ useTheme: jest.fn() }));

const useThemeMock = jest.mocked(useTheme);

describe("ThemeToggle", () => {
  const setTheme = jest.fn();

  beforeEach(() => {
    setTheme.mockClear();
    useThemeMock.mockReturnValue({
      theme: "system",
      setTheme,
      themes: ["light", "dark", "system"],
    } as unknown as ReturnType<typeof useTheme>);
  });

  it("muestra un botón accesible para cambiar el tema", () => {
    render(<ThemeToggle />);

    expect(screen.getByRole("button", { name: "Cambiar tema" })).toBeInTheDocument();
  });

  it("al abrirlo ofrece las tres opciones y marca la actual", async () => {
    const usuario = userEvent.setup();
    render(<ThemeToggle />);

    await usuario.click(screen.getByRole("button", { name: "Cambiar tema" }));

    expect(screen.getByRole("menuitemradio", { name: "Claro" })).toBeInTheDocument();
    expect(screen.getByRole("menuitemradio", { name: "Oscuro" })).toBeInTheDocument();
    // Por defecto se sigue el sistema, así que esa opción aparece marcada
    expect(screen.getByRole("menuitemradio", { name: "Como el sistema" })).toHaveAttribute(
      "aria-checked",
      "true",
    );
  });

  it.each([
    ["Claro", "light"],
    ["Oscuro", "dark"],
    ["Como el sistema", "system"],
  ])("al elegir «%s» cambia el tema a %s", async (etiqueta, valor) => {
    const usuario = userEvent.setup();
    render(<ThemeToggle />);

    await usuario.click(screen.getByRole("button", { name: "Cambiar tema" }));
    await usuario.click(screen.getByRole("menuitemradio", { name: etiqueta }));

    expect(setTheme).toHaveBeenCalledWith(valor);
  });
});
