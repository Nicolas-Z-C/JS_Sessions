[TOC]



# JavaScript

## INTRODUCCION

JavaScript es un lenguaje de programación de alto nivel, interpretado y orientado a objetos, ampliamente utilizado en el desarrollo web para agregar interactividad y dinamismo a las páginas web. Creado en 1995 por Netscape, JavaScript inicialmente se usaba solo en el lado del cliente (navegador), pero con el tiempo y la llegada de tecnologías como Node.js, se ha expandido al desarrollo de aplicaciones del lado del servidor también.

Algunas características clave de JavaScript incluyen:

1. **Interpretado y de alto nivel**: No requiere compilación y su sintaxis es accesible para principiantes y avanzada para desarrolladores experimentados.
2. **Multiparadigma**: Soporta la programación orientada a objetos, funcional e imperativa, lo que lo hace flexible para diferentes estilos de programación.
3. **Gran integración con HTML y CSS**: Permite manipular elementos HTML y estilos CSS, facilitando el desarrollo de interfaces de usuario interactivas.
4. **Asincronía**: JavaScript permite la ejecución de operaciones asincrónicas con el uso de *promesas*, *callbacks* y, más recientemente, *async/await*, lo que es ideal para manejar operaciones como llamadas a servidores sin bloquear el flujo de la aplicación.
5. **Comunidad y ecosistema amplios**: Con bibliotecas y frameworks populares como React, Angular, y Vue.js, además de herramientas de desarrollo, JavaScript es un pilar fundamental en el desarrollo de aplicaciones modernas.

## Integración de código

JavaScript es un lenguaje interpretado por el navegador, lo que significa que el código que escribimos se ejecutará en el momento exacto en que el navegador lo procese. Para insertar código JavaScript, tenemos dos opciones: escribirlo directamente en el HTML o enlazarlo mediante un archivo externo con la extensión .js.

Si el código está ubicado en la sección *head*, se ejecutará antes de que se cargue el contenido del cuerpo de la página. En cambio, si se incluye en el *body* (ya sea al inicio, en el medio o al final), se ejecutará en la posición en la que lo coloquemos.

Para mantener la legibilidad y organización del código, lo recomendable es colocarlo siempre en un archivo externo y enlazarlo dentro de las etiquetas *head*. En el archivo podemos decidir si el código debe esperar a que el HTML de la página se cargue completamente o no, ¡aunque eso lo exploraremos más adelante!

## Instalaciones

### Linux

Node JS. Para instalar NodeJs se recomienda instalar el gestor de versiones de NodeJS nvm ver guia de instalación para linux en el siguiente enlace  https://gndx.dev/blog/instalar-nvm-en-ubuntu-20-04/

### Windows (https://github.com/coreybutler/nvm-windows/releases)

<img src="https://i.ibb.co/NYWJ5B8/image.png" style="zoom:67%;" />

