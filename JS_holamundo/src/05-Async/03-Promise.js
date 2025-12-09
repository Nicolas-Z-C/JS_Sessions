let data = ["banano","fresa","chiripulin"];

function example(){
    //Aca se define la promsesa y sus dos estados
    return new Promise((resolve, reject) =>{
         if (data === 0){
            reject(new Error("Epa socio no hay nada"));
         };
         setTimeout(()=>{
            resolve(data);
         },1500);
    });
};

//Aca se resuelve la promesa y se muestra que se hace con ella
example()
    .then((response) => console.log(response))         
    .catch((err)=>console.log(err.message));

/*Ahora con el uso de la promesa podemos lograr imprimir todo de totazo
  pues usamos el set timeout y el resolve, asi mismo usamos el .then()
  para recoger el resultado del resolve y el .catch() para el resultado
  del reject,*/