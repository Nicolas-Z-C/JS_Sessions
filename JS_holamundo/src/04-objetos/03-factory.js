/*Las factory functions funcionan como simplificadores de codigo
  son las encargadas de mantener un codigo repetitivo en pequeñas
  lineas */
let user = {
    id:1,
    name:"Cesar",
    estatus:true,
    recuperarClave: function(){
        console.log("Recuperando clave...");
    },
};

let user2 = {
    id:2,
    name:"Alberto",
    estatus:false,
    recuperarClave: function(){
        console.log("Recuperando clave...");
    },
};
//Aca si nesecitamos mas usuarios tendriamos que poner cada uno manualmente

function crearUsuario(name,email,i){ //Llevan camelCase
    return {
        i,
        name,
        email,
        estatus:true,
        recuperarClave: function(){
            console.log("Recuperando clave...");
        },
    };  
}

//Ahora tenemos una funcion que acepta como parametros las propiedades de el objeto a guardar