// 01. Record<K, V> (Diccionarios Estrictos)

type EstadoOrden = "pendiente" | "enviado" | "entregado" | "cancelado";

// El Record obliga a que las claves sean exactamente esos estados y los valores sean strings
const mensajesEstado: Record<EstadoOrden, string> = {
    pendiente: "Tu orden está siendo procesada",
    enviado: "El paquete va en camino",
    entregado: "Pedido entregado con éxito",
    cancelado: "La orden fue cancelada"
};


// 02. unknown (La alternativa segura a any)

// Simulamos una respuesta desconocida de una API externa
const respuestaApi: unknown = { mensaje: "Hola mundo", codigo: 200 };

if (typeof respuestaApi === "object" && respuestaApi !== null && "mensaje" in respuestaApi) {
    // TypeScript ya sabe que es seguro tratarlo como objeto con propiedades
    console.log((respuestaApi as { mensaje: string }).mensaje);
}

// 03. Manejo seguro de null y undefined

interface UsuarioPerfil {
    nombre: string;
    direccion?: {
        ciudad?: string;
    };
}

const usuario: UsuarioPerfil = { nombre: "Ana" }; // 'direccion' no existe
const ciudadUsuario = usuario.direccion?.ciudad; // Devuelve 'undefined' sin romper la app

// 04. B. Operador de Cohesión Nula (??)

const intentosConexion: number | null = null;

// Si intentosConexion es null o undefined, usa 3 por defecto
const maxIntentos = intentosConexion ?? 3; 
console.log(maxIntentos); // 3