// 1. Ejemplos de Type Assertions (as)

// Ejemplo A:

// Usamos "as" para decirle que es específicamente un HTMLInputElement y acceder a .value
const inputUsuario = document.getElementById("input-edad") as HTMLInputElement;
inputUsuario.value = "25"; 

// Ejemplo B: 
interface Usuario {
    nombre: string;
    edad: number;
}

const respuestaServidor: unknown = { nombre: "Ana", edad: 30 };

// Le aseguramos a TypeScript que la respuesta tiene la forma de la interfaz Usuario
const usuario = respuestaServidor as Usuario;
console.log(usuario.nombre); // Funciona correctamente\

// 2. Ejemplos del operador satisfies

// Definimos los tipos de rutas permitidas
type Rutas = "home" | "about" | "contacto";

type ConfiguracionRutas = Record<Rutas, string | { path: string; exact: boolean }>;

// Usamos "satisfies" para validar que la estructura cumple con ConfiguracionRutas
const misRutas = {
    home: "/",
    about: { path: "/sobre-nosotros", exact: true },
    contacto: "/contacto"
} satisfies ConfiguracionRutas;

// TypeScript recuerda exactamente que misRutas.home es un string literal "/" 
// y misRutas.about es un objeto con propiedades específicas, no un tipo genérico mezclado.
const esExacto = misRutas.about.exact; // Autocompleta y funciona sin problemas

// 3. Comparación rápida (El problema que resuelve satisfies)

type Palette = {
    primary: string;
    secondary: string;
};

// ❌ ANTES (Usando tipado tradicional ": Palette"):
// Pierdes el valor literal. Si intentas usar métodos de strings específicos, a veces cuesta más.
const palette1: Palette = { primary: "red", secondary: "blue" };

// ✅ AHORA (Usando "satisfies Palette"):
// Valida que tenga primary y secondary, pero palette2.primary sigue siendo exactamente el tipo literal "red".
const palette2 = {
    primary: "red",
    secondary: "blue"
} satisfies Palette;