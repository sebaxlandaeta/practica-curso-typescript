// 01. Clases, Propiedades y Métodos
class Persona { 
    nombre: string
    apellido: string
    // Constructor de la clase
    constructor(nombre:string, apellido: string) { 
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Creando un metodo publico
    public getFullName():string {
        return `${this.nombre} ${this.apellido}`
    }

    // Creando un metodo privado
    private saludar():string {
        return `Hola, mi nombre es ${this.nombre}`
    }
}

// 02. Modificadores de acceso (Sintaxis resumida)

class CuentaBancaria {
    constructor (
        public titular: string, 
        private saldo: number, 
        protected numeroCuenta: string
    ) {}

    getSaldo(): number {
        return this.saldo;
    }
}

// 03. Readonly (Solo lectura)

class Usuario {
    readonly id: number;
    public username: string;

    constructor(id: number, username: string) {
        this.id = id;
        this.username = username;
    }
}

const newUser = new Usuario(1, 'sebaxlandaeta'); // newUser.id = 2 Esto lanzara error, id solo es de lectura

// 04. Herencia (extend y super)

class Animal {
    public nombre: string
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hacerSonido(): void {
        console.log("Sonido genérico...");
    }
}

class Perro extends Animal {
    public raza: string
    constructor(nombre: string, raza: string) {
        super(nombre); // Llama al constructor padre
        this.raza = raza 
    }

    // Sobrescritura de método
    override hacerSonido(): void {
        console.log("¡Guau!");
    }
}


// 05. Clases abstractas 

abstract class Figura {
  abstract calcularArea(): number; // Las hijas deben implementarlo

  imprimirNombre(nombre: string): void {
    console.log(`Figura: ${nombre}`);
  }
}

class Rectangulo extends Figura {
  constructor(public ancho: number, public alto: number) {
    super();
  }

  calcularArea(): number {
    return this.ancho * this.alto;
  }
}

// 06. Getter y Setter 

class Producto {
  private _precio: number = 0;

  get precio(): number {
    return this._precio;
  }

  set precio(valor: number) {
    if (valor < 0) {
      throw new Error("El precio no puede ser negativo.");
    }
    this._precio = valor;
  }
}