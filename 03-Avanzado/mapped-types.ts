// Mapped types.

type Usuario = {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
};

// 1. Opcionales y Solo Lectura
type MiOpcional<T> = {
  [K in keyof T]?: T[K];
};

type MiSoloLectura<T> = {
  readonly [K in keyof T]: T[K];
};

// 2. Remover modificadores (-? para hacer obligatorio)
type Configuracion = {
  tema?: string;
  idioma?: string;
};

type Requerido<T> = {
  [K in keyof T]-?: T[K];
};

// 3. Renombrar claves con 'as' (Generar Getters)
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

// 4. Filtrar claves (Solo conservar campos tipo string)
type SoloStrings<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};

// Ejemplos de tipos resultantes
type UsuarioOpcional = MiOpcional<Usuario>;
type UsuarioLectura = MiSoloLectura<Usuario>;
type ConfigCompleta = Requerido<Configuracion>;
type UsuarioGetters = Getters<Usuario>;
type SoloTextoUsuario = SoloStrings<Usuario>;

// Ejemplo de uso en una función
function actualizarUsuario(id: number, cambios: MiOpcional<Usuario>): void {
  console.log(`Usuario ${id} actualizado:`, cambios);
}

actualizarUsuario(1, { nombre: "Carlos", activo: true });