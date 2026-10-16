// 1. Sintaxis básica
type EsString<T> = T extends string ? true : false;

type Test1 = EsString<string>; // true
type Test2 = EsString<number>; // false

// 2. Distribución en uniones (Filtrado)
type SoloNumeros<T> = T extends number ? T : never;

type MisValores = string | number | boolean | number[];
type ResultadoSoloNumeros = SoloNumeros<MisValores>; // number

// 3. Extracción con 'infer'
type ElementoDe<T> = T extends Array<infer U> ? U : T;
type TipoArray = ElementoDe<string[]>; // string

type MiReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function obtenerUsuario() {
  return { id: 101, nombre: "Sebastian", rol: "Admin" };
}

type UsuarioResponse = MiReturnType<typeof obtenerUsuario>;

type DesempaquetarPromesa<T> = T extends Promise<infer U> ? U : T;
type ResultadoPromesa = DesempaquetarPromesa<Promise<string>>; // string

// 4. Ejemplo práctico
interface RespuestaExitosa<T> {
  exito: true;
  datos: T;
}

interface RespuestaError {
  exito: false;
  error: string;
}

type ApiResponse<T> = RespuestaExitosa<T> | RespuestaError;
type ExtraerDatosAPI<T> = T extends RespuestaExitosa<infer D> ? D : never;

type DatosUsuario = ExtraerDatosAPI<RespuestaExitosa<{ id: number; nombre: string }>>;

// 5. Ejecución
function procesarRespuesta<T extends ApiResponse<any>>(respuesta: T) {
  if (respuesta.exito) {
    console.log("Datos recibidos:", respuesta.datos);
  } else {
    console.error("Error:", respuesta.error);
  }
}

procesarRespuesta({ exito: true, datos: { id: 1, usuario: "sebas" } });
procesarRespuesta({ exito: false, error: "404 Not Found" });