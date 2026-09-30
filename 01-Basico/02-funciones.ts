// 1. Tipado Básico (Parámetros y Retorno)

// Tipado de parámetros sin especificar el valor de retorno
function sumar (num1: number, num2: number) { // TypeScript Detecta que retorna un number 
    return num1 + num2
}

// Tipado de parámetros y valor de retorno
function restar (num1: number, num2: number): number { // Se especifica que retorna number para mejor tipado
    return num1 - num2
}

// 2. Parámetros Opcionales y Predeterminados.

// Parámetros opcionales:
function saludar (nombre: string, apellido?: string): string { // Para parámetros opcionales usas ? antes de los dos puntos.
    if (!apellido) {
        return `Hola ${nombre}!!`
    }
    return `Hola ${nombre} ${apellido}!!`
}

// Parámetros predeterminados:
function multiplicar (num1: number = 5, num2 = 5): number { // Por defecto si no se le pasan parámetros es 5*5
    return num1 * num2
}

// 3. Tipos de Retorno Especiales

// Usando void:
function imprimirEdad (age: number): void { // Usar void cuando una función no retorna nada
  console.log(`Hola tengo ${age}`);
}

// Usando never:
function error (msg: string): never { // Usar never cuando una función no termina de ejecutarse
  throw new Error(msg);
}