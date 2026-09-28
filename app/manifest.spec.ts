/**
 * @jest-environment node
 */
// Se ejecuta en entorno node (no jsdom) porque necesita leer archivos del disco
// con fs para comprobar que los iconos existen de verdad.
import fs from "node:fs";
import path from "node:path";
import manifest from "./manifest";

// El manifiesto no tiene lógica, pero sí un riesgo real: que un icono apunte a
// un archivo que no existe (por ejemplo, al renombrar o sustituir el logo). El
// navegador no avisa de ese error; simplemente la web se instala sin icono.
// Estos tests lo detectan antes de llegar a producción.
describe("manifest", () => {
  const datos = manifest();

  it("identifica la app como ConCompas, en español y a pantalla completa", () => {
    expect(datos.name).toBe("ConCompas");
    expect(datos.lang).toBe("es");
    expect(datos.display).toBe("standalone");
    expect(datos.start_url).toBe("/");
  });

  it("usa los colores de marca", () => {
    expect(datos.theme_color).toBe("#092349");
    expect(datos.background_color).toBe("#F5F2EC");
  });

  it("incluye un icono adaptable (maskable) para Android", () => {
    const maskable = datos.icons?.filter((icono) => icono.purpose === "maskable");
    expect(maskable).toHaveLength(1);
  });

  it("todos los iconos apuntan a archivos que existen en public/", () => {
    const rutasPublicas = (datos.icons ?? []).map((icono) => icono.src);
    expect(rutasPublicas.length).toBeGreaterThan(0);

    for (const ruta of rutasPublicas) {
      // "/brand/icono-192.png" se sirve desde "public/brand/icono-192.png"
      const archivo = path.join(process.cwd(), "public", ruta);
      expect(fs.existsSync(archivo)).toBe(true);
    }
  });
});
