//hoisted function declaration
saludarHolaMundo();

//hoisted funtions can be called before they are defined
function saludarHolaMundo() {
    console.log("Hola Mundo");
}

//function expression (not hoisted)
const sum = function() {
   return 2 + 2;
};

let resultado = sum();
console.log(resultado); //4
console.log(sum()); //4