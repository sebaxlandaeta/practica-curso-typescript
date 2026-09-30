// 1. Datos primitivos
let texto = "Hola TypeScript"; // Infiere: string
let numero = 2026;             // Infiere: number
let booleano = true;           // Infiere: boolean

// 2. Puedes reasignar valores del mismo tipo pero no de otro diferente
texto = "Nuevo texto";  
numero = 50;
booleano = false;

// 3. Las variables creadas con const exigen inicialización inmediata y no permiten reasignación
const lenguaje = "TypeScript"; 
const version = 5;             
const estaHabilitado = true;   

// 4. Variables nulas y de tipo predeterminado
let ausente = null;         // Infiere: null (o any según tsconfig)
let noDefinido = undefined; // Infiere: undefined

// 5. Uso recomendado para variables que cambian de estado (Union Type)
let respuesta: string | null = null; // Inicialmente vacía
respuesta = "Datos cargados";