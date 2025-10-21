# ¿Qué es JavaScript?

Cualquier página web de Internet está construida, como mínimo, con HTML (un lenguaje de marcas) y CSS (un lenguaje de estilos). El primero de ellos permite construir todo el marcado de la página (contenido e información) mediante etiquetas HTML y dotar de semántica a la información mediante la naturaleza de dichas etiquetas. Posteriormente, el segundo de ellos permite darle estilo a la página y construir una interfaz visual más agradable para el usuario.

 

Sin embargo, si se utiliza exclusivamente HTML y CSS en una página, limita considerablemente. Si bien es cierto que con estos lenguajes se realiza un abanico de cosas, hay otras que serían totalmente imposibles, o al menos, mucho más fáciles de realizar si tienen un lenguaje de programación a disposición. Y en este punto es donde aparece JavaScript.



﻿﻿﻿﻿💡﻿﻿﻿﻿ La separación bien marcada de estos dos pilares permite que, si en algún momento necesitamos modificar la información (o el diseño) de la página, no tengamos también que lidiar con modificaciones en el otro.﻿﻿﻿💡﻿﻿﻿ 



JavaScript es un lenguaje de programación, o lo que es lo mismo, un mecanismo con el que se indica al navegador qué tareas debe realizar, en qué orden y cuántas veces (por ejemplo).



Muchas de las tareas que se realizan con HTML y CSS se podrían realizar con JavaScript. De hecho, es muy probable que al principio parezca que es mucho más complicado y que, por lo tanto, no merezca la pena. Sin embargo, con el tiempo JavaScript ofrece una mayor flexibilidad y un abanico de posibilidades más grande, que si se implementan correctamente , pueden ahorrar bastante tiempo.



Para comprender, un ejemplo muy sencillo sería el siguiente:



```
<div class="item"> 
<p>Número: <span class="numero">1</span></p> 
<p>Número: <span class="numero">2</span></p> 
<p>Número: <span class="numero">3</span></p> 
<p>Número: <span class="numero">4</span></p> 
<p>Número: <span class="numero">5</span></p> 
</div>
```



Crear una lista de números desde el 1 hasta el 500. Realizar esto con HTML sería muy tedioso, ya que tendrá que copiar y pegar esas filas varias veces hasta llegar a 500. Sin embargo, mediante JavaScript, se le indica al navegador que escriba el primer párrafo <p>, que luego escriba el mismo, pero sumándole uno al número. Y que esto lo repita hasta llegar a 500. De esta forma y con este sencillo ejemplo, con HTML habría que escribir 500 líneas, mientras que con JavaScript no serían más de 10 líneas.



**Dificultad**



Aunque JavaScript es ideal en muchos casos, es mucho más complicado aprender JavaScript (o un lenguaje de programación de propósito general) que aprender HTML o CSS, los cuales son mucho más sencillos de comprender (o al menos, su base y fundamentos).



- **Aprender JavaScript** Para aprender JavaScript se debe conocer el lenguaje JavaScript, pero no se hará si no hay un conocimiento básico de programación. Se puede aprender a programar con JavaScript, pero es recomendable tener una serie de fundamentos básicos de programación para empezar.
- **Aprender a programar**Para aprender a programar se debe tener en cuenta como «trabaja una máquina». Programar no es más que decirle a una máquina qué cosas debe hacer y cómo debe hacerlas. Eso significa que no se puede pasar por alto nada, o la máquina lo hará mal.
- **Darle órdenes a una máquina**Para darle órdenes a una máquina se debe tener claro que esas órdenes son correctas y harán lo que se supone que deben hacer. Si se le indica a una máquina los pasos para resolver un problema, pero dichos pasos son erróneos, la máquina también hará mal el trabajo



- Se puede **copiar un programa** en segundos, pero eso no significa entenderlo.
- Se puede **comprender un programa** en minutos, pero eso no significa poder crearlo.
- Se puede **crear un programa** en horas, pero eso no significa poder programar.
- Se puede **aprender a programar** en semanas, pero eso no significa que no se cometan errores.
- Se puede **aprender a programar bien y sin demasiados errores** en meses.
- Pero **dominar la programación** es una tarea que requiere años.



﻿﻿﻿🚨﻿﻿﻿Para esto, es necesario tener presente que aprender a programar es una tarea que no ocurre de un día para otro. Requiere tiempo, esfuerzo, acostumbrarse a cambiar la forma de pensar y tener una práctica constante.



﻿﻿﻿💡﻿﻿﻿ Si nunca has programado hasta ahora, te aconsejo que antes de continuar, te leas los fundamentos y bases de programación. Teniéndolos claros, te resultará mucho más fácil entender luego JavaScript. ﻿﻿💡﻿﻿



# La consola

Para acceder a la consola JavaScript del navegador, pulsar `CTRL+SHIFT+I` sobre la pestaña de la página web en cuestión, esto llevará al Inspector de elementos o simplemente presionando la tecla `F12` en el navegador. Este inspector es un panel de control general donde se pueden ver varios aspectos de la página en la que se encuentra: su etiquetado **HTML**, sus estilos **CSS**, etc.

Concretamente, en el inspector de elementos, en la pestaña **Console**, se encuentra la consola JavaScript de la página.



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720561711369591223e577bb5/attachment-1.png.png)



En esta consola, se escriben funciones o sentencias de JavaScript que están actuando en la página que se encuentra en la pestaña actual del navegador. De esta forma se observan los resultados en la consola cuando se realizan diferentes acciones. Acá algunas bases.



﻿﻿﻿﻿💡﻿﻿﻿﻿La clave es utilizar el código con la función que más se adapte a la situación en cada caso (errores graves con console.error(), errores leves con console.warn(), etc.).



## **Aplicar varios datos**



En el ejemplo anterior, solo hemos aportado un dato por cada línea (un texto o una operación numérica), pero console.log() y sus funciones hermanas permiten añadir varios datos en una misma línea, separándolo por comas.

De momento puede parecer algo inútil, pero cuando se comienza a trabajar con variables y objetos, será necesario.



﻿﻿﻿﻿💡﻿﻿﻿﻿También se puede utilizar directamente el atajo de teclado CTRL+SHIFT+J, que en algunos navegadores nos lleva directamente a la consola.



El clásico primer ejemplo, cuando se comienza a programar, es crear un programa que muestre por pantalla un texto, generalmente el texto **«Hola Mundo»**. También se pueden realizar, por ejemplo, operaciones numéricas. En la consola JavaScript se pueden realizar de forma muy sencilla.



```
console.log("Hola Mundo"); console.log(2 + 2);
```



En la primera línea, se evidencia que al pulsar enter se muestra el texto «Hola Mundo». En la segunda línea, sin embargo, procesa la operación y devuelve 4. Para mostrar estos textos en la consola JavaScript se utiliza la función console.log, pero existen varias.



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720561711369591223e577bb5/attachment-2.png.png)



﻿﻿﻿﻿💡﻿﻿﻿﻿Se observa que cada "Enter" en la consola imprime undefined, ya que al utilizar la consola del navegador, la palabra console.log() se utiliza automáticamente por defecto. Esto puede resultar un poco confuso al principio, pero más adelante se irá explicando cómo funciona JavaScript.



## **Tipos de Console**



- console.log()  Muestra la información proporcionada en la consola Javascript.
- console.info() Equivalente al anterior. Se utiliza para mensajes de información.
- console.warn() Muestra información de advertencia. Aparece en amarillo.
- console.error() Muestra información de error. Aparece en rojo.
- console.clear() Limpia la consola. Equivalente a pulsar CTRL+L o escribir clear().



```
console.log("¡Hola a todos! Observen este número: ", 5 + 18);
```



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720561711369591223e577bb5/attachment-3.png.png)



### **Aplicar estilos en la consola**

Aunque no es práctico y sólo se trata de puro divertimento, se pueden aplicar estilos CSS en la consola JavaScript haciendo uso de `%c`, que se reemplazará por los estilos indicados:

```
console.log("%c¡Hello World!", "background:linear-gradient(#000, #555); color:#fff; padding: 5px 10px;");
```

![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720561711369591223e577bb5/attachment-4.png.png)



﻿﻿﻿﻿💡﻿﻿﻿﻿Es importante recalcar que cuando escribimos en la consola podemos obviar el console.log() y escribir directamente la información, pero si queremos mostrar algo por consola desde nuestra página web o aplicación JavaScript, es absolutamente necesario escribir console.log() (o cualquiera de las funciones de su familia) en nuestro código.

## ¿Cómo funciona JavaScript?

El **esquema general** de una página web es un **documento HTML** donde están todas las etiquetas HTML de la página. A lo largo de ese documento, pueden existir **referencias o relaciones** a otros documentos, como archivos CSS o archivos JavaScript.

Por ejemplo, si dentro del documento HTML se encuentra una referencia a un **archivo CSS**, el navegador lo descarga y lo aplica al documento HTML, cambiando su apariencia visual. De la misma forma, si encuentra una referencia a un **archivo JavaScript**, el navegador lo descarga y ejecuta las órdenes o acciones que allí se indican 

### Cómo funciona JavaScript? - Ejecución de JavaScript en línea

﻿﻿﻿﻿﻿﻿﻿﻿💡﻿﻿﻿﻿﻿﻿﻿﻿Se instala una extensión para Visual Studio Code que permite trabajar de manera más eficiente con el navegador y aprovechar al máximo las funcionalidades del editor.



La extensión Live Server es una herramienta popular para desarrolladores web que trabajan con el entorno de desarrollo Visual Studio Code (VSCode). Su función principal es proporcionar un servidor de desarrollo local que permite la vista previa en tiempo real de tus proyectos web mientras trabajas en ellos.

Consideraciones a tener en cuenta.

