const nextJest = require("next/jest");

// next/jest configura automáticamente SWC para transformar TS/JSX, el mapeo de
// CSS/imágenes y la carga de .env — evita tener que montar esa configuración a
// mano como sí hizo falta en concompas-backend (que no usa Next.js).
const createJestConfig = nextJest({ dir: "./" });

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
  ],
  coverageDirectory: "coverage",
};

module.exports = createJestConfig(customJestConfig);
