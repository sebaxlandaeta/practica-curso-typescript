// 1. Union Types (|) — "O"

// Tipos Primitivos
type ID = string | number

// UsuarioId recibe solo string o number.
let usuarioId: ID;

usuarioId = 10;
usuarioId = '10'; // usuarioId = true <-- ERROR -->

// Estrechamiento de Tipos
function formatearEntrada (valor: number | string) { // Se debe identificar el dato para poder acceder a sus metodos
    if (typeof valor === 'string') {
        return valor.toLocaleUpperCase() // Ahora puedo acceder a los metodos de los strings
    } else 
        if (typeof valor === 'number') {
            return valor.toFixed(2) // Ahora puedo acceder a los metodos de number
        } else {
            return 'El dato pasado por parámetro no es string, ni number.'
        }
}
 
// Uniones Discriminadas (Discriminated Unions)
type RespuestaApi = 
| {status: 'cargando'}
| {status: 'exito', datos: object[]}
| {status: 'error', mensaje: string}

function renderizarUI (respuesta: RespuestaApi) { // El parameto respueta recibe un objeto de tipo RespuestaApi
    switch (respuesta.status) {
        case 'cargando':
            return 'Cargando datos...'
        case 'exito':
            return `Datos de respuesta -> ${JSON.stringify(respuesta.datos)}`
        case 'error':
            return `Ha ocurrido un error: ${respuesta.mensaje}`
        default:
            return 'Error desconocido.'
    }
}


// 2. Intersection Types (&) — "Y"

// 01.Ejemplo Básico (Combinación de Objetos)
type DatosPersonales = {
    nombre: string
    edad: number
}

type DatoContacto = {
    telefono: string
    email: string
}

// Empleado debe tener las propiedades de DatosPersonales Y DatosContacto
type Empleado = DatosPersonales & DatoContacto; 

const nuevoEmpleado: Empleado = {
    nombre: 'Sebastian',
    edad: 18,
    telefono: '+584126741789',
    email: 'correo@ejemplo.com'
}

// 02. Conflictos en Intersecciones
type Imposible = string & number; // Resulta en tipo 'never'

type A = { id: string };
type B = { id: number };

type C = A & B; // La declaración 'C' es válida, pero la propiedad 'id' es 'never'.

// Intentar crear un objeto tipo C fallará porque no existe un valor que sea string y number a la vez.