- No es imprescindible tener activada la función de autoguardado para visualizar los resultados en tiempo real en el navegador. Sin embargo, prescindir de esta característica te liberará de la tarea constante de guardar el archivo manualmente.
- Es importante contar con un archivo `index.html` para que la extensión lo esté monitoreando. Si no es así, Live Server no reconocerá el archivo raíz en el servidor local.
- El archivo `index.html` debe contar con la estructura básica necesaria para constituir una página web.
- Si no se visualizan en tiempo real los resultados, teniendo en cuenta las observaciones anteriores para el servidor local, intenta reiniciarlo. Si aún no se muestran los resultados, revisa el código fuente en busca de errores, ya que el servidor local únicamente visualiza los resultados con errores de sintaxis.



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17205631155189489f0695cec4/attachment-1.png.png)

En este primer y sencillo ejemplo, sólo se tendrá un documento: el archivo HTML. En él, existe una etiqueta <script> que contiene las órdenes o líneas de Javascript que le indican al navegador qué tiene que hacer (en este caso, mostrar un "¡Hola!" en la consola):



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17205631155189489f0695cec4/attachment-2.png.png)



se pulsa clic derecho dentro del archivo index.html y se selecciona la opción Open with Live Server para iniciar el servidor local. Esto redireccionará automáticamente al navegador, donde se podrán visualizar los resultados. Ten en cuenta que en este ejemplo, la función de guardado automático está activada en Visual Studio Code (VSCode), por lo que se podrán ver los cambios reflejados sin necesidad de guardar manualmente el archivo antes de levantar el servidor local. En caso contrario, asegúrate de guardar el archivo antes de iniciar el servidor local.



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17205631155189489f0695cec4/attachment-3.png.png)



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17205631155189489f0695cec4/attachment-4.png.png)



Observa que en la pestaña del navegador aparece una dirección local, http://127.0.0.1:5500/index.html. Esta es la ubicación del servidor en vivo (live server) en el entorno local.

## ¿Cómo funciona JavaScript? - Ejecución de JavaScript desde un archivo exter

Esta otra forma de incluir JavaScript en una página tiene la ventaja de que, en el caso de necesitar incluir el código JavaScript desde varios documentos HTML, no se tendrá que volver a escribir dicho código, sino simplemente referenciar el nombre del mismo archivo JavaScript a incluir en todas las páginas HTML.



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720563666283522a7c90d18e5/attachment-1.png.png)



Para relacionar un documento JavaScript desde una página web, igual que antes, se utiliza la etiqueta <script>, sólo que en este caso, se referencia al archivo JavaScript con un atributo src (source), como se observa en el siguiente ejemplo.



```
<!DOCTYPE html> <html lang="en">
<head> 
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>Document</title> 
<script src="js/main.js"></script>👀👀 
</head> 
<body> 
<p>Ejemplo de texto.</p> 
</body> 
</html>
```



**Js/main.js** 



```
console.log("¡Hola!");
```



Si observas en el ejemplo anterior, la etiqueta `<script>` está situada dentro de la etiqueta `<head>` de la página, es decir, en la cabecera de metadatos. Esto significa que la página web descargará el archivo JavaScript antes de empezar a dibujar el contenido de la página (etiqueta `<body>`).



Es posible que se encuentren ejemplos donde dicha etiqueta esté ubicada en otra parte del documento HTML. Veamos las posibilidades:



- En <head>  ANTES de empezar a dibujar la página. Página aún no dibujada.   
- En <body> DURANTE el dibujado de la página. Dibujada hasta donde está la etiqueta <script>.   
- Antes de </body> DESPUÉS de dibujar la página. Dibujada al 100%.   



El navegador puede descargar un documento JavaScript en cualquier momento de la carga de la página y se necesita saber cuál es el más oportuno para nosotros.



- Si se quiere que un documento JavaScript actúe antes de que se muestre la página, la opción de colocarlo en el `<head>` es la más adecuada.
- Si, por el contrario, se requiere que actúe una vez que se haya terminado de cargar la página, la opción de colocarlo justo antes del `</body>` es la más adecuada. Esta opción es equivalente a usar el atributo defer en la etiqueta `<script>`; sin embargo, esta opción es además compatible con navegadores muy antiguos (IE9 o anteriores) que no soportan defer.



## ECMAScript

ECMAScript es la especificación donde se mencionan todos los detalles de cómo debe funcionar y comportarse JavaScript en un navegador. De esta forma, los diferentes navegadores **(Chrome, Firefox, Opera, Edge, Safari...)** saben como deben desarrollar los motores de JavaScript para que cualquier código o programa funcione exactamente igual, independientemente del navegador que se utilice.

💡 ECMAScript suele venir acompañado de un número que indica la versión o revisión de la que hablamos (algo similar a las versiones de un programa). En cada nueva versión de ECMAScript, se modifican detalles sobre JavaScript y/o se añaden nuevas funcionalidades, manteniendo JavaScript vivo y con novedades que lo hacen un lenguaje de programación moderno y cada vez mejor preparado para utilizar en el día a día.

Teniendo esto en cuenta, se debe saber que los navegadores web intentan cumplir la especificación ECMAScript al máximo nivel, pero no todos ellos lo consiguen. Por lo tanto, pueden existir ciertas discrepancias. Por ejemplo, pueden existir navegadores que cumplan la especificación ECMAScript 6 al 80% y otros que sólo la cumplan al 60%. Esto significa que puede haber características que no funcionen en un navegador específico ***(y en otros sí)\***.

Además, todo esto va cambiando a medida que se van lanzando nuevas versiones de los navegadores web, donde su compatibilidad ECMAScript suele aumentar.

### ECMAScript - Versiones de ECMAScript

A lo largo de los años, JavaScript ha ido sufriendo modificaciones que los navegadores han ido implementando para acomodarse a la última versión de ECMAScript cuanto antes. La lista de versiones de ECMAScript aparecidas hasta el momento son las siguientes, donde encontramos las versiones enmarcadas en lo que podemos considerar el pasado de JavaScript:

- 1JUN/1997 ECMAScript 1997 (ES1) Primera edición

- 2JUN/1998ECMAScript 1998 (ES2)Cambios leves3

- DIC/1999 ECMAScript 1999 (ES3)RegExp, try/catch, etc...4

- AGO/2008 ECMAScript 2008 (ES4)Versión abandonada.5

- DIC/2009 ECMAScript 2009 (ES5)Strict mode, JSON, etc...5.1

- DIC/2011 ECMAScript 2011 (ES5.1)Cambios leves

A partir del año 2015, se marcó un antes y un después en el mundo de JavaScript, estableciendo una serie de cambios que lo transformarían en un lenguaje moderno, partiendo desde la especificación de dicho año, hasta la actualidad:

- JUN/2015 ES2015 Clases, módulos, hashmaps, sets, for of, proxies...

- JUN/2016ES2016 Array includes(), Exponenciación **

- JUN/2017ES2017 Async/awaitJUN/2018ES2018Rest/Spread operator, Promise.finally()...

- JUN/2019ES2019 flat, flatMap, trimStart(), optional error catch...

- JUN/2020ES2020 Dynamic imports, BigInt, Promise.all, Settled

- JUN/2021ES2021 Operador de asignación lógica (*truthy, falsy, Nullish)* .replaceAll(), Métodos de clase privados, g*etters y setters* privados, Promise.any()

- JUN/2022ES2022 Instancias de clase publicas y privadas, Top Level Await, Array.at, Object.hasOwn

- JUN/2023ES2023 Soporte para bloques privados, Mejoras en la gestión de errores, Soporte para el operador pipe, Mejoras en el manejo de objetos, Nueva sintaxis para la declaración de funciones, Mejoras en la sintaxis



En ocasiones, algunos navegadores deciden implementar pequeñas funcionalidades de versiones posteriores de ECMAScript antes que otras, para ir testeando y probando características, por lo que no es raro que algunas características de futuras especificaciones puedan estar implementadas en algunos navegadores.

Una buena forma de conocer en que estado se encuentra un navegador concreto en su especificación de ECMAScript es consultando la [tabla de compatibilidad Kangax](https://kangax.github.io/compat-table/es6/). En dicha tabla, encontramos una columna «Desktop browsers» donde podemos ver el porcentaje de compatibilidad con las diferentes características de determinadas especificaciones de ECMAScript.



💡 Nota que de ECMAScript 6 en adelante, se toma como regla nombrar a las diferentes especificaciones por su año, en lugar de por su número de edición. Aunque en los primeros temas los mencionaremos indiferentemente, ten en cuenta que se recomienda utilizar ECMAScript 2015 en lugar de ECMAScript 6.



## Tipos de datos

Como ya hemos comentado en el apartado de fundamentos de programación, los tipos de datos son la naturaleza del contenido de una variable o constante. Por ejemplo, si tenemos una variable con contenido 44, su tipo de dato es un número. Si tenemos una variable con contenido `"Holi"`, su tipo de dato es texto.

Para empezar, nos centraremos en los números, textos y booleanos, denominados los tipos de datos primitivos. En los siguientes temas veremos más detalles sobre los demás.

En JavaScript disponemos de los siguientes tipos de datos principales:

`**Number**`Valor numérico (enteros, decimales, etc...)

`**BigInt**`Valor numérico grande`**String**`Valor de texto (cadenas de texto, caracteres, etc...)

`**Boolean**`Valor booleano (valores verdadero o falso)

`**undefined**`Valor sin definir (variable sin inicializar)

`**Function**`Función (función guardada en una variable)

`**Symbol**`Símbolo (valor único)`**Object**`Objeto (estructura más compleja)

Para saber qué tipo de dato tiene una variable, debemos observar qué valor le hemos dado. Si es un valor numérico, será de tipo number. Si es un valor de texto, será de tipo string; si es verdadero o falso, será de tipo booleano. Veamos un ejemplo en el que identificaremos qué tipo de dato tiene cada variable:

```
var text = "Hola, me llamo Juanito"; var number = 42; var boolean = true; var notDefined; // undefined
```

Como se puede ver, en este ejemplo, es muy sencillo saber que tipos de datos tienen cada variable.



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720614812247abcce0f7e01ca/attachment-1.png.png)



**¿Qué tipo de dato tiene?**



