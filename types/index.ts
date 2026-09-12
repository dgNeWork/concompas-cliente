// Tipos compartidos por toda la app cliente.
// Reflejan exactamente las formas que devuelve la API del backend (NestJS),
// para que TypeScript detecte en compilación cualquier desajuste con el contrato real.

// Roles disponibles en el sistema — igual que en el backend (auth.types.ts)
export type RolUsuario = "cliente" | "taxista" | "admin";

// Usuario autenticado, tal como lo devuelven POST /auth/login y GET /auth/me
export interface Usuario {
  id: string;
  email: string;
  rol: RolUsuario;
  nombre: string;
  apellidos: string;
}

// Ciclo de vida de un trayecto (igual que EstadoTrayecto en el backend)
export type EstadoTrayecto = "pendiente" | "asignado" | "en_curso" | "completado" | "cancelado";
export type TipoReserva = "ida" | "ida_vuelta";
export type TipoPunto = "normal" | "aeropuerto" | "muelle";

// Trayecto tal como lo devuelve la API (igual que TrayectoRespuesta en el backend)
export interface Trayecto {
  id: string;
  cliente_id: string;
  taxista_titular_id: string | null;
  taxista_reserva_id: string | null;
  vehiculo_id: string | null;
  estado: EstadoTrayecto;
  origen_texto: string;
  destino_texto: string;
  fecha_hora_recogida: string;
  duracion_estimada_min: number | null;
  tipo_reserva: TipoReserva;
  tipo_punto_origen: TipoPunto;
  tipo_punto_destino: TipoPunto;
  precio_cliente: number;
  comision_plataforma: number;
  importe_taxista: number;
  recargo_antelacion_porcentaje: number;
  hora_salida_estimada_taxista: string | null;
  notas_cliente: string | null;
  motivo_cancelacion: string | null;
  created_at: string;
  updated_at: string;
}

// Forma del error que devuelve la API (ver HttpExceptionFilter en el backend)
export interface ApiError {
  error: string;
  detalles?: unknown;
}
