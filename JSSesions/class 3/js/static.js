const Objeto1 = {
    nombre : "Nombre",
    version :"1.0",
    mostrarInformacion: function(p1, p2) {
        console.log("Nombre: " + this.nombre);
        console.log("Versión: " + this.version);
        console.log("Descripción: " + this.descripcion);
        console.log("Parámetro 1: " + p1);
        console.log("Parámetro 2: " + p2);
    }
};

let marvel = {
    name: 'Tony Stark',
    isAlive: false,
    age: 40,
    coords: {
        lat: 35.056,
        lng: -7.0789
    },
    suit: ['Mark I', 'Mark V', 'Hulkbuster'],
    address: {
        zip: '680004',
        location: 'Malibu, California'
    }
};
//Prueba N#1 de como acceder a los values
console.log(marvel.isAlive)
//N# Acceder como en python
console.log(marvel.coords["lat"])
// Llamada a la función dentro del objeto
Objeto1.mostrarInformacion("Valor 1", "Valor 2");

// la propagacion es generar una copia de un array o diccionario,
// este no se linkea con el original sino solo se copia
// tercera y ultima prueba pero de propagacion 
const cambiaNombre = ({...persona}) => {
    persona.nombre = "Tony";
    return persona;
}

let peter = {nombre:"Peter"};
let Tony =cambiaNombre(peter)
console.log(peter,Tony)