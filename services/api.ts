import axios from "axios";

// Cliente HTTP centralizado: toda llamada al backend de ConCompas pasa por aquí.
// Centralizar la baseURL y las cabeceras comunes evita repetirlas en cada servicio
// y deja un único sitio donde añadir, por ejemplo, el interceptor que adjunte el
// token de autenticación cuando se implemente el login (Ticket de AuthContext).
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});
