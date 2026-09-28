import { render, screen } from "@testing-library/react";
import { Pie } from "./pie";

describe("Pie", () => {
  afterEach(() => jest.useRealTimers());

  it("es el pie de la página (landmark contentinfo)", () => {
    render(<Pie />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("describe qué es ConCompas", () => {
    render(<Pie />);

    expect(screen.getByText("Taxi con reserva en la provincia de Cádiz")).toBeInTheDocument();
  });

  it("muestra el año actual en el copyright, sin tener que cambiarlo a mano", () => {
    // Se fija la fecha para que el test no dependa del día en que se ejecute
    jest.useFakeTimers().setSystemTime(new Date("2031-05-10"));

    render(<Pie />);

    expect(screen.getByText("© 2031 ConCompas")).toBeInTheDocument();
  });
});
