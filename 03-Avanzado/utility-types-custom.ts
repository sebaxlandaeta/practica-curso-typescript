// Utility Types Custom: Creación manual de tipos utilitarios avanzados

interface ProductoTienda {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
}

// 1. Recreando Omit<T, K>: Excluye propiedades seleccionadas
type MiOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P];
};
type ProductoSinStock = MiOmit<ProductoTienda, "stock">;


// 2. Recreando Pick<T, K>: Selecciona únicamente propiedades específicas
type MiPick<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ProductoResumen = MiPick<ProductoTienda, "nombre" | "precio">;


// 3. Recreando Record<K, T>: Mapea claves a un tipo uniforme
type MiRecord<K extends keyof any, T> = {
    [P in K]: T;
};
type RolesUsuario = MiRecord<"admin" | "editor" | "invitado", string[]>;


// 4. Recreando Required<T>: Vuelve obligatorias todas las propiedades opcionales
interface Configuracion {
    tema?: string;
    notificaciones?: boolean;
}

type MiRequired<T> = {
    [P in keyof T]-?: T[P];
};
type ConfigCompleta = MiRequired<Configuracion>;