/*La expresion setTimeout sirve para agregar un pqueño delay al
  retorno o resultado de una funcion*/

let data = ["banano","fresa","chiripulin"];

function example(){
    setTimeout(()=>{
        console.log("Recuperando data");
        console.log(data);
    }, 1000); //Toma una funcion callback y el tiempo de espera en ms como argumentos
};

example();

/*Estas peticiones pueden generar pequeños errores, pues si usamos un return directo e intentamos
  imprimir en consola nos aparecera undefined, pues la funcion NESECITA de esos 2 segundos para 
  retornar los datos*/


function example2(){
    setTimeout(()=>{
        console.log("Recuperando data");
        return data;
    }, 1000); //Toma una funcion callback y el tiempo de espera en ms como argumentos
};

console.log(example2()); //Undefined esto se soluciona con promesas