![](https://i.ibb.co/QCTLpX4/image.png)

![](https://i.ibb.co/g7Wtby1/image.png)

## Fundamentos de JS

### Expresiones y declaraciones

#### **Declaraciones**

Las declaraciones en JavaScript son sentencias que definen la creación de una variable, función o clase. Podríamos decir que las declaraciones son como las instrucciones que le damos a JavaScript para que haga algo.

![](https://i.ibb.co/D4DqwWb/image121.gif)

#### **Expresiones**

Las expresiones en JavaScript son sentencias que producen un valor. Las expresiones pueden ser tan simples como un solo número o una cadena de texto, o tan complejas como el cálculo de una operación matemática, la evaluación de diferentes valores o la llamada a una función.

![](https://i.ibb.co/9W3VsGb/image123.gif)

### Comentarios

En JavaScript, los **comentarios** son líneas de texto que el intérprete ignora al ejecutar el código. Se utilizan para describir el propósito del código, facilitar su mantenimiento o dejar recordatorios. Existen dos tipos principales de comentarios:

#### **1. Comentarios de una sola línea**

Se escriben con `//` seguido del texto del comentario.

```less
// Esto es un comentario de una sola línea
let nombre = 'Johlver'; // Esto también es un comentario
```

#### **2. Comentarios de múltiples líneas**

Se delimitan con `/*` al inicio y `*/` al final. Son útiles para escribir comentarios largos o documentar bloques de código.

```less
/*
Esto es un comentario de varias líneas.
Puedes escribir tanto texto como necesites.
Se utiliza a menudo para documentar secciones completas.
*/
let edad = 25;
```

#### **3. Añadir recordatorios o advertencias**:

```less
// TODO: Implementar la función de validación
// FIXME: Este código no funciona correctamente si el valor es negativo
```

#### **4. Documentación del código**: 

Muchos desarrolladores usan herramientas como **JSDoc** para documentar funciones, métodos y clases con comentarios estructurados. Por ejemplo:

```javascript
/**
 * Suma dos números y devuelve el resultado.
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} La suma de a y b.
 */
function suma(a, b) {
    return a + b;
}
```



### Escribiendo en la consola

1. Abra el navegador de su preferencia.

2. Abrir el inspector pulsando F12

   <img src="https://i.ibb.co/g9dWDJV/image29.gif" style="zoom: 67%;" />

   



### Operadores en JavaScript

#### Matemáticos

| Operador                 | Símbolo | Descripción                                                  | Ejemplo          | Resultado   |
| ------------------------ | ------- | ------------------------------------------------------------ | ---------------- | ----------- |
| Suma                     | `+`     | Suma dos valores.                                            | `5 + 3`          | `8`         |
| Resta                    | `-`     | Resta el segundo valor del primero.                          | `10 - 6`         | `4`         |
| Multiplicación           | `*`     | Multiplica dos valores.                                      | `4 * 7`          | `28`        |
| División                 | `/`     | Divide el primer valor por el segundo.                       | `20 / 4`         | `5`         |
| Módulo                   | `%`     | Devuelve el resto de la división entre dos valores.          | `10 % 3`         | `1`         |
| Exponenciación           | `**`    | Eleva un número a la potencia de otro.                       | `2 ** 3`         | `8`         |
| Incremento               | `++`    | Aumenta el valor de una variable en 1 (puede ser prefijo o sufijo). | `let x = 5; x++` | `6`         |
| Decremento               | `--`    | Disminuye el valor de una variable en 1 (puede ser prefijo o sufijo). | `let x = 5; x--` | `4`         |
| Suma combinada           | `+=`    | Suma el valor a la variable y asigna el resultado.           | `x += 5`         | `x = x + 5` |
| Resta combinada          | `-=`    | Resta el valor a la variable y asigna el resultado.          | `x -= 3`         | `x = x - 3` |
| Multiplicación combinada | `*=`    | Multiplica el valor y asigna el resultado.                   | `x *= 2`         | `x = x * 2` |
| División combinada       | `/=`    | Divide el valor y asigna el resultado.                       | `x /= 2`         | `x = x / 2` |
| Módulo combinado         | `%=`    | Calcula el resto y asigna el resultado.                      | `x %= 3`         | `x = x % 3` |

##### Precedencia operadores aritméticos

La **precedencia de operadores matemáticos** en JavaScript determina el orden en el cual se evalúan las operaciones en una expresión. Esto es crucial porque el orden de las operaciones afecta el resultado final de los cálculos. JavaScript sigue reglas de precedencia basadas en el orden matemático estándar (PEMDAS), que especifica la prioridad de los operadores.

##### Tabla de precedencia de operadores matemáticos en JavaScript

| Precedencia  | Operador       | Símbolo | Descripción                                      |
| ------------ | -------------- | ------- | ------------------------------------------------ |
| 1 (más alto) | Paréntesis     | `()`    | Evalúa primero las expresiones entre paréntesis. |
| 2            | Exponenciación | `**`    | Eleva un número a la potencia de otro.           |
| 3            | Multiplicación | `*`     | Multiplica dos valores.                          |
| 3            | División       | `/`     | Divide el primer valor por el segundo.           |
| 3            | Módulo         | `%`     | Devuelve el resto de la división.                |
| 4            | Suma           | `+`     | Suma dos valores.                                |
| 4            | Resta          | `-`     | Resta el segundo valor del primero.              |

#### Operadores de comparación

Los **operadores de comparación** en JavaScript se utilizan para comparar dos valores y devuelven un valor booleano (`true` o `false`) dependiendo de si la condición es verdadera o falsa. Estos operadores son fundamentales en la lógica de programación, ya que permiten realizar decisiones y controlar el flujo del programa.

##### Principales operadores de comparación en JavaScript

| Operador               | Símbolo | Descripción                                                  | Ejemplo     | Resultado |
| ---------------------- | ------- | ------------------------------------------------------------ | ----------- | --------- |
| Igualdad               | `==`    | Compara dos valores para ver si son iguales, realizando conversión de tipos si es necesario. | `5 == "5"`  | `true`    |
| Estrictamente igual    | `===`   | Compara dos valores para ver si son iguales en valor y tipo, sin conversión de tipos. | `5 === "5"` | `false`   |
| Desigualdad            | `!=`    | Comprueba si dos valores no son iguales, realizando conversión de tipos si es necesario. | `5 != "5"`  | `false`   |
| Estrictamente desigual | `!==`   | Comprueba si dos valores no son iguales en valor o en tipo, sin conversión de tipos. | `5 !== "5"` | `true`    |
| Mayor que              | `>`     | Comprueba si el primer valor es mayor que el segundo.        | `7 > 5`     | `true`    |
| Mayor o igual que      | `>=`    | Comprueba si el primer valor es mayor o igual que el segundo. | `5 >= 5`    | `true`    |
| Menor que              | `<`     | Comprueba si el primer valor es menor que el segundo.        | `3 < 5`     | `true`    |
| Menor o igual que      | `<=`    | Comprueba si el primer valor es menor o igual que el segundo. | `5 <= 5`    | `true`    |

Asignación

Tengamos en cuenta que una asignación `=` también es un operador. Está listado en la tabla de precedencia con la prioridad muy baja de `2`.

#### Asignaciones encadenadas

Otra característica interesante es la habilidad para encadenar asignaciones:

```js
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
```

#### Resumen de las reglas de precedencia

1. **Paréntesis** tienen la precedencia más alta y permiten cambiar el orden de evaluación.
2. **Exponenciación** se evalúa después de los paréntesis, antes de cualquier multiplicación, división o módulo.
3. **Multiplicación, División y Módulo** se evalúan después de la exponenciación y antes de la suma y resta.
4. **Suma y Resta** tienen la precedencia más baja y se evalúan al final, de izquierda a derecha.

#### Operadores Lógicos

| Operador | Nombre          | Descripción                                                  | Ejemplo              | Resultado |
| -------- | --------------- | ------------------------------------------------------------ | -------------------- | --------- |
| `&&`     | AND (y lógico)  | Devuelve `true` si **ambas condiciones** son verdaderas.     | `(5 > 3) && (3 < 4)` | `true`    |
| `||`     | OR (o lógico)   | Devuelve `true` si **al menos una condición** es verdadera.  | `(5 > 3) || (3 > 4)` | `true`    |
| `!`      | NOT (no lógico) | Invierte el valor lógico: `true` se convierte en `false`, y viceversa. | `!(5 > 3)`           | `false`   |

# Variables

En JavaScript, las variables son contenedores que almacenan datos que puedes usar y manipular a lo largo de tu código. Las variables se pueden declarar utilizando tres palabras clave principales: ` `, `let` y `const`, cada una con reglas y comportamientos específicos.

Podemos comprender fácilmente el concepto de una “variable” si nos la imaginamos como una “caja” con una etiqueta de nombre único pegada en ella.

Por ejemplo, podemos imaginar la variable `message` como una caja etiquetada `"message"` con el valor `"Hola!"` adentro:

![](https://i.ibb.co/bd6tzhs/imagen.png)

Cuando el valor ha sido alterado, los datos antiguos serán removidos de la variable:

![](https://i.ibb.co/1MSwxrQ/imagen.png)

### Tipos de datos primitivos

<img src="https://i.ibb.co/LnWN2Fq/image31.png" style="zoom:50%;" /> En ciencias de la computación, un tipo de dato informático o simplemente tipo es un atributo de los datos que indica al ordenador (y/o al programador/programadora) sobre la clase de datos que se va a manejar.

> Un **tipo de dato** es una clasificación de la información que le indica a un lenguaje de programación cómo debe interpretarse, almacenarse y manipularse un valor. Los tipos de datos son fundamentales porque determinan las operaciones que se pueden realizar sobre los valores y cómo se comportan en el contexto del programa.

![](https://i.ibb.co/tCnf3qS/image32.png)Los números, designados como "number" en JavaScript, constituyen los datos fundamentales que se pueden representar en este lenguaje. En JavaScript, no se establece una distinción entre números enteros y decimales; todos los números son del tipo "number".

![](https://i.ibb.co/qyBydVq/image33.png)La cadena de texto (tipo string) es otro tipo de dato muy común. En JavaScript, las cadenas de texto se representan entre comillas simples, dobles o acentos graves.

![](https://i.ibb.co/BLm1Mh9/image35.png)Los booleanos representa sólo dos valores: true (verdadero) o false (falso).

![](https://i.ibb.co/Gvd1BdT/image36.png) Representa la ausencia intencionada de un valor.

![](https://i.ibb.co/pd8Nd6r/image34.png) Representa una variable que ha sido declarada pero no tiene un valor asignado.

### Tipos de datos complejos (o de referencia)

Estos tipos de datos pueden almacenar colecciones de valores o valores complejos:

- **Object**: Es una colección de pares clave-valor, y es el tipo de dato básico para almacenar datos estructurados en JavaScript.

  ```js
  let persona = {
      nombre: "Juan",
      edad: 30
  };
  ```

- **Array**: Es una lista ordenada de elementos que pueden ser de cualquier tipo de dato.

  ```js
  let colores = ["rojo", "verde", "azul"];
  ```

### Declaración de variables

#### **`var`**

- **Alcance (Scope)**: Tiene un alcance de función, lo que significa que si declaras una variable `var` dentro de una función, solo estará accesible dentro de esa función.
- **Re-declarable**: Permite re-declarar la misma variable dentro del mismo ámbito sin errores.
- **Hoisting**: Las declaraciones con `var` se "elevan" al principio del ámbito. Esto significa que puedes usar la variable antes de declararla, aunque el valor sea `undefined`.

```js
var nombre = "Juan";
var nombre = "Ana"; // Permite redeclarar
```

#### **`let`**

- **Alcance (Scope)**: Tiene un alcance de bloque, lo que significa que solo es accesible dentro del bloque `{}` en el que se declara.
- **No re-declarable**: No permite que se vuelva a declarar la misma variable en el mismo ámbito.
- **No hoisting completo**: Aunque `let` también se eleva, no puede usarse antes de la declaración debido a la "Zona Temporal de Muerte".

```js
let edad = 25;
// let edad = 30; // Error: ya está declarada en el mismo ámbito
```

#### **`const`**

En JavaScript, las constantes son variables cuyo valor no puede cambiar una vez que han sido definidas. Se declaran usando la palabra clave `const`. Las constantes son útiles cuando necesitas un valor fijo en tu código, evitando cambios accidentales o no deseados.

```js
const NOMBRE_CONSTANTE = valor;
```

##### Características de `const`

1. **Asignación única**: Una constante debe ser inicializada en el momento de su declaración. Si intentas declarar una constante sin valor, se producirá un error.
2. **Inmutabilidad del valor de referencia**: El valor de una constante no puede ser reasignado una vez que se le ha asignado. Sin embargo, en el caso de objetos y arrays, los elementos internos pueden ser modificados, aunque no puede cambiarse la referencia al objeto o array.
3. **Ámbito de bloque**: Las constantes tienen un alcance de bloque (block scope), lo que significa que solo existen dentro del bloque `{}` en el que fueron declaradas, similar a `let`.

```js
const PI = 3.14;
// PI = 3.1416; // Error: no se puede reasignar un valor a una constante
```

##### Ventajas de usar `const`

- **Evita errores accidentales**: Al declarar una constante, estás indicando claramente que el valor no debe cambiar, lo cual puede ayudar a evitar errores accidentales.
- **Mejor legibilidad**: Usar `const` indica claramente la intención de mantener un valor constante en el código, mejorando la legibilidad.
- **Optimización**: Los motores de JavaScript pueden optimizar mejor el rendimiento de las constantes debido a su naturaleza inmutable.

> La inmutabilidad es un concepto en programación que se refiere a la propiedad de un objeto o valor que no puede ser modificado después de su creación. Cuando un valor es inmutable, cualquier operación que parezca cambiarlo en realidad crea una nueva versión del valor o el objeto, en lugar de alterar el original.

### Convenciones y nomenclatura

En JavaScript, existen diferentes nomenclaturas para nombrar las variables: camelCase, snake_case y SCREAMING_CASE.

![](https://i.ibb.co/cTb1nsp/image.png)

### Conversiones de Tipos

#### ToString

La conversión a string ocurre cuando necesitamos la representación en forma de texto de un valor.

Por ejemplo, `alert(value)` lo hace para mostrar el valor como texto. También podemos llamar a la función `String(value)` para convertir un valor a string:

```js
let value = true;
alert(typeof value); // boolean

value = String(value); // ahora value es el string "true"
alert(typeof value); // string
```

```less
trainer@johlver-virtual-machine:~/projectsJs/intro$ node convertirtipos.js 
boolean
string
trainer@johlver-virtual-machine:~/projectsJs/intro$ 
```



#### ToNumber

La conversión numérica ocurre automáticamente en funciones matemáticas y expresiones.

Por ejemplo, cuando se dividen valores no numéricos usando `/`:

```js
alert( "6" / "2" ); // 3, los strings son convertidos a números
```

```js
let str = "123";
alert(typeof str); // string

let num = Number(str); // se convierte en 123

alert(typeof num); // number
```

> Ten en cuenta que `null` y `undefined` se comportan de distinta manera aquí: `null` se convierte en `0` mientras que `undefined` se convierte en `NaN`.

```less
trainer@johlver-virtual-machine:~/projectsJs/intro$ node convertirtipos.js 
string
number
trainer@johlver-virtual-machine:~/projectsJs/intro$
```

#### ToBoolean

La conversión a boolean es la más simple.

Ocurre en operaciones lógicas (más adelante veremos test condicionales y otras cosas similares), pero también puede realizarse de forma explícita llamando a la función `Boolean(value)`.

Las reglas de conversión:

- Los valores que son intuitivamente “vacíos”, como `0`, `""`, `null`, `undefined`, y `NaN`, se convierten en `false`.
- Otros valores se convierten en `true`.

```jade
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hola") ); // true
alert( Boolean("") ); // false
```

## 

### Interpolación de variables

La interpolación de variables en JavaScript es una técnica que permite insertar valores de variables dentro de una cadena de texto de manera sencilla y legible. Esta técnica se realiza usando **plantillas de cadena** (template literals), introducidas en ES6, y permite crear cadenas dinámicas con el operador de interpolación `${}` dentro de las comillas invertidas (```).

##### Sintaxis de interpolación en JavaScript

Para usar la interpolación, debes utilizar comillas invertidas (```) en lugar de comillas simples (`'`) o dobles (`"`), y luego insertar las variables o expresiones dentro de `${}` en la cadena.

```js
const nombre = "Juan";
const edad = 25;
const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje); // Imprime: "Hola, mi nombre es Juan y tengo 25 años."
```

```javascript
trainer@johlver-virtual-machine:~/projectsJs/intro$ node interpolacion.js 
Hola, mi nombre es Juan y tengo 25 años.
trainer@johlver-virtual-machine:~/projectsJs/intro$ 
```



##### Ventajas de la interpolación

1. **Legibilidad**: Es mucho más legible que concatenar múltiples partes de una cadena con el operador `+`.

2. **Expresiones dentro de cadenas**: Permite insertar no solo variables, sino también expresiones y resultados de funciones.

3. **Uso multilineal**: Las template literals también permiten crear cadenas de varias líneas sin necesidad de caracteres especiales.

   ```js
   const texto = `Esto es una línea
   y esta es otra línea.`;
   console.log(texto);
   // Imprime:
   // Esto es una línea
   // y esta es otra línea.
   ```

   ```js
   const usuario = "Ana";
   const saldo = 1500;
   const mensajeBienvenida = `Hola, ${usuario}! Tienes $${saldo} en tu cuenta.`;
   console.log(mensajeBienvenida);
   ```

# Operador typeof

El operador `typeof` en JavaScript se utiliza para determinar el tipo de una variable o expresión. Devuelve una cadena que indica el tipo del operando. Es especialmente útil para verificar tipos de datos en tiempo de ejecución.

### Valores devueltos

El operador `typeof` puede devolver uno de los siguientes valores en forma de cadena:

1. **"undefined"**: Si el valor no está definido.

2. **"boolean"**: Si el valor es un booleano (`true` o `false`).

3. **"number"**: Si el valor es un número (incluye valores de punto flotante o `NaN`).

4. **"bigint"**: Para valores de tipo BigInt.

5. **"string"**: Si el valor es una cadena de texto.

6. **"symbol"**: Para valores de tipo símbolo.

7. **"function"**: Si el valor es una función.

8. **"object"**: Para objetos, arreglos y valores `null` (aunque `null` es un caso especial).

   ```javascript
   // Tipos básicos
   console.log(typeof 42);           // "number"
   console.log(typeof 'hello');      // "string"
   console.log(typeof true);         // "boolean"
   console.log(typeof undefined);    // "undefined"
   
   // Funciones
   console.log(typeof function(){}); // "function"
   
   // Objetos
   console.log(typeof {a: 1});       // "object"
   console.log(typeof [1, 2, 3]);    // "object" (los arrays son un tipo especial de objeto)
   
   // Null
   console.log(typeof null);         // "object" (peculiaridad histórica de JavaScript)
   
   // BigInt
   console.log(typeof 10n);          // "bigint"
   
   // Símbolos
   console.log(typeof Symbol('id')); // "symbol"
   
   ```

### Usos comunes

Validación de tipos:

```javascript
function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Ambos argumentos deben ser números.');
    }
    return a + b;
}

```

Verificar si una variable está definida:

```javascript
if (typeof miVariable === 'undefined') {
    console.log('miVariable no está definida.');
}
```



# Ejecución desde Navegador

### **Atributo `async` y `defer`**:

- **`async`**: Ejecuta el script tan pronto como se descargue, sin esperar a que se cargue el resto de la página. Puede ser útil para scripts independientes.

  ![](https://i.ibb.co/r2cHVFT/image13.png)

  

- **`defer`**: Los scripts cargados con el atributo defer se ejecutarán en el orden en que aparecen en la página y los ejecutará tan pronto como se descarguen el script y el contenido..

  ![](https://i.ibb.co/r7yWdJR/image12.png)

### Etiqueta **`<script>`** 

La etiqueta `<script>` en HTML se utiliza para incluir y ejecutar código JavaScript en una página web. Esta etiqueta permite tanto escribir el código JavaScript directamente dentro de ella como enlazar archivos JavaScript externos para añadir interactividad y funcionalidad al sitio web.

Características y usos de la etiqueta `<script>`:

**Código Interno**: Puedes escribir código JavaScript directamente entre las etiquetas de apertura y cierre de `<script>`, así:

```html
<script>
    console.log("Hola, mundo!");
</script>
```

**Código Externo**: También puedes enlazar un archivo JavaScript externo usando el atributo `src`, lo cual es útil para mantener el código organizado y mejorar la legibilidad:

```js
<script src="miArchivo.js"></script>
```

### **Ubicación en el Documento**:

- **En el `<head>`**: Si colocas la etiqueta `<script>` en el `<head>`, el navegador cargará y ejecutará el JavaScript antes de que el contenido del `body` esté disponible. Esto es útil para definir funciones o configuraciones globales, pero puede ralentizar la carga de la página si el script es grande.
- **En el `<body>`**: Colocar la etiqueta `<script>` al final del `body` es común en muchos desarrollos modernos, ya que permite que el HTML se cargue primero y evita bloqueos de carga. El código JavaScript se ejecutará después de que todos los elementos HTML se hayan cargado.

# Taller Introductorio

1. Cree una nueva carpeta en su dispositivo

2. Cree la siguiente estructura en la carpeta creada

   ![](https://i.ibb.co/KwfC0d6/image.png)

3. Agregue la estructura basica en el documento html

   ![](https://i.ibb.co/thfmbxt/image.png)

4. En el archivo js creado agregue el siguiente codigo

   ```javascript
   console.log('Saludos Campers desde JS');
   ```

5. Agregue el archivo app.js al documento html creado en los puntos anteriores.

   ![](https://i.ibb.co/Mgq8nfW/image.png)

6. Abra el documento html en el navegador usando LiveServer

   ![](https://i.ibb.co/Bn4PzYX/image.png)

7. Para finalizar agregue el siguiente codigo al final del archivo JS

   ```javascript
   const usuario = "Ana";
   const saldo = 1500;
   const mensajeBienvenida = `Hola, ${usuario}! Tienes $${saldo} en tu cuenta.`;
   console.log(mensajeBienvenida);
   ```

   <img src="https://i.ibb.co/gy7tKBK/image.png" style="zoom:67%;" />

# El modo moderno, "use strict"

`"use strict"` es una directiva en JavaScript que activa el "modo estricto" en el entorno de ejecución. Este modo estricto impone reglas más estrictas para la escritura de código, ayudando a evitar errores comunes y haciendo que el código sea más seguro y predecible.

## Cómo activar `"use strict"`

Para activar el modo estricto en JavaScript, simplemente añade `"use strict";` al comienzo de un archivo, de una función o de un bloque de código.

```js
"use strict";
// Todo el código en este archivo estará en modo estricto
```

## Beneficios y efectos de `"use strict"`

**Evita errores comunes**: Modo estricto previene algunos errores comunes de JavaScript, como el uso de variables sin declarar.

**Restringe el uso de palabras reservadas**: No permite usar palabras reservadas de futuras versiones de JavaScript como nombres de variables o funciones, evitando posibles conflictos.

**Prohíbe la duplicación de parámetros en funciones**: No permite parámetros con el mismo nombre en funciones, lo que previene ambigüedades en el código.

**Más seguridad en el uso de `this`**: En el modo estricto, el valor de `this` en funciones que no están dentro de un objeto es `undefined`, en lugar de referirse al objeto global.

**Prevención de la eliminación de propiedades no eliminables**: Modo estricto lanza un error si intentas eliminar propiedades que no se pueden eliminar.

## ¿Por qué usar `"use strict"`?

Usar `"use strict"` ayuda a mejorar la calidad del código JavaScript al hacer cumplir mejores prácticas y al detectar errores potenciales. Aunque puede ser más restrictivo, esta directiva permite escribir un código más seguro, compatible con futuras versiones de JavaScript y menos propenso a errores.

# Console

`console` es un objeto en JavaScript que proporciona métodos para interactuar con la consola del navegador, permitiendo a los desarrolladores registrar, depurar y analizar datos. Es una herramienta fundamental en el desarrollo web para verificar el funcionamiento del código, depurar errores y mostrar información relevante sin necesidad de modificar la interfaz del usuario.

## Principales métodos de `console`

**`console.log()`**: Muestra un mensaje o valor en la consola, siendo el método más común para depuración.

```js
console.log("Mensaje de prueba"); // Imprime "Mensaje de prueba" en la consola
```

**`console.error()`**: Muestra un mensaje de error en la consola.

```js
console.error("¡Error encontrado!"); // Imprime el mensaje en rojo para indicar un error
```

**`console.warn()`**: Muestra una advertencia en la consola, útil para señalar posibles problemas.

```js
console.warn("Advertencia: revisa esta sección"); // Aparece en amarillo en la mayoría de los navegadores
```

**`console.info()`**: Muestra un mensaje informativo. Similar a `console.log`, pero con un propósito más específico.

```js
console.info("Este es un mensaje informativo.");
```

**`console.table()`**: Muestra datos en formato de tabla, lo cual es útil para visualizar arrays y objetos de manera organizada.

```js
let datos = [
    { nombre: "Johlver", edad: 30 },
    { nombre: "Ana", edad: 25 }
];
console.group("Grupo de mensajes");
console.table(datos);
console.groupEnd();
```

**`console.clear()`**: Limpia la consola. Ideal para eliminar mensajes y comenzar de nuevo con una consola vacía.

```js
console.clear();
```

**`console.group()` y `console.groupEnd()`**: Agrupan mensajes en un bloque que se puede expandir o contraer, lo cual ayuda a organizar mejor los mensajes en la consola.

```js
console.group("Grupo de mensajes");
console.log("Mensaje 1");
console.log("Mensaje 2");
console.groupEnd();
```

**`console.time()` y `console.timeEnd()`**: Miden el tiempo que toma ejecutar una sección de código, útil para analizar el rendimiento.

```js
console.time("Ciclo for");
for(let i = 0; i < 1000; i++) {
    // Alguna operación
}
console.timeEnd("Ciclo for");
```

## Importancia de `console`

El objeto `console` es una herramienta poderosa para la depuración y el análisis de aplicaciones JavaScript, especialmente durante el desarrollo, ya que permite a los programadores obtener información en tiempo real sobre la ejecución de su código sin interferir con la interfaz del usuario.

# Interacción: alert, prompt, confirm

## **Prompt**

Un **prompt** en programación y desarrollo de interfaces es una ventana emergente que solicita al usuario que ingrese algún tipo de información. En JavaScript, puedes crear un **cuadro de diálogo de prompt** utilizando la función `prompt()`, que le pide al usuario que ingrese datos, como texto o números, y devuelve la entrada del usuario como una cadena de texto.

```js
result = prompt(title, [default]);
```

> ```
> title
> ```
>
> El texto a mostrar al usuario.
>
> ```
> default
> ```
>
> Un segundo parámetro opcional, es el valor inicial del campo de entrada.

> **Corchetes en la sintaxis `[...]`**
>
> Los corchetes alrededor de `default` en la sintaxis de arriba denotan que el parámetro es opcional, no requerido.

```js
//Ejemplo
let age = prompt ('¿Cuántos años tienes?', 100);

alert(`Tienes ${age} años!`); //Tienes 100 años!
```

## **confirm**

El método `confirm()` en JavaScript permite mostrar un cuadro de diálogo que solicita al usuario confirmar o cancelar una acción. Este cuadro presenta dos opciones: "Aceptar" y "Cancelar", y es útil cuando se necesita la confirmación del usuario antes de proceder con una acción importante, como eliminar un elemento o cerrar una sesión sin guardar los cambios.

**Sintaxis**

```js
let resultado = confirm("¿Estás seguro de que deseas continuar?");
```

### Funcionamiento de `confirm`

- **Mensaje**: `confirm()` recibe un mensaje que describe la acción para que el usuario entienda qué está confirmando.
- Valor devuelto: Este método devuelve un valor booleano:
  - `true` si el usuario hace clic en "Aceptar".
  - `false` si el usuario hace clic en "Cancelar" o cierra el cuadro de diálogo.

```js
let confirmarEliminacion = confirm("¿Estás seguro de que deseas eliminar este elemento?");
if (confirmarEliminacion) {
    console.log("Elemento eliminado.");
} else {
    console.log("Operación cancelada.");
}
```

# Diálogos con Esteroides (https://sweetalert2.github.io/)

Agregue la siguiente importacion:

```js
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
```

En el JS donde desee implementar el dialog inserte el siguiente codigo:

```js
Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
```

## Descargando la libreria

1. Usando el npm

   ```
   npm install sweetalert2
   ```

2. Descargando manualmente los archivos.

   Ingrese al repositorio  https://github.com/trainingLeader/sweetlibrary.git y descargue el archivo sweealert2.zip

   <img src="https://i.ibb.co/CwpPJ8c/developer-13-11-2024-11-53-26.gif" style="zoom: 67%;" />

   Cree un nuevo proyecto o abra uno ya existente donde desee incorporar la libreria

   <img src="https://i.ibb.co/2ZxhGJr/developer-13-11-2024-11-53-262.gif" style="zoom:67%;" />

   Copie la carpeta que  contiene la libreria de sweetalert2 en la carpeta que desee, para el ejemplo se copiara en la carpeta js

   <img src="https://i.ibb.co/vcLQ5Yz/developer-13-11-2024-11-53-263.gif" style="zoom:67%;" />

   Cree o abra el documento html donde desee importar sweetalert2.

   <img src="https://i.ibb.co/MM9N3zb/developer-13-11-2024-11-53-264.gif" style="zoom:67%;" />

    Cree o abra un archivo js donde desee implementar la libreria. Recuerde que en la url del autor podra encontrar las detalle de uso. Ejecute el html usando Live Server

   <img src="https://i.ibb.co/VJ4SgM4/developer-13-11-2024-11-53-265.gif" style="zoom:67%;" />

   <img src="https://i.ibb.co/2t1fvbq/developer-13-11-2024-11-53-266.gif" style="zoom:67%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="js/sweetalert2/dist/sweetalert2.js" defer></script>
    <link rel="stylesheet" href="js/sweetalert2/dist/sweetalert2.css">
    <script type="module" src="js/app.js" defer></script>
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

```js
const { value: email } = await Swal.fire({
    title: "Input email address",
    input: "email",
    inputLabel: "Your email address",
    inputPlaceholder: "Enter your email address"
  });
  if (email) {
    Swal.fire(`Entered email: ${email}`);
  }
```



# Estructuras de control

Las **estructuras de control** en JavaScript son bloques de código que permiten tomar decisiones, realizar iteraciones o ejecutar diferentes partes del programa en función de condiciones. A continuación, se describen las principales estructuras de control:

------

## **1. Condicionales**

### **`if`, `else if`, `else`**

Permite ejecutar diferentes bloques de código dependiendo de una condición.

```javascript
let edad = 18;

if (edad >= 18) {
    console.log('Eres mayor de edad.');
} else if (edad >= 13) {
    console.log('Eres un adolescente.');
} else {
    console.log('Eres un niño.');
}
```

### **`switch`**

😊😂🤣❤️😍😒🤦‍♀️🤦‍♂️🤷‍♀️🤷‍♂️✌️🤞😜💖😢🎶😎😉😀😁😂🤣😃😄🥲🫥😮🥱😥😶‍🌫️🤐🙃🫠😒😔😓🤑

Se utiliza para comparar un valor con múltiples casos posibles.

```javascript
let dia = 'lunes';

switch (dia) {
    case 'lunes':
        console.log('Inicio de semana.');
        break;
    case 'viernes':
        console.log('Es casi fin de semana.');
        break;
    case 'sábado':
    case 'domingo':
        console.log('Fin de semana.');
        break;
    default:
        console.log('Es un día normal.');
}
```

![](https://i.ibb.co/NT4k2W1/image97.png)

![](https://i.ibb.co/ZfNbpv7/image99.png)



#### **El patrón switch(true)**

Existe un patrón que se usa a veces con switch que es switch(true). Esto es, en lugar de evaluar una expresión, evalúa una condición ignorando por completo el valor de la expresión.

![](https://i.ibb.co/Qp3sDKS/image101.png)

## **2. Ciclos o bucles**

### **`for`**

Se usa para iterar un número específico de veces.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(`Iteración número: ${i}`);
}
```

### **`while`**

Ejecuta un bloque de código mientras una condición sea verdadera.

```javascript
let contador = 0;

while (contador < 5) {
    console.log(`Contador: ${contador}`);
    contador++;
}

```

### **`do...while`**

Ejecuta el bloque al menos una vez antes de comprobar la condición.

```javascript
let numero = 0;

do {
    console.log(`Número: ${numero}`);
    numero++;
} while (numero < 5);

```

### **`for...of`**

Itera sobre elementos de un iterable (como arrays o cadenas).

```javascript
let colores = ['rojo', 'verde', 'azul'];

for (let color of colores) {
    console.log(color);
}
```

### **`for...in`**

Itera sobre las propiedades iterables de un objeto.

```javascript
let persona = { nombre: 'Ana', edad: 25 };

for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}
```

## **3. Control de flujo adicional**

### **`break`**

Termina un bucle o una estructura de control.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i); // Imprime 0 a 4
}
```

### **`continue`**

Salta a la siguiente iteración del bucle.

```javascript
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i); // Imprime 1, 3, 5, 7, 9
}
```

## **4. Operador ternario**

Simplifica una estructura `if...else` en una sola línea.

```javascript
let edad = 20;
let mensaje = (edad >= 18) ? 'Mayor de edad' : 'Menor de edad';
console.log(mensaje);
```



## **`try...catch`**

Maneja excepciones en el flujo del programa.

```javascript
try {
    let resultado = 10 / 0; // Operación válida en JavaScript
    console.log(resultado);
} catch (error) {
    console.log('Se produjo un error:', error.message);
} finally {
    console.log('Esto siempre se ejecuta.');
}
```

# Manejo de cadenas

https://elcodigoascii.com.ar/codigos-ascii/acento-grave-codigo-ascii-96.html#google_vignette

![](https://i.ibb.co/cNZ9KL0/image.png)

## Substrings

![](https://i.ibb.co/f9xWMy3/image.png)

![](https://i.ibb.co/f0tG4dQ/image.png)

![](https://i.ibb.co/C1RjTy3/image.png)

El método `repeat()` se utiliza para crear una nueva cadena repitiendo una cadena existente un número determinado de veces. Es una forma sencilla y eficiente de generar cadenas repetitivas.

```javascript
const palabra = "Hola";
const resultado = palabra.repeat(3);
console.log(resultado); // Output: HolaHolaHola
```

El método `substring()` en JavaScript es una herramienta muy útil para manipular cadenas de texto. Permite extraer una porción específica de una cadena, es decir, una subcadena.

```javascript
let saludo = "Hola, mundo!";

// Extraer "Hola"
let parte1 = saludo.substring(0, 4); // Output: Hola

// Extraer "mundo"
let parte2 = saludo.substring(6); // Output: mundo!

// Extraer una subcadena desde la mitad
let mitad = saludo.substring(5, 10); // Output: , mun
```

**substr()** es un método que se utiliza para extraer una porción específica de una cadena de texto.

```javascript
let saludo = "Hola, mundo!";

// Extraer "Hola"
let parte1 = saludo.substr(0, 4);
console.log(parte1); // Output: Hola

// Extraer "mundo"
let parte2 = saludo.substr(7, 5);
console.log(parte2); // Output: mundo
```

`slice()` en JavaScript es otra herramienta muy útil para manipular cadenas de texto.  `slice()` permite seleccionar una parte de una cadena y crear una nueva cadena con esa selección. 

```javascript
let saludo = "Hola, mundo!";

// Extraer "Hola"
let parte1 = saludo.slice(0, 4);
console.log(parte1); // Output: Hola

// Extraer "mundo"
let parte2 = saludo.slice(6); // Si omites el índice final, va hasta el final
console.log(parte2); // Output: mundo!
```

![](https://i.ibb.co/r6yH1XG/image.png)

`split()` en JavaScript es una herramienta muy útil para **dividir una cadena de texto en un array de subcadenas**.

```javascript
let frase = "Hola, mundo!";
let palabras = frase.split(" "); // Dividimos por espacios en blanco
console.log(palabras); // Output: ["Hola,", "mundo!"]
```

```javascript
let cadena_numeros = "1,2,3,4";
let numeros = cadena_numeros.split(","); // Dividimos por comas
console.log(numeros); // Output: ["1", "2", "3", "4"]

let email = "usuario@ejemplo.com";
let partes_email = email.split("@");
console.log(partes_email); // Output: ["usuario", "ejemplo.com"]
```

![](https://i.ibb.co/Fm7x2hK/image.png)

![](https://i.ibb.co/6W8XSSK/image.png)

```javascript
let saludo = "Hola, mundo!";

// Verificar si comienza con "Hola"
let comienzaConHola = saludo.startsWith("Hola");
console.log(comienzaConHola); // Output: true

// Verificar si comienza con "mundo" (empezando desde la posición 7)
let comienzaConMundo = saludo.startsWith("mundo", 6);
console.log(comienzaConMundo); // Output: true
```

**¿Para qué sirve `startsWith()`?**

- **Validación de datos:** Para asegurarte de que un usuario ingrese un dato que comience con un formato específico (por ejemplo, un correo electrónico con "http://").
- **Manipulación de cadenas:** Para tomar decisiones basadas en el inicio de una cadena.
- **Análisis de rutas de archivos:** Para determinar el tipo de archivo basado en la extensión.
- **Parsing de URLs:** Para extraer el protocolo y el dominio de una URL.



`includes()` sirve para verificar si una cadena de texto **contiene** otra cadena más pequeña en cualquier parte de ella. Es decir, te indica si una subcadena está presente dentro de una cadena más larga.

```javascript
let frase = "Hola, mundo!";

// Verificar si la frase contiene "mundo"
let contieneMundo = frase.includes("mundo");
console.log(contieneMundo); // Output: true
```



# Métodos en JavaScript

![](https://i.ibb.co/PxkPF7M/image.png)

La palabra reservada **function** que indica que estamos definiendo una función. El nombre de la función, en este caso **saludar**. Normalmente usamos verbos para nombrar funciones, ya que son acciones que realizan. Un par de paréntesis **()** después del nombre. Pueden contener parámetros. En este caso, no tenemos ninguno. Un bloque de código entre llaves **{}**. En este caso, solo tenemos una línea de código, pero podríamos tener muchas más.

## **Devolviendo un resultado** 

Las funciones pueden devolver un resultado. Para ello, utilizamos la palabra reservada **return** y después el valor que queremos devolver:

![](https://i.ibb.co/9vMc2zB/image.png)

## Pasando parámetros

![](https://i.ibb.co/dDVctQT/image.png)

![](https://i.ibb.co/gyZP56s/image.png)

## Funciones de expresión

En JavaScript, las **funciones de expresión** son un tipo de función definida como una **expresión** en lugar de una **declaración**. Esto significa que una función de expresión se asigna a una variable o constante y, opcionalmente, puede ser **anónima** (es decir, no tener un nombre propio).

```javascript
const nombreFuncion = function([parametros]) {
    // Cuerpo de la función
    return resultado;
};
```

### **Características de las funciones de expresión**

1. **Pueden ser anónimas**:
   - Las funciones de expresión no necesitan un nombre.
   - Esto es útil para funciones que no requieren ser reutilizadas directamente.
2. **No son "hoisted"**:
   - A diferencia de las funciones declaradas, las funciones de expresión no se "elevan" al inicio del archivo.
   - Esto significa que no puedes usar la función antes de declararla.
3. **Flexibilidad**:
   - Puedes asignarlas a variables, pasarlas como argumentos a otras funciones o devolverlas desde otras funciones.

**Ejemplo básico de función de expresión**

```javascript
// Función de expresión anónima
const sumar = function(a, b) {
    return a + b;
};

console.log(sumar(5, 3)); // 8
```

### **Funciones nombradas dentro de una expresión**

Aunque es raro, puedes asignar un nombre a la función dentro de una expresión. Esto es útil para la recursión.

```javascript
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1); // Se llama a sí misma usando el nombre fact
};

console.log(factorial(5)); // 120
```

## Funciones flecha

Las **funciones flecha** en JavaScript, introducidas en ES6 (ECMAScript 2015), son una sintaxis más compacta para definir funciones. Estas funciones son especialmente útiles en programación funcional y al trabajar con métodos como `map`, `filter` o `reduce`.

```javascript
(param1, param2, ..., paramN) => {
    // cuerpo de la función
    return valor;
}
```

### **Ejemplos básicos**

1. **Función tradicional**:

   ```
   const sumar = function(a, b) {
       return a + b;
   }
   ```

   **Equivalente con función flecha**:

   ```javascript
   const sumar = (a, b) => a + b;
   ```

2. **Sin parámetros**:

   ```javascript
   const saludar = () => "Hola, mundo!";
   console.log(saludar()); // "Hola, mundo!"
   ```

3. **Un solo parámetro (puedes omitir los paréntesis)**:

   ```javascript
   const cuadrado = x => x * x;
   console.log(cuadrado(4)); // 16
   ```


## Recursividad

La recursividad es un concepto en programación que se refiere a la capacidad de una función para llamarse a sí misma. En otras palabras, una función recursiva es aquella que se define en términos de sí misma. 

#### Reglas

![](https://i.ibb.co/NSzvXKy/image.png)

![](https://i.ibb.co/nC6ZBRT/image.png)

# Arrays

En informática, una colección de datos es un grupo de datos que están relacionados de alguna manera. Las colecciones de datos se utilizan para almacenar y organizar datos de manera eficiente. Hay muchos tipos diferentes de colecciones de datos, cada una con sus propias ventajas y desventajas. Algunos de los tipos más comunes de colecciones de datos incluyen:

- **Arreglos**: Los arreglos son colecciones de datos que están ordenados y tienen un tamaño fijo.
- **Listas**: Las listas son colecciones de datos que están ordenados o no ordenados y pueden tener un tamaño variable.
- **Conjuntos**: Los conjuntos son colecciones de datos que no tienen elementos duplicados.
- **Diccionarios**: Los diccionarios son colecciones de datos que asocian claves con valores.

![](https://i.ibb.co/b32kZyN/image149.png)



![](https://i.ibb.co/YdnyZVF/image150.png) 

## Sintaxis

![](https://i.ibb.co/PwsdjGp/image151.png)

<img src="https://i.ibb.co/znqFHqm/image152.gif" style="zoom: 67%;" /> <img src="https://i.ibb.co/WgQRny6/image153.gif" style="zoom:67%;" />

## **Métodos para la manipulación de** **arrays**

### **push**()

El método push() en JavaScript se utiliza para agregar uno o más elementos al final de un array. Este método modifica el array original y devuelve la nueva longitud del array.

<img src="https://i.ibb.co/cN1HgBt/image154.gif" style="zoom:80%;" />

### **pop()**

El método **pop()** en JavaScript se utiliza para eliminar el último elemento de un array. Este método modifica el array original, reduciendo su longitud en 1, y devuelve el elemento eliminado.

<img src="https://i.ibb.co/CMzVmmX/image155.gif" style="zoom:80%;" />

### **splice**()

El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

![](https://i.ibb.co/2WYxZ0n/image.png)

**Elimina elementos**

```javascript
let numeros = [1, 2, 3, 4, 5];
let eliminados = numeros.splice(2, 2); // Elimina 2 elementos desde el índice 2
console.log(numeros);      // [1, 2, 5]
console.log(eliminados);   // [3, 4]
```

#### **Agregar elementos**

```javascript
let frutas = ["manzana", "banana", "cereza"];
frutas.splice(1, 0, "kiwi", "mango"); // Agrega "kiwi" y "mango" en el índice 1
console.log(frutas); // ["manzana", "kiwi", "mango", "banana", "cereza"]
```

![](https://i.ibb.co/DDdV9HD/image.png)

#### **Reemplazar elementos**

```javascript
let colores = ["rojo", "azul", "verde"];
colores.splice(1, 1, "amarillo"); // Reemplaza el elemento en el índice 1
console.log(colores); // ["rojo", "amarillo", "verde"]
```

#### **Mezcla de eliminación y adición**

```javascript
let animales = ["perro", "gato", "conejo"];
let resultado = animales.splice(1, 1, "tigre", "león"); // Reemplaza "gato" y agrega nuevos
console.log(animales); // ["perro", "tigre", "león", "conejo"]
console.log(resultado); // ["gato"]
```

#### **Eliminar desde el índice hasta el final**

```javascript
let letras = ["a", "b", "c", "d", "e"];
letras.splice(2); // Elimina todos los elementos desde el índice 2
console.log(letras); // ["a", "b"]
```



<img src="https://i.ibb.co/b1vz4hC/image159.gif" style="zoom:80%;" />

#### Mini Reto

Agregue a los personajes Spiderman y a Ironman en el array marvel desde la posición 1 sin eliminar ningun elemento del arreglo. Use Splice. 

### **slice**()

El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

![](https://i.ibb.co/tDczV0N/image.png)

<img src="https://i.ibb.co/dKF2hT7/image.png" style="zoom: 80%;" />



### **unshift**()

El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

<img src="https://i.ibb.co/c1S4wxj/image.png" style="zoom: 80%;" />

### **values**()

El método values() devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice del array.

> Un **Array Iterator** en JavaScript es un objeto que proporciona acceso iterativo a los elementos de un array. Este objeto se genera mediante métodos específicos de los arrays como `keys()`, `values()`, o `entries()`. Los **Array Iterators** son compatibles con el protocolo de iteración de JavaScript, lo que significa que puedes utilizarlos en estructuras como bucles `for...of` o con el operador spread (`...`).

![](https://i.ibb.co/TPW3RVj/image.png)

### **Shift()**

El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

![](https://i.ibb.co/vmGJmFs/image.png)

### **indexOf**()

El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

![](https://i.ibb.co/98FFCZ9/image.png)

### foreach()

El método forEach() ejecuta la función indicada una vez por cada elemento del array.

![](https://i.ibb.co/hXSwDhB/image.png)

### **join**()

El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

![](https://i.ibb.co/5B8M1YR/image.png)



# Set

Un **Set** es un objeto que permite almacenar valores únicos, es decir, no permite duplicados. Los valores pueden ser de cualquier tipo, incluyendo tipos primitivos y referencias a objetos. Los **Set** son útiles cuando necesitas asegurarte de que los elementos de una colección sean únicos.

## Características principales de un Set

1. **Valores únicos:** Un `Set` no puede contener valores duplicados.
2. **Orden de inserción:** Mantiene los valores en el orden en que fueron añadidos.
3. **Iterabilidad:** Un `Set` es iterable, lo que significa que puedes recorrerlo con bucles como `for...of` o métodos específicos.

![](https://i.ibb.co/r0K5WT3/image.png)

## Crear un Set

```javascript
const miSet = new Set();
```

```javascript
const numeros = new Set([1, 2, 3, 4, 4, 5]); // El '4' duplicado será eliminado
console.log(numeros); // Salida: Set { 1, 2, 3, 4, 5 }
```

![](https://i.ibb.co/HtrG7sM/image.png)

## Métodos y propiedades principales de un Set

**add(valor)**

Añade un valor al `Set`

```javascript
miSet.add(10);
miSet.add(20);
console.log(miSet); // Salida: Set { 10, 20 }
```

![](https://i.ibb.co/9nWFQd3/image.png)

**delete(valor)**

Elimina un valor del `Set`.

```javascript
miSet.delete(10);
console.log(miSet); // Salida: Set { 20 }
```

**`has(valor)`**
Comprueba si un valor existe en el `Set`.

```javascript
console.log(miSet.has(20)); // Salida: true
console.log(miSet.has(30)); // Salida: false
```

**`clear()`**
Elimina todos los valores del `Set`

```javascript
miSet.clear();
console.log(miSet); // Salida: Set {}
```

**`size`**
Devuelve el número de elementos en el `Set`

```javascript
console.log(miSet.size); // Salida: 0
```

**Iterar sobre un Set**

**for...of**

```javascript
const numeros = new Set([1, 2, 3]);
for (const num of numeros) {
    console.log(num);
}
```

![](https://i.ibb.co/kx3nZGd/image.png)

**forEach**

```javascript
numeros.forEach((num) => {
    console.log(num);
});
```

**Convertir a un arreglo**

```javascript
const arrayNumeros = Array.from(numeros);
console.log(arrayNumeros); // Salida: [1, 2, 3]
```

```javascript
const duplicados = [1, 2, 3, 4, 4, 5, 6, 6];
const unicos = [...new Set(duplicados)];
console.log(unicos); // Salida: [1, 2, 3, 4, 5, 6]
```

## Operaciones de conjuntos

![](https://i.ibb.co/2h8N47R/image.png)

- **Unión**: Es la suma de todos los elementos del conjunto `A` y el conjunto `B`.

  ```javascript
  const firstSet = new Set([1, 2, 3, 4, 5]);
  const secondSet = new Set([4, 5, 6, 7, 8]);
  
  const set = firstSet.union(secondSet);
  console.log(set);
  ```

  ![](https://i.ibb.co/Y2L6Hq2/image.png)

- **Intersección**: Es la parte común de los elementos del conjunto `A` y el conjunto `B`.

  ```javascript
  const firstSet = new Set([1, 2, 3, 4, 5]);
  const secondSet = new Set([4, 5, 6, 7, 8]);
  
  const set2 = firstSet.intersection(secondSet);
  // Set({ 4, 5 })
  console.log(set2);
  ```

  ![](https://i.ibb.co/g7Smvgv/image.png)

- **Diferencia**: Son los elementos del conjunto `A` quitándole los comunes del conjunto `B`.

  > los elementos del primer conjunto que no están en el segundo conjunto.

  ```javascript
  const firstSet = new Set([1, 2, 3, 4, 5]);
  const secondSet = new Set([4, 5, 6, 7, 8]);
  
  const set3 = firstSet.difference(secondSet);
  console.log(set3);
  
  ```

  ![](https://i.ibb.co/xDrv1Bf/image.png)

- **Exclusión**: Son los elementos del conjunto `A` y el conjunto `B` que no están en ambos.

  ```javascript
  const firstSet = new Set([1, 2, 3, 4, 5]);
  const secondSet = new Set([4, 5, 6, 7, 8]);
  
  const set4 = firstSet.symmetricDifference(secondSet);
  console.log(set4);
  ```

  ![](https://i.ibb.co/gFMHBhG/image.png)

  > **exclusión de conjuntos** o la **diferencia simétrica**. Esto es, quedarnos con aquellos elementos que no están en ambos conjuntos, es decir, que están sólo en el primer conjunto, o que están sólo en el segundo conjunto

## **Taller: Explorando el uso de Set en JavaScript**

### **Objetivos**

- Aprender a crear y manipular `Set`.
- Usar los métodos principales de `Set`.
- Resolver problemas prácticos donde el uso de `Set` sea beneficioso.

------

### **Ejercicio 1: Crear un Set**

Crea un `Set` con los números del 1 al 10. Imprime su contenido y verifica su tamaño.

**Puntos clave:**

1. Usa el constructor `Set` para inicializar los valores.
2. Utiliza la propiedad `.size` para obtener el tamaño del `Set`.

------

### **Ejercicio 2: Eliminar duplicados de un arreglo**

Tienes el siguiente arreglo:

```
const numerosDuplicados = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 10];
```

1. Usa un `Set` para eliminar los números duplicados.
2. Convierte el `Set` nuevamente a un arreglo.

**Salida esperada:**

```
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

------

### **Ejercicio 3: Verificar elementos únicos**

Crea una función llamada `tieneDuplicados` que reciba un arreglo y devuelva `true` si contiene elementos duplicados, o `false` en caso contrario.

**Ejemplo:**

```
tieneDuplicados([1, 2, 3, 4, 5]); // false
tieneDuplicados([1, 2, 3, 3, 5]); // true
```

**Pista:** Compara el tamaño del arreglo con el tamaño del `Set`.

------

### **Ejercicio 4: Intersección de conjuntos**

Dado los siguientes arreglos:

```
const conjuntoA = [1, 2, 3, 4, 5];
const conjuntoB = [4, 5, 6, 7, 8];
```

1. Usa `Set` para encontrar los elementos comunes entre ambos arreglos (intersección).
2. Devuelve el resultado como un arreglo.

**Salida esperada:**

```
[4, 5]
```

------

### **Ejercicio 5: Diferencia de conjuntos**

Usa los mismos conjuntos `conjuntoA` y `conjuntoB`. Encuentra los elementos que están en `conjuntoA` pero no en `conjuntoB` (diferencia).

**Salida esperada:**

```
[1, 2, 3]
```

------

### **Ejercicio 6: Comparar dos conjuntos**

Crea una función llamada `sonIguales` que reciba dos arreglos y determine si contienen exactamente los mismos elementos (sin importar el orden).

**Ejemplo:**

```
sonIguales([1, 2, 3], [3, 2, 1]); // true
sonIguales([1, 2, 3], [4, 5, 6]); // false
```

**Pista:** Convierte los arreglos a `Set` y compara.

------

### **Ejercicio 7: Contar palabras únicas**

Dado un texto, crea una función llamada `contarPalabrasUnicas` que cuente cuántas palabras únicas hay en el texto.

**Ejemplo:**

```
const texto = "Hola mundo mundo de JavaScript";
console.log(contarPalabrasUnicas(texto)); // Salida: 4
```

**Pista:** Divide el texto en palabras (puedes usar `.split(" ")`) y usa un `Set` para almacenar las palabras únicas.

------

### **Ejercicio 8: Crear una lista de invitados**

Crea un programa que permita agregar nombres a una lista de invitados (usando un `Set`). El programa debe tener las siguientes funciones:

1. `agregarInvitado(nombre)`: Agrega un nombre al `Set` de invitados.
2. `eliminarInvitado(nombre)`: Elimina un nombre del `Set`.
3. `mostrarInvitados()`: Muestra todos los nombres en el `Set`.

Simula el uso de las funciones:

```
agregarInvitado("Ana");
agregarInvitado("Carlos");
agregarInvitado("Ana"); // Este no debe duplicarse
eliminarInvitado("Carlos");
mostrarInvitados(); // Salida: Set { 'Ana' }
```

------

### **Bonus: Lotería de números únicos**

Crea un programa que genere un conjunto de números aleatorios únicos entre 1 y 100. El tamaño del conjunto será determinado por el usuario.

**Ejemplo:**

```
const numerosLoteria = generarNumerosUnicos(5);
console.log(numerosLoteria); // Salida: Set { 12, 45, 67, 89, 34 }
```

**Pista:** Usa un bucle `while` y el método `add` del `Set`.

# Map

un **Map** es una estructura de datos que permite almacenar pares de clave-valor. A diferencia de los objetos simples, los **Map** tienen características y ventajas específicas que los hacen más flexibles y útiles en ciertos casos.

## **Características principales de Map**

1. **Claves de cualquier tipo:** Las claves pueden ser de cualquier tipo, como objetos, funciones, o incluso valores primitivos (números, strings, etc.).
2. **Orden de inserción:** Mantienen el orden en que los pares clave-valor fueron agregados.
3. **Iterabilidad:** Un `Map` es iterable, lo que significa que puedes recorrerlo directamente con bucles o métodos específicos.
4. **Tamaño dinámico:** Puedes obtener fácilmente el tamaño del `Map` con la propiedad `.size`.
5. **Métodos específicos:** Ofrecen métodos dedicados como `set`, `get`, `has`, y más, para gestionar los pares clave-valor.

### Crear un Map

```javascript
const miMapa = new Map();
```

```javascript
const colores = new Map([
  ['rojo', '#FF0000'],
  ['verde', '#00FF00'],
  ['azul', '#0000FF']
]);

console.log(colores); // Salida: Map { 'rojo' => '#FF0000', 'verde' => '#00FF00', 'azul' => '#0000FF' }
```

## Métodos principales de Map

**`set(clave, valor)`**
Agrega o actualiza un par clave-valor en el `Map`

```javascript
const miMapa = new Map();
miMapa.set('nombre', 'Ana');
miMapa.set('edad', 25);
console.log(miMapa); // Salida: Map { 'nombre' => 'Ana', 'edad' => 25 }
```

**`get(clave)`**
Obtiene el valor asociado a una clave.

```javascript
console.log(miMapa.get('nombre')); // Salida: Ana
```

**`has(clave)`**
Verifica si una clave existe en el `Map`

```javascript
console.log(miMapa.has('edad')); // Salida: true
```

**`delete(clave)`**
Elimina un par clave-valor del `Map`

```javascript
miMapa.delete('edad');
console.log(miMapa); // Salida: Map { 'nombre' => 'Ana' }
```

**`clear()`**
Elimina todos los pares clave-valor del `Map`

```javascript
miMapa.clear();
console.log(miMapa); // Salida: Map {}
```

**`size`**
Devuelve el número de pares clave-valor en el `Map`

```javascript
console.log(miMapa.size); // Salida: 0
```

## **Iterar sobre un Map**

**`for...of`** para obtener los pares clave-valor

```javascript
for (const [clave, valor] of colores) {
  console.log(`Clave: ${clave}, Valor: ${valor}`);
}
```

forEach

```javascript
colores.forEach((valor, clave) => {
  console.log(`Clave: ${clave}, Valor: ${valor}`);
});
```

**Métodos de iteración:**

- `keys()` para obtener solo las claves.
- `values()` para obtener solo los valores.
- `entries()` para obtener los pares clave-valor

```javascript
console.log([ colores.keys()]); // Salida: ['rojo', 'verde', 'azul']
console.log([...colores.values()]); // Salida: ['#FF0000', '#00FF00', '#0000FF']
console.log([...colores.entries()]); // Salida: [['rojo', '#FF0000'], ['verde', '#00FF00'], ['azul', '#0000FF']]
```

## **Ejemplo práctico: Contar la frecuencia de palabras**

```javascript
function contarPalabras(texto) {
  const palabras = texto.split(" ");
  const mapaFrecuencia = new Map();

  palabras.forEach((palabra) => {
    if (mapaFrecuencia.has(palabra)) {
      mapaFrecuencia.set(palabra, mapaFrecuencia.get(palabra) + 1);
    } else {
      mapaFrecuencia.set(palabra, 1);
    }
  });

  return mapaFrecuencia;
}

const texto = "hola mundo hola programación hola";
console.log(contarPalabras(texto));
// Salida: Map { 'hola' => 3, 'mundo' => 1, 'programación' => 1 }

```

## **Sistema de Gestión de Inventarios usando Map**

**Objetivo:** Crear un programa para gestionar un inventario de productos donde cada producto tiene un ID único, un nombre, una cantidad, y una categoría.

```javascript
class Inventario {
  constructor() {
    this.productos = new Map(); // Map para almacenar productos por ID
  }

  // Agregar un nuevo producto
  agregarProducto(id, nombre, cantidad, categoria) {
    if (this.productos.has(id)) {
      console.log(`El producto con ID ${id} ya existe.`);
      return;
    }
    this.productos.set(id, { nombre, cantidad, categoria });
    console.log(`Producto "${nombre}" agregado al inventario.`);
  }

  // Actualizar la cantidad de un producto
  actualizarCantidad(id, nuevaCantidad) {
    if (!this.productos.has(id)) {
      console.log(`El producto con ID ${id} no existe.`);
      return;
    }
    const producto = this.productos.get(id);
    producto.cantidad = nuevaCantidad;
    console.log(`Cantidad del producto "${producto.nombre}" actualizada a ${nuevaCantidad}.`);
  }

  // Eliminar un producto
  eliminarProducto(id) {
    if (this.productos.delete(id)) {
      console.log(`Producto con ID ${id} eliminado del inventario.`);
    } else {
      console.log(`El producto con ID ${id} no existe.`);
    }
  }

  // Consultar información de un producto
  consultarProducto(id) {
    if (!this.productos.has(id)) {
      console.log(`El producto con ID ${id} no existe.`);
      return;
    }
    const producto = this.productos.get(id);
    console.log(`Producto: ${producto.nombre}, Cantidad: ${producto.cantidad}, Categoría: ${producto.categoria}`);
  }

  // Buscar productos por categoría
  buscarPorCategoria(categoria) {
    const resultado = [];
    for (const [id, producto] of this.productos) {
      if (producto.categoria === categoria) {
        resultado.push({ id, ...producto });
      }
    }
    console.log(`Productos en la categoría "${categoria}":`, resultado);
    return resultado;
  }

  // Mostrar todos los productos
  mostrarInventario() {
    console.log("Inventario completo:");
    for (const [id, producto] of this.productos) {
      console.log(`ID: ${id}, Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}, Categoría: ${producto.categoria}`);
    }
  }
}

// Crear una instancia del inventario
const inventario = new Inventario();

// Agregar productos
inventario.agregarProducto(1, "Manzanas", 50, "Frutas");
inventario.agregarProducto(2, "Bananas", 30, "Frutas");
inventario.agregarProducto(3, "Zanahorias", 20, "Verduras");
inventario.agregarProducto(4, "Leche", 10, "Lácteos");

// Actualizar la cantidad de un producto
inventario.actualizarCantidad(1, 60);

// Consultar un producto
inventario.consultarProducto(2);

// Buscar productos por categoría
inventario.buscarPorCategoria("Frutas");

// Eliminar un producto
inventario.eliminarProducto(3);

// Mostrar el inventario completo
inventario.mostrarInventario();

```

### **Explicación del código**

1. **Clase `Inventario`:**
   - Contiene un `Map` llamado `productos`, donde la clave es el ID del producto y el valor es un objeto con la información del producto.
   - Cada método de la clase interactúa con el `Map` para agregar, actualizar, consultar, eliminar o buscar productos.
2. **Métodos principales:**
   - **`agregarProducto`:** Agrega un nuevo producto al inventario.
   - **`actualizarCantidad`:** Actualiza la cantidad de un producto existente.
   - **`eliminarProducto`:** Elimina un producto del inventario.
   - **`consultarProducto`:** Imprime los detalles de un producto específico.
   - **`buscarPorCategoria`:** Busca productos en una categoría específica y devuelve un arreglo con los resultados.
   - **`mostrarInventario`:** Muestra todos los productos en el inventario.
3. **Flujo del programa:**
   - Se crean productos y se gestionan usando los métodos proporcionados.
   - Las búsquedas y consultas utilizan las capacidades del `Map` para acceder rápidamente a los productos por su ID.

## Taller: Gestión de Superhéroes con Map en JavaScript

- `Map` para gestionar datos relacionados con superhéroes de Marvel y DC.
- Aprender a realizar operaciones como agregar, actualizar, buscar y eliminar datos en un `Map`.
- Trabajar con estructuras de datos más complejas que incluyan objetos y funciones.

------

### **Contexto**

En este taller, construiremos un sistema para gestionar superhéroes. Cada superhéroe tendrá información como:

- **ID:** Identificador único.
- **Nombre:** Nombre del superhéroe.
- **Universo:** Marvel o DC.
- **Poder:** Poder especial del superhéroe.
- **Nivel de fuerza:** Un valor numérico que representa su fuerza.

------

### **Ejercicios**

#### **Ejercicio 1: Crear el sistema de superhéroes**

1. Crea un `Map` llamado `superheroes`.
2. Agrega al menos 5 superhéroes (tanto de Marvel como de DC) al `Map`. Usa el ID como clave y un objeto con los datos del superhéroe como valor.

**Ejemplo de estructura de un superhéroe:**

```
j{
  id: 1,
  nombre: "Iron Man",
  universo: "Marvel",
  poder: "Tecnología avanzada",
  fuerza: 85
}
```

------

#### **Ejercicio 2: Buscar superhéroes por ID**

Crea una función llamada `buscarSuperheroePorID(id)` que reciba un ID y devuelva la información del superhéroe correspondiente. Si no existe, muestra un mensaje de error.

**Ejemplo:**

```
buscarSuperheroePorID(1); // Devuelve los datos de Iron Man
buscarSuperheroePorID(99); // "No se encontró un superhéroe con el ID 99"
```

------

#### **Ejercicio 3: Buscar superhéroes por universo**

Crea una función llamada `buscarPorUniverso(universo)` que reciba un universo ("Marvel" o "DC") y devuelva una lista de superhéroes que pertenecen a ese universo.

**Ejemplo:**

```javascript
buscarPorUniverso("Marvel");
// Salida: Lista de superhéroes de Marvel
```

------

#### **Ejercicio 4: Actualizar el nivel de fuerza de un superhéroe**

Crea una función llamada `actualizarFuerza(id, nuevaFuerza)` que reciba el ID de un superhéroe y actualice su nivel de fuerza. Si el ID no existe, muestra un mensaje de error.

**Ejemplo:**

```javascript
actualizarFuerza(1, 90);
// "El nivel de fuerza de Iron Man ha sido actualizado a 90."
```

------

#### **Ejercicio 5: Eliminar un superhéroe**

Crea una función llamada `eliminarSuperheroe(id)` que reciba un ID y elimine al superhéroe correspondiente del `Map`.

**Ejemplo:**

```javascript
eliminarSuperheroe(2);
// "El superhéroe con ID 2 ha sido eliminado."
```

------

#### **Ejercicio 6: Mostrar todos los superhéroes**

Crea una función llamada `mostrarSuperheroes()` que muestre una lista de todos los superhéroes almacenados en el `Map`, incluyendo su ID y nombre.

**Ejemplo:**

```javascript
mostrarSuperheroes();
// Salida:
// ID: 1, Nombre: Iron Man
// ID: 2, Nombre: Superman
// ID: 3, Nombre: Batman
```

------

#### **Ejercicio 7: Buscar el superhéroe más fuerte**

Crea una función llamada `superheroeMasFuerte()` que devuelva el nombre del superhéroe con el nivel de fuerza más alto.

**Ejemplo:**

```javascript
superheroeMasFuerte();
// "El superhéroe más fuerte es Hulk con una fuerza de 100."
```

------

#### **Ejercicio 8 (Avanzado): Combate entre dos superhéroes**

Crea una función llamada `combate(id1, id2)` que reciba los IDs de dos superhéroes y determine cuál de ellos ganaría en un combate. La decisión se basará en su nivel de fuerza.

**Ejemplo:**

```javascript
combate(1, 3);
// "Iron Man (Fuerza: 90) vence a Batman (Fuerza: 75)."
```

------

#### **Ejercicio 9 (Bonus): Agregar habilidades adicionales**

Extiende el sistema para permitir que cada superhéroe tenga una lista de habilidades. Luego, crea una función llamada `mostrarHabilidades(id)` que reciba el ID de un superhéroe y muestre sus habilidades.

**Ejemplo:**

```javascript
// Habilidades de Hulk: ["Súper fuerza", "Regeneración", "Resistencia extrema"]
mostrarHabilidades(5);
// "Habilidades de Hulk: Súper fuerza, Regeneración, Resistencia extrema."
```

# **Objetos Literales**

En JavaScript, los objetos literales son estructuras de datos fundamentales que permiten almacenar y organizar información. Un objeto en JavaScript es una colección de propiedades, donde cada propiedad tiene un nombre (una cadena) y un valor asociado. Estos valores pueden ser de cualquier tipo de dato, incluyendo otros objetos.

La forma más común de definir un objeto en JavaScript es mediante la notación de llaves {}.

<img src="https://i.ibb.co/rvb222P/image18.png" style="zoom: 33%;" />

Ejemplos



```javascript
const miObjeto = {
    nombre: "Ejemplo Objeto",
    version: 1.0,
    descripcion: "Un objeto de ejemplo con una función",
    mostrarInformacion: function(p1, p2) {
        console.log("Nombre: " + this.nombre);
        console.log("Versión: " + this.version);
        console.log("Descripción: " + this.descripcion);
        console.log("Parámetro 1: " + p1);
        console.log("Parámetro 2: " + p2);
    }
};

// Llamada a la función dentro del objeto
miObjeto.mostrarInformacion("Valor 1", "Valor 2");
```

```javascript
const persona = {
    nombre: "Juan",
    edad: 23,
    altura: 1.68,
    peso: "60 kg"
};
console.log(persona);

const coche = {
    marca: "Toyota",
    modelo: "Camry",
    color: "Azul",
    peso: 1500
};
console.log(coche);

const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico"
};
console.log(libro);

```

```javascript
let marvel = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    isAlive: false,
    age: 40,
    coords: {
        lat: 35.056,
        lng: -7.0789,
    },
    suit: ['Mark I', 'Mark V', 'Hulkbuster']
};
console.log(marvel);

```

```javascript
let marvel = {
    name: 'Tony Stark',
    isAlive: false,
    age: 40,
    coords: {
        lat: 35.056,
        lng: -7.0789
    },
    suit: ['Mark I', 'Mark V', 'Hulkbuster'],
    address: {
        zip: '680004',
        location: 'Malibu, California'
    }
};

// Acceder a la información del objeto literal
// Opción 1: objeto.NombreAtributo
console.log(marvel.name);
// Opción 2: objeto['nombreAtributo']
console.log(marvel['age']);

// Acceder al objeto literal de una propiedad, Ej. Dirección
console.log(marvel.coords);
console.log(`Latitud ${marvel.coords.lat}`);
console.log(`Longitud ${marvel.coords.lng}`);

// Mostrar el número de trajes y el último traje
console.log(`Total trajes ${marvel.suit.length}`);
console.log(`Último traje ${marvel.suit[marvel.suit.length - 1]}`);
```

## Mini Reto

Imprimir el un mensaje en consola si IronMan esta vivo. Use el operador ternario.

## Eliminar una propiedad del objeto literal

```javascript
// ***** Eliminar una propiedad del objeto literal *****
delete marvel.age;
console.log(marvel);

```

## Obtener par de valores de las propiedades del objeto literal

```
// ***** Obtener par de valores de las propiedades del objeto literal *****
const entriesPairs = Object.entries(marvel);
console.log(entriesPairs);
```

## Bloqueo de propiedades de un Object Literal

```javascript
// Bloqueo de propiedades de un Object Literal
Object.freeze(marvel);
marvel.name = 'Hul';
console.log(marvel);

```

## Obtener los valores del objeto literal

```javascript
const valores = Object.values(marvel);
console.log({ propiedades, valores });
```

# Operador de propagación

En JavaScript, el operador de propagación, también conocido como spread, se utiliza para descomponer elementos de un iterable (como un array o un objeto) y expandirlos en lugares donde se esperan argumentos o elementos separados. El spread se denota mediante tres puntos suspensivos (...). 

## Combinar Arrays

```javascript
// Combinar Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3); // [1, 2, 3, 4, 5, 6]
```

**Descripción:**

- Usamos el **operador spread (`...`)** para descomponer los elementos de `array1` y `array2` en un nuevo array.
- Esto nos permite combinar dos arrays en uno nuevo sin modificar los originales.

**Resultado:**

- `array3` contendrá todos los elementos de `array1` seguidos de los de `array2`.

## **Clonar Arrays**

```javascript
const original = [1, 2, 3];
const cloned = [...original];
console.log(cloned); // [1, 2, 3]
```

**Descripción:**

- Usamos nuevamente el operador spread para clonar un array.
- Al usar `[...original]`, creamos un nuevo array que tiene los mismos valores que `original`, pero es un objeto diferente en memoria.

**Importancia:**

- Si modificamos el array clonado, no afectará al array original, ya que son independientes.

**Resultado:**

- `cloned` es una copia exacta de `original`.

## Usar Spread en funciones

```javascript
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log(result); // 6
```

## Romper relación valor-Referencia

En JavaScript, romper la relación entre **valor y referencia** es esencial cuando queremos duplicar un objeto o un array de tal manera que los cambios en la copia no afecten al original. Esto sucede porque los objetos y arrays en JavaScript son **tipos por referencia**.

![](https://i.ibb.co/CJR6TgL/image.png)

### Técnicas para romper la relación valor-referencia

#### Usar el operador spread (`...`)

```javascript
const original = { name: "Tony", age: 40 };
const copy = { ...original };

// Modificar la copia no afecta al original
copy.age = 50;

console.log(original); // { name: "Tony", age: 40 }
console.log(copy);     // { name: "Tony", age: 50 }
```

#### Usar `Object.assign()`

`Object.assign()` también realiza una copia superficial.

```javascript
const original = { name: "Bruce", age: 35 };
const copy = Object.assign({}, original);

copy.age = 45;

console.log(original); // { name: "Bruce", age: 35 }
console.log(copy);     // { name: "Bruce", age: 45 }
```

![](https://i.ibb.co/hFHx9YX/image.png)

#### Usar `JSON.stringify()` y `JSON.parse()`

```javascript
const original = { name: "Clark", info: { city: "Metropolis" } };
const copy = JSON.parse(JSON.stringify(original));

// Cambiar la copia no afecta al original
copy.info.city = "Gotham";

console.log(original); // { name: "Clark", info: { city: "Metropolis" } }
console.log(copy);     // { name: "Clark", info: { city: "Gotham" } }
```

![](https://i.ibb.co/xSKL8yq/image.png)

#### **Nota sobre copias superficiales vs profundas**

- **Copias superficiales:** Si el objeto o array tiene propiedades anidadas (otro objeto o array), esas propiedades siguen siendo referencias al original.
- **Copias profundas:** Crean una copia completamente independiente, incluso para objetos o arrays anidados.

#### Otros ejemplos

![](https://i.ibb.co/gwdYpPt/image.png)

```javascript
// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });

```

![](https://i.ibb.co/7nGQCnm/image.png)

### **Explicación del código**

**Definición del array `frutas`**

Se define un array llamado `frutas` con tres elementos: `'Manzana'`, `'Pera'` y `'Piña'`.

**Uso de `slice()` para clonar el array**

**`slice()`**:

- Este método devuelve una copia superficial del array original.
- No modifica el array original, simplemente crea un nuevo array con los mismos elementos.

**Medición de tiempo**:

- `console.time('slice')` inicia un temporizador.
- `console.timeEnd('slice')` detiene el temporizador y muestra cuánto tiempo tardó en ejecutarse el método `slice()`.

**Uso del operador spread para clonar el array**

**`...` (operador spread)**:

- Descompone los elementos del array `frutas` en un nuevo array (`otrasFrutas2`).
- Es otra forma de clonar arrays, similar a `slice()`.

**Medición de tiempo**:

- También se mide cuánto tiempo tarda en ejecutar el operador spread para comparar su rendimiento con `slice()`.

### **Comparación de métodos**

El código compara dos formas de clonar arrays (`slice()` y el operador spread) en términos de:

1. **Rendimiento (tiempo de ejecución):**
   - Puedes observar cuál de los dos métodos es más rápido en el entorno donde se ejecuta el código.
   - Generalmente, el operador spread es más moderno y, en algunos casos, más rápido.
2. **Efecto sobre los datos:**
   - Ambos métodos crean una copia superficial, lo que significa que son independientes del array original en términos de cambios directos.

# Desestructuración

La desestructuración en JavaScript es una característica que permite descomponer o extraer valores de arreglos y objetos de manera más concisa. Con la desestructuración, puedes asignar valores a variables de una manera más eficiente y legible. La sintaxis de la desestructuración utiliza corchetes **{}** para objetos y corchetes cuadrados **[]** para arreglos.

![](https://i.ibb.co/Yd1mc2d/image.png)

## Desestructuración en argumentos de funciones con objetos

La desestructuración en los argumentos de funciones con objetos es una característica de JavaScript que permite extraer propiedades específicas de un objeto directamente como variables al pasar el objeto como argumento a una función. Esto simplifica el acceso a las propiedades del objeto sin necesidad de referirse al objeto completo cada vez.

```javascript
function saludar({ nombre, edad }) {
  console.log(`Hola, ${nombre}. Tienes ${edad} años.`);
}
const persona = { nombre: 'Juan', edad: 30, ciudad: 'Bogotá' };
saludar(persona); // Salida: Hola, Juan. Tienes 30 años.
```

![](https://i.ibb.co/JBf2vv9/image.png)

## Desestructuración anidada en objetos

La **desestructuración anidada en objetos** es una técnica en JavaScript que permite extraer propiedades de objetos que están dentro de otros objetos. Es decir, puedes acceder directamente a valores anidados dentro de estructuras complejas de datos sin tener que hacerlo en múltiples pasos.

```javascript
const persona = {
  nombre: "Ana",
  direccion: {
    ciudad: "Madrid",
    pais: "España"
  }
};

// Desestructuración anidada
const { direccion: { ciudad, pais } } = persona;
console.log(ciudad); // Salida: Madrid
console.log(pais);   // Salida: España

```

**Explicación**:

1. En el objeto `persona`, hay una propiedad `direccion`, que a su vez contiene las propiedades `ciudad` y `pais`.
2. La desestructuración anidada permite extraer directamente `ciudad` y `pais` del objeto `direccion`, sin necesidad de primero extraer `direccion` y luego acceder a sus propiedades.

![](https://i.ibb.co/mCdn75D/image.png)

![](https://i.ibb.co/BHhGZxz/image.png)

## Renombrar las variables durante la desestructuración en objetos

![](https://i.ibb.co/JvTTMfd/image.png)

## Desestructuración en arreglos

```javascript
const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]); // Goku
console.log(personajes[1]); // Vegeta
console.log(personajes[2]); // Trunks
```

```javascript
const [goku] = personajes;
console.log(goku); // Goku
```

```javascript
const [, p2] = personajes;
console.log(p2); // Vegeta
```

> La coma `,` en `[ , p2 ]` se utiliza para omitir el primer elemento del arreglo.
>
> El segundo elemento del arreglo `personajes` se asigna a la variable `p2`.

**Desestructuración con omisión de elementos:**

```javascript
const [, , p3] = personajes;
console.log(p3); // Trunks
```

```javascript
const retornaArreglo = () => {
    return ['ABC', 123];
};

const arr = retornaArreglo();
console.log(arr); // ['ABC', 123]
```

### Explicación:

1. **Declaración de la función `retornaArreglo`**:
   - Se define una función flecha que no recibe parámetros y retorna un arreglo con dos elementos: una cadena (`'ABC'`) y un número (`123`).
2. **Llamada a la función**:
   - Se llama a la función `retornaArreglo()` y su resultado (el arreglo `['ABC', 123]`) se asigna a la constante `arr`.
3. **Impresión en consola**:
   - `console.log(arr);` imprime el contenido del arreglo: `['ABC', 123]`.

```javascript
const [letras, numeros] = retornaArreglo();
console.log(letras); // 'ABC'
console.log(numeros); // 123
```

```javascript
const useState = (valor) => {
    return [
        valor,
        () => { console.log('Hola Mundo'); }
    ];
};

const arr = useState('Goku');
console.log(arr);

```

- ### Explicación:

  1. **Función `useState`**:

     - La función `useState` recibe un parámetro `valor`.
     - Retorna un arreglo con:
       - El valor recibido como parámetro (`valor`).
       - Una función anónima que, al ejecutarse, imprime `'Hola Mundo'` en la consola.

  2. **Llamada a la función**:

     - Se llama a `useState('Goku')` y el resultado (un arreglo) se asigna a la constante `arr`.

     - En este caso, 

       ```
       arr
       ```

        contendrá:

       ```javascript
       ['Goku', () => { console.log('Hola Mundo'); }]
       ```

  3. **Impresión en consola**:

     - ```
       console.log(arr);
       ```

        imprimirá el contenido del arreglo:

       ```javascript
       ['Goku', ƒ]
       ```

       donde ƒ representa la función anónima en el arreglo.

```javascript
const [nombre, imprimir] = useState('Goku');
console.log(nombre); // 'Goku'
imprimir(); // Imprime 'Hola Mundo' en la consola
```



## Taller

![](https://i.ibb.co/wYggD4L/image.png)

# Import y export

### **Exportar**

La palabra clave `export` se utiliza para hacer que una función, variable, objeto, clase o cualquier valor esté disponible para otros archivos.

#### **Exportación nombrada (Named Export):**

Se pueden exportar múltiples valores con nombre desde un archivo.

```javascript
// archivo.js
export const nombre = 'Goku';
export const edad = 35;

export function saludar() {
    console.log('Hola desde archivo.js');
}

```

Para importar estos valores, debes usar los mismos nombres:

```javascript
import { nombre, edad, saludar } from './archivo.js';
console.log(nombre); // Goku
console.log(edad); // 35
saludar(); // Hola desde archivo.js

```

#### **Exportación por defecto (Default Export):**

Solo se puede tener **un** `export default` por archivo. Es útil cuando el archivo exporta un único valor principal.

```javascript
const mensaje = 'Soy un export default';
export default mensaje;
```

```javascript
// otroArchivo.js
import mensajeImportado from './archivo.js';

console.log(mensajeImportado); // Soy un export default
```

### **Importar**

La palabra clave `import` se utiliza para traer valores desde otro archivo. Hay diferentes formas de hacerlo.

#### 1. **Importación nombrada:**

Importa valores específicos entre llaves `{}`:

```
import { nombre, edad } from './archivo.js';
```

#### 2. **Importación por defecto:**

Importa un valor que fue exportado con `export default`:

```
import valorDefault from './archivo.js';
```

#### 3. **Importar todo:**

Puedes importar todos los valores exportados con un alias usando `*`:

```
import * as archivo from './archivo.js';

console.log(archivo.nombre); // Goku
console.log(archivo.edad); // 35
```

calculadora.js

```javascript
export const suma = (a, b) => a + b;
export const resta = (a, b) => a - b;
export default (a, b) => a * b; // Exportación por defecto
```

app.js

```javascript
import multiplicar, { suma, resta } from './calculadora.js';

console.log(suma(2, 3)); // 5
console.log(resta(5, 3)); // 2
console.log(multiplicar(2, 3)); // 6
```

**Consideraciones importantes:**

- **Rutas relativas y absolutas**: Se recomienda utilizar rutas relativas como `'./archivo.js'` para referenciar archivos ubicados en el mismo nivel del directorio. Para subir un nivel en el árbol de directorios, se debe emplear `'../'`.
- **Extensiones de archivo**: Aunque es posible omitir la extensión `.js` al realizar una importación, es considerado una buena práctica incluirla, especialmente en ciertos entornos, para prevenir posibles errores.

## Otras formas de exportar

![](https://i.ibb.co/LPwjZPN/image.png)

![](https://i.ibb.co/Yt6s9vg/image.png)

![](https://i.ibb.co/yqn5GBp/image.png)

![](https://i.ibb.co/CPCL4G8/image.png)

## Forma usada

![](https://i.ibb.co/f0sHP5c/image.png)

## Recursos

https://gist.github.com/trainingLeader/67ef48081d3ba9d56c14edf9f6cc2e21

## Taller

1. Cree un nuevo proyecto

2. cree una carpeta llamada data y dentro de data cree un archivo llamado heroes.js y peque el contenido del gist de recursos

3. Cree un archivo llamado app.js y escriba el siguiente codigo

   ```javascript
   import { heroes } from './data/heroes';
   
   const getHeroeById = (id) => {
       return heroes.find((hero) => {
           if (hero.id === id) {
               return true;
           }else{
               return false;
           }
       });
   };
   
   console.log(getHeroeById(2));
   ```

   ### **Explicación del código:**

   1. **Importación:**
      - Se importa la lista `heroes` desde un archivo llamado `./data/heroes`.
   2. **Función `getHeroeById`:**
      - Esta función toma un parámetro `id`.
      - Utiliza el método `.find()` de los arreglos para buscar el primer elemento que cumpla con la condición proporcionada.
   3. **Lógica de `.find()`:**
      - El método `.find()` recorre cada elemento del arreglo `heroes`.
      - La función de callback verifica si el `id` del héroe actual coincide con el `id` proporcionado.
      - Si encuentra una coincidencia, retorna `true`, lo que hace que `.find()` detenga la búsqueda y devuelva ese héroe.
   4. **Ejemplo de uso:**
      - `console.log(getHeroeById(2));` imprimirá en la consola el héroe que tenga `id === 2`.

   ```javascript
   const getHeroeById = (id) => {
       return heroes.find((hero) => hero.id === id);
   };
   ```

   ```javascript
   const getHeroeById = (id) => heroes.find((hero) => hero.id === id);
   ```

   ```javascript
   const getHeroesByOwner = (owner) => heroes.filte((heroe) => heroe.owner === owner);
   
   console.log(getHeroesByOwner('DC'));
   ```

   > El método `find` devuelve **el primer elemento del arreglo que cumpla la condición especificada** en la función de callback.
   >
   > 
   >
   > El método `filter` devuelve **un nuevo arreglo con todos los elementos que cumplen la condición especificada** en la función de callback.



# Asincronia

El asincronismo permite que un programa ejecute múltiples tareas al mismo tiempo o que gestione operaciones que toman tiempo sin bloquear el flujo principal de ejecución. En JavaScript, esto es esencial debido a su naturaleza de *single-threaded*, es decir, un único hilo de ejecución.

Por ejemplo, mientras JavaScript espera que una solicitud de red o lectura de archivo finalice, puede continuar ejecutando otras partes del código.

## Promesas

Las promesas, en el contexto de la programación y la informática, son un concepto fundamental en el manejo de tareas asíncronas. Son objetos que representan un valor que puede estar disponible ahora, en el futuro o nunca. Las promesas se utilizan para realizar operaciones asíncronas en lenguajes de programación, como JavaScript, y permiten manejar el flujo de control de manera más efectiva en situaciones en las que las operaciones pueden tomar un tiempo variable en completarse, como solicitudes de red, lectura de archivos o consultas a bases de datos. A continuación un caso de la vida real de cómo funcionaría una promesa

### Estados de las promesa

![](https://i.ibb.co/2s1vKqm/image.png)

### Creación de una promesa

Para crear una promesa, se utiliza el constructor `Promise`, el cual toma una función de ejecución (*executor function*) como argumento. Esta función recibe dos parámetros:

- `resolve`: Se llama cuando la operación es exitosa.
- `reject`: Se llama cuando ocurre un error.

```javascript
const promesa = new Promise();
```

```javascript
const promesa = new Promise((resolve, reject) => {
  const exito = true; // Cambia a false para simular un error
  if (exito) {
    resolve("La operación fue exitosa");
  } else {
    reject("Hubo un error en la operación");
  }
});

promesa
  .then((resultado) => {
    console.log(resultado); // "La operación fue exitosa"
  })
  .catch((error) => {
    console.error(error); // "Hubo un error en la operación"
  });

```

### **Cómo funcionan las Promesas**

Las promesas permiten manejar sus resultados a través de los métodos:

- `.then()`: Se ejecuta cuando la promesa es resuelta con éxito.
- `.catch()`: Se ejecuta cuando la promesa es rechazada.
- `.finally()`: Se ejecuta después de que la promesa se resuelve o rechaza, sin importar el resultado.

```javascript
miPromesa
    .then((resultado) => {
        console.log("Éxito:", resultado);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("La promesa ha finalizado.");
    });
```



**Ejercicio**

```javascript
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2 segundos después');
  }, 2000);
});

promesa.then(() => {
  console.log('Then de la promesa');
});

```

```javascript
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

promesa.then(() => {
  console.log('Then de la promesa');
});

```

**Reto**

```javascript
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Tarea
    // importen el
    const heroe = getHeroeById(2);
    resolve(heroe);
  }, 2000);
});

promesa.then((heroe) => {
  console.log('heroe', heroe);
});
```

```javascript
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Tarea
    // importen el
    const heroe = getHeroeById(2);
    reject('Error heroe no encontrado');
  }, 2000);
});

promesa.then((heroe) => {
  console.log('heroe', heroe);
})
.catch(err => console.warn(err));
```

### Promesas dentro de funciones

```javascript
const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      // importen el
      const p1 = getHeroeById(id);
      resolve(p1);
      // reject('No se pudo encontrar el héroe');
    }, 2000);
  });
};

```

**Explicación del Código:**

1. **`getHeroeByIdAsync`**:
   - Es una función que recibe un `id` y devuelve una promesa que se resuelve después de 2 segundos.
2. **Creación de una promesa**:
   - Dentro de la función, se crea una nueva promesa con `new Promise`.
   - El callback de la promesa tiene dos parámetros: `resolve` y `reject`.
3. **Simulación de una operación asíncrona con `setTimeout`**:
   - Se utiliza `setTimeout` para simular un retraso de 2 segundos.
4. **Resolución de la promesa**:
   - Después de 2 segundos, se llama a `resolve(p1)` para resolver la promesa con el resultado de `getHeroeById(id)`.
5. **Rechazo de la promesa** (comentado):
   - Existe la posibilidad de llamar a `reject` para manejar errores, pero está comentado.

```javascript
const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1); // Resuelve con el héroe encontrado
      } else {
        reject('No se pudo encontrar el héroe'); // Rechaza si no se encuentra
      }
    }, 2000);
  });
};

// Uso de la función asíncrona
getHeroeByIdAsync(2)
  .then((heroe) => {
    console.log('Héroe encontrado:', heroe); // { id: 2, name: 'Superman' }
  })
  .catch((error) => {
    console.warn(error); // "No se pudo encontrar el héroe" si falla
  });
```

> En términos simples, un callback es una función que se pasa como argumento a otra función, permitiendo que esta última la ejecute de manera genérica dentro de su propio código, mientras nosotros podemos definir dicha función desde fuera de ella.

### **Encadenamiento de Promesas**

Las promesas pueden encadenarse para manejar múltiples tareas en secuencia. Esto evita la complejidad del *callback hell* y hace que el código sea más legible.

```javascript
const tareaUno = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Tarea 1 completada"), 1000);
    });
};

const tareaDos = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Tarea 2 completada"), 1000);
    });
};

tareaUno()
    .then((resultadoUno) => {
        console.log(resultadoUno);
        return tareaDos();
    })
    .then((resultadoDos) => {
        console.log(resultadoDos);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```

### **Métodos Adicionales de las Promesas**

1. **`Promise.all`:** Ejecuta múltiples promesas en paralelo y espera a que todas se resuelvan.

   - Si alguna promesa falla, `Promise.all` rechaza el resultado completo.

   - Ejemplo:

     ```javascript
     const promesas = [
         Promise.resolve(1),
         Promise.resolve(2),
         Promise.resolve(3),
     ];
     
     Promise.all(promesas)
         .then((resultados) => console.log("Resultados:", resultados))
         .catch((error) => console.error("Error:", error));
     ```

2. **`Promise.race`:** Devuelve la primera promesa que se resuelve o rechaza.

   - Ejemplo:

     ```javascript
     const promesaLenta = new Promise((resolve) => setTimeout(() => resolve("Lenta"), 2000));
     const promesaRapida = new Promise((resolve) => setTimeout(() => resolve("Rápida"), 1000));
     
     Promise.race([promesaLenta, promesaRapida])
         .then((resultado) => console.log("Ganador:", resultado));
     ```

3. **`Promise.allSettled`:** Espera a que todas las promesas finalicen, sin importar si se resuelven o son rechazadas.

   - Ejemplo:

     ```
     const promesas = [
         Promise.resolve("Resuelta"),
         Promise.reject("Rechazada"),
     ];
     
     Promise.allSettled(promesas)
         .then((resultados) => console.log(resultados));
     ```

### **Aplicación Práctica de Promesas**

Un caso común para el uso de promesas es realizar solicitudes HTTP con el API `fetch`. `Fetch` devuelve una promesa que se resuelve con la respuesta de la solicitud.

Ejemplo:

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error en la solicitud");
        }
        return response.json(); // Convierte la respuesta a JSON
    })
    .then((data) => {
        console.log("Datos obtenidos:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```

------

### **Ventajas de Usar Promesas**

1. **Evita el Callback Hell:** Proporcionan una forma más limpia de manejar tareas asincrónicas en secuencia.
2. **Manejo Eficiente de Errores:** Centralizan el manejo de errores con `.catch`.
3. **Flexibilidad:** Permiten ejecutar tareas en paralelo o en secuencia.

# Vite

**Vite** es una herramienta de desarrollo moderno para crear aplicaciones web rápidas y eficientes. Fue desarrollada por Evan You, el creador de Vue.js, pero no está limitada solo a Vue; también soporta otros frameworks como React, Svelte y aplicaciones Vanilla JavaScript.

## Características principales de Vite:

1. **Desarrollo ultrarrápido:**
   - Vite utiliza un servidor de desarrollo basado en esbuild, un empaquetador extremadamente rápido escrito en Go, lo que permite un inicio casi instantáneo del servidor.
   - Carga módulos bajo demanda, evitando la necesidad de reconstruir toda la aplicación durante el desarrollo.
2. **Compilación optimizada:**
   - Usa [Rollup](https://rollupjs.org/) para producir una compilación optimizada para producción.
   - Genera un código altamente eficiente y modular.
3. **Hot Module Replacement (HMR):**
   - Permite actualizaciones instantáneas de los módulos mientras trabajas, sin necesidad de recargar toda la página.
4. **Soporte para módulos ES nativos:**
   - Se basa en la especificación de módulos ES (ECMAScript Modules) para optimizar la gestión de dependencias.
5. **Flexible y extensible:**
   - Compatible con múltiples frameworks y herramientas modernas como TypeScript, JSX, CSS preprocesado (SASS, PostCSS, etc.), y más.
   - Soporte para plugins de Rollup y personalizaciones avanzadas.
6. **Configuración sencilla:**
   - Un archivo de configuración (`vite.config.js` o `vite.config.ts`) permite personalizar la herramienta sin esfuerzo.

------

## Ventajas de usar Vite:

- **Velocidad:** La arquitectura centrada en módulos lo hace extremadamente rápido comparado con herramientas tradicionales como Webpack o Parcel.
- **Experiencia de desarrollo moderna:** Es ideal para aplicaciones modernas basadas en frameworks populares.
- **Fácil integración:** Compatible con bibliotecas como Vue, React, y otras herramientas de la cadena de desarrollo.

## Pagina oficial

https://vite.dev/

![](https://i.ibb.co/BgDSv48/image.png)

#### Templates soportada

| JavaScript   | TypeScript      |
| ------------ | --------------- |
| [vanilla](#) | [vanilla-ts](#) |
| [vue](#)     | [vue-ts](#)     |
| [react](#)   | [react-ts](#)   |
| [preact](#)  | [preact-ts](#)  |
| [lit](#)     | [lit-ts](#)     |
| [svelte](#)  | [svelte-ts](#)  |
| [solid](#)   | [solid-ts](#)   |
| [qwik](#)    | [qwik-ts](#)    |

## Scaffolding del primer proyecto

> El término **scaffolding** (andamiaje) en desarrollo de software se refiere al proceso de generar automáticamente la estructura básica o esqueleto de un proyecto, incluyendo carpetas, archivos, y configuraciones iniciales.

Creacion de un proyecto

```less
npm create vite@latest
```

Creación de proyecto especificando la plantilla y el nombre del proyecto

```less
npm create vite@latest my-vue-app -- --template vue
```

## Estructura de un proyecto en Vite

![](https://i.ibb.co/s50Tfdf/image.png)

**`index.html`**: Archivo HTML principal.

**`vite.config.js`**: Archivo de configuración para Vite (opcional para configuraciones avanzadas).

**`src/main.js`**: Archivo JavaScript de entrada para tu aplicación.

**`src/style.css`**: Archivo CSS opcional para estilos.

## Taller creación proyecto con vite

1. Ingrese el comando **npm create vite@latest** para crear el proyecto con la ultima versión de vite disponible.

   Siga las instrucciones del asistente de vite

   **Ingrese el nombre del proyecto**

   ? Project name: » vite-project

   para el ejemplo practico **vite-appdev** 

   **Seleccione la plantilla de trabajo**

   >   Vanilla
   >   Vue
   >   React
   >   Preact
   >   Lit
   >   Svelte
   >   Solid
   >   Qwik
   >   Angular
   >   Others

   Puede desplazarse con las flechas del teclado hasta seleccionar la requiera y pulse enter para finalizar la seleccion. Para el caso de estudio usaremos **Vanilla**

   ![](https://i.ibb.co/Fw7trDP/image.png)

   **Seleccione el lenguaje de scripting**

   ![](https://i.ibb.co/zSGkRf7/image.png)Como resultado final debemos tener la siguiente salida.

   ![](https://i.ibb.co/9GWwx9H/image.png)

2. Seleccione la carpeta creada e ingrese a visual estudio code

   ![](https://i.ibb.co/Dr4Rk47/image.png)

3. En visual estudio code abra la terminal y ejecute los siguientes comandos en el orden adecuado

   ![](https://i.ibb.co/BfsMDcR/image.png)

4. Corra el proyecto usando el comando **npm run dev** desde visual studio code; **tambien puede ejecutar el comando desde la terminal del sistema operativo donde se encuentre trabajando, pero tenga en cuenta que debe estar ubicado en la carpeta del proyecto de lo contrario dara un error**.

   ![](https://i.ibb.co/g9Q1jk3/image.png)

5. Abra el navegador de su preferencia y en la barra de direcciones coloque la url generada por el comando ejecutado en el punto anterior.  ➜  Local:   http://localhost:5173/

   > Se recomienda usar Chrome o Firefox son los navegadores con mejor soporte al momento de desarrollar aplicaciones para la web.

​	![](https://i.ibb.co/mbXLxZx/image.png)



# Taller Html+JS+CSS (21)

1. Cree la estructura del proyecto

   ```less
   .
   |-- assets
   |   |-- cartas
   |   |-- css
   |   `-- js
   `-- index.html
   ```

2. Abra el proyecto en visual Studio Code

   ```less
   PS D:\projectsJs\veintiuno-app> code .
   ```

3. Genere la estructura basica del documento html

4. Cambie el titulo de la pagina por Veintiuno-BlackJack

5. Descargue las imagenes de las cartas desde la siguiente url : https://drive.google.com/drive/folders/1Q8EAewS37Do1bYvjYo4dgxtwweUuENNS?usp=sharing

6. Copie las imágenes en la carpeta cartas.

   ```less
   .
   |-- assets
   |   |-- cartas
   |   |   |-- 10C.png
   |   |   |-- 10D.png
   |   |   |-- 10H.png
   |   |   |-- 10S.png
   |   |   |-- 2C.png
   |   |   |-- 2D.png
   |   |   |-- 2H.png
   |   |   |-- 2S.png
   |   |   |-- 3C.png
   |   |   |-- 3D.png
   |   |   |-- 3H.png
   |   |   |-- 3S.png
   |   |   |-- 4C.png
   |   |   |-- 4D.png
   |   |   |-- 4H.png
   |   |   |-- 4S.png
   |   |   |-- 5C.png
   |   |   |-- 5D.png
   |   |   |-- 5H.png
   |   |   |-- 5S.png
   |   |   |-- 6C.png
   |   |   |-- 6D.png
   |   |   |-- 6H.png
   |   |   |-- 6S.png
   |   |   |-- 7C.png
   |   |   |-- 7D.png
   |   |   |-- 7H.png
   |   |   |-- 7S.png
   |   |   |-- 8C.png
   |   |   |-- 8D.png
   |   |   |-- 8H.png
   |   |   |-- 8S.png
   |   |   |-- 9C.png
   |   |   |-- 9D.png
   |   |   |-- 9H.png
   |   |   |-- 9S.png
   |   |   |-- AC.png
   |   |   |-- AD.png
   |   |   |-- AH.png
   |   |   |-- AS.png
   |   |   |-- JC.png
   |   |   |-- JD.png
   |   |   |-- JH.png
   |   |   |-- JS.png
   |   |   |-- KC.png
   |   |   |-- KD.png
   |   |   |-- KH.png
   |   |   |-- KS.png
   |   |   |-- QC.png
   |   |   |-- QD.png
   |   |   |-- QH.png
   |   |   |-- QS.png
   |   |   |-- grey_back.png
   |   |   `-- red_back.png
   |   |-- css
   |   `-- js
   `-- index.html
   ```

7. Cree el archivo juego.js en la carpeta js que se encuentra en assets

   ![](https://i.ibb.co/Yd3Zz7J/image.png)

8. Importe el archivo js en el documento html. <script src="assets/js/juego.js" defer></script>

9. Cree el archivo style.css en la carpeta css que se encuentra dentro de assets.

   ![](https://i.ibb.co/ZcFnbCN/image.png)

   

   10. Asocie el css creado al documento html. <link rel="stylesheet" href="assets/css/style.css">

   11. Agregue las siguientes reglas de estilo al documento css

       ```css
       html, body {
           margin: 0px;
           background-color: #2F4F30;
           color: white;
       }
       
       .header {
           text-align: center;
           background-color: black;
           color: white;
           padding: 20px;
           font-size: 25px;
       }
       
       .carta {
           position: relative;
           width: 150px;
           left: 100px;
           margin-left: -75px;
       }
       
       #ia-cards, #player-cards {
           height: 240px;
       }
       ```

10. Agregue bootstrap al proyecto. Tenga en cuenta que se agregara via CDN

    ```html
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    ```

    ```html
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    ```

    ![](https://i.ibb.co/nrh03f4/image.png)

11. Modifique el index.html teniendo en cuenta el siguiente codigo

    ![](https://i.ibb.co/NyC2HRt/image.png)

​	Resultado final

​	![](https://i.ibb.co/RTV7sR4/image.png)

14. Agregue el siguiente codigo a el archivo js.

    ```javascript
    /**
     * 2C = Two of Clubs
     * 2D = Two of Diamonds
     * 2H = Two of Hearts
     * 2S = Two of Spades
     */
    
    let deck         = [];
    const tipos      = ['C','D','H','S'];
    const especiales = ['A','J','Q','K'];
    
    let puntosJugador = 0,
        puntosComputadora = 0;
    
    // Referencias del HTML
    const btnPedir   = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');
    const btnNuevo   = document.querySelector('#btnNuevo');
    
    const divCartasJugador     = document.querySelector('#jugador-cartas');
    const divCartasComputadora = document.querySelector('#computadora-cartas');
    
    const puntosHTML = document.querySelectorAll('small');
    
    // Esta función crea un nuevo deck
    const crearDeck = () => {
    
        for( let i = 2; i <= 10; i++ ) {
            for( let tipo of tipos ) {
                deck.push( i + tipo);
            }
        }
    
        for( let tipo of tipos ) {
            for( let esp of especiales ) {
                deck.push( esp + tipo);
            }
        }
        // console.log( deck );
        deck = _.shuffle( deck );
        console.log( deck );
        return deck;
    }
    
    crearDeck();
    
    
    // Esta función me permite tomar una carta
    const pedirCarta = () => {
    
        if ( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        }
        const carta = deck.pop();
        return carta;
    }
    
    // pedirCarta();
    const valorCarta = ( carta ) => {
    
        const valor = carta.substring(0, carta.length - 1);
        return ( isNaN( valor ) ) ? 
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;
    }
    
    // turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {
    
        do {
            const carta = pedirCarta();
    
            puntosComputadora = puntosComputadora + valorCarta( carta );
            puntosHTML[1].innerText = puntosComputadora;
            
            // <img class="carta" src="assets/cartas/2C.png">
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
            imgCarta.classList.add('carta');
            divCartasComputadora.append( imgCarta );
    
            if( puntosMinimos > 21 ) {
                break;
            }
    
        } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
    
        setTimeout(() => {
            if( puntosComputadora === puntosMinimos ) {
                alert('Nadie gana :(');
            } else if ( puntosMinimos > 21 ) {
                alert('Computadora gana')
            } else if( puntosComputadora > 21 ) {
                alert('Jugador Gana');
            } else {
                alert('Computadora Gana')
            }
        }, 100 );
    }
    
    
    
    // Eventos
    btnPedir.addEventListener('click', () => {
    
        const carta = pedirCarta();
        
        puntosJugador = puntosJugador + valorCarta( carta );
        puntosHTML[0].innerText = puntosJugador;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasJugador.append( imgCarta );
    
        if ( puntosJugador > 21 ) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
    
        } else if ( puntosJugador === 21 ) {
            console.warn('21, genial!');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
        }
    
    });
    
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
    
        turnoComputadora( puntosJugador );
    });
    
    btnNuevo.addEventListener('click', () => {
    
        console.clear();
        deck = [];
        deck = crearDeck();
    
        puntosJugador     = 0;
        puntosComputadora = 0;
        
        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;
    
        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';
    
        btnPedir.disabled   = false;
        btnDetener.disabled = false;
    
    });
    
    ```

    ### **1. Declaraciones iniciales**

    - Se define un **deck** (baraja), los **tipos de cartas** (`C`, `D`, `H`, `S`) y las **cartas especiales** (`A`, `J`, `Q`, `K`).
    - Variables para llevar la cuenta de los puntos de:
      - El jugador (`puntosJugador`).
      - La computadora (`puntosComputadora`).
    - **Referencias al HTML** para interactuar con los elementos de la interfaz como botones y contenedores.

    ------

    ### **2. Crear el deck**

    La función `crearDeck` genera una baraja de cartas combinando los números (`2-10`) y las cartas especiales (`A, J, Q, K`) con los diferentes tipos (`C, D, H, S`).

    Por ejemplo: `2C`, `3H`, `KD`, etc.

    Después, la baraja se mezcla usando `_.shuffle`, una función de la librería **Lodash**.

    ### **3. Pedir una carta**

    La función `pedirCarta` extrae la última carta del deck usando `deck.pop()` y devuelve su valor. Si la baraja está vacía, lanza un error.

    ------

    ### **4. Valor de las cartas**

    La función `valorCarta` evalúa el valor de una carta:

    - Los números (`2-10`) tienen su valor numérico.
    - Las cartas especiales (`J, Q, K`) valen 10.
    - El `A` vale 11.

    ------

    ### **5. Turno de la computadora**

    La función `turnoComputadora` simula el turno de la computadora. Se ejecuta mientras:

    - La computadora tenga menos puntos que el jugador.
    - La puntuación del jugador sea menor o igual a 21.

    En cada iteración:

    1. Se pide una carta.
    2. Se actualizan los puntos de la computadora.
    3. Se muestra la carta en el HTML.

    Finalmente, se determina el ganador mediante una serie de condiciones y se muestra un mensaje con `alert`.

    ------

    ### **6. Eventos del jugador**

    **Botón Pedir (`btnPedir`)**:

    - El jugador pide una carta y se actualizan sus puntos.
    - Si los puntos del jugador superan 21, el jugador pierde y se llama al turno de la computadora.
    - Si el jugador llega exactamente a 21, también se detiene el turno y la computadora juega.

    **Botón Detener (`btnDetener`)**:

    - Finaliza el turno del jugador y llama al turno de la computadora con los puntos actuales del jugador.

    **Botón Nuevo (`btnNuevo`)**:

    - Reinicia el juego:
      - Crea una nueva baraja.
      - Resetea los puntos.
      - Limpia las cartas mostradas en el HTML.
      - Habilita los botones para un nuevo juego.

    ------

    ### **7. Actualización visual**

    El código incluye manipulaciones del DOM para reflejar los cambios del juego:

    - Se añaden las cartas jugadas (`<img>` con la imagen correspondiente).
    - Se actualizan los puntos mostrados en el HTML (`puntosHTML`).

15. Ingrese a la pagina  https://underscorejs.org/ y haga clic derecho sobre la pagina y en el menú contextual seleccione la opcion guardar como y seleccione la carpeta js del proyecto en la que esta trabajando.

    ![](https://i.ibb.co/L6YhHmp/image.png)

16. Importe el archivo creado y el archivo juego.js  al index.html

    ![](https://i.ibb.co/9Nnxpdh/image.png)



# DOM

![](https://i.ibb.co/XLfTDW0/image.png)

El **DOM** (*Document Object Model*) es una interfaz de programación para los documentos HTML y XML. Representa la estructura del documento como un árbol de nodos, donde cada nodo corresponde a un elemento, atributo, texto u otra parte del documento.

## ¿Por qué es importante?

El DOM permite que los lenguajes de programación, como **JavaScript**, interactúen con los documentos web para:

1. **Acceder y modificar el contenido**: Leer o cambiar textos, atributos o elementos.
2. **Cambiar la estructura**: Agregar, mover o eliminar nodos (elementos).
3. **Manipular el estilo**: Alterar clases, estilos CSS y más.
4. **Responder a eventos**: Detectar clics, teclas, desplazamientos, entre otros.

## ¿Cómo funciona?

- El DOM convierte el código HTML en un árbol jerárquico de nodos.
- Cada elemento HTML (como `<div>`, `<p>`, `<img>`) se convierte en un nodo que puede ser manipulado con JavaScript.

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="titulo">Hola, Mundo</h1>
    <p class="texto">Este es un párrafo.</p>
  </body>
</html>
```

```less
html
 └── body
      ├── h1 (id: "titulo")
      └── p (class: "texto")
```

<img src="https://i.ibb.co/0VMpczb/image.png" style="zoom:80%;" />

<img src="https://i.ibb.co/p675psk/image.png" style="zoom:80%;" />

<img src="https://i.ibb.co/hgcvJ57/image.png" style="zoom: 67%;" />

![](https://i.ibb.co/PwRMDBg/image.png)



## Conceptos importantes

<img src="https://i.ibb.co/d2HNTMB/image.png" style="zoom:80%;" />

<img src="https://i.ibb.co/xXZNLzL/image.png" style="zoom:80%;" />

<img src="https://i.ibb.co/Ybc272s/image.png" style="zoom:80%;" />

<img src="https://i.ibb.co/FX09wgC/image.png" style="zoom:80%;" />

<img src="https://i.ibb.co/7YTvdkz/image.png" style="zoom:80%;" />

<img src="https://i.ibb.co/1Rd3Ky4/image.png" style="zoom:80%;" />

## Búsqueda de elementos HTML desde JavaScript

![](https://i.ibb.co/CJzd70j/image.png)

Ejemplos

🔍 `getElementById()`

```html
<h1 id="titulo">Hola DOM</h1>
<button onclick="cambiarTexto()">Cambiar texto</button>
```

```js
function cambiarTexto() {
  const titulo = document.getElementById("titulo");
  titulo.textContent = "Texto cambiado con getElementById";
}
```

🔍 `getElementsByClassName()`

```html
<p class="mensaje">Primer párrafo</p>
<p class="mensaje">Segundo párrafo</p>
<button onclick="resaltar()">Resaltar párrafos</button>
```

```js
function resaltar() {
  const parrafos = document.getElementsByClassName("mensaje");
  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.backgroundColor = "yellow";
  }
}
```

🔍 `getElementsByTagName()`

```html
<ul>
  <li>Manzana</li>
  <li>Pera</li>
  <li>Banano</li>
</ul>
<button onclick="enumerar()">Numerar frutas</button>
```

```js
function enumerar() {
  const elementos = document.getElementsByTagName("li");
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].textContent = `${i + 1}. ${elementos[i].textContent}`;
  }
}
```



![](https://i.ibb.co/NpNWH3T/image.png)

🧪 `querySelector()`

```html
<p class="mensaje">Primer mensaje</p>
<p class="mensaje">Segundo mensaje</p>
<button onclick="cambiarUno()">Cambiar primer mensaje</button>
```

```js
function cambiarUno() {
  const primerMensaje = document.querySelector(".mensaje");
  primerMensaje.textContent = "Texto cambiado solo en el primero";
}
```

🧪 `querySelectorAll()`

```html
<ul>
  <li class="item">Item A</li>
  <li class="item">Item B</li>
  <li class="item">Item C</li>
</ul>
<button onclick="enumerarTodos()">Enumerar todos</button>
```

```js
function enumerarTodos() {
  const items = document.querySelectorAll(".item");
  items.forEach((item, index) => {
    item.textContent = `${index + 1}. ${item.textContent}`;
  });
}
```

## innerHtml

La propiedad innerHTML se utiliza en programación web, especialmente con JavaScript, para acceder o modificar el contenido HTML dentro de un elemento específico en una página web.

## Taller Practico

1. Cree un proyecto nuevo llamado pizza-campus.

   ```less
   .
   |-- css
   |   `-- style.css
   |-- index.html
   `-- js
       `-- app.js
   ```

2. Importe los archivos externos style.css y app.js

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="css/style.css">
       <script src="js/app.js" defer></script>
       <title>Document</title>
   </head>
   <body>
       
   </body>
   </html>
   ```

3. Agregue referencia al archivo favicon. https://www.freecodecamp.org/news/all-emojis-emoji-list-for-copy-and-paste/#heading-cat-faces-emojis

   ![](https://i.ibb.co/3mDR3MR/image.png)

4. Agregue la siguiente estructura dentro del body.

   <img src="https://i.ibb.co/2WpGXNh/image.png" style="zoom:50%;" />

   ```html
     <div id="contenedor">
       <h1 id="titulo">🍕<br>Toppings de Pizza</h1>
       <ul id="lista-toppings">
         <li class="topping fondo-marron" id="aceitunas">Aceitunas</li>
         <li class="topping fondo-naranja">Cebolla</li>
         <li class="topping fondo-marron" id="albahaca">Albahaca</li>
         <li class="topping fondo-naranja">Champiñones</li>
         <!-- Para mostrar como seleccionar por etiqueta. -->
         <!-- <li>Queso Extra</li> -->
       </ul>
     </div>
   ```

   5. Agregue las siguientes reglas de estilo

      ```css
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
      }
      
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
        background: url(../imagenes/pizza.jpg) no-repeat center center/cover;
      }
      #contenedor {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        width: 80vw;
        max-width: 600px;
        background-color: white;
        border: 4px solid black;
      }
      
      h1 {
        font-size: 3rem;
        width: 100%;
        margin: 20px 10px;
      }
      
      ul {
        width: 100%;
        height: 100%;
      }
      
      .topping {
        font-size: 2rem;
        font-weight: bold;
        color: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80px;
        margin: 15px 0;
      }
      
      .fondo-marron {
        background-color: #aa5822;
      }
      
      .fondo-naranja {
        background-color: #ff7b0f;
      }
      
      ```

      ![ w ](https://i.ibb.co/Q6YMbg9/image.png)

6. En el archivo js agregue el siguiente código:

   ```javascript
   const contenedor = document.getElementById('contenedor');
   const lstToppings = document.getElementById('lista-toppings');
   const titulo = document.getElementById('titulo');
   const toppings = document.getElementsByClassName('topping');
   const misToppings = document.getElementsByTagName('li');
   ```

   **Explicación**

   > const contenedor = document.getElementById('contenedor');

   Este código selecciona el elemento HTML con el atributo `id="contenedor"`.

   Se utiliza el método `document.getElementById`, que busca un elemento específico por su `id`.

   El elemento encontrado se asigna a la constante `contenedor`, lo que permite interactuar con él posteriormente.

   > const lstToppings = document.getElementById('lista-toppings');

   De manera similar, selecciona el elemento con el atributo `id="lista-toppings"`.

   Este elemento es probablemente la lista `<ul>` que contiene los diferentes toppings.

   > const titulo = document.getElementById('titulo');

   Aquí se selecciona el elemento con el atributo `id="titulo"`, que es el encabezado `<h1>`.

   Esto permite manipular el título dinámicamente (por ejemplo, cambiar su texto, estilo, etc.).

   > const toppings = document.getElementsByClassName('topping');

   Selecciona todos los elementos que tienen la clase CSS `topping`.

   Este método devuelve un *HTMLCollection*, una lista dinámica de los elementos coincidentes.

   Puedes recorrer esta lista con un bucle para aplicar cambios a todos los elementos con la clase `topping`.

   > const misToppings = document.getElementsByTagName('li');

   Busca todos los elementos con la etiqueta `li` dentro del documento.

   Este método también devuelve un *HTMLCollection* que contiene todas las listas de ítems (`<li>`) en el documento.

   Es útil cuando quieres interactuar con todos los elementos de una lista, sin importar su clase o `id`.

   

# Webcomponents

## 🧱 Nivel 1: Fundamentos de Web Components

### ✅ ¿Qué son los Web Components?

Los **Web Components** son una forma estandarizada de crear **componentes reutilizables**, encapsulados y compatibles con cualquier framework o sin framework alguno. Son parte del **estándar del navegador**.

### 🔍 Tecnologías clave

1. **Custom Elements** – te permiten definir tus propias etiquetas HTML como `<mi-boton>`.
2. **Shadow DOM** – te da encapsulamiento real: los estilos y el DOM están aislados.
3. **HTML Templates** – permiten definir estructuras reutilizables que no se renderizan hasta que se insertan.

### 📦 Crear tu primer componente: `<hello-world>`

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <script src="hello-world.js" defer></script>
  <title>Web Components Nivel 1</title>
</head>
<body>
  <hello-world></hello-world>
</body>
</html>

```

🧠 Paso 2: Crear el archivo `hello-world.js`

```js
// hello-world.js

class HelloWorld extends HTMLElement {
  constructor() {
    super(); // Siempre llamar a super()
    
    // Creamos Shadow DOM en modo "open" (se puede acceder con JS)
    const shadow = this.attachShadow({ mode: 'open' });

    // Crear contenido del componente
    const wrapper = document.createElement('div');
    wrapper.textContent = 'Hola, Johlver 👋';

    // Agregar estilo aislado
    const style = document.createElement('style');
    style.textContent = `
      div {
        padding: 10px;
        background: #f0f0f0;
        color: #333;
        font-weight: bold;
        border-radius: 8px;
        font-family: sans-serif;
      }
    `;

    // Añadir estilo y contenido al Shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

// Registrar el componente personalizado
customElements.define('hello-world', HelloWorld);
```

```js
class MiComponente extends HTMLElement {
  constructor() {
    super();
    // Creamos el shadow DOM
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        p { color: blue; }
      </style>
      <p>Hola, soy un componente personalizado</p>
    `;
  }

  // Se ejecuta cuando el componente se agrega al DOM
  connectedCallback() {
    console.log('MiComponente fue agregado al DOM.');
    // Puedes inicializar datos, eventos, etc.
    this.shadowRoot.querySelector('p').textContent += ' (Ahora estoy conectado)';
  }

  // Opcional: Limpia eventos o recursos si se elimina del DOM
  disconnectedCallback() {
    console.log('MiComponente fue eliminado del DOM.');
  }
}

// Definir el elemento personalizado
customElements.define('mi-componente', MiComponente);

// Usar el componente en el DOM
document.body.innerHTML = `<mi-componente></mi-componente>`;
```



## 🧪 **Ejercicio 1: Componente `<saludo-personal>`**

### 🎯 Propósito:

Crear un componente que muestre un mensaje personalizado como:
 **“Hola, Ana. Bienvenida al sistema.”**

### ✅ Requisitos:

- El nombre debe ser leído de un **atributo `nombre`**
- El mensaje debe estar dentro del Shadow DOM
- Debe aplicar estilos personalizados

```js
// saludo-personal.js

class SaludoPersonal extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const nombre = this.getAttribute('nombre') || 'usuario';

    const div = document.createElement('div');
    div.textContent = `Hola, ${nombre}. Bienvenido(a) al sistema.`;

    const style = document.createElement('style');
    style.textContent = `
      div {
        font-size: 18px;
        color: white;
        background-color: #007acc;
        padding: 8px 12px;
        border-radius: 6px;
        font-family: sans-serif;
      }
    `;

    shadow.append(style, div);
  }
}

customElements.define('saludo-personal', SaludoPersonal);
```

## 🧪 **Ejercicio 2: Componente `<mi-caja>`**

### 🎯 Propósito:

Mostrar una caja de color con texto configurable mediante atributo `texto`.

### ✅ Requisitos:

- Mostrar el texto dado como atributo
- Estilo con fondo gris y borde redondeado

## 🧪 **Ejercicio 3: Componente `<reloj-estatico>`**

### 🎯 Propósito:

Mostrar la hora en que se cargó el componente. (No actualizable)

### ✅ Requisitos:

- Usar `new Date()` para mostrar la hora actual al momento de carga
- Estilo tipo reloj digital

## 🧪 **Nivel 2: Shadow DOM y Atributos Observados**

### 🎯 Objetivo:

- Aprender a **encapsular completamente** estilos y estructura.
- Escuchar cambios en **atributos** y actualizar el componente en tiempo real.
- Utilizar `<slot>` para insertar contenido externo.

------

### 📌 Conceptos clave

#### 1. **Shadow DOM**

Es un árbol DOM oculto y encapsulado. Evita que el CSS y JS del exterior afecten al componente.

```js
this.attachShadow({ mode: 'open' }); // accesible desde JS
this.attachShadow({ mode: 'closed' }); // inaccesible
```

#### 2. **`observedAttributes` + `attributeChangedCallback()`**

Permite reaccionar a cambios en atributos declarados:

```js
static get observedAttributes() {
  return ['nombre'];
}

attributeChangedCallback(nombre, oldVal, newVal) {
  console.log(`Nombre cambió de ${oldVal} a ${newVal}`);
}
```

#### 3.**Slots**

Permiten que el usuario del componente inserte HTML dentro de un espacio definido del componente:

```html
<my-card>
  <h3 slot="titulo">Bienvenido</h3>
  <p slot="contenido">Este es un mensaje...</p>
</my-card>

```

#### 🧩 Ejemplo completo: `<user-card nombre="Johlver">`

##### ✅ Requisitos:

- Debe mostrar el nombre y actualizarse si el atributo cambia.
- Usar `slot` para insertar una descripción.
- Estilos encapsulados.

```js
// user-card.js

class UserCard extends HTMLElement {
    static get observedAttributes() {
      return ['nombre'];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      const container = document.createElement('div');
      const title = document.createElement('h2');
      this.titleElement = title;
  
      const slot = document.createElement('slot');
      slot.setAttribute('name', 'descripcion');
  
      const style = document.createElement('style');
      style.textContent = `
        div {
          border: 2px solid #ccc;
          border-radius: 8px;
          padding: 12px;
          font-family: sans-serif;
          background: #fafafa;
        }
        h2 {
          color: #0077aa;
          margin-top: 0;
        }
      `;
  
      container.appendChild(title);
      container.appendChild(slot);
      this.shadowRoot.append(style, container);
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'nombre') {
        this.render();
      }
    }
    render() {
      const nombre = this.getAttribute('nombre') || 'Desconocido';
      this.titleElement.textContent = `Usuario: ${nombre}`;
    }
  }
  customElements.define('user-card', UserCard);
```



##### 🧩 Ejemplo completo Tarjeta Info

```js
class TarjetaInfo extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      const container = document.createElement('div');
      container.innerHTML = `
        <section>
          <header>
            <slot name="titulo">[Sin título]</slot>
          </header>
          <main>
            <slot name="contenido">[Sin contenido]</slot>
          </main>
          <footer>
            <slot name="footer">[Sin pie de página]</slot>
          </footer>
        </section>
      `;
  
      const style = document.createElement('style');
      style.textContent = `
        section {
          border: 2px solid #888;
          padding: 12px;
          border-radius: 10px;
          font-family: Arial;
          max-width: 400px;
          background: #fefefe;
        }
        header {
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 10px;
          color: #003366;
        }
        main {
          font-size: 16px;
          margin-bottom: 10px;
          color: #222;
        }
        footer {
          font-size: 12px;
          color: #555;
          text-align: right;
        }
      `;
  
      shadow.append(style, container);
    }
  }
  
  customElements.define('tarjeta-info', TarjetaInfo);
  
```

#### 📘 Tabla: Selección y comunicación en Web Components

| **Código**                                  | **Dónde busca**                  | **Qué hace / Devuelve**                               | **Cuándo usarlo**                                           |
| ------------------------------------------- | -------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------- |
| `this.querySelector('selector')`            | 🔦 Light DOM (contenido externo)  | Busca nodos que el usuario puso dentro del componente | Para leer o manipular contenido proyectado                  |
| `this.shadowRoot.querySelector('selector')` | 🌑 Shadow DOM (contenido interno) | Busca elementos dentro del componente encapsulado     | Para acceder a elementos que tú construyes en el componente |
| `this.shadowRoot`                           | Accede al Shadow DOM             | Devuelve el nodo raíz encapsulado                     | Siempre que trabajes con estructura interna                 |
| `slot.addEventListener('slotchange', fn)`   | Light DOM → Shadow DOM           | Detecta cambios dinámicos en el contenido de un slot  | Para reaccionar cuando cambian los elementos proyectados    |
| `slot.assignedNodes()`                      | Light DOM                        | Devuelve los nodos colocados en el slot               | Útil si quieres inspeccionar qué se insertó exactamente     |
| `slot.assignedElements()`                   | Light DOM                        | Igual que `assignedNodes()` pero solo elementos       | Para manipular los elementos externos insertados            |

##### Componente `<monitor-slot>`

Este componente:

1. Tiene un slot llamado `"contenido"`.
2. Escucha el evento `slotchange`.
3. Cuando el contenido cambia, actualiza un contador de cuántos elementos hay dentro del slot.

```js
class MonitorSlot extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      const wrapper = document.createElement('div');
      wrapper.innerHTML = `
        <div id="info">Elementos en el slot: 0</div>
        <slot name="contenido"></slot>
      `;
  
      const style = document.createElement('style');
      style.textContent = `
        div#info {
          font-family: sans-serif;
          font-size: 14px;
          background-color: #eee;
          padding: 6px;
          margin-bottom: 8px;
          border-left: 4px solid #0077cc;
        }
      `;
  
      this.shadowRoot.append(style, wrapper);
    }
  
    connectedCallback() {
      const slot = this.shadowRoot.querySelector('slot[name="contenido"]');
      const info = this.shadowRoot.querySelector('#info');
  
      // Escuchar cambios en el contenido del slot
      slot.addEventListener('slotchange', () => {
        const elementos = slot.assignedElements();
        info.textContent = `Elementos en el slot: ${elementos.length}`;
      });
    }
  }
  
  customElements.define('monitor-slot', MonitorSlot);
```



##### 🧩 **Reto Compuesto: `<producto-card>` con subcomponentes**

### 🎯 Enunciado

Crea un componente `<producto-card>` que:

- Use internamente:
  - `<precio-label>`: muestra un precio, recibe atributo `valor`.
  - `<boton-comprar>`: botón personalizado que lanza un evento `"comprar"` al hacer clic.
- Use `<slot name="nombre">` y `<slot name="descripcion">` para insertar datos desde el HTML externo.
- Al hacer clic en el botón, imprima en consola:
   `Producto comprado: [nombre del slot]`

## **Nivel 3: Interactividad y eventos personalizados** 🔥

### 🎯 **Objetivo del Nivel 3**

- Añadir **interactividad real** a los Web Components.
- Comunicar eventos del componente al mundo exterior usando `CustomEvent`.
- Entender la diferencia entre propiedades, atributos y métodos públicos.

```js
this.shadowRoot.querySelector('button').addEventListener('click', this.handleClick.bind(this));
```

### 2. 📣 Eventos personalizados (`CustomEvent`)

Para que un Web Component pueda **avisar cosas al exterior**, usamos:

```js
this.dispatchEvent(new CustomEvent('mi-evento', {
  detail: { mensaje: '¡Hola!' },
  bubbles: true,
  composed: true
}));
```

`bubbles: true` permite que suba por el DOM.

`composed: true` permite que atraviese el Shadow DOM.

### 3. ⚙️ Métodos públicos y privados

Puedes agregar métodos en los componente y usarlos desde el exterior:

```js
// Dentro de tu clase
saludar() {
  console.log('Hola desde el componente');
}

// Desde fuera
document.querySelector('mi-componente').saludar();

```

### 🧪 Ejemplo completo: `<contador-boton>` interactivo

### ✅ Comportamiento:

- Muestra un botón con contador.
- Al hacer clic, incrementa el número.
- Dispara un evento `"contador-cambiado"` con el nuevo valor.

### 🧪 **componente de calificación con estrellas** llamado `<rating-stars>` ⭐⭐⭐

------

## 🎯 Objetivo del componente `<rating-stars>`

Este componente:

- Muestra 5 estrellas (por defecto).
- Permite seleccionar una calificación al hacer clic en una estrella.
- Lanza un evento personalizado `rating-changed` con el nuevo valor.
- Expone un método público `reset()` para volver a 0 estrellas.

## 🧩 **Reto: Mostrar Descripción de Calificación y Enviarla en el Evento**

### 🧠 Enunciado

El desarrollador Johlver Pardo ha optimizado con éxito el rendimiento del componente `<rating-stars>`. Ahora se le ha solicitado mejorar la experiencia del usuario mostrando una **descripción textual** que se relacione con el valor de calificación seleccionado. Además, debe incluir esa descripción como parte del evento personalizado `rating-changed`.

### ✅ Requisitos:

1. Al seleccionar una estrella, debajo de ellas debe aparecer una descripción como:
   - 1 → "Muy malo"
   - 2 → "Malo"
   - 3 → "Regular"
   - 4 → "Bueno"
   - 5 → "Excelente"
2. Esta descripción debe actualizarse dinámicamente con cada clic.
3. El evento `rating-changed` debe enviar un objeto `detail` con dos campos:
   - `rating`: el número de estrellas seleccionadas
   - `descripcion`: el texto correspondiente a la calificación

## 🧩 **Reto: Guardar y Restaurar Calificación con LocalStorage**

### 🧠 Enunciado

El desarrollador Johlver Pardo ha creado un componente `<rating-stars>` que emite eventos personalizados y muestra una descripción textual dinámica. Ahora se le solicita que **agregue persistencia local** a la calificación seleccionada.

El componente debe:

1. Al hacer clic en una estrella:
   - Guardar el `rating` en `localStorage`, usando como clave el atributo `id` del componente o una clave por defecto (`"rating-stars"`).
2. Al montarse (`connectedCallback()`), debe:
   - Leer el valor previamente guardado en `localStorage`, si existe.
   - Restaurar el valor y la descripción correspondiente.
   - Reflejar esa restauración visualmente.

------

Otro ejemplo

1. **Código JavaScript:**

   ```javascript
   class ContadorComponente extends HTMLElement {
       constructor() {
           super();
           this.attachShadow({ mode: 'open' });
           this.shadowRoot.innerHTML = `
               <style>
                   .contador {
                       font-size: 24px;
                       color: green;
                   }
                   button {
                       margin: 5px;
                   }
               </style>
               <div>
                   <p class="contador">Contador: <span id="valor">0</span></p>
                   <button id="incrementar">Incrementar</button>
                   <button id="resetear">Resetear</button>
               </div>
           `;
           this.contador = 0;
       }
   
       connectedCallback() {
           this.shadowRoot.querySelector('#incrementar').addEventListener('click', () => {
               this.contador++;
               this.actualizarContador();
           });
   
           this.shadowRoot.querySelector('#resetear').addEventListener('click', () => {
               this.contador = 0;
               this.actualizarContador();
           });
       }
   
       actualizarContador() {
           this.shadowRoot.querySelector('#valor').textContent = this.contador;
       }
   }
   
   customElements.define('contador-componente', ContadorComponente);
   ```

2. **Uso en HTML:**

   ```html
   <contador-componente></contador-componente>
   ```

3. **Resultado:** Un componente reutilizable que muestra un contador interactivo. Cada instancia del componente es independiente gracias al encapsulamiento del Shadow DOM.



## **Conceptos Clave de los Web Components**

#### **1. Custom Elements**

Permite definir nuevos elementos HTML. Estos elementos tienen nombres personalizados con un guion (`-`) para evitar conflictos con los elementos estándar.

**Ejemplo:**

```javascript
class MiComponente extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<p>¡Hola desde un Web Component!</p>`;
    }
}

customElements.define('mi-componente', MiComponente);
```

**Uso en HTML:**

```javascript
<mi-componente></mi-componente>
```

------

El método `connectedCallback()` es parte de la **ciclo de vida de los Custom Elements** (elementos personalizados) en la especificación de los Web Components. Este método se ejecuta automáticamente cada vez que una instancia de un elemento personalizado es añadida al árbol DOM.

**¿Cuándo se utiliza?**

Se utiliza para realizar configuraciones iniciales, añadir eventos, manipular el DOM interno del componente o realizar tareas que deben ejecutarse cuando el componente ya está en el DOM.

**Características clave**

- **Se ejecuta al insertar el componente en el DOM**: Esto incluye tanto cuando se agrega explícitamente con `appendChild`, como cuando forma parte de una estructura HTML inicial o dinámica.
- **Puede llamarse varias veces**: Si el elemento se elimina del DOM y se vuelve a agregar, el `connectedCallback` se ejecutará de nuevo.

**Uso típico**

1. **Configurar propiedades iniciales**.
2. **Añadir escuchadores de eventos** al elemento o a sus hijos.
3. **Realizar manipulaciones del DOM** relacionadas con el componente.
4. **Iniciar tareas que dependan del DOM**, como solicitudes de datos.

```javascript


```



#### **2. Shadow DOM**

Proporciona un DOM encapsulado para que el contenido y los estilos de un componente no interfieran con el resto del documento.

**Ejemplo:**

```javascript
class EncapsuladoComponente extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
                p {
                    color: red;
                }
            </style>
            <p>Este texto está encapsulado</p>
        `;
    }
}

customElements.define('encapsulado-componente', EncapsuladoComponente);
```

**Uso en HTML:**

```javascript
<encapsulado-componente></encapsulado-componente>
```

Aquí, los estilos (`color: red;`) aplican solo al contenido del componente y no afectan al resto del documento.

------

#### **3. HTML Templates**

Permite definir contenido HTML que se puede reutilizar sin renderizarlo inmediatamente.

**Ejemplo:**

```javascript
<template id="mi-template">
    <style>
        p {
            font-size: 20px;
            color: blue;
        }
    </style>
    <p>Este contenido viene de un template</p>
</template>
```

**Uso con JavaScript:**

```javascript
class TemplateComponente extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.getElementById('mi-template').content.cloneNode(true);
        shadow.appendChild(template);
    }
}

customElements.define('template-componente', TemplateComponente);
```

**HTML:**

```javascript
<template-componente></template-componente>
```

------

### **Creando un Web Component Completo**

Veamos un ejemplo práctico combinando estas tecnologías.

**Ejemplo Completo: Contador Personalizado**

------

### **Ventajas de los Web Components**

1. **Reutilización**: Se pueden usar en cualquier proyecto o framework.
2. **Encapsulación**: Evita conflictos de estilos y scripts.
3. **Estandarización**: Es una tecnología nativa del navegador.

------

### **Limitaciones y Soluciones**

1. **Compatibilidad con navegadores antiguos**: Los Web Components no son compatibles con navegadores muy antiguos como IE11. Para solucionarlo, se pueden usar *polyfills*.
2. **Curva de aprendizaje**: Requiere familiaridad con conceptos como Shadow DOM y Custom Elements.
3. **Soporte limitado para SEO**: El contenido en Shadow DOM puede no ser indexado fácilmente.

### Ejemplos Adicionales

https://github.com/trainingLeader/webcomponents.git

# Vite+Lit+WebComponents

## Que es lit

Lit es una biblioteca simple para construir componentes web rápidos y ligeros.

En el núcleo de Lit se encuentra una clase base de componentes que elimina la necesidad de escribir mucho código repetitivo. Esta clase proporciona estado reactivo, estilos encapsulados y un sistema de plantillas declarativo que es pequeño, rápido y expresivo.

## Que se puede construir con Lit

Lo primero que debes saber sobre Lit es que **cada componente Lit es un componente web estándar**. Los componentes web tienen el superpoder de la interoperabilidad: nativamente soportados por los navegadores, se pueden utilizar en cualquier entorno HTML, con cualquier framework o sin ninguno.

Esto hace que Lit sea una opción ideal para desarrollar **componentes compartibles o sistemas de diseño**. Los componentes Lit se pueden usar en múltiples aplicaciones y sitios, incluso si esas aplicaciones y sitios están construidos con una variedad de pilas de front-end. Los desarrolladores de sitios que usan componentes Lit no necesitan escribir ni siquiera ver ningún código Lit; pueden usar los componentes de la misma manera que lo hacen con los elementos HTML integrados.

Lit también es perfecto para **mejorar progresivamente sitios HTML básicos**. Los navegadores reconocerán los componentes Lit en tu marcado y los inicializarán automáticamente, ya sea que tu sitio esté hecho a mano, administrado a través de un CMS, construido con un framework del lado del servidor o generado por una herramienta como Jekyll o eleventy.

Por supuesto, también puedes construir **aplicaciones altamente interactivas y ricas en funciones** a partir de componentes Lit, al igual que lo harías con un framework como React o Vue. Las capacidades y la experiencia del desarrollador de Lit son comparables a estas alternativas populares, pero Lit minimiza el bloqueo, maximiza la flexibilidad y promueve la mantenibilidad al adoptar el modelo de componentes nativo del navegador.

Cuando creas una aplicación con Lit, es fácil agregar componentes web "vanilla" o componentes web creados con otras bibliotecas. Incluso puedes actualizar a una nueva versión importante de Lit, o migrar a otra biblioteca, componente por componente, sin interrumpir el desarrollo del producto. **(Traduccion Pagina oficial)**

## Iniciando con lit

1. Cree un nuevo proyecto con Vite y seleccione Lit como librería de desarrollo, siga los pasos del asistente. 

   ![](https://i.ibb.co/hBW5D1s/image.png)

2. Seleccione JS como lenguaje de desarrollo

   ![](https://i.ibb.co/hHvq3R6/image.png)

3. Instale las dependencias basicas de Node. Use el comando **npm install** recuerde que debe estar ubicado en la carpeta del proyecto.

   ![](https://i.ibb.co/McC4pHk/image.png)

4. Ingrese el comando **code .** para abrir el proyecto en el IDE Visual Studio Code.

   ![](https://i.ibb.co/k1BGbqc/image.png)

5. Estructura del proyecto

   ![](https://i.ibb.co/s1R38LL/image.png)

   

### Definiendo primer componente

En Lit, la mayoría de las cosas comienzan definiendo un componente. Aquí te hemos proporcionado un proyecto inicial que tiene las importaciones necesarias y nada más.

1. En la carpeta src cree un nuevo archivo js llamado first-element.js. Puede eliminar el archivo creado por defecto llamado my-element.

   > Los nombres de los archivos tienen la siguiente estructura [Identificador o Nombre]-element.js. **Recuerde que los [] no se deben colocar cuando defina el identificador.**

   ![](https://i.ibb.co/TqfhFQ9/image.png)

2. Agregue las importaciones de lit.

   Si usa TS

   ```javascript
   import {LitElement, html} from 'lit';
   import {customElement} from 'lit/decorators.js';
   ```

   **`import {LitElement, html} from 'lit';`:** Esta línea importa dos elementos esenciales de Lit:

   - **`LitElement`:** Esta clase es la base de todos los componentes que se crearán en el proyecto. Proporciona funcionalidades como la gestión del estado, la renderización de plantillas y la interacción con el DOM.
   - **`html`:** Esta función especial permite escribir plantillas HTML de manera más limpia y concisa dentro de los componentes de Lit.

   **`import {customElement} from 'lit/decorators.js';`:** Esta línea importa un decorador llamado `customElement`. Los decoradores son una característica de JavaScript que permiten añadir metadatos a las clases. En este caso, el decorador `customElement` se utiliza para registrar un componente de Lit como un elemento personalizado en el navegador. Esto significa que podrás usar este componente directamente en tu HTML, como si fuera un elemento HTML estándar.

   Si usa JS

   ```javascript
   import {LitElement, html} from 'lit';
   ```

3. Cree la clase principal del componente.

   JS

   ```javascript
   import {LitElement, html} from 'lit';
   export class FirstElement extends LitElement {
       
   }
   customElements.define('first-element', FirstElement);
   ```

   ![](https://i.ibb.co/GnXTM01/image.png)

   TS

   ```typescript
   @customElement('first-element')
   export class FirstElement extends LitElement {
   }
   ```

   

4. Agregue el metodo render en el componente.

   ```javascript
   render() {
        return html`
             <p>Hello world! From my-element.</p>
        `;
   }
   ```

   ![](https://i.ibb.co/ysJHfQd/image.png)

   

### Propiedades y expresiones

En Lit, las propiedades reactivas son atributos especiales de un componente que, al cambiar su valor, provocan automáticamente que el componente se vuelva a renderizar y se actualice su interfaz de usuario. Esto significa que tu componente siempre estará sincronizado con los datos más recientes.

**¿Cómo funcionan las propiedades reactivas?**

1. **Declaración:** Se declaran usando el decorador `@property` dentro de la clase del componente.
2. **Cambio de valor:** Cuando el valor de una propiedad reactiva cambia, Lit detecta este cambio.
3. **Re-renderizado:** Lit programa una actualización para el componente.
4. **Actualización del DOM:** Se vuelve a ejecutar el método `render()` del componente y se comparan las nuevas plantillas con el DOM actual. Solo se actualizan las partes del DOM que han cambiado.

#### Declaración de propiedades reactivas

```javascript
    static properties = {
        message: {},
      };
```

En **Lit**, la declaración de propiedades estáticas como `static properties` se utiliza para definir las propiedades que tendrá un componente. Estas propiedades permiten que un componente Lit sea reactivo y manejable.

#### Declarative event listeners (Manejadores de eventos declarativos) https://lit.dev/docs/components/events/

Modifique el componente creado con el siguiente codigo

```javascript
static properties = {
    name: {},
  };

  constructor() {
    super();
    this.name = 'Your name here';
  }

  render() {
    // TODO: Add declarative event listener to input.
    return html`
      <p>Hello, ${this.name}</p>
      <input placeholder="Enter your name">
    `;
  }
```

![](https://i.ibb.co/n6SWhWC/image.png)

Para agregar interactividad a tus componentes, probablemente querrás añadir algunos manejadores de eventos. Lit facilita la adición de un **listener** de eventos declarativo en la plantilla, utilizando una expresión como esta:

```javascript
<button @click=${this.handleClick}>Click me!</button>
```

**`<button>`**

- Este es un elemento HTML estándar que representa un botón.
- Los botones son elementos interactivos que los usuarios pueden presionar para realizar acciones.

**`@click`**

- En Lit, el prefijo **`@`** se utiliza para definir un **event listener** (escuchador de eventos) de manera declarativa.
- **`@click`** significa: "Quiero escuchar el evento `click` en este botón".
- El evento `click` ocurre cada vez que un usuario hace clic en el botón.

**`${this.handleClick}`**

- La expresión **`${this.handleClick}`** hace referencia al método **`handleClick`** del componente actual.
- El signo **`${...}`** es parte de la sintaxis de plantillas de Lit y permite insertar cualquier expresión JavaScript directamente en el HTML.
- Aquí, estás diciendo que el evento `click` debe ejecutar el método `handleClick` del componente cuando el usuario haga clic en el botón.

##### Agregando Evento declarativo

![](https://i.ibb.co/W3B4wTy/image.png)

![](https://i.ibb.co/FXP7RJQ/image.png)

**Ejemplos varios de expresiones https://lit.dev/docs/templates/expressions/** 

```javascript
<!-- Child nodes -->
<h1>${this.pageTitle}</h1>

<!-- Attribute -->
<div class=${this.myTheme}></div>

<!-- Boolean attribute -->
<p ?hidden=${this.isHidden}>I may be in hiding.</p>

<!-- Property -->
<input .value=${this.value}>

<!-- Event listener -->
<button @click=${() => {console.log("You clicked a button.")}}>...</button>
```

## Template logic

En **Lit**, **Template logic** (o lógica de plantillas) se refiere a la capacidad de incluir expresiones y estructuras condicionales o iterativas dentro de las plantillas HTML, para que el contenido renderizado sea dinámico y responda a los datos o al estado del componente.

Gracias a la flexibilidad de Lit, puedes incluir JavaScript directamente dentro de las plantillas usando su sintaxis declarativa basada en **Tagged Templates** (con `${...}`). Esto permite que las plantillas sean reactivas y dinámicas.

------

##### Principales formas de Template Logic en Lit

1. **Interpolación de datos**:
   - Usar `${}` para inyectar valores o expresiones en el HTML.
2. **Condicionales**:
   - Renderizar contenido basado en una condición usando expresiones ternarias o helpers como `ifDefined`.
3. **Iteraciones**:
   - Renderizar listas o colecciones usando métodos como `map` o el helper `repeat` de Lit.
4. **Funciones de ayuda (`directives`)**:
   - Lit proporciona directivas especiales como `when` y `repeat` para manejar lógica más compleja.

#### Ejemplos comunes de Template Logic

##### 1. **Interpolación básica de datos**

```
import { LitElement, html } from 'lit';

class MyComponent extends LitElement {
  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = 'Lit';
  }

  render() {
    return html`
      <p>Hola, ${this.name}!</p>
    `;
  }
}

customElements.define('my-component', MyComponent);
```

- **`${this.name}`**: Inyecta el valor de la propiedad `name` directamente en la plantilla.

------

##### 2. **Condicionales**

Puedes usar expresiones condicionales directamente en `${}` o la directiva `when`:

**Con operador ternario**:

```javascript
render() {
  const isLoggedIn = true;
  return html`
    <p>${isLoggedIn ? 'Bienvenido de nuevo!' : 'Por favor, inicia sesión.'}</p>
  `;
}
```

**Usando la directiva `when`** (de Lit):

```javascript
import { when } from 'lit/directives/when.js';

render() {
  const isLoggedIn = true;
  return html`
    ${when(
      isLoggedIn,
      () => html`<p>Bienvenido de nuevo!</p>`,
      () => html`<p>Por favor, inicia sesión.</p>`
    )}
  `;
}
```

------

##### 3. **Iteraciones**

Para renderizar listas de elementos, puedes usar el método **`map`** o la directiva `repeat`:

**Usando `map`**:

```javascript
static properties = {
  items: { type: Array },
};

constructor() {
  super();
  this.items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
}

render() {
  return html`
    <ul>
      ${this.items.map((item) => html`<li>${item}</li>`)}
    </ul>
  `;
}
```

**Usando `repeat`** (directiva de Lit para optimizar renderizados):

```javascript
import { repeat } from 'lit/directives/repeat.js';
render() {
  return html`
    <ul>
      ${repeat(
        this.items,
        (item) => item, // Clave única para identificar elementos
        (item, index) => html`<li>${index + 1}: ${item}</li>`
      )}
    </ul>
  `;
}
```

------

##### 4. **Helpers adicionales para Template Logic**

- `ifDefined` (para atributos condicionales):
  - Usar esta directiva asegura que no se rendericen atributos no definidos.

```javascript
import { ifDefined } from 'lit/directives/if-defined.js';

render() {
  const tooltip = this.showTooltip ? 'Tooltip activo' : undefined;
  return html`
    <button title=${ifDefined(tooltip)}>Botón</button>
  `;
}
```

- `guard`(para optimizar renderizados innecesarios):
  - Solo ejecuta ciertas partes de la plantilla si los datos cambian.

------

#### Ventajas de Template Logic en Lit

1. **Reactividad**: Las plantillas se actualizan automáticamente cuando cambian los datos del componente.
2. **Legibilidad**: Puedes manejar lógica compleja directamente en el HTML, haciendo que el flujo de datos sea más claro.
3. **Directivas avanzadas**: Lit incluye herramientas como `when`, `repeat`, `ifDefined` y otras para mejorar y optimizar la lógica.

#### Ejemplo practico

```javascript
import {LitElement, html} from 'lit';
export class FirstElement extends LitElement {
    static properties = {
        _listItems: {state: true},
      };
    
      constructor() {
        super();
        this._listItems = [
          {text: 'Start Lit tutorial', completed: true},
          {text: 'Make to-do list', completed: false},
        ];
      }
      render() {
        return html`
          <h2>To Do</h2>
          <ul>
            ${this._listItems.map((item) =>
                html`<li>${item.text}</li>`
            )}
          </ul>

          <input id="newitem" aria-label="New item">
          <button @click=${this.addToDo}>Add</button>
        `;
    }
    get input() {
      return this.renderRoot?.querySelector('#newitem') ?? null;
    }
      // TODO: Add click handler.
    addToDo() {
      this._listItems = [...this._listItems,{text: this.input.value, completed: false}];
      this.input.value = '';
    }
}
customElements.define('first-element', FirstElement);
```

## Styles

```javascript
import {LitElement, html, css} from 'lit';
export class FirstElement extends LitElement {
    static properties = {
        _listItems: {state: true},
      };
      static styles = css`
      .completed {
        text-decoration-line: line-through;
        color: #777;
      }`;
      constructor() {
        super();
        this._listItems = [
          {text: 'Make to-do list', completed: true},
          {text: 'Add some styles', completed: false},
        ];
      }
      render() {
        return html`
          <h2>To Do</h2>
          <ul>
            ${this._listItems.map(
              (item) => html`
                <li
                    class=${item.completed ? 'completed' : ''}
                    @click=${() => this.toggleCompleted(item)}>
                  ${item.text}
                </li>`
            )}
          </ul>
          <input id="newitem" aria-label="New item">
          <button @click=${this.addToDo}>Add</button>
        `;
      }
      toggleCompleted(item) {
        item.completed = !item.completed;
        this.requestUpdate();
      }
      get input() {
        return this.renderRoot?.querySelector('#newitem') ?? null;
      }
      addToDo() {
        this._listItems = [...this._listItems,
            {text: this.input.value, completed: false}];
        this.input.value = '';
      }
}
customElements.define('first-element', FirstElement);
```

### Agregando Bootstrap

1. Ejecute el comando **npm i --save bootstrap @popperjs/core** desde el terminal de visual studio code

   ![](https://i.ibb.co/MffxyVT/image.png)

2. Importe bootstrap en el webcomponent

   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   import 'bootstrap/dist/js/bootstrap.min.js';
   ```

   ```javascript
   import {LitElement, html, css} from 'lit';
   import 'bootstrap/dist/css/bootstrap.min.css';
   import 'bootstrap/dist/js/bootstrap.min.js';
   export class FirstElement extends LitElement {
       static properties = {
           _listItems: {state: true},
         };
         constructor() {
           super();
         }
         createRenderRoot() {  
           return this;
         }
         render() {
           return html`
             <button type="button" class="btn btn-primary">Primary</button>
             <!-- Button trigger modal -->
             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               Launch demo modal
             </button>
   
             <!-- Modal -->
             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog">
                 <div class="modal-content">
                   <div class="modal-header">
                     <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <div class="modal-body">
                     ...
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     <button type="button" class="btn btn-primary">Save changes</button>
                   </div>
                 </div>
               </div>
             </div>
           `;
         }
   
   }
   customElements.define('first-element', FirstElement);
   ```

   ### **¿Qué es `createRenderRoot()` en Lit?**

   En **Lit**, el método `createRenderRoot()` se utiliza para definir dónde se renderiza el DOM del componente. Por defecto, Lit usa un **Shadow DOM** para encapsular el estilo y la funcionalidad de sus componentes, lo que significa que todo el contenido renderizado por Lit se incluye dentro del **`shadowRoot`**.

### Agregando Tailwind CSS

1. Intalar Tailwind  con el comando **npm install tailwindcss @tailwindcss/vite**

   ![](https://i.ibb.co/M25Lmhw/image.png)

2. Cree en la raíz del proyecto el archivo **vite.config.js**

   > Si se usa como lenguaje nativo JavaScript se debe agregar la extensión .js. Si se desea usar TypeScript dirígete a la documentación oficial de vite para realizar la configuración con TypeScript

   Copie y peque el siguiente codigo en el archivo creado

   ```javascript
   import { defineConfig } from 'vite';
   
   export default defineConfig({
     plugins: [],
   });
   ```

   ```less
   import {defineConfig, loadEnv} from "vite";
   import tailwindcss from '@tailwindcss/vite'
   
   export default defineConfig(({mode}) => {
     const env = loadEnv(mode, process.cwd());
     return {
       plugins: [
           tailwindcss(),
       ],
       build: {
           outDir: "./wwwroot/app/",
           sourcemap: true,
       },
       server: {
           host: env.VITE_HOST,
           port: env.VITE_PORT,
       },
     };
   });
   ```

   ### 📦 Uso de Variables de Entorno en Vite

   En los proyectos desarrollados con Vite, es posible definir y utilizar variables de entorno para gestionar configuraciones sensibles o que cambian según el entorno (desarrollo, producción, staging, etc.).

   ------

   ### 📝 1. Creación de archivos `.env`

   El desarrollador puede crear uno o más archivos de entorno según la necesidad del proyecto. Los más comunes son:

   - `.env`: configuración general por defecto.
   - `.env.local`: configuración local, que no debe ser subida al repositorio.
   - `.env.development`: configuraciones específicas para el entorno de desarrollo.
   - `.env.production`: configuraciones específicas para producción.
   - `.env.[modo]`: Vite permite modos personalizados (por ejemplo, `staging`).

   ------

   ### 🔐 2. Definición de variables

   Dentro del archivo `.env`, las variables deben comenzar obligatoriamente con el prefijo `VITE_` para que Vite las incluya en el código fuente.

   ```less
   VITE_API_URL=https://api.miapp.com
   VITE_FEATURE_FLAG=true
   ```

   ------

   ### 🧠 3. Acceso a las variables desde el código

   Las variables definidas pueden ser accedidas desde el código fuente mediante `import.meta.env`. Ejemplo:

   ```less
   const apiUrl = import.meta.env.VITE_API_URL;
   const featureEnabled = import.meta.env.VITE_FEATURE_FLAG === 'true';
   
   console.log(apiUrl, featureEnabled);
   ```

   ------

   ### 🚀 4. Ejecución por modo

   Cuando se desea utilizar un archivo de entorno específico, se puede invocar Vite indicando el modo:

   ```less
   vite --mode production
   vite --mode development
   vite --mode staging
   ```

   Vite tomará automáticamente el archivo `.env.production`, `.env.development` o el correspondiente al modo especificado.

   ------

   ### 💡 Caso práctico

   Si el archivo `.env.development` contiene:

   ```less
   VITE_API_URL=http://localhost:3000
   ```

   Y el archivo `.env.production` contiene:

   ```less
   VITE_API_URL=https://api.miapp.com
   ```

   Entonces, dependiendo del modo con el que se ejecute el proyecto (`npm run dev` o `vite build --mode production`), se usará la variable correspondiente.

   .env

   ```less
   VITE_HOST="localhost"
   VITE_PORT=8082
   ```

   

3. Agregue las importacion de tailwindcss en el archivo de configuración de vite.

   ![](https://i.ibb.co/HHZ3tX6/image.png)

   ```javascript
   import { defineConfig } from 'vite';
   import tailwindcss from '@tailwindcss/vite'
   export default defineConfig({
     plugins: [
       tailwindcss(),
     ],
   });
   ```

   4. En el archivo css principal agregue la importación de tailwindcss @import "tailwindcss";

      ![](https://i.ibb.co/0Gsv4GP/image.png)

      

### Ocultando elementos

```javascript
import {LitElement, html, css} from 'lit';

export class FirstElement extends LitElement {
  static properties = {
    _listItems: {state: true},
    hideCompleted: {},
  };
  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;

  constructor() {
    super();
    this._listItems = [
      {text: 'Make to-do list', completed: true},
      {text: 'Complete Lit tutorial', completed: false},
    ];
    this.hideCompleted = false;
  }

  render() {
  const items = this.hideCompleted
  ? this._listItems.filter((item) => !item.completed)
  : this._listItems;
    const todos = html`
      <ul>
        ${items.map(
          (item) => html`
            <li
                class=${item.completed ? 'completed' : ''}
                @click=${() => this.toggleCompleted(item)}>
              ${item.text}
            </li>`
        )}
      </ul>
    `;
    const caughtUpMessage = html`
        <p>
        ¡Estás al día!
        </p>
    `;
    const todosOrMessage = items.length > 0
      ? todos
      : caughtUpMessage;
    return html`
      <h2>To Do</h2>
      ${todosOrMessage}

      <input id="newitem" aria-label="New item">
      <button @click=${this.addToDo}>Add</button>
      <br>
      <label>
        <input type="checkbox"
          @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}>
        Hide completed
      </label>


    `;
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  setHideCompleted(e) {
    this.hideCompleted = e.target.checked;
  }

  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
  }

  addToDo() {
    this._listItems = [
      ...this._listItems,
      {text: this.input.value, completed: false},
    ];
    this.input.value = '';
  }

}
customElements.define('first-element', FirstElement);
```

> this._listItems = [  ...this._listItems, // Copia las tareas existentes.  {text: this.input.value, completed: false}, // Añade una nueva tarea. ];
>
> #### **Paso a paso:**
>
> 1. **`this._listItems`**:
>
>    - Es la propiedad que contiene la lista actual de tareas (un array de objetos).
>    - Cada tarea tiene dos propiedades:
>      - **`text`**: El texto de la tarea.
>      - **`completed`**: Indica si la tarea está completada (`true` o `false`).
>
> 2. **`...this._listItems`**:
>
>    - El operador **spread (`...`)** copia todos los elementos actuales de `_listItems` y los agrega al nuevo array.
>    - Esto asegura que las tareas existentes no se pierdan.
>
> 3. **`{text: this.input.value, completed: false}`**:
>
>    - Crea un nuevo objeto que representa la tarea que se está añadiendo.
>
>    - `text: this.input.value`
>
>      :
>
>      - Toma el valor del campo de entrada (`input`) como el texto de la nueva tarea.
>
>    - `completed: false`
>
>      :
>
>      - Indica que la nueva tarea aún no está completada.
>
> 4. **Asignación a `this._listItems`**:
>
>    - El nuevo array con las tareas existentes y la nueva tarea se asigna de nuevo a `this._listItems`.
>    - Esto desencadena una reactividad, porque `_listItems` está marcado como **estado reactivo** (`state: true`), lo que hace que Lit vuelva a renderizar el componente.

> El **estado reactivo** es un concepto clave en frameworks como **Lit**, **React** y otros, que se refiere a la capacidad de un sistema para **actualizar automáticamente la interfaz de usuario (UI)** cuando los datos (el estado) cambian.

## Slots

Los **slots** son parte de la especificación de **Web Components**, y Lit los utiliza para permitir que el contenido proporcionado desde fuera de un componente sea renderizado en lugares específicos dentro de la plantilla del componente.

------

### **¿Qué es un slot?**

Un **slot** es un espacio reservado en un componente para insertar contenido dinámico proporcionado por un elemento padre o consumidor del componente. Esto permite que el componente sea más flexible y reutilizable, ya que puede recibir diferentes contenidos según su uso.

Se define con la etiqueta `<slot>` en la plantilla del componente.

------

### **Ejemplo básico de slot en Lit**

```javascript
import { LitElement, html } from 'lit';

class MySlotComponent extends LitElement {
  render() {
    return html`
      <div>
        <h2>Componente con Slot</h2>
        <slot></slot> <!-- Espacio reservado para contenido externo -->
      </div>
    `;
  }
}

customElements.define('my-slot-component', MySlotComponent);
```

#### **Uso del componente:**

```html
<my-slot-component>
  <p>Este contenido será insertado en el slot.</p>
</my-slot-component>
```

- El contenido proporcionado entre las etiquetas `<my-slot-component>` será renderizado dentro del `<slot>` del componente.

- Resultado en el DOM:

  ```html
  <div>
    <h2>Componente con Slot</h2>
    <p>Este contenido será insertado en el slot.</p>
  </div>
  ```

------

### **Tipos de slots**

1. **Slot predeterminado**:
   - Si solo usas `<slot></slot>`, todo el contenido externo se inserta ahí.
   - Es el ejemplo anterior.
2. **Slot con nombre**:
   - Puedes definir **slots nombrados** para insertar contenido en lugares específicos.
   - Los consumidores deben usar el atributo `slot` para especificar dónde se debe insertar el contenido.

#### Ejemplo de slots nombrados:

```javascript
import { LitElement, html } from 'lit';

class NamedSlotsComponent extends LitElement {
  render() {
    return html`
      <header>
        <slot name="header">Encabezado predeterminado</slot>
      </header>
      <main>
        <slot>Contenido predeterminado</slot>
      </main>
      <footer>
        <slot name="footer">Pie de página predeterminado</slot>
      </footer>
    `;
  }
}

customElements.define('named-slots-component', NamedSlotsComponent);
```

#### **Uso del componente con slots nombrados:**

```html
<named-slots-component>
  <h1 slot="header">Mi Encabezado</h1>
  <p>Este es el contenido principal.</p>
  <small slot="footer">Mi Pie de Página</small>
</named-slots-component>
```

- Resultado en el DOM:

  ```html
  <header>
    <h1>Mi Encabezado</h1>
  </header>
  <main>
    <p>Este es el contenido principal.</p>
  </main>
  <footer>
    <small>Mi Pie de Página</small>
  </footer>
  ```

------

### **Slot con contenido predeterminado**

Si el consumidor no proporciona contenido para un **slot**, puedes definir contenido predeterminado en la plantilla del componente.

#### Ejemplo:

```javascript
import { LitElement, html } from 'lit';

class DefaultSlotComponent extends LitElement {
  render() {
    return html`
      <div>
        <slot>Este es el contenido predeterminado si no se proporciona nada.</slot>
      </div>
    `;
  }
}

customElements.define('default-slot-component', DefaultSlotComponent);
```

#### **Uso del componente:**

```
<default-slot-component></default-slot-component>
```

- Resultado:

  ```
  <div>
    Este es el contenido predeterminado si no se proporciona nada.
  </div>
  ```

Si el consumidor proporciona contenido:

```
<default-slot-component>
  <p>Contenido proporcionado por el usuario.</p>
</default-slot-component>
```

- Resultado:

  ```
  <div>
    <p>Contenido proporcionado por el usuario.</p>
  </div>
  ```

------

### **Estilizar contenido de slots**

Los elementos que se renderizan dentro de un `<slot>` **no son parte del Shadow DOM del componente**, pero puedes usar **CSS** en el componente para estilizar su contenido.

#### Ejemplo con estilos:

```javascript
import { LitElement, html, css } from 'lit';

class StyledSlotComponent extends LitElement {
  static styles = css`
    ::slotted(*) {
      color: blue; /* Aplica estilos a todo el contenido del slot */
      font-weight: bold;
    }
    ::slotted(p) {
      font-size: 18px; /* Estiliza específicamente etiquetas <p> */
    }
  `;

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('styled-slot-component', StyledSlotComponent);
```

#### **Uso:**

```html
<styled-slot-component>
  <p>Este es un párrafo dentro del slot.</p>
  <span>Este es un texto dentro de un span.</span>
</styled-slot-component>
```

- El párrafo será azul, negrita, y tendrá un tamaño de fuente de 18px.
- El `<span>` será azul y en negrita, pero no tendrá el tamaño de fuente específico.

------

### **Ventajas del slotting**

1. **Reutilización de componentes**:
   - Puedes crear componentes genéricos que permitan personalizar su contenido según el contexto.
2. **Separación de responsabilidades**:
   - El componente controla la estructura y los estilos, mientras que el contenido puede ser definido por el consumidor.
3. **Flexibilidad con contenido dinámico**:
   - Puedes usar **slots** para manejar diferentes estructuras de contenido, incluso en entornos más complejos.

------

### **Resumen**

- **Slots** permiten insertar contenido dinámico en componentes de Lit.
- Tipos:
  - **Slot predeterminado**: `<slot></slot>`.
  - **Slot con nombre**: `<slot name="nombre"></slot>`.
- Puedes definir **contenido predeterminado** si no se proporciona nada.
- Los estilos de los slots se controlan con el pseudo-elemento `::slotted`.

## Recursos adicionales

https://github.com/trainingLeader/examples-app.git

# Fetch

`fetch` es una API nativa en JavaScript que permite realizar solicitudes HTTP. Es una alternativa moderna a `XMLHttpRequest`, con una sintaxis basada en promesas que es más fácil de usar y legible.

## **Características principales:**

1. Soporte para operaciones asíncronas mediante promesas.
2. Proporciona un objeto `Response` que encapsula los detalles de la respuesta HTTP.
3. Permite personalizar solicitudes HTTP con opciones como método, encabezados y cuerpo.

## Métodos HTTP

1. **GET**

   - **Propósito:** Solicitar un recurso del servidor.

   - Características:

     - Es un método **idempotente** (puede repetirse sin cambiar el estado del recurso).
     - No tiene cuerpo en la solicitud.

   - Ejemplo:

      Obtener una lista de usuarios.

     ```javascript
     fetch("https://jsonplaceholder.typicode.com/users")
         .then(response => response.json())
         .then(data => console.log(data))
         .catch(error => console.error("Error:", error));
     ```

2. **POST**

   - **Propósito:** Enviar datos al servidor para crear un recurso.

   - Características:

     - Tiene un cuerpo en la solicitud que contiene los datos enviados.
     - No es idempotente (una misma solicitud puede crear múltiples recursos si se repite).

   - Ejemplo:

      Crear un nuevo usuario.

     ```javascript
     fetch("https://jsonplaceholder.typicode.com/users", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ name: "Juan Pérez", email: "juan@example.com" }),
     })
         .then(response => response.json())
         .then(data => console.log("Usuario creado:", data))
         .catch(error => console.error("Error:", error));
     ```

3. **PUT**

   - **Propósito:** Actualizar un recurso existente o reemplazarlo por completo.

   - Características:

     - Tiene un cuerpo en la solicitud con los datos para actualizar.
     - Es idempotente.

   - Ejemplo:

      Actualizar la información de un usuario.

     ```javascript
     fetch("https://jsonplaceholder.typicode.com/users/1", {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ name: "Juan Actualizado", email: "juan.updated@example.com" }),
     })
         .then(response => response.json())
         .then(data => console.log("Usuario actualizado:", data))
         .catch(error => console.error("Error:", error));
     ```

4. **PATCH**

   - **Propósito:** Modificar parcialmente un recurso existente.

   - Características:

     - Similar a `PUT`, pero solo afecta los campos especificados en el cuerpo de la solicitud.
     - Es idempotente.

   - Ejemplo:

      Actualizar solo el correo electrónico de un usuario.

     ```javascript
     fetch("https://jsonplaceholder.typicode.com/users/1", {
         method: "PATCH",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ email: "nuevo.correo@example.com" }),
     })
         .then(response => response.json())
         .then(data => console.log("Usuario parcialmente actualizado:", data))
         .catch(error => console.error("Error:", error));
     ```

5. **DELETE**

   - **Propósito:** Eliminar un recurso del servidor.

   - Características:

     - Es idempotente.
     - Normalmente no tiene un cuerpo en la solicitud.

   - Ejemplo:

      Eliminar un usuario.

     ```javascript
     fetch("https://jsonplaceholder.typicode.com/users/1", {
         method: "DELETE",
     })
         .then(response => {
             if (response.ok) console.log("Usuario eliminado");
         })
         .catch(error => console.error("Error:", error));
     ```

6. **HEAD**

   - **Propósito:** Solicitar los encabezados de un recurso sin obtener el cuerpo.

   - Características:

     - Es útil para verificar si un recurso existe o determinar su tipo y tamaño.
     - Es idempotente.

   - Ejemplo:

      Verificar la existencia de un recurso.

     ```javascript
     fetch("https://jsonplaceholder.typicode.com/users/1", {
         method: "HEAD",
     })
         .then(response => console.log("Encabezados:", response.headers))
         .catch(error => console.error("Error:", error));
     ```

7. **OPTIONS**

   - **Propósito:** Solicitar información sobre los métodos permitidos para un recurso.

   - Características:

     - No tiene cuerpo en la solicitud.
     - Es idempotente.

   - Ejemplo:

      Ver los métodos permitidos.

     ```javascript
     fetch("https://jsonplaceholder.typicode.com/users", {
         method: "OPTIONS",
     })
         .then(response => console.log("Métodos permitidos:", response.headers.get("Allow")))
         .catch(error => console.error("Error:", error));
     ```

------

### **Resumen**

| Método      | Propósito                         | Idempotente | Cuerpo en Solicitud |
| ----------- | --------------------------------- | ----------- | ------------------- |
| **GET**     | Obtener datos                     | Sí          | No                  |
| **POST**    | Crear un recurso                  | No          | Sí                  |
| **PUT**     | Actualizar/reemplazar un recurso  | Sí          | Sí                  |
| **PATCH**   | Modificar parcialmente un recurso | Sí          | Sí                  |
| **DELETE**  | Eliminar un recurso               | Sí          | No                  |
| **HEAD**    | Obtener encabezados de un recurso | Sí          | No                  |
| **OPTIONS** | Obtener métodos permitidos        | Sí          | No                  |

>  **idempotente** se utiliza en programación, especialmente en el contexto de operaciones HTTP, para describir una operación que produce el mismo resultado si se realiza una vez o varias veces consecutivas. Es decir, una operación idempotente no tiene efectos secundarios adicionales si se repite.

## Json Server

Una de las responsabilidades más comunes de los desarrolladores front-end es gestionar los datos en sus aplicaciones front-end. Es necesario poder recuperar datos de una API, manipularlos y luego renderizarlos en la pantalla en una aplicación web moderna para las interacciones con el usuario.

La comunicación eficiente entre el front-end y el back-end es crucial para crear aplicaciones fluidas y receptivas.

Ahora imagina un escenario en el que estás trabajando con un desarrollador back-end en un proyecto y estás esperando el endpoint de la API para conectar con tu front-end. Existe una excelente herramienta que los desarrolladores front-end pueden utilizar para crear una API simulada o de prueba durante la fase de desarrollo. Esta herramienta se llama **"JSON Server"**.

En este artículo, aprenderás cómo utilizar servidores JSON para el almacenamiento de datos en tus aplicaciones React. Descubrirás sus características y beneficios, así como una implementación práctica en un proyecto front-end.

La aplicación permitirá a los usuarios ver una lista de usuarios y sus detalles. Los datos de los usuarios se crearán utilizando JSON Server en un archivo JSON dentro de la aplicación front-end.

### ¿Qué es JSON Server?

JSON es un acrónimo de **JavaScript Object Notation** (Notación de Objetos de JavaScript). **JSON Server** es una herramienta ligera y fácil de usar basada en Node.js que simula una API RESTful utilizando un archivo JSON como fuente de datos. Con JSON Server, los desarrolladores front-end pueden crear APIs simuladas sin necesidad de escribir código complejo del lado del servidor, o cuando una API de backend aún no está lista.

Esta API simulada envía solicitudes a un endpoint proporcionado y responde a solicitudes HTTP, lo que la convierte en una solución ideal para el desarrollo rápido de aplicaciones front-end. Además, JSON Server permite a los desarrolladores realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) y guarda los datos en archivos JSON.

JSON utiliza un formato de **pares clave-valor** y se escribe de la siguiente manera:

```json
{
  "clave": "valor",
  "clave2": "valor2"
}
```

```json
{  
  "name": "Jane",   
  "age": 30,   
  "gender": "Female"
}
```



### **Ventajas de JSON Server**

1. **Simplicidad**: Configuración y uso rápidos para simular una API funcional.
2. **Flexibilidad**: Compatible con operaciones CRUD completas.
3. **Persistencia Local**: Los datos se almacenan directamente en archivos JSON, lo que permite mantener cambios mientras se desarrolla.
4. **Ideal para Front-End**: Permite a los desarrolladores avanzar en sus aplicaciones incluso si el backend aún no está terminado.

### Tipos de datos

#### **1. Cadenas (Strings)**

- Representan texto.
- Deben ir entre comillas dobles `"` (no simples `'`).
- Ejemplo: `"nombre": "Juan"`

#### **2. Números (Numbers)**

- Pueden ser enteros o decimales.
- No incluyen prefijos como `0x` (para hexadecimal).
- Ejemplo: `"edad": 25`, `"peso": 68.5`

#### **3. Valores booleanos (Booleans)**

- Representan `true` o `false`.
- No están entre comillas.
- Ejemplo: `"activo": true`, `"enLinea": false`

#### **4. Nulos (Null)**

- Representan una ausencia de valor.
- Se escriben como `null` (en minúsculas).
- Ejemplo: `"apellido": null`

#### **5. Arreglos (Arrays)**

- Conjuntos ordenados de valores.
- Se definen entre corchetes `[ ]`.
- Pueden contener cualquier combinación de los tipos admitidos por JSON (incluyendo objetos anidados).
- Ejemplo: `"colores": ["rojo", "verde", "azul"]`

#### **6. Objetos (Objects)**

- Colecciones de pares clave-valor.
- Se definen entre llaves `{ }`.
- Las claves siempre son cadenas entre comillas dobles `"`; los valores pueden ser cualquier tipo válido de JSON.

### **Resumen de tipos permitidos**

1. **Cadena**: `"Hola mundo"`
2. **Número**: `42`, `3.14`, `-7`
3. **Booleano**: `true`, `false`
4. **Nulo**: `null`
5. **Arreglo**: `[1, "dos", true, null]`
6. **Objeto**: `{"clave": "valor"}`

> **Nota**:
>
> - JSON no soporta funciones, fechas u otros tipos específicos de lenguajes como `undefined`.
> - Aunque JSON no tiene un tipo de fecha nativo, es común representar fechas como cadenas en formato ISO 8601: `"fecha": "2025-01-16T12:34:56Z"`.

### Características de JSON Server

A continuación, algunas de las características de JSON Server:

- Es fácil y rápido de configurar. También es amigable para desarrolladores front-end y para desarrolladores back-end principiantes.
- Admite métodos HTTP comunes como GET, POST, PUT y DELETE, al igual que lo haría un servidor API real.
- Con JSON Server, puedes realizar operaciones de Crear, Leer, Actualizar y Eliminar (CRUD) en los datos para construir una aplicación interactiva.
- JSON Server ofrece a los desarrolladores la capacidad de crear rutas personalizadas para manejar escenarios más complejos.

### Beneficios de Usar JSON Server

Estos son algunos de los beneficios de usar JSON Server:

- JSON Server otorga a los desarrolladores front-end la capacidad de crear rápidamente prototipos funcionales de API que se pueden probar y modificar mientras se espera que el servidor back-end esté listo.
- Los desarrolladores front-end pueden usar JSON Server para simular diferentes escenarios y casos de error durante las pruebas, mejorando así su aplicación.

### Cómo Configurar JSON Server en una Aplicación

Para configurar JSON Server, necesitas tener **Node.js** y **npm** instalados en tu sistema, ya que ambos son requisitos previos para este proceso.

Sigue estos pasos para configurar y usar JSON Server en tu aplicación front-end:

------

### **Paso #1 - Instalar JSON Server**

Para instalar JSON Server en tu aplicación, navega a tu directorio de proyecto desde la terminal o el símbolo del sistema y escribe el siguiente comando:

```less
npm install -g json-server
```

Esto instalará JSON Server de forma global en tu sistema. Si prefieres instalarlo localmente solo para un proyecto en particular, usa este comando:

```less
npm i json-server
```

------

### **Paso #2 - Crear un Archivo JSON**

Crea un archivo JSON en el directorio de tu proyecto que actuará como la fuente de datos. Este archivo debe tener la extensión `.json`.

Por ejemplo, si deseas que el archivo se llame `db`, entonces debes crear un archivo llamado `db.json`.

------

### **Paso #3 - Crear Datos**

Define tus datos dentro del archivo JSON. Los datos pueden ser un arreglo de objetos o un objeto con objetos anidados. Cada objeto representa una entidad de datos y debe tener un **id único**.

#### **Ejemplo de Archivo `db.json`:**

```less
{
  "users": [
    { "id": 1, "name": "Juan Pérez", "email": "juan@example.com" },
    { "id": 2, "name": "Ana López", "email": "ana@example.com" }
  ],
  "posts": [
    { "id": 1, "title": "Introducción a JSON Server", "content": "Este es un post de ejemplo." }
  ]
}
```

------

### **Paso #4 - Iniciar el Servidor**

Inicia el JSON Server escribiendo este comando en tu terminal:

```less
json-server --watch db.json
```

De forma predeterminada, el servidor se ejecutará en **http://localhost:3000**. Si deseas cambiar el puerto, puedes usar la bandera `--port` al iniciar el servidor.

#### **Ejemplo para Cambiar el Puerto:**

```less
json-server --watch db.json --port 8000
```

En este caso, el servidor estará disponible en **http://localhost:8000**.

------

### **RESTful Endpoints Generados Automáticamente**

JSON Server generará automáticamente endpoints RESTful basados en los datos que definiste en tu archivo JSON. Por ejemplo:

- `GET /users`: Devuelve la lista de usuarios.
- `POST /users`: Crea un nuevo usuario.
- `PUT /users/1`: Actualiza el usuario con `id: 1`.
- `DELETE /users/1`: Elimina el usuario con `id: 1`.

## Taller

Ejercicio práctico usando **JSON Server** para simular una API que maneje información de productos y categorías:

### **Objetivo del ejercicio**

1. Crear una base de datos JSON con información sobre productos y categorías.
2. Configurar JSON Server para exponer los datos como una API REST.
3. Realizar operaciones básicas sobre los datos (GET, POST, PUT, DELETE).

### **Pasos del ejercicio**

#### **1. Instalar JSON Server**

Si no tienes JSON Server instalado, ejecútalo con:

```less
npm install -g json-server
```

![](https://i.ibb.co/Xkcq4F4/image.png)

#### **2. Crear el archivo `db.json`**

Crea un archivo `db.json` con la siguiente estructura inicial:

```json
{
  "categories": [
    {
      "id": 1,
      "name": "Electronics"
    },
    {
      "id": 2,
      "name": "Clothing"
    },
    {
      "id": 3,
      "name": "Books"
    }
  ],
  "products": [
    {
      "id": 1,
      "name": "Smartphone",
      "price": 699.99,
      "categoryId": 1
    },
    {
      "id": 2,
      "name": "Laptop",
      "price": 999.99,
      "categoryId": 1
    },
    {
      "id": 3,
      "name": "T-shirt",
      "price": 19.99,
      "categoryId": 2
    },
    {
      "id": 4,
      "name": "Novel",
      "price": 14.99,
      "categoryId": 3
    }
  ]
}
```

#### **3. Iniciar JSON Server**

Ejecuta el siguiente comando para iniciar el servidor:

```less
json-server --watch db.json
```

Esto expondrá las siguientes rutas:

- **Categorías**: `http://localhost:3000/categories`
- **Productos**: `http://localhost:3000/products`

------

### **Operaciones sugeridas**

#### **a. Obtener todas las categorías**

```less
GET http://localhost:3000/categories
```

#### **b. Obtener todos los productos**

```less
GET http://localhost:3000/products
```

#### **c. Obtener productos por categoría**

Filtrar los productos por `categoryId`:

```less
GET http://localhost:3000/products?categoryId=1
```

#### **d. Agregar un nuevo producto**

Envía un `POST` para agregar un producto:

```less
POST http://localhost:3000/products
Content-Type: application/json

{
  "name": "Headphones",
  "price": 59.99,
  "categoryId": 1
}
```

#### **e. Actualizar una categoría**

Envía un `PUT` para modificar una categoría:

```less
PUT http://localhost:3000/categories/2
Content-Type: application/json

{
  "name": "Apparel"
}
```

#### **f. Eliminar un producto**

Envía un `DELETE` para eliminar un producto:

```less
DELETE http://localhost:3000/products/4
```

## **Uso Básico de `fetch`**

#### **Ejemplo 1: Solicitud GET básica**

```
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Procesa el cuerpo de la respuesta como JSON
    })
    .then(data => console.log("Datos obtenidos:", data))
    .catch(error => console.error("Error en la solicitud:", error));
```

------

## **Configuración de la Solicitud**

Puede configurar métodos, encabezados y el cuerpo de las solicitudes usando un objeto de opciones como segundo argumento de `fetch`.

### **Ejemplo 2: Enviando datos con POST**

```
const nuevoPost = {
    title: "Mi nuevo post",
    body: "Este es el contenido del post.",
    userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoPost), // Convierte el objeto a JSON
})
    .then(response => response.json())
    .then(data => console.log("Post creado:", data))
    .catch(error => console.error("Error al crear el post:", error));
```



# Recursos Variados

https://flexilla-docs.vercel.app/

https://yoopta.dev/

