const usr = {id:1};

usr.name = 'Nicolas';
usr.guardar = function (){
    console.log("guardando",usr.guardar);
};

usr.guardar()

//usr = 1; esto si genera un error

/*A pesar de ser una constante, al ser un objeto o array, 
este ultimo si "Puede" cambiar, lo unico que no
es el hecho de ser un objeto o array*/ 

//Una forma de evitar agregar o modificar un objeto es con el siguiente metodo

const usr1 = Object.freeze({id:1});
usr1.name="Nico";
console.log(usr1);

//Si queremos agregar propiedades pero no poder modificarlas podemos usar este otro

const usr2 = Object.seal({id:1});
usr2.name="Nico";
usr2.id=3;
console.log(usr2); 
