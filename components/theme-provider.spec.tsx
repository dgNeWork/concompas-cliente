import { render, screen } from "@testing-library/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider } from "./theme-provider";

// Se simula el proveedor de next-themes para poder comprobar con qué opciones
// lo configura el nuestro: son decisiones de producto (por defecto, el tema del
// sistema; clase "dark" en <html>) y un cambio accidental rompería el modo oscuro.
jest.mock("next-themes", () => ({
  ThemeProvider: jest.fn(({ children }: { children: React.ReactNode }) => <>{children}</>),
}));

const proveedorMock = jest.mocked(NextThemesProvider);

describe("ThemeProvider", () => {
  beforeEach(() => proveedorMock.mockClear());

  it("muestra su contenido", () => {
    render(
      <ThemeProvider>
        <p>Contenido de la página</p>
      </ThemeProvider>,
    );

    expect(screen.getByText("Contenido de la página")).toBeInTheDocument();
  });

  it("sigue el tema del sistema por defecto y lo aplica con la clase dark", () => {
    render(<ThemeProvider>contenido</ThemeProvider>);

    expect(proveedorMock.mock.calls[0][0]).toMatchObject({
      attribute: "class",
      defaultTheme: "system",
      enableSystem: true,
      disableTransitionOnChange: true,
    });
  });

  it("permite sobrescribir una opción puntualmente", () => {
    render(<ThemeProvider defaultTheme="dark">contenido</ThemeProvider>);

    expect(proveedorMock.mock.calls[0][0]).toMatchObject({ defaultTheme: "dark" });
  });
});