Se encuentra que muchas veces no resulta tan sencillo saber qué tipo de dato tiene una variable, o simplemente viene oculto porque el valor lo devuelve una función o alguna otra razón similar. Hay varias formas de saber qué tipo de dato tiene una variable en JavaScript:



### **Utilizando typeof()**



Si se tienen dudas, se utiliza la función typeof, que devuelve el tipo de dato de la variable que se le pasa por parámetro. Veamos que nos imprime typeof() sobre las variables del ejemplo anterior:



```
<!DOCTYPE html> 
<html lang="en"> 
<head> 
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>Document</title> 
<script src="js/main.js"></script> 
</head> 
<body> 
<p>Tipo de dato que guardar una variable</p> 
</body> 
</html>
```



```
console.log(typeof text); 
// "String" console.log(typeof number); 
// "Number" console.log(typeof boolean); 
// "Boolean" console.log(typeof notDefined); 
// undefined
```



Resultado del navegador 



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720614812247abcce0f7e01ca/attachment-2.png.png)



﻿﻿﻿﻿💡﻿﻿﻿﻿Como se puede ver, mediante la función typeof se determina qué tipo de dato se esconde en una variable. Observa también que la variable u, al haber sido declarada sin valor, JavaScript le da un tipo de dato especial: undefined (sin definir).



﻿﻿﻿﻿💡﻿﻿﻿﻿La función typeof() no servirá para variables con tipos de datos más complejos, ya que siempre los mostrará como object. Es mejor utilizar [constructor.name](http://constructor.name/).



### **Utilizando** [**constructor.name**](http://constructor.name/)



Más adelante, nos encontramos que en muchos casos, `typeof()` resulta insuficiente porque en tipos de datos más avanzados simplemente nos indica que son objetos. Con [constructor.name](http://constructor.name/) se puede obtener el tipo de constructor que se utiliza, un concepto que veremos más adelante dentro del tema de clases. De momento, si lo necesita, se pueden comprobar así:



```
<!DOCTYPE html> 
<html lang="en"> 
<head> 
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>Document</title> 
<script src="js/main.js"></script> 
</head> 
<body> 
<p>Tipos de datos mediante el Uso de Constructor.name</p> 
</body> 
</html>
```

**Tipos de datos mediante el Uso de Constructor.name**

```
console.log(text.constructor.name);    // String
console.log(number.constructor.name);   // Number
console.log(boolean.constructor.name);  // Boolean
console.log(notDefined.constructor.name); // ERROR, sólo funciona con variables definidas
```



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720614812247abcce0f7e01ca/attachment-3.png.png)



﻿﻿﻿﻿💡﻿﻿﻿﻿ Sólo funciona en variables definidas (no undefined) y sólo en o superiores.

## Variables

En JavaScript, las variables se utilizan para almacenar y manipular datos. Hay tres palabras clave para declarar variables en JavaScript: var, let y const. Cada una tiene un alcance y un comportamiento ligeramente diferente.

### Variables - Declaración de variables tipo ‘var’

Es la palabra clave que se utilizaba comúnmente para declarar variables en JavaScript antes de la introducción de let y const. Una de las características distintivas de var es que no tiene un alcance de bloque, lo que significa que una variable declarada con var es accesible desde cualquier lugar dentro de la función en la que se declara o desde cualquier lugar en el ámbito global. Cono se observa en el siguiente ejemplo. 



```
<!DOCTYPE html> 
<html lang="en"> 
<head> 
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>Document</title> 
<script src="js/main.js"></script> 
</head> 
<body> 
<p>Ejemplo de var</p> 
</body> 
</html>
```



```
function example() { 
if (true) { var x = 10; } 
console.log(x); // 10 
} 
example(); 
console.log(x); // 10
```



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17206156545592a013249cfde6/attachment-1.png.png)



El código tiene una función `**example()**` que declara la variable `**x**` dentro de un bloque `**if**`. Sin embargo, como la variable está declarada con `**var**`, su ámbito se extiende a toda la función, permitiendo que sea accesible fuera del bloque `**if**`. Por lo tanto, el primer `**console.log(x)**` dentro de la función imprime el valor de `**x**` (10).



Sin embargo, al intentar imprimir `**x**` fuera de la función, se produce un error de `**Uncaught ReferenceError: x is not defined**`. Esto se debe a que las variables declaradas con `**var**` tienen ámbito de función y no están disponibles fuera de la función en la que fueron declaradas.



Por esta razón, se recomienda evitar el uso de `**var**` en favor de `**let**` y `**const**`, que introdujeron el alcance de bloque en JavaScript y ayudan a prevenir problemas relacionados con la falta de alcance de bloque que solía presentar.



Sin embargo, al reemplazar `**var**` con `**let**`, aún se produce un error, pero en este caso, ya no se verá el valor de `**x**` (10).

### Variables - Declaración de variables tipo ‘let’

En JavaScript, let es una palabra clave que se utiliza para declarar variables locales en un bloque de código, como una función o un bloque if. A diferencia de var, las variables declaradas con let tienen un ámbito de bloque, lo que significa que solo son visibles y accesibles dentro del bloque en el que se declaran.



```
<!DOCTYPE html> 
<html lang="en"> 
<head> 
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>Document</title> 
<script src="js/main.js"></script> 
</head> 
<body> 
<p>Ejemplo de let</p> 
</body> 
</html>
```

Ejemplo Let

```
function ejemplo() { 
let x = 10; // Declaración de variable local con let 

if (true) { let y = 20; // Otra variable local con let en un bloque if 

console.log(x); // x es accesible aquí 
console.log(y); // y también es accesible aquí 
} 
console.log(x); // x sigue siendo accesible aquí // 
console.log(y); // Esto provocaría un error, ya que y no es accesible fuera del bloque if 

} 

ejemplo();
```



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/172061598767282e1a288c76dc/attachment-1.png.png)





En este ejemplo, `**x**` es una variable local declarada con `**let**` en la función `**ejemplo()**`, por lo que es accesible en toda la función. `**y**` es una variable local declarada con `**let**` dentro del bloque `**if**`, por lo que solo es accesible dentro de ese bloque.

El uso de `**let**` en lugar de `**var**` es preferible en muchas situaciones porque ayuda a evitar problemas de ámbito y hace que el código sea más predecible. Siempre es una buena práctica limitar el ámbito de las variables tanto como sea posible para evitar colisiones de nombres y otros errores.

A continuación, se presenta un ejemplo que ilustra cómo se pueden declarar diversos tipos de datos utilizando la palabra clave let. Algunos de ellos ya han sido introducidos previamente, y otros serán explorados en sesiones futuras, tales como objetos, funciones de flecha y listas.

```
// Declaración de una variable numérica 
let numero = 42; 
// Declaración de una variable decimal 
let decimal = 3.14;
// Declaración de una variable de cadena de texto (string) 
let mensaje = "Hola, mundo"; 
// Declaración de variables booleanas 
let esVerdadero = true; 
let esFalso = false; 
// Declaración de una variable de arreglo (array) 
let numeros = [1, 2, 3, 4, 5]; 
let colores = ["rojo", "verde", "azul"]; 
// Declaración de una variable de objeto (object) 
let persona = { nombre: "Juan", edad: 30, esEstudiante: true }; 
// Declaración de una variable de función (function) 
let sumar = function(a, b) { 
return a + b; 
}; 
// Declaración de variables nulas y no definidas 
let valorNulo = null; 
let valorNoDefinido = undefined; 
// Declaración de una variable de símbolo (symbol) 
let simbolo = Symbol("miSimbolo");
```

### Variables - Declaración de variables tipo ‘const’

En JavaScript, `**const**` es una palabra clave utilizada para declarar una variable que se comporta como una constante. Esto significa que una vez que se le asigna un valor, no se puede cambiar posteriormente en el código. La declaración de una variable con `**const**` garantiza que su valor permanezca inmutable a lo largo del programa.

- **index.html**



```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="js/main.js"></script>
</head>
<body>
    <p>Ejemplo de const</p>
</body>
</html>
```

- **js/main.js**

```
const pi = 3.14159;
pi = 3.14; // Generará un error, ya que "pi" es una constante y no puede ser reasignada.
```



⚠️ Gracias al progreso de ECMAScript, ahora contamos con la constante matemática `**pi**` incorporada en la biblioteca nativa de JavaScript. Se eligió el número pi como ejemplo para ilustrar el uso de la `**const**` en cuestión `**console.log(Math.\*PI\*);**`



En este caso, hemos declarado una variable llamada pi y le hemos asignado el valor de 3.14159. No podemos cambiar el valor de pi en ningún otro lugar del programa. Si intentamos hacerlo, generará un error.



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17206167039153e1144863ba2a/attachment-1.png.png)



El uso de `**const**` es útil cuando deseas asegurarte de que un valor no cambie accidentalmente en tu código, lo que puede ayudar a prevenir errores y hacer que tu código sea más predecible. Es especialmente útil para declarar constantes matemáticas, valores que deben mantenerse constantes en una aplicación o referencias a objetos inmutables.



A continuación, se presenta un ejemplo que ilustra cómo se pueden declarar diversos tipos de datos utilizando la palabra clave `**const**`. Algunos de ellos ya han sido introducidos previamente, y otros serán explorados en sesiones futuras, tales como objetos, funciones de flecha y listas.



- **index.html**



```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="js/main.js"></script>
</head>
<body>
    <p>Con const se puede declarar varios tipos de datos</p>
</body>
</html>
```



- **js/main.js**



