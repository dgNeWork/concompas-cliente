import nextJest from "next/jest.js";

// Configuración de Jest en formato ES module (.mjs) con import/export, que es el
// estándar actual y lo que exige el linter de Next (no permite require()). Jest
// lee este formato directamente, sin dependencias extra.
//
// next/jest configura automáticamente SWC para transformar TS/JSX, el mapeo de
// CSS/imágenes y la carga de .env — evita tener que montar esa configuración a
// mano como sí hizo falta en concompas-backend (que no usa Next.js).
const createJestConfig = nextJest({ dir: "./" });

/** @type {import("jest").Config} */
const customJestConfig = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.spec.{ts,tsx}",
    "!**/*.d.ts",
    "!**/.next/**",
    "!**/node_modules/**",
    "!next.config.ts",
    "!app/layout.tsx", // metadata estática de Next, sin lógica propia
    // Componentes generados por shadcn/ui (npx shadcn add ...): código de la
    // librería, probado en su propio proyecto. Si les añadimos lógica nuestra,
    // se testea en el componente que los use o se quita de esta lista.
    "!components/ui/**",
  ],
  coverageDirectory: "coverage",
};

// Se exporta así porque next/jest carga la configuración de Next de forma asíncrona
export default createJestConfig(customJestConfig);
