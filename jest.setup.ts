// Preparación común a todos los tests (se carga antes de cada archivo de test).

// Añade a expect() comprobaciones pensadas para el DOM, más legibles que las de
// serie: toBeInTheDocument(), toHaveAttribute(), toBeVisible()...
import "@testing-library/jest-dom";

// jsdom (el "navegador" simulado de Jest) no implementa algunas APIs que usan
// los componentes de Radix (menús desplegables, diálogos...). Se sustituyen por
// versiones vacías: no hace falta que funcionen de verdad, solo que existan
// para que los componentes se puedan montar y abrir en los tests.
if (typeof window !== "undefined") {
  class ResizeObserverVacio {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.ResizeObserver ??= ResizeObserverVacio;
  Element.prototype.scrollIntoView ??= () => {};
  Element.prototype.hasPointerCapture ??= () => false;
  Element.prototype.releasePointerCapture ??= () => {};
}
