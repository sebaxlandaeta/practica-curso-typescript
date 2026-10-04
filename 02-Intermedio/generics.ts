// 01. Generics en typescript

function entregarAlgo<T>(algo: T): T { // '<T>' Indica que puede ser cualquier tipo de dato
    return algo
}
// TypeScript infiere automáticamente que T es 'string'
const texto  = entregarAlgo('Soy un texto')

// TypeScript infiere automáticamente que T es 'number'
const numero  = entregarAlgo(10)

// 02. Generics en interfaces

interface RespuestaAPI<T> { // Data puede recibir un objeto, array o array de objetos
    status: number
    data: T
}

interface Usuario {  
    id: number | string
    nombre: string
    edad:  number
}

const respuestaUsuario: RespuestaAPI<Usuario> = { // Ahora la respuesta de la api sera de tipo usuario 
    status: 200,
    data: {
        id: 100,
        nombre: 'Sebastian Landaeta',
        edad: 18
    }
}

const respArrayNumbers: RespuestaAPI<number[]> = { // Ahora data es de tipo array de numbers
    status: 200,
    data: [1, 2, 3, 4, 5]
}

const respArrayString: RespuestaAPI<string[]> = { // Ahora data es de tipo array de strings
    status: 200,
    data: ['Hola', 'Mundo']
}

// 03. Restringir Genéricos (extends)

interface TieneID {
    id: number | string
}

function buscarPorId<T extends TieneID>(list: T[], idBuscado: number): T | undefined {
    return list.find(item => item.id === idBuscado)
} 

const listaUsuarios = [{id: 1, nombre: 'Sebastian'}, {id: 2, nombre: 'Argenis'}]
const usuario = buscarPorId(listaUsuarios, 2)