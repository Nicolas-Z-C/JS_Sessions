//AND , OR , NOT

//AND (&&)
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
console.log("-----");

//OR (||)
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//NOT (!)
console.log(!true); //false
console.log(!false); //true  

//ternary operator

let a = 5;
let b = 10;

let resultado = (a > b) ? "a es mayor que b" : "a no es mayor que b";
console.log(resultado);