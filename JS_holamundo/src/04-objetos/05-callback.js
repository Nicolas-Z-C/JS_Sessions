function modify(array,callback){
    //Se realiza algo
    array.push("Papa");
    //Despues e hace algo mas
    callback();
}

const nombres=["banano","Perez","Sopa"];
modify(nombres, function() {console.log("Se ha modificado el array");})

//TODO ES UN CALLBACK, pues es el recibir una funcion como argumento, asi mismo esto se puede usar en asyncs