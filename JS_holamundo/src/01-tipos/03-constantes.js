let nombre = "Juan";
nombre = "Pedro"; // Reasignación válida

const PI = 3.1416;
PI = 3.14; // Esto causará un error: TypeError: Assignment to constant variable.

console.log("Hola, " + nombre + "!");
console.log("El valor de PI es: " + PI);