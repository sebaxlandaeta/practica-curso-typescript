// 1. Sintaxis de arrays

// Sintaxis preferida (Tipo [])
const array1: string[] = ['Hola', 'Mundo'] // <-- Para declarar una variable de tipo array se utiliza "[]"

// Sintaxis genénerica (Array<tipo>)
const array2: Array<number> = [1, 2, 3] // <-- Tambien se puede usar la palabra array e indicas el tipo dentro de "< >"

// Array mixto (Union types)
const array3: (string | number)[] = ['Hola', 'Mundo', 1, 2, 3] // <-- La unión de tipos va dentro de "()".

// 02. Definición de una tupla de 2 elementos: [string, number]

let usuario: [string, number]
usuario = ['Sebastian', 18] // <-- Usuario recibe obligatoriamente un string y number. (Debe ser pasado en el mismo orden)

// Tupla con nombres de etiquetas (labeled tuples) para mayor claridad
type Coordenadas = [x:number, y:number];
const punto: Coordenadas = [10.5, -45.2]

// Tuplas + Elementos opcionales
type RespuestaHTTP = [codigo: number, mensaje?: string]; // Mensaje es opcional
const respOk: RespuestaHTTP = [200]
const respNotFound: RespuestaHTTP = [404, 'Not Found']

//  Elementos readonly
let tupla: readonly [number, number] 
tupla = [10, 20] // <-- tupla.push(30) Esto lanzara un error.