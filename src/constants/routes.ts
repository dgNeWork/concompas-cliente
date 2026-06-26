// Nombres de todas las rutas de la app definidos como constantes.
// Usarlos siempre en lugar de strings literales evita errores de typo
// y permite que TypeScript detecte rutas inexistentes en tiempo de compilacion.
export const Routes = {
  // Rutas del flujo de autenticacion (pantallas publicas)
  Auth: {
    Login: "Login",
    Register: "Register",
  },

  // Rutas principales de la app (pantallas privadas, requieren login)
  Main: {
    Home: "Home",
    Trips: "Trips",
    Profile: "Profile",
  },

  // Rutas de detalle de trayectos
  Trip: {
    Detail: "TripDetail",
    Create: "TripCreate",
  },
} as const;

// Tipo que representa cualquier ruta valida de la app.
// Se usa para tipar los parametros de navegacion en React Navigation.
export type RootRoutes = typeof Routes;
