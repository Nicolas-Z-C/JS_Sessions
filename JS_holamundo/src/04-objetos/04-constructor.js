function Usuario(){ //Se usa UpperCamelCase
    this.id=1;
    this.recuperarClave=function(){  //se llaman metodos, pues son funciones asignadas a una propiedad de un objeto
        console.log("Recuperando clave...");
    }
}

let usuario = new Usuario(); //Solo retornan si se usa el caracter new pues este crea el objeto del aire mismo, y se asigna al this

console.log(usuario)