// api.ts crea el cliente axios con axios.create() en el momento en que se
// importa el módulo, así que para comprobar los dos casos de baseURL hay que
// resetear el registro de módulos de Jest y volver a importar entre tests.
// Se usa import() dinámico (estándar actual) en vez de require(), que el
// linter de Next no permite.
describe("api client", () => {
  const envOriginal = process.env.NEXT_PUBLIC_API_URL;

  afterEach(() => {
    jest.resetModules();
    process.env.NEXT_PUBLIC_API_URL = envOriginal;
  });

  it("usa http://localhost:3000 como baseURL por defecto si no hay NEXT_PUBLIC_API_URL", async () => {
    delete process.env.NEXT_PUBLIC_API_URL;
    jest.resetModules();

    const { api } = await import("./api");

    expect(api.defaults.baseURL).toBe("http://localhost:3000");
  });

  it("usa NEXT_PUBLIC_API_URL como baseURL cuando está definida", async () => {
    process.env.NEXT_PUBLIC_API_URL = "https://api.concompas.app";
    jest.resetModules();

    const { api } = await import("./api");

    expect(api.defaults.baseURL).toBe("https://api.concompas.app");
  });

  it("configura Content-Type: application/json por defecto", async () => {
    jest.resetModules();

    const { api } = await import("./api");

    expect(api.defaults.headers["Content-Type"]).toBe("application/json");
  });
});