```
// Números
const pi = 3.14159;
const edad = 25;

// Cadenas de texto (Strings)
const nombre = "Juan";
const saludo = "Hola, mundo";

// Valores booleanos
const esVerdadero = true;
const esFalso = false;

// Arreglos (Arrays)
const numeros = [1, 2, 3, 4, 5];
const colores = ["rojo", "verde", "azul"];

// Objetos (Objects)
const persona = {
  nombre: "Maria",
  edad: 30,
  esEstudiante: false
};

// Símbolos (Symbols)
const simbolo = Symbol("miSimbolo");

// Null y Undefined
const valorNulo = null;
const valorNoDefinido = undefined;

// Declaración de una función como constante
const sumar = function(a, b) {
  return a + b;
};

// Mostrar algunos valores en la consola para verificar
console.log(pi);
console.log(nombre);
console.log(esVerdadero);
console.log(numeros);
console.log(persona);
console.log(simbolo);
console.log(valorNulo);
console.log(valorNoDefinido);
```



 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17206167039153e1144863ba2a/attachment-2.png.png)



 ⚠️ El uso del modificador `**const**` en las colecciones de datos, ya sea en array u object, no tiene efecto; simplemente utiliza el identificador como el nombre de la variable, impidiendo su modificación a lo largo del flujo del código. Esta limitación no afecta a la manipulación de datos dentro de estas colecciones.

### Variables - Alcance de variables (Scope)

El "**scope"** o ámbito de una variable en programación se refiere a la región del código en la que esa variable es reconocida y puede ser utilizada. En otras palabras, el ámbito define dónde una variable puede ser accesible y manipulada.



### Alcance en variables Let

Se ilustra un error común que ocurre al intentar declarar dos veces la misma variable con `**let**` en el mismo ámbito

 Ejemplo 1 alcance en variables Let

```
let x = "John Doe";
let x = 0;
```

🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720617061422e162bca302164/attachment-1.png.png)



Este ejemplo demuestra cómo el ámbito de una variable declarada con `let` está limitado al bloque en el que se declara. Aquí está el desglose:

Este otro ejemplo utiliza la declaración de una variable con `let` dentro de un bloque de código delimitado por llaves `{}`. Aquí está el desglose:

Ejemplo 2 alcance en variables Let

```
{
  let x = 2;
}
// x no puede ser utilizado aquí
```

1. Se crea un bloque de código utilizando las llaves `{}`. Este bloque puede ser una función, un bucle, o, en este caso, simplemente un bloque de código independiente.
2. Dentro del bloque, se declara una variable `x` con `let` y se le asigna el valor 2.
3. Después de cerrar el bloque con la llave de cierre `}`, intentar acceder a la variable `x` fuera del bloque generaría un error. Esto se debe a que `let` tiene un ámbito de bloque, lo que significa que la variable `x` solo es válida dentro de ese bloque y no fuera de él.

 Ejemplo 3 alcance en variables Let

```
let x = 10;
// Aquí x es 10

{
  let x = 2;
  // Aquí x es 2
}

// Aquí x es nuevamente 10
```



1. En la primera línea, se declara una variable `x` y se le asigna el valor de 10. Este es el ámbito global de la variable.
2. Dentro del bloque delimitado por llaves `{}`, se declara otra variable `x` con un valor de 2. Este `x` es diferente y tiene un ámbito limitado a ese bloque. No afecta al `x` definido fuera del bloque.
3. Después de cerrar el bloque, la variable `x` fuera del bloque sigue siendo 10. El `x` dentro del bloque y el `x` fuera del bloque son variables diferentes con ámbitos separados.

Ejemplo 4 alcance en variables Let



```
{
  let x = 2;
  console.log(x); // Esto funciona, ya que x está dentro del bloque
}

// console.log(x); // Esto generaría un error, ya que x no es accesible fuera del bloque
```



En resumen, el bloque `{}` crea un ámbito para la variable `x`, y cualquier intento de usar `x` fuera de ese bloque resultaría en un error, ya que `x` no es visible en ese ámbito externo.

Ejemplo 5 alcance en variables Let

```
let x = 10;
console.log(x); // x es 10 (ámbito global)

{
  let x = 2;
  console.log(x); // x es 2 (ámbito del bloque)
}

console.log(x); // x es nuevamente 10 (ámbito global)
```



En resumen, la variable `x` dentro del bloque tiene un ámbito local limitado a ese bloque, y no afecta a la variable `x` con el mismo nombre fuera del bloque. Esto destaca el concepto de ámbito de bloque en JavaScript.

Se demuestra cómo el ámbito de una variable declarada con `let` está limitado al bloque en el que se declara. Aquí está el desglose:

 Ejemplo 6 alcance en variables Let

```
let x = 10;
console.log(x); // x es 10 (ámbito global)

{
  let x = 2;
  console.log(x); // x es 2 (ámbito del bloque)
}

console.log(x); // x es nuevamente 10 (ámbito global)
```



En resumen, la variable `x` dentro del bloque tiene un ámbito local limitado a ese bloque, y no afecta a la variable `x` con el mismo nombre fuera del bloque. Esto destaca el concepto de ámbito de bloque en JavaScript.

 Ejemplo 7 alcance en variables Let

```
let x = 10;
// Aquí x es 10

{
  let x = 2;
  // Aquí x es 2
}

// Aquí x es nuevamente 10
```



1. En la primera línea, se declara una variable `x` y se le asigna el valor de 10. Este es el ámbito global de la variable.
2. Dentro del bloque delimitado por llaves `{}`, se declara otra variable `x` con un valor de 2. Este `x` es diferente y tiene un ámbito limitado a ese bloque. No afecta al `x` definido fuera del bloque.
3. Después de cerrar el bloque, la variable `x` fuera del bloque sigue siendo 10. El `x` dentro del bloque y el `x` fuera del bloque son variables diferentes con ámbitos separados.



### Alcance en const

Este ejemplo demuestra cómo el ámbito de una variable declarada con `const` también está limitado al bloque en el que se declara, pero con una diferencia clave: una vez que se asigna un valor a una variable `const`, no se puede reasignar. Aquí está el desglose:

 Ejemplo 1 alcance en const

```
const x = 10;
// Aquí x es 10

{
  const x = 2;
  // Aquí x es 2
}

// Aquí x sigue siendo 10, ya que la reasignación no está permitida en const
```

1. En la primera línea, se declara una variable `x` con `const` y se le asigna el valor de 10. Este es el ámbito global de la variable.
2. Dentro del bloque delimitado por llaves `{}`, se declara otra variable `x` con `const` y un valor de 2. Al igual que con `let`, esta variable `x` dentro del bloque tiene un ámbito limitado a ese bloque. Sin embargo, a diferencia de `let`, `const` no permite la reasignación.
3. Después de cerrar el bloque, la variable `x` fuera del bloque sigue siendo 10. La variable `x` dentro del bloque y la variable `x` fuera del bloque son variables diferentes con ámbitos separados.

 Ejemplo 2 alcance en const

```
const x = 10;
console.log(x); // x es 10 (ámbito global)

{
  const x = 2;
  console.log(x); // x es 2 (ámbito del bloque)
}

console.log(x); // x sigue siendo 10 (ámbito global)
```

En resumen, la variable `x` dentro del bloque tiene un ámbito local limitado a ese bloque, pero además, la reasignación no está permitida debido al uso de `const`. Esto destaca la inmutabilidad de las variables declaradas con `const`.

## Operadores

Los operadores en JavaScript son elementos fundamentales que permiten realizar diversas operaciones en variables y valores. Estos símbolos especiales son esenciales para la manipulación y procesamiento de datos en el lenguaje de programación JavaScript. Los operadores pueden clasificarse en diferentes categorías según la naturaleza de las operaciones que realizan.

Ejemplo del operador de asignación y suma



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17206256053629920840d6dfae/attachment-1.png.png)





### Operadores aritméticos

🖼️ Ejemplo del operador aritméticos adición



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720625739667b5a4931d64207/attachment-1.png.png)





Los operadores aritméticos en JavaScript se utilizan para realizar operaciones matemáticas en variables y valores. Aquí están los operadores aritméticos básicos:



- Adición (`+`)



​	Suma



```
let suma = 5 + 3; // resultado: 8
console.log(suma);
```



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720625739667b5a4931d64207/attachment-2.png.png)



- Sustracción (`-`)



```
let resta = 5 - 3; // resultado: 2
console.log(resta);
```



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720625739667b5a4931d64207/attachment-3.png.png)





- Multiplicación (`*`)



```
let multiplicacion = 5 * 3; // resultado: 15
console.log(multiplicacion);
```



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720625739667b5a4931d64207/attachment-4.png.png)



- División (`/`)



```
let division = 6 / 2; // resultado: 3
console.log(division);
```

 

🖼️ Resultado del navegador

​		![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720625739667b5a4931d64207/attachment-5.png.png)



- Exponenciación (`**`)



```
let exponente = 2 ** 3; // resultado: 8 (2 elevado a la 3)
console.log(exponente );
```



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720625739667b5a4931d64207/attachment-6.png.png)



- Módulo o Resto (`%`)



```
let modulo = 10 % 3; // resultado: 1 (resto de la división de 10 entre 3)
console.log(modulo);
```



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720625739667b5a4931d64207/attachment-7.png.png)



- Decremento (`--`)



```
let decremento = 3;
decremento--; // ahora decremento es 2
console.log(decremento);
```



 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720625739667b5a4931d64207/attachment-8.png.png)



- Incremento (`++`)



```
let incremento = 5;
incremento++; // ahora incremento es 6
console.log(incremento);
```

 

🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720625739667b5a4931d64207/attachment-9.png.png)



Tomado de : [F](https://www.gyata.ai/es/javascript/javascript-operators#:~:text=Permiten a los desarrolladores realizar operaciones con variables,manipular datos y tomar decisiones en tu código.))[uente](https://www.gyata.ai/es/javascript/javascript-operators#:~:text=Permiten a los desarrolladores realizar operaciones con variables,manipular datos y tomar decisiones en tu código.))

### Operadores de Asignación

```
// Assign the value 5 to x 
let x = 5; // Assign the value 2 to y 
let y = 2; // Assign the value x + y to z: 
let z = x + y;
```



A continuación, se presentan ejemplos que ilustran cómo cada operador de asignación realiza una operación específica y asigna el resultado a la variable correspondiente.



El Operador de Asignación ( =) asigna un valor a una variable:



```
               Operador | Abreviado | Equivalente a:  
                    =   |   x = y   |     x = y  
                    +=  |   x += y  |   x = x + y
                    -=  |   x-= y   |   x = x - y
                    *=  |   x *= y  |   x = x * y
                    /=  |   x /= y  |   x = x / y
                    %=  |   x %= y  |   x = x % y
                    **= |   x **= y |   x = x ** y
```



- Asignación Simple (`=`)



```
let x = 5; // x es ahora igual a 5
console.log(x);
```



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720627466332e2e3d4759b2ae/attachment-1.png.png)



