// Template Literal Types: Manipulación avanzada de cadenas a nivel de tipos

type Dominio = "api" | "auth" | "admin";
type MetodoHTTP = "GET" | "POST" | "PUT" | "DELETE";

// 1. Combinación de uniones para rutas de endpoints
type Endpoint = `/api/v1/${Dominio}/${MetodoHTTP}`;
const rutaEjemplo: Endpoint = "/api/v1/auth/POST";


// 2. Transformación de propiedades mediante utilidades intrínsecas (Capitalize, Uppercase, Lowercase)
interface EstadoApp {
    usuario: string;
    token: string;
    conectado: boolean;
}

type AccionesStore<T> = {
    [K in keyof T as `set${Capitalize<string & K>}`]: (valor: T[K]) => void;
};

type MutacionesApp = AccionesStore<EstadoApp>;
/* 
  Resultado esperado:
  {
    setUsuario: (valor: string) => void;
    setToken: (valor: string) => void;
    setConectado: (valor: boolean) => void;
  }
*/


// 3. Extracción de prefijos específicos basados en patrones de texto
type EventosUI = "click:btn" | "hover:btn" | "change:input" | "focus:input";

type EventosDeBoton = Extract<EventosUI, `${string}:btn`>; 
// Resultado: "click:btn" | "hover:btn"