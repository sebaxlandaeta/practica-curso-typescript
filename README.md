# Archivos de práctica de sintaxis en TypeScript - CADIF1

Este repositorio es un **compendio conceptual y de sintaxis de TypeScript**, desarrollado durante la formación en la **Academia CADIF1**. No contiene ejercicios o tareas, sino explicaciones prácticas y guías de uso sobre cómo funciona cada característica del lenguaje, organizadas de forma progresiva desde lo fundamental hasta temas avanzados.

---

## 📁 Estructura del Repositorio

El proyecto se divide en tres módulos por nivel de complejidad, además del archivo de configuración global:

```text
practica-curso-typescript/
├── 📁 01-Basico/
│   ├── 01 primitivos.ts
│   ├── 02-funciones.ts
│   ├── 03-interface-vs-type.ts
│   ├── 04-union-intersection-types.ts
│   ├── 05-arrays-tuplas.ts
│   └── 06-tipos-literales.ts
├── 📁 02-Intermedio/
│   ├── enums.ts
│   ├── generics.ts
│   ├── poo.ts
│   ├── tipado-objetos-especiales.ts
│   ├── type-assertions-y-casting.ts
│   ├── typenarrowing.ts
│   └── utility-types.ts
├── 📁 03-Avanzado/
│   ├── conditional-types.ts
│   ├── custom-types-guards.ts
│   ├── infer-keyword.ts
│   ├── mapped-types.ts
│   ├── template-literal-types.ts
│   └── utility-types-custom.ts
└── 📄 tsconfig.json
```

---

## 📜 Contenido y Sintaxis por Archivo

### 🔹 Módulo 1: Conceptos Básicos

Explicación de las bases del sistema de tipos estático y la sintaxis fundamental.

* **`01 primitivos.ts`**: Sintaxis para anotar tipos de datos primitivos (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`).
* **`02-funciones.ts`**: Firma y tipado de funciones, parámetros obligatorios, opcionales (`?`), valores por defecto, tipos de retorno y sintaxis de `arrow functions`.
* **`03-interface-vs-type.ts`**: Demostración y comparativa de la sintaxis entre `interface` y `type alias` (herencia con `extends` vs. intersección con `&`, *declaration merging*, etc.).
* **`04-union-intersection-types.ts`**: Sintaxis de tipos de unión (`|`) para permitir múltiples tipos de datos y tipos de intersección (`&`) para combinar estructuras.
* **`05-arrays-tuplas.ts`**: Declaración de arreglos genéricos y simples (`Array<T>` / `T[]`), junto a la sintaxis de tuplas para estructuras de longitud y tipos fijos.
* **`06-tipos-literales.ts`**: Restricción de variables a valores exactos mediante tipos literales de cadena, número o booleano.

---

### 🔸 Módulo 2: Conceptos Intermedios

Mecanismos para la reutilización de código, manipulación de objetos y estrechamiento de tipos.

* **`enums.ts`**: Sintaxis y comportamiento de enumeraciones numéricas y de texto (`enum`).
* **`generics.ts`**: Definición y funcionamiento de tipos genéricos (`<T>`) aplicados a funciones, interfaces y clases.
* **`poo.ts`**: Programación Orientada a Objetos en TypeScript: sintaxis de clases, modificadores de acceso (`public`, `private`, `protected`, `readonly`), constructores abreviados, herencia y clases abstractas.
* **`tipado-objetos-especiales.ts`**: Estructuración de objetos avanzados, firmas de índice (`[key: string]: T`), objetos anidados y objetos globales.
* **`type-assertions-y-casting.ts`**: Sintaxis para la conversión explícita de tipos usando la palabra clave `as` y la sintaxis `<Tipo>`.
* **`typenarrowing.ts`**: Técnicas de reducción/estrechamiento de tipos en tiempo de ejecución utilizando `typeof`, `instanceof`, operador `in` y comprobaciones de igualdad.
* **`utility-types.ts`**: Explicación y sintaxis de los tipos de utilidad nativos de TypeScript (`Partial<T>`, `Required<T>`, `Readonly<T>`, `Pick<T, K>`, `Omit<T, K>`, `Record<K, T>`).

---

### 🔺 Módulo 3: Conceptos Avanzados

Metaprogramación de tipos y transformaciones avanzadas en el compilador.

* **`conditional-types.ts`**: Sintaxis y lógica de los tipos condicionales (`T extends U ? X : Y`).
* **`custom-types-guards.ts`**: Creación y funcionamiento de funciones de guardado personalizadas usando la cláusula `parametro is Tipo`.
* **`infer-keyword.ts`**: Funcionamiento de la palabra clave `infer` para la extracción implícita de tipos dentro de condicionales.
* **`mapped-types.ts`**: Sintaxis de tipos mapeados (`[K in keyof T]`) para iterar y transformar las propiedades de un tipo en otro.
* **`template-literal-types.ts`**: Combinación de tipos literales mediante *template strings* en el sistema de tipos.
* **`utility-types-custom.ts`**: Recreación paso a paso e implementación personalizada de Utility Types complejos demostrando el poder del motor de tipos.
