// 1. Estructura y Sintaxis Básica

// Interface: Diseñada explícitamente para definir la forma de objetos y clases.
interface Usuario {
    id: number | string // El id puede ser de tipo number o string
    nombre: string
    apellido: string
    edad?: number
}

// Type: Es un alias que permite asignar un nombre a cualquier tipo de dato.
type UserID = string | number // Tipo primitivo o alias

type User = { // Estructura de objeto
  id: UserID;
  nombre: string
  email?: string
};

// 2. Extensión y Combinación de Tipos

// Con Interface: Usando extends
interface Persona {
    nombre: string
    apellido: string
}

// Programador extiende de Persona
interface Programador extends Persona {
    rol: 'Frontend' | 'Backend'
}

// Con type: Usando Intersección (&)
type Person = {
    nombre: string
    apellido: string
}

type Programmer = Person & {
    rol: 'Frontend' | 'Backend'
}

// 03.Declaration Merging (Fusionado)

// Fusión de interfaces (Declaration Merging)
interface Ventana {
    ancho: number
}

// Con type esto no es posible
interface Ventana {
    alto: number
}

const miVentana : Ventana = { // En la declaración se usa ',' para separar las propiedades
    ancho: 200,
    alto: 200
}

// 5. Capacidades Exclusivas de type

// Tipos de Unión e Intersección
type RespuestaAPI = 'Exito' | 'Cargando' | 'Error'

// Tuplas estricta
type Coordenadas = [latitud: number, longitud: number]

// 6. Cuándo Usar Cada Uno (Guía de Buenas Prácticas)

// Usa interface cuando:

// 01.Estés definiendo la forma de objetos, contratos de clases o props de componentes (en frameworks como React, Vue, etc.).
// 02.Estés creando una librería o SDK reutilizable donde otros desarrolladores puedan necesitar extender los tipos mediante declaration merging.
// 03.Busques código con un enfoque más orientado a objetos y herencia limpia.

// EJEMPLO: 
interface Carro {
    marca: string
    ano: number
    color: string
}

function crearCarro (marca: string, ano: number, color: string): Carro {
    const newCar: Carro = {
        marca: marca,
        ano : ano,
        color : color
    }

    return newCar // Solo retornara un objeto de tipo Carro
}

console.log(crearCarro('Toyota', 2008, 'Negro'));

// Usa type cuando:

// 01.Necesites Uniones (A | B), Intersecciones (A & B) o tipos Primitivos.
// 02.Trabajes con Tuplas o funciones complejas.
// 03.Estés realizando transformaciones avanzadas de tipos (Mapped Types, Conditional Types).

// EJEMPLO: 

type EstadoCivil = 'Soltero' | 'Casado' | 'Divorciado';

type Humano = {
    nombre: string
    estadoCivil: EstadoCivil
}

const miPersona: Humano = {
    nombre: 'Sebastian',
    estadoCivil: 'Soltero' // Solo recibira los valores 'Soltero' | 'Casado' | 'Divorciado'; 
}