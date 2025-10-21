//Diccionario

const dicio = { nombre: "raul",edad: 45, genero: "masculino"};

//De-estructuracion

const {nombre,edad,genero} = dicio;

console.log(nombre);
console.log(edad);
console.log(genero);

//Uso del Rest para coger todos los objetos

const dicio1 = { nombre1: "rot",edad1: 15, genero1: "femenino"};

//Rest

const {nombre1, ...rest} = dicio1;

console.log(nombre1);
console.log(rest);