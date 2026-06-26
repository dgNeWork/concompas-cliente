// Tipos e interfaces base que reflejan el modelo de datos del backend.
// Mantenerlos aqui evita duplicarlos por toda la app y facilita
// actualizarlos si el backend cambia.

// Usuario autenticado — coincide con lo que devuelve GET /auth/me
export interface User {
  id: string;
  email: string;
  nombre: string;
  apellidos: string;
  telefono: string;
  rol: "cliente" | "taxista" | "admin";
  createdAt: string;
}

// Estado posible de un trayecto — refleja los estados del backend
export type EstadoTrayecto =
  | "pendiente"
  | "asignado"
  | "en_curso"
  | "completado"
  | "cancelado";

// Trayecto concertado — coincide con lo que devuelve GET /trayectos/:id
export interface Trayecto {
  id: string;
  clienteId: string;
  taxistaId: string | null;
  origen: string;
  destino: string;
  fechaViaje: string;
  horaViaje: string;
  distanciaKm: number;
  duracionMinutos: number;
  precio: number;
  estado: EstadoTrayecto;
  notas: string | null;
  createdAt: string;
}

// Respuesta estandar de error que devuelve el backend
export interface ApiError {
  message: string;
  statusCode: number;
}
