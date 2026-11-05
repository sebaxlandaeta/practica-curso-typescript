// Keyword 'infer': Inferencia avanzada de tipos mediante tipos condicionales

// 1. Extraer los tipos de los parámetros de una función
type ObtenerParametros<T> = T extends (...args: infer P) => any ? P : never;

function registrarAccion(usuario: string, codigo: number, activo: boolean) {}
type ParametrosRegistro = ObtenerParametros<typeof registrarAccion>; 
// Resultado: [usuario: string, codigo: number, activo: boolean]


// 2. Extraer el tipo de dato devuelto por una función (síncrona o asíncrona)
type ObtenerRetornoFuncion<T> = T extends (...args: any[]) => infer R ? R : never;

function generarToken() {
    return { token: "abc123xyz", expira: 3600 };
}
type DatosToken = ObtenerRetornoFuncion<typeof generarToken>;
// Resultado: { token: string; expira: number; }


// 3. Desenvolver recursivamente promesas anidadas
type DesenvolverPromesa<T> = T extends Promise<infer U> ? DesenvolverPromesa<U> : T;

type PromesaCompleja = Promise<Promise<Promise<{ id: number; rol: string }>>>;
type ResultadoLimpio = DesenvolverPromesa<PromesaCompleja>;
// Resultado: { id: number; rol: string; }


// 4. Extraer el tipo de las propiedades de un objeto anidado
type ExtraerTipoPropiedad<T> = T extends { tipo: infer U } ? U : never;

type EstructuraA = { tipo: "admin"; permisosTotal: boolean };
type EstructuraB = { tipo: "invitado"; accesoLimitado: boolean };

type TipoRolA = ExtraerTipoPropiedad<EstructuraA>; // "admin"
type TipoRolB = ExtraerTipoPropiedad<EstructuraB>; // "invitado"