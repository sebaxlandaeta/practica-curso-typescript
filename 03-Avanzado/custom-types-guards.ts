// 1. Sintaxis de un Custom Type Guard (Uso de 'is')
interface Perro {
  ladrar: () => void;
}

interface Gato {
  maullar: () => void;
}

// La función retorna un predicado: "animal is Perro"
function esPerro(animal: Perro | Gato): animal is Perro {
  return (animal as Perro).ladrar !== undefined;
}

// 2. Uso con control de flujo (if / else)
function hacerSonido(animal: Perro | Gato) {
  if (esPerro(animal)) {
    animal.ladrar(); // TypeScript reconoce que es Perro
  } else {
    animal.maullar(); // TypeScript deduce que es Gato
  }
}

// 3. Sintaxis de Assertion Guard (Uso de 'asserts')
function asegurarString(valor: unknown): asserts valor is string {
  if (typeof valor !== "string") {
    throw new Error("El valor debe ser un string");
  }
}

function Mayusculas(valor: unknown) {
  asegurarString(valor);
  console.log(valor.toUpperCase()); // A partir de aquí 'valor' se trata como string
}

// Pruebas
hacerSonido({ ladrar: () => console.log("¡Guau!") });
Mayusculas("typescript");