- Adición(`+=`)



```
let a = 10;
a += 3; // Equivalente a: a = a + 3; // a ahora es igual a 13
console.log(a);
```



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720627466332e2e3d4759b2ae/attachment-2.png.png)



- Sustracción (`=`)



```
let b = 7;
b -= 4; // Equivalente a: b = b - 4; // b ahora es igual a 3
console.log(b);
```

 

🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720627466332e2e3d4759b2ae/attachment-3.png.png)



- Multiplicación(`*=`)



```
let c = 5;
c *= 2; // Equivalente a: c = c * 2; // c ahora es igual a 10
console.log(c);
```



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720627466332e2e3d4759b2ae/attachment-4.png.png)



- División (`/=`)



```
let d = 8;
d /= 2; // Equivalente a: d = d / 2; // d ahora es igual a 4
console.log(d);
```

 

🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720627466332e2e3d4759b2ae/attachment-5.png.png)



- Exponenciación (`*=`)



```
let f = 2;
f **= 3; // Equivalente a: f = f ** 3; // f ahora es igual a 8 (2 elevado a la 3)
console.log(f);
```



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720627466332e2e3d4759b2ae/attachment-6.png.png)



- Módulo o Resto (`%=`)



```
let e = 9;
e %= 4; // Equivalente a: e = e % 4; // e ahora es igual a 1 (resto de la división por 4)
console.log(e);
```



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720627466332e2e3d4759b2ae/attachment-7.png.png)



### Operadores de Desplazamiento con Asignación

Estos operadores de desplazamiento con asignación son útiles cuando se necesita realizar operaciones de desplazamiento de bits y asignar el resultado a la misma variable. A continuación, se proporcionan ejemplos que muestran cómo cada operador de desplazamiento con asignación realiza la operación de desplazamiento correspondiente y asigna el resultado a la misma variable.



```
Operador |  Ejemplo  | Equivalente a
  <<=    |  x <<= y  |  x = x << y   
  >>=    |  x >>= y  |  x = x >> y 
  >>>=   |  x >>>= y |  x = x >>> y
```



- Desplazamiento a la Izquierda con Asignación (`<<=`)



```
let x = 5;
x <<= 2; // Equivalente a: x = x << 2; // x ahora es igual a 20 (5 desplazado a la izquierda por 2 bits)
console.log(x);
```

 

🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720629374152c05610a70441c/attachment-1.png.png)



- Desplazamiento a la Derecha con Signo con Asignación (>>=)



```
let y = 16;
y >>= 2; // Equivalente a: y = y >> 2; // y ahora es igual a 4 (16 desplazado a la derecha por 2 bits con signo)
console.log(y);
```



 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720629374152c05610a70441c/attachment-2.png.png)



- Desplazamiento a la Derecha sin Signo con Asignación (>>>=)



```
let z = -16;
z >>>= 2; // Equivalente a: z = z >>> 2; // z ahora es igual a 1073741820 (representación sin signo de -16 desplazado a la derecha por 2 bits)
console.log(z);
```



🖼️ Resultado del navegador

 ![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720629374152c05610a70441c/attachment-3.png.png)



### Operadores de Bits con Asignació

Los operadores de bits con asignación son herramientas poderosas en la programación que permiten realizar operaciones de bits de manera eficiente y compacta. Estos operadores combinan la realización de operaciones a nivel de bits con la asignación del resultado a la misma variable. Esta capacidad de combinar la operación y la asignación en un solo paso puede mejorar la legibilidad del código y reducir la redundancia.



Estos operadores son especialmente útiles cuando se trabaja con manipulación de datos a nivel de bits, como en situaciones donde se necesitan realizar ajustes o configuraciones específicas en un conjunto de bits dentro de una variable.



```
Operador |   Ejemplo   | Equivalente a 
   &=    |    x &= y   |   x = x & y
   ^=    |    x ^= y   |   x = x ^ y
   |=    |    x |= y   |   x = x | y
```



- AND Bitwise con Asignación (`&=`)



```
let x = 5;
x &= 3; // Equivalente a: x = x & 3; // x ahora es igual a 1 (5 AND 3 en representación binaria)
console.log(x);
```



 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/172062992591183166969c31b4/attachment-1.png.png)



- XOR Bitwise con Asignació (`^=`)



```
let y = 10;
y ^= 6; // Equivalente a: y = y ^ 6; // y ahora es igual a 12 (10 XOR 6 en representación binaria)
console.log(y);
```



 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/172062992591183166969c31b4/attachment-2.png.png)



- OR Bitwise con Asignación (`|=`)



```
let z = 3;
z |= 5; // Equivalente a: z = z | 5; // z ahora es igual a 7 (3 OR 5 en representación binaria)
console.log(z);
```



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/172062992591183166969c31b4/attachment-3.png.png)

### Operadores Lógicos de Asignación



Operadores Lógicos de Asignación

Los operadores de asignación de combinación lógica son beneficiosos cuando se necesita asignar un valor a una variable según condiciones lógicas específicas. A continuación, se presentan ejemplos que demuestran cómo cada operador lógico de asignación lleva a cabo la operación correspondiente y asigna el resultado a la misma variable. 	



```
Operador  |  Ejemplo  |   Equivalente a
   &&=    |  x &&= y  |  x = x && (x = y)
   ||=    |  x ||= y  |  x = x || (x = y)
   ??=    |  x ??= y  |  x = x ?? (x = y)
```



- AND Lógico con Asignación (`&&=`)



```
let x = true;
let y = false;
x &&= y; // Equivalente a: x = x && (x = y); // x ahora es igual a false
console.log(x);
```



 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720630999839b43595a21b919/attachment-1.png.png)



- OR Lógico con Asignación (`||=`)



```
let a = false;
let b = true;
a ||= b; // Equivalente a: a = a || (a = b); // a ahora es igual a true
console.log(a);
```



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720630999839b43595a21b919/attachment-2.png.png)



- Nullish Coalescing con Asignación (`??=`)



```
let p = null;
let q = 42;
p ??= q; // Equivalente a: p = p ?? (p = q); // p ahora es igual a 42
console.log(p);
```



 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720630999839b43595a21b919/attachment-3.png.png)

### Operadores de comparación

Los operadores de comparación se emplean en afirmaciones lógicas para evaluar la igualdad o diferencia entre variables o valores.

Dado que `x` tiene el valor de 1, a continuación, se muestran los operadores de comparación:

- Operador igual a (`==`)

```
let x = 1;
let y = x == 8;
console.log(y);
```

-  La variable `y` es `false` porque la comparación `x == 8` evalúa si el valor de `x` es igual a 8, pero en realidad x tiene el valor 1 



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720631517766012b7603a1de4/attachment-1.png.png)

- Operador igual valor y tipo de dato (`===`)

```
let x = 1;
let y = x === "5"
console.log(y);
```

- 🗣️ Si el valor de la variable `x` (1) es estrictamente igual al string "5", resultando en `false` 



 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720631517766012b7603a1de4/attachment-2.png.png)

- Operador no igual (`!=`)



```
let x = 1;
let y = x != 8;
console.log(y);
```

- 🗣️ El código asigna el valor `true` a la variable `y` debido a la evaluación de la expresión `x != 8`, donde `x` es igual a `1`. 

 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720631517766012b7603a1de4/attachment-3.png.png)

- Operador no igual en valor o tipo de dato (`!==`)

```
let x = 1;
let y = x !== 8;
console.log(y);
```

- 🗣️ El código establece que la variable `y` es verdadera porque la variable `x` no es igual a 8, y luego imprime `true` 



 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720631517766012b7603a1de4/attachment-4.png.png)

- Operador mayor que (`>`)

```
let x = 1;
let y = x > 8;
console.log(y);
```

- 🗣️ El código asigna `false` a la variable `y` ya que el valor de `x` (1) no es mayor que 8, y luego imprime `false` 

🖼️ Resultado del navegador

![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720631517766012b7603a1de4/attachment-5.png.png)

- Operador menor que (`<`)

```
let x = 1;
let y = x < 8;
console.log(y);
```

- 🗣️ El código evalúa si el valor de la variable `x` es menor que 8 y asigna el resultado (`true` en este caso) a la variable `y`, luego imprime `true` 

 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720631517766012b7603a1de4/attachment-6.png.png)



- Operador mayor o igual que (`>=`)



```
let x = 1;
let y = x >= 8;
console.log(y);
```



- 🗣️ La variable booleana `y` toma el valor `false` porque la expresión `x >= 8` es falsa con el valor actual de `x` (1). 🗣️



 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720631517766012b7603a1de4/attachment-7.png.png)



- Operador menor o igual que (`<=`)



```
let x = 1;
let y = x <= 8;
console.log(y);
```



- 🗣️ El código evalúa si el valor de la variable `x` es menor o igual a 8 y asigna el resultado a la variable `y`, luego imprime el valor de `y` (true en este caso) 



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720631517766012b7603a1de4/attachment-8.png.png)

### Operadores lógicos

Los operadores lógicos se emplean para establecer la lógica entre variables o valores. Dado que x es 6 e y es 3, A continuación, se  detallan los operadores lógicos:



1. El operador `&&` en JavaScript devuelve `true` si ambos operandos son verdaderos y `false` si al menos uno de ellos es `false` .
2. El operador `||` (OR lógico) devuelve `true` si al menos uno de los operandos es `true`; de lo contrario, devuelve `false`.
3. El operador `!` (not) se utiliza para negar una expresión booleana, convirtiendo `true` en `false` y `false` en `true`.



- Operador lógico AND (`&&`)



```
let x = 6;
let y = 3;
console.log(x < 10 && y > 1);
```



- 🗣️ La expresión `console.log(x < 10 && y > 1);` imprime `true` en la consola, ya que ambas condiciones, `x < 10` y `y > 1`, son `true`. 



 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17206375166378ae755b6ed1ae/attachment-1.png.png)



- Operador lógico OR (`||`)



```
let x = 6;
let y = 3;
console.log(x == 5 || y == 5);
```



- 🗣️ La expresión `console.log(x == 5 || y == 5);` evalúa si al menos una de las variables `x` o `y` es igual a 5, imprimiendo `false` en la consola debido a que ambas son diferentes de 5. 



 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17206375166378ae755b6ed1ae/attachment-2.png.png)



- Operador lógico NOT (`!`)



```
let x = 6;
let y = 3;
console.log(x == 5 || y == 5);
```



- 🗣️ La expresión `console.log(x == 5 || y == 5);` evalúa si al menos una de las variables `x` o `y` es igual a 5, imprimiendo `false` en la consola debido a que ambas son diferentes de 5. 



 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17206375166378ae755b6ed1ae/attachment-3.png.png)



Tomado de : [F](https://www.gyata.ai/es/javascript/javascript-operators#:~:text=Permiten a los desarrolladores realizar operaciones con variables,manipular datos y tomar decisiones en tu código.))[uente](https://www.gyata.ai/es/javascript/javascript-operators#:~:text=Permiten a los desarrolladores realizar operaciones con variables,manipular datos y tomar decisiones en tu código.))

## Números enteros y decimales

Los objetos Number tienen una serie de propiedades y métodos que se pueden usar para trabajar con números.

`Number` es un tipo de datos primitivo que representa un número. Los valores de tipo `Number` pueden ser enteros, decimales o `NaN` (Not a Number).

Hay varias formas de crear valores de tipo Number en JavaScript:

Usando el operador `+`: El operador `+` se puede usar para convertir cualquier valor a un número.

Usando la función `Number()`: La función `Number()` se puede usar para convertir explícitamente un valor a un número.

Usando el constructor `Number()`: El constructor `Number()` se puede usar para crear un nuevo objeto Number.

- `Number`

- Conversiones de tipo number

```
// Usar el operador `+`
const numero1 = +true; // 1
// Usar la función `Number()`
const numero2 = Number("10"); // 1
// Usar el constructor `Number()`
const numero3 = new Number(10); // Number {10}

console.log(numero1);
console.log(numero2);
console.log(numero3);
```

 🖼️ Resultado del navegador

![img](https://khc-sistema-v2.s3.amazonaws.com/editor/172071476465004c590f9338a1/attachment-1.png.png)

⚠️ Existen diversas propiedades y métodos aplicables a los tipos de datos `Number`. Esta sección, se centrará en algunos ejemplos seleccionados para ilustrar su uso.

- `double` y `float`

-  Conversiones de tipo números decimales

```
// Usar el operador `+`
const numero1 = +true; // 1

// Usar la función `Number()`
const numero2 = Number("10.5"); // 10.5

// Usar el constructor `Number()`
const numero3 = new Number(10.5); // Number {10.5}

console.log(numero1);
console.log(numero2)
console.log(numero3)
```

 🖼️ Resultado del navegador

![img](https://khc-sistema-v2.s3.amazonaws.com/editor/172071476465004c590f9338a1/attachment-2.png.png)

🚨 En JavaScript, tanto `double` como `float` no son tipos de datos distintos; ambos se consideran como el tipo de dato `Number`. JavaScript utiliza el estándar IEEE 754 para representar números de punto flotante de doble precisión, y el tipo `Number` es el único tipo numérico en JavaScript que incluye tanto enteros como números de punto flotante.

## Números NaN

- Operaciones problemáticas y resultados `NaN`

```
console.log(numero1 = 0 / 0); // Dividiendo un número por cero

console.log(Number("hola")); // Intentando convertir un valor no numérico a un número

console.log(Math.sqrt(-1)) // Intentar calcular la raíz cuadrada de un número negativo produce NaN

let textoNoNumerico = "Hola mundo";
console.log(parseInt(textoNoNumerico)); // Intentar convertir una cadena no numérica a un entero produce NaN

console.log(undefined * 5); // Operaciones con un valor indeterminado (undefined) producen NaN
```



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720715670336ef34954dccff2/attachment-1.png.png)



🖼️ Tomado de: [fuente](https://codedamn-blog.s3.amazonaws.com/wp-content/uploads/2022/08/25135151/js-numbers.png)



El valor `NaN` (Not a Number) es un valor especial que se utiliza para representar números que no son números. El valor `NaN` se puede crear de varias maneras, incluyendo:



- Dividiendo un número por cero.
- Intentando convertir un valor no numérico a un número.
- Operaciones matemáticas no válidas.
- Intento de conversión no numérica.
- Uso de operadores no definidos para ciertos tipos de datos.



- Propiedades



`isNaN` (función global): Esta función se utiliza para determinar si un valor es NaN o puede ser convertido a un número.



-  Validación de no Números con `isNaN`



```
console.log(isNaN(NaN));      // true
console.log(isNaN("Hola"));   // true, ya que "Hola" no se puede convertir a un número
console.log(isNaN(123));      // false, ya que 123 es un número
```



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720715670336ef34954dccff2/attachment-2.png.png)



- Métodos



`Number.isNaN` (método estático de la clase Number): A diferencia de `isNaN`, `Number.isNaN` no realiza la conversión de tipo y solo devuelve `true` si el valor proporcionado es estrictamente igual a NaN.



-  Uso de `Number.isNaN()` para verificar si un valor es `NaN`



```
console.log(Number.isNaN(NaN) );     // true
console.log(Number.isNaN("Hola"));   // false, ya que "Hola" no es NaN
console.log(Number.isNaN(123));      // false, ya que 123 no es NaN
```



🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720715670336ef34954dccff2/attachment-3.png.png)



 🚨 Es preferible utilizar Number.isNaN en lugar de la función global isNaN si se desea evitar la conversión de tipo no deseada. Además, se debe tener en cuenta que, en comparaciones, NaN no es igual a sí mismo, por lo que siempre se deberán usar métodos como Number.isNaN para verificar si un valor es NaN.

## Números infinitos

-  Trabajando con valores Infinity



```
// Infinito positivo
const numero1 = Infinity; // Infinity
// Infinito negativo
const numero2 = -Infinity; // -Infinity

console.log(numero1);
console.log(numero2);
```



Los números infinitos son números que no tienen fin. Hay dos tipos de números infinitos: infinito positivo e infinito negativo:

- Infinito positivo: Se representa con el valor `Infinity`.
- Infinito negativo: Se representa con el valor `Infinity`.

- Conversiones Numéricas



```
console.log(Number("a10")); // Resultado: NaN (Not a Number), ya que no es una representación válida de un número.

console.log(Number("10")); // Resultado: 10, ya que la cadena "10" se puede convertir directamente en el número 10.

console.log(Number(true)); // Resultado: 1, ya que true se convierte en 1 al ser tratado como un número.

console.log(Number("false")); // Resultado: NaN, ya que "false" no es una representación válida de un número.

console.log(Number(false)); // Resultado: 0, ya que false se convierte en 0 al ser tratado como un número.

console.log(Number("50#")); // Resultado: NaN, ya que la cadena contiene caracteres no numéricos (el símbolo #) después del número 50.
```



 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/1720716100630b124640875285/attachment-1.png.png)



 🚨 Empleando la función `Number()`, se puede transformar un tipo de dato a número. Se debe tener en cuenta que, si el dato contiene letras o símbolos, la conversión a número no será posible y, en su lugar, devolverá un `NaN` (Not a Number).

## Cadenas

Una cadena de caracteres o String en JavaScript es una secuencia de caracteres. Las cadenas de caracteres se pueden usar para representar texto, código, datos JSON o cualquier otro tipo de datos que se pueda representar como una secuencia de caracteres.

Las cadenas de caracteres en JavaScript son objetos. Esto significa que tienen propiedades y métodos que se pueden usar para manipularlas. Por ejemplo, la propiedad `length` devuelve la longitud de una cadena de caracteres, y el método `charAt()` devuelve el carácter en una posición específica de una cadena de caracteres. A continuación, algunos métodos para la modificación de cadenas.

- Declaración de cadenas primitivas

```
const string1 = 'Hola mundo!';
const string2 = "Hola mundo!";
```

-  Cadenas de texto con comillas

```
let respuesta1 = "Está bien";
let respuesta2 = "Él se llama 'Johnny'";
let respuesta3 = 'Él se llama "Johnny"';
let respuesta4 = `'Él se llama "Johnny"'`;
```

- Métodos para la manipulación de cadenas

- `length`

Devuelve la longitud de una cadena.

-  Longitud de hola

```
const cadena = 'hola';
console.log(cadena.length); // 4
```

🖼️ Resultado del navegador

![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17207173665604c28f9570a53c/attachment-1.png.png)

1. Se declara una constante llamada `cadena` que contiene la cadena de texto `'hola'`.
2. Luego, se utiliza la propiedad `length` para obtener la longitud o cantidad de caracteres en la cadena almacenada en la variable `cadena`.
3. Finalmente, se imprime en la consola el resultado de la operación anterior utilizando `console.log`. En este caso, la longitud de la cadena `'hola'` es 4, por lo que se imprimirá `4` en la consola.

- `slice()`

Extrae una subcadena de una cadena.

-  Extracción de subcadena

```
const cadena = 'hola';
const subcadena = cadena.slice(1, 4);
console.log(subcadena); // "ola"
```

🖼️ Resultado del navegado

![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17207173665604c28f9570a53c/attachment-2.png.png)



1. `const cadena = 'hola';`: Se declara una variable constante llamada `cadena` que contiene la cadena de texto `hola`.
2. `const subcadena = cadena.slice(1, 4);`: Se declara otra variable constante llamada `subcadena`. Se utiliza el método `slice` en la cadena original (`cadena`) para obtener una porción de la misma. En este caso, se toma desde el índice 1 hasta el índice 3 (no inclusivo), lo que equivale a los caracteres en las posiciones 1 y 2 de la cadena original. Por lo tanto, la `subcadena` resultante es `ola`.
3. `console.log(subcadena); // "ola"`: Se imprime en la consola el valor de la variable "subcadena", que es la porción de la cadena original obtenida con el método `slice`. En este caso, la salida será `ola`.

- `replace()`

Reemplaza todas las ocurrencias de una subcadena en una cadena con otra subcadena.

- Sustitución de caracteres en una cadena de texto

```
const cadena = 'hola';
const nuevaCadena = cadena.replace('l', 'y');
console.log(nuevaCadena); // "hoya"
```

🖼️ Resultado del navegador

![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17207173665604c28f9570a53c/attachment-3.png.png)

1. `const cadena = 'hola';`: Se declara una constante llamada `cadena` y se le asigna el valor de la cadena de texto `hola`.
2. `const nuevaCadena = cadena.replace('l', 'y');`: Se utiliza el método `replace` de JavaScript en la cadena original `cadena`. Este método toma dos argumentos: el primer argumento `('l')` es la subcadena que se desea reemplazar, y el segundo argumento `('y')` es la cadena con la que se quiere reemplazar la subcadena encontrada. En este caso, se está reemplazando la primera aparición de `'l'` con `'y'` en la cadena original.
3. `console.log(nuevaCadena);`: Se imprime en la consola el valor de la nueva cadena resultante después de aplicar el reemplazo. En este ejemplo, la nueva cadena es `hoya`

- `toUpperCase()`

Convierte una cadena a mayúsculas.

- Sustitución de caracteres en una cadena de texto

```
const cadena = 'hola';
const cadenaMayusculas = cadena.toUpperCase();
console.log(cadenaMayusculas); // "HOLA"
```

🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17207173665604c28f9570a53c/attachment-4.png.png)



1. `const cadena = 'hola';`: Se declara una constante llamada `cadena` y se le asigna el valor de la cadena de texto `hola`.
2. `const cadenaMayusculas = cadena.toUpperCase();`: Se crea otra constante llamada `cadenaMayusculas`. La función `toUpperCase()` se aplica a la cadena original (`cadena`), convirtiendo todos los caracteres a mayúsculas. El resultado se asigna a la constante `cadenaMayusculas`.
3. `console.log(cadenaMayusculas);`: Se utiliza la función `console.log()` para imprimir en la consola el valor de la constante `cadenaMayusculas`. En este caso, mostrará `HOLA` porque todos los caracteres de la cadena original `hola` se han convertido a mayúsculas.

- `toLowerCase()`

Convierte una cadena a minúsculas.

-  Sustitución de caracteres en una cadena de texto

```
const cadena = 'HOLA';
const cadenaMinusculas = cadena.toLowerCase();
console.log(cadenaMinusculas); // "hola"
```

🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17207173665604c28f9570a53c/attachment-5.png.png)

1. `const cadena = 'HOLA';`: Se declara una constante llamada `cadena` y se le asigna el valor de la cadena de texto en mayúsculas `HOLA`.
2. `const cadenaMinusculas = cadena.toLowerCase();`: Se declara otra constante llamada `cadenaMinusculas` y se le asigna el valor de la cadena original convertida a minúsculas mediante el método `toLowerCase()`. Este método es parte de las funciones incorporadas en JavaScript y se utiliza para cambiar todas las letras de una cadena a minúsculas.
3. `console.log(cadenaMinusculas); // "hola"`: Finalmente, se utiliza la función `console.log()` para imprimir en la consola el valor de la cadena después de la conversión a minúsculas. En este caso, se imprimirá `hola`, que es la versión en minúsculas de la cadena original `HOLA`.

- `concat()`

Concatena dos o más cadenas.

- Concatenación de cadenas

```
const cadena1 = 'hola ';
const cadena2 = 'mundo';
const cadenaConcatenada = cadena1.concat(cadena2);
console.log(cadenaConcatenada); // "hola mundo"
```

🖼️ Resultado del navegador

![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17207173665604c28f9570a53c/attachment-6.png.png)



1. Se declaran dos constantes utilizando la palabra clave `const`. La primera constante, `cadena1`, se inicializa con la cadena de texto `hola`. La segunda constante, `cadena2`, se inicializa con la cadena de texto `mundo`.
2. Se utiliza el método `concat()` para concatenar las dos cadenas anteriores. El método `concat()` se invoca en la cadena1 (`cadena1`) y recibe como argumento la cadena2 (`cadena2`). La concatenación de cadenas combina ambas cadenas en una nueva cadena sin modificar las originales.
3. El resultado de la concatenación se almacena en una nueva constante llamada `cadenaConcatenada`.
4. Se utiliza `console.log()` para imprimir el contenido de la cadena concatenada en la consola. En este caso, el resultado impreso será `hola mundo`, ya que se concatenó la `cadena1` con la `cadena2`.

- `trim()`

Elimina los espacios en blanco de los extremos de una cadena.

- Concatenación de cadenas

```
const cadena = '  hola mundo  ';
const cadenaSinEspacios = cadena.trim();
console.log(cadenaSinEspacios); // "hola mundo"
```

🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17207173665604c28f9570a53c/attachment-7.png.png)

1. Se declara una variable `cadena` y se le asigna el valor de la cadena de texto `'hola mundo'`. Esta cadena tiene espacios en blanco al principio y al final.
2. Se utiliza el método `trim()` para eliminar los espacios en blanco al principio y al final de la cadena. El resultado se almacena en una nueva variable llamada `cadenaSinEspacios`.
3. Finalmente, se imprime en la consola el valor de `cadenaSinEspacios` mediante `console.log()`. El resultado esperado es `"hola mundo"` sin los espacios en blanco iniciales y finales.

- `charAt()`

Devuelve el carácter en una posición específica de una cadena.

- Obteniendo un carácter específico de una cadena

```
const cadena = 'hola';
const caracter = cadena.charAt(2);
console.log(caracter); // "l"
```

 🖼️ Resultado del navegador

![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17207173665604c28f9570a53c/attachment-8.png.png)

1. `const cadena = 'hola';`: Se declara una constante llamada `cadena` y se le asigna el valor de la cadena de texto `hola`.
2. `const caracter = cadena.charAt(2);`: Se declara otra constante llamada `caracter` y se le asigna el valor del carácter en la posición 2 de la cadena. En JavaScript, las posiciones de los caracteres en una cadena comienzan desde 0. En este caso, el carácter en la posición 2 es la letra 'l'.
3. `console.log(caracter); // "l"`: Imprime en la consola el valor de la constante `caracter`, que en este caso es la letra 'l'.

- Métodos de búsqueda en cadenas

- `indexOf()`

Devuelve la posición de la primera aparición de una subcadena en una cadena, o `-1` si no se encuentra.

-  Ubicación de subcadena, encontrando la posición de 'mundo' en 'hola mundo

```
const cadena = 'hola mundo';
const posicion = cadena.indexOf('mundo');
console.log(posicion); // 5
```

 🖼️ Resultado del navegador

![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17207173665604c28f9570a53c/attachment-9.png.png)

1. `const cadena = 'hola mundo';`: Se declara una constante llamada `cadena` y se le asigna el valor de la cadena de texto `hola mundo`.
2. `const posicion = cadena.indexOf('mundo');`: Se declara otra constante llamada `posicion` y se le asigna el resultado de la función `indexOf()`. Esta función busca la primera aparición de la subcadena `mundo` dentro de la cadena original (`cadena`). En este caso, `mundo` comienza en la posición 5 de la cadena `hola mundo`, por lo que el valor de `posicion` será 5.
3. `console.log(posicion); // 5`: Se imprime en la consola el valor almacenado en la constante `posicion`, que es 5. Esto significa que la subcadena `mundo` comienza en la posición 5 de la cadena original `hola mundo`.

- `search()`

Busca una coincidencia con una expresión regular en una cadena. Devuelve la posición de la primera aparición de la coincidencia, o `-1` si no se encuentra.

-  Búsqueda de subcadena 

```
const cadena = 'hola mundo';
const posicion = cadena.search(/mundo/);
console.log(posicion); // 5
```

🖼️ Resultado del navegador

![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17207173665604c28f9570a53c/attachment-19.png.png)



1. Se define una variable llamada `cadena` que contiene la cadena de texto `hola mundo`.
2. Se utiliza la función `search()` en la cadena para buscar la subcadena `mundo`.
3. El resultado de la búsqueda se almacena en la variable `posicion`.
4. Finalmente, se imprime en la consola el valor de `posicion`, que en este caso sería 5.

- `match()`

Busca una coincidencia con una expresión regular en una cadena. Devuelve un objeto `MatchResult` que contiene información sobre la coincidencia.

-  Buscando 'mundo' en una cadena, resultado de la coincidencia

```
const cadena = 'hola mundo';
const resultado = cadena.match(/mundo/);
console.log(resultado);
// {
//   index: 6,
//   input: 'hola mundo',
//   groups: [],
//   lastIndex: 7
// }
```

1. Se declara una constante llamada `cadena` que contiene la cadena de texto `hola mundo`.
2. Luego, se utiliza el método `match` en la cadena de texto `cadena` con la expresión regular `/mundo/`. Este método busca la coincidencia de la expresión regular en la cadena y devuelve un array con la información acerca de la coincidencia encontrada.
3. Finalmente, el resultado de la búsqueda se almacena en la constante `resultado`, y se imprime en la consola mediante `console.log(resultado)`.

🖼️ Resultado del navegador

![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17207173665604c28f9570a53c/attachment-20.png.png)

- `mundo` es la subcadena encontrada.
- `index` indica la posición en la cadena original donde comienza la coincidencia ('mundo' comienza en la posición 5 de `hola mundo`).
- `input` es la cadena original (`hola mundo`).
- `groups` contiene detalles adicionales sobre grupos de captura (en este caso, es `undefined` porque no hay grupos de captura en la expresión regular proporcionada).

- `includes()`

Devuelve `true` si una cadena incluye otra cadena, y `false` en caso contrario.

- Comprobando la presencia de 'mundo' en la cadena 'hola mundo'

```
const cadena = 'hola mundo';
const resultado = cadena.includes('mundo');
console.log(resultado); // true
```

🖼️ Resultado del navegador

![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17207173665604c28f9570a53c/attachment-21.png.png)

1. Se declara una constante llamada `cadena` y se le asigna el valor de la cadena de texto `hola mundo`.
2. Se utiliza el método `includes` de JavaScript para determinar si la cadena de texto almacenada en la variable `cadena` incluye la subcadena `mundo`. Este método devuelve un valor booleano, `true` si la subcadena está presente y `false` si no lo está.
3. Finalmente, se imprime el resultado en la consola usando `console.log`. En este caso, como la subcadena `mundo` está presente en la cadena `hola mundo`, el valor de `resultado` será `true`, y eso es lo que se imprimirá en la consola.

- `startsWith()`

Devuelve `true` si una cadena comienza con otra cadena, y `false` en caso contrario.

- Verificación de inicio, validando si una cadena comienza con 'hola’

```
const cadena = 'hola mundo';
const resultado = cadena.startsWith('hola');
console.log(resultado); // true
```

 🖼️ Resultado del navegador



![img](https://khc-sistema-v2.s3.amazonaws.com/editor/17207173665604c28f9570a53c/attachment-22.png.png)

1. Se utiliza la palabra clave `const` para declarar una constante llamada `cadena` y se le asigna el valor de la cadena de texto `hola mundo`.
2. Se utiliza el método de cadena `startsWith` en la constante `cadena`. Este método comprueba si la cadena comienza con los caracteres proporcionados como argumento. En este caso, se verifica si la cadena `hola mundo` comienza con la subcadena `hola`.
3. El resultado de la operación anterior se almacena en una nueva constante llamada `resultado`. El valor de `resultado` será `true` si la cadena comienza con 'hola' y `false` en caso contrario.

# Recursos adicionales

| Recurso                                          | Tipo                  | ¿Por qué aporta? / Uso didáctico                             | Encaje con tu temario                               | Nivel          |
| ------------------------------------------------ | --------------------- | ------------------------------------------------------------ | --------------------------------------------------- | -------------- |
| MDN – JavaScript Guide                           | Documentación oficial | Guía general, actualizada y modular. Úsala como “libro de referencia” por capítulos. ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide?utm_source=chatgpt.com)) | Panorama general del lenguaje, repaso por secciones | Inicial–Medio  |
| MDN – Data types & data structures               | Artículo              | Explica tipos primitivos/objetos con matices modernos (BigInt, Symbol). Útil para ejercicios de `typeof` y coerción. ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures?utm_source=chatgpt.com)) | Tipos de datos, `typeof`, coerción                  | Inicial–Medio  |
| MDN – JavaScript Reference                       | Referencia            | Fichas completas por API/sintaxis; ideal para dudas puntuales en ejercicios. ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference?utm_source=chatgpt.com)) | Consulta durante todas las prácticas                | Todos          |
| MDN – Console API                                | Artículo              | Muestra métodos `console.*` con ejemplos prácticos para tu “Diario de consola”. ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/console?utm_source=chatgpt.com)) | Consola y depuración                                | Inicial        |
| MDN – `<script>` (async/defer)                   | Artículo              | Diferencias claras entre `async` y `defer`; base para experimento de tiempos de carga. ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script?utm_source=chatgpt.com)) | Carga de scripts y flujo dev                        | Inicial        |
| “Understanding async & defer” (dev.to)           | Post técnico          | Resumen práctico y reciente con recomendaciones de uso (cuándo `async` vs `defer`). ([DEV Community](https://dev.to/thesanjeevsharma/understanding-async-and-defer-11fn?utm_source=chatgpt.com)) | Carga de scripts, performance                       | Inicial        |
| Compat-table ES6/ES2016+ (Kangax)                | Tabla interactiva     | Verifica compatibilidad de features por motor/navegador; apoya la sección ES2015+. ([compat-table.github.io](https://compat-table.github.io/compat-table/es6/?utm_source=chatgpt.com)) | ECMAScript (evolución y compatibilidad)             | Medio          |
| TC39 – Proposals repo                            | Repositorio oficial   | Para mostrar a estudiantes cómo avanza el estándar (Stage 0–4). Útil en “línea de tiempo ES”. ([GitHub](https://github.com/tc39/proposals?utm_source=chatgpt.com)) | ECMAScript moderno, tendencias                      | Medio–Avanzado |
| TC39 – Process document                          | Especificación        | Explica formalmente el flujo de propuestas; contexto de estándares. ([tc39.es](https://tc39.es/process-document/?utm_source=chatgpt.com)) | Cultura de estándares                               | Avanzado       |
| Propuesta TC39 “Types as Comments”               | Draft oficial         | Ejemplo real de propuesta activa; discute interop con TS/Flow sin build step. ([tc39.es](https://tc39.es/proposal-type-annotations/?utm_source=chatgpt.com)) | Extensión conceptual (opcional)                     | Avanzado       |
| Eloquent JavaScript (4ª ed., 2024)               | Libro online          | Lecturas por capítulo con ejercicios; vincúlalo a tus prácticas de strings, números y control de flujo. ([eloquentjavascript.net](https://eloquentjavascript.net/?utm_source=chatgpt.com)) | Lecturas extendidas post-clase                      | Inicial–Medio  |
| The Modern JavaScript Tutorial (javascript.info) | Tutorial              | Ruta progresiva con tareas y soluciones; excelente para refuerzos entre sesiones. ([javascript.info](https://javascript.info/?utm_source=chatgpt.com)) | Repaso de cada tema visto en clase                  | Inicial–Medio  |
| MDN – Grammar and types                          | Artículo              | Declara `var/let/const`, literales y gramática básica; base para katas de scope y hoisting. ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types?utm_source=chatgpt.com)) | Variables, alcance, literales                       | Inicial        |
| MDN – Web APIs index                             | Índice                | Mapa de APIs modernas para mini-proyectos (Fetch, Storage) cuando avances. ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API?utm_source=chatgpt.com)) | Proyectos integradores                              | Medio          |
| MDN – Using Fetch API                            | Guía                  | Para una práctica rápida de peticiones y manejo de respuestas (extiende consola/formateo). ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch?utm_source=chatgpt.com)) | Ejercicio integrador opcional                       | Medio          |

# Taller: Fundamentos de JavaScript — Variables, Constantes y Operadores

## Objetivos de aprendizaje

Al finalizar, el estudiante podrá:

1. Declarar y usar **variables** (`let`) y **constantes** (`const`) de forma apropiada.
2. Aplicar **operadores matemáticos** (`+ - * / % **`) y **asignación compuesta** (`+= -= *= /=`).
3. Emplear **operadores de comparación** (`==`, `===`, `!=`, `!==`, `<`, `<=`, `>`, `>=`) entendiendo igualdad estricta.
4. Resolver expresiones con **operadores lógicos** (`&&`, `||`, `!`) y explicar su resultado.
5. Integrar todo en pequeños ejercicios prácticos con entradas y salidas claras.

## Requisitos

- Navegador moderno + consola de DevTools.
- Editor de texto (VS Code recomendado).
- Archivo base `index.html` y `main.js` enlazado.

**`index.html` (plantilla mínima)**

```
<!doctype html>
<html lang="es">
<head><meta charset="utf-8"><title>Taller JS</title></head>
<body>
  <h1>Taller JS – Fundamentos</h1>
  <script src="./main.js"></script>
</body>
</html>
```

## Actividad 1 — Variables y Constantes (10–15 min)

**Meta:** diferenciar `let` vs `const`.
 **Tarea:**

1. Declara una **constante** `PI` con `3.1416`.
2. Declara una **variable** `radio` con `5`.
3. Calcula `area = PI * radio ** 2`.
4. Cambia `radio` a `8` y recalcula `area`.
5. Explica en un comentario por qué no se puede reasignar `PI`.

## Actividad 2 — Operadores Matemáticos (15–20 min)

**Meta:** practicar aritmética y asignación compuesta.
**Tarea:** dado un precio base y un descuento, calcula el **precio final**. Luego aplica un IVA del 19% y redondea a 2 decimales.

**Retos opcionales:**

- Cambia el envío de fijo a condicional: si `precioConDescuento >= 100`, envío 0; si no, 10.
- Calcula el **residuo** de dividir el precio base entre 7 y explica un caso de uso de `%`.

## Actividad 3 — Comparación (15 min)

**Meta:** entender `==` vs `===` y operadores relacionales.
**Tarea:** completa la función y comprueba salidas esperadas.

```
function comparar(a, b) {
  return {
    a, b,
    "a == b": a == b,
    "a === b": a === b,
    "a != b": a != b,
    "a !== b": a !== b,
    "a < b": a < b,
    "a <= b": a <= b,
    "a > b": a > b,
    "a >= b": a >= b
  };
}

console.table([
  comparar(5, "5"),     // igualdad laxa vs estricta
  comparar(0, false),   // coerción
  comparar(7, 10),      // relacionales
  comparar("A", "a")    // orden lexicográfico (Unicode)
]);
```

**Preguntas guía (responder en comentarios):**

- ¿Por qué `5 == "5"` es `true` pero `5 === "5"` es `false`?
- ¿En qué casos preferirías `===` en producción?

## Actividad 4 — Desafío Integrador (20–30 min)

**Meta:** combinar variables/constantes, aritmética, comparación y lógica.
 **Escenario:** Una tienda aplica reglas de precio final:

- Precio base (`precioBase`) y cupón opcional (`cupon` en %).
- **Envío**: $12 si total < $100, de lo contrario $0.
- **IVA**: 19%.
- Si el cliente es **miembro** y el total sin IVA ≥ $150, aplica **5% adicional**.
- No permitir totales negativos.