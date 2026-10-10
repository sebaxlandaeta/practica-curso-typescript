// 1. Partial<T> (Hacer todo opcional)

interface Usuario {
    nombre: string
    apellido: string
    email: string
}

// Todos los campos pasan a ser opcionales
type  UsuarioActualizacion = Partial<Usuario>

const actualizarDatos: UsuarioActualizacion = {
    email: 'nuevocorreo@gmail.com' // Valido, no exige nombre, ni apellido.
}

// 2. Required<T> (Hacer todo obligatorio)

interface ConfiguracionTema {
    modoOscuro?: boolean
    volumen?: number
}

// Ambas propiedades pasan a ser obligatorias

type ConfiguracionEstricta = Required<ConfiguracionTema>

const confing: ConfiguracionEstricta = {
    modoOscuro: true, // Error si falta una de las dos propiedades
    volumen: 10
}

// 3. Readonly<T> (Solo lectura)

interface Tarea {
    titulo: string;
}

let miTarea: Readonly<Tarea> = {
    titulo: "Aprender TypeScript"
};

// 4. Pick<T, K> (Seleccionar propiedades)

interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
}

// Creamos un tipo que solo necesita el nombre y el precio
type ProductoPreview = Pick<Producto, "nombre" | "precio">;

const item: ProductoPreview = {
    nombre: "Camiseta",
    precio: 20
};

// 5. Omit<T, K> (Excluir propiedades)

interface UsuarioRegistro {
    id: number;
    nombre: string;
    email: string;
    creadoEn: Date;
}

// Creamos un tipo sin el id ni la fecha de creación (para cuando el usuario se está registrando)
type DatosNuevoUsuario = Omit<UsuarioRegistro, "id" | "creadoEn">;

const nuevoUser: DatosNuevoUsuario = {
    nombre: "Carlos",
    email: "carlos@email.com"
};

// 6. ReturnType<T> (Obtener lo que retorna una función)

function obtenerUsuario() {
    return { id: 1, nombre: "Ana", activo: true };
}

// TipoInferido será automáticamente: { id: number; nombre: string; activo: boolean; }
type TipoInferido = ReturnType<typeof obtenerUsuario>;

const usuarioGenerado: TipoInferido = {
    id: 2,
    nombre: "Luis",
    activo: false
};