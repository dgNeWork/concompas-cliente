# Tests (Jest)

## Contexto

A fecha de este ticket (19), `concompas-cliente` es solo el esqueleto que
generó `next init` más `services/api.ts` y `types/index.ts` — sin AuthContext,
sin pantallas de negocio, sin lógica propia todavía. Mismo criterio que se
siguió en `GiConnectFront` (Ionic/Angular): no se escriben tests contra
boilerplate solo para inflar un porcentaje.

**Lo que sí hay cubierto:** `services/api.spec.ts` verifica el comportamiento
real de `api.ts` — el fallback de `baseURL` a `http://localhost:3000` cuando
no hay `NEXT_PUBLIC_API_URL`, que la usa cuando sí está definida, y la
cabecera `Content-Type` por defecto.

**Pendiente (no es deuda, es que aún no existe el código):** en cuanto entren
AuthContext, servicios de trayectos/reservas y pantallas con lógica real
(condicionales, validación de formularios, estados), añadir tests unitarios
de esa lógica y, donde tenga sentido, tests de componentes con React Testing
Library (ya se puede añadir `@testing-library/react` cuando llegue ese
momento — no se ha instalado todavía por no añadir una dependencia sin uso).

## Cómo correrlos

```bash
npm test              # una vez
npm run test:watch    # modo watch
npm run test:cov       # con tabla de cobertura (carpeta coverage/, no se commitea)
```
