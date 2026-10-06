// 1. Type Narrowing (Estrechamiento de Tipos)

function procesarEntrada (input: string | number) {
    if (typeof input === 'string') {
        return input.toUpperCase(); // TypeScript redujo el tipo de 'input' a solo 'string'
    } else {
        return input.toFixed(2); // TypeScript deduce que aquí solo puede ser 'number'
    }
}

// 2. Type Guards (Guardas de Tipo)

// A. Operador typeof
function imprimirLongitud(value: string | number):void {
    if (typeof value === 'string') {
        console.log(value.length) // value es string
    }
}

// B. Operador instanceof
class Perro {
    ladrar() {
        console.log('GUAU')
    }
}

class Gato {
    maullar() {
        console.log('MIAU')
    }
}

function hacerSonido(animal: Gato | Perro) {
    if (animal instanceof Gato) {
        animal.maullar();
    } else {
        animal.ladrar();
    }
}

// C. Operador in
type Admin = { nombre: string, permisos: string[] }
type User = { nombre: string }

function saludar(persona: Admin | User ) {
    if ('permisos' in persona) {
        console.log(`Admin con ${persona.permisos.length} permisos`);
    } else {
        console.log(`Usuario normal: ${persona.nombre}`);
    }
}

// D. Discriminación de Uniones
interface Circulo {
  kind: "circulo";
  radio: number;
}

interface Cuadrado {
  kind: "cuadrado";
  lado: number;
}

type Forma = Circulo | Cuadrado;

function calcularArea(forma: Forma) {
  switch (forma.kind) {
    case "circulo":
      return Math.PI * forma.radio ** 2;
    case "cuadrado":
      return forma.lado * forma.lado; 
  }
}