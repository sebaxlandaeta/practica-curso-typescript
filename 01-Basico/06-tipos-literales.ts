// Tipos literales de string
let estado: 'error' // estado = 'exito' <-- Esto lanzara error.

// Tipos literales number
type Dado = 1 | 2 | 3 | 4 | 5 
const tirada: Dado = 5;  // // <-- const tirada: Dado = 6 Lanzara un error

// Tipos literales booleanos 
type SoloVerdadero = true; // <-- const esFalso: SoloVerdadero = false // <-- Dará error

// Combinación con union types

type Alineacion = 'izquierda' | 'centro' | 'derecha'

function alinearTexto (aleacion: Alineacion): string {
    return `Haz alíneado el texto a la ${aleacion}!`
}

alinearTexto('centro') // <-- Si el parámetro es de un tipo diferente a 'Alineacion' lanzará error.

// Template Literal Types

type Evento = 'click' | 'hover'
type Elemento = 'boton' | 'link'

type Manejador = `${Evento}-${Elemento}`

const eventoValido: Manejador = `click-link` // 'link-click' <-- ERROR