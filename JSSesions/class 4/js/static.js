//Diccionario
console.group("1er");
const dicio = { nombre: "raul",edad: 45, genero: "masculino"};
//De-estructuracion
const {nombre,edad,genero} = dicio;
console.log(nombre);
console.log(edad);
console.log(genero);
console.groupEnd("1er");

//Uso del Rest para coger todos los objetos
console.group("2ndo");
const dicio1 = { nombre1: "rot",edad1: 15, genero1: "femenino"};
//Rest- Realmente se puede usar cualquier nombre para almacenar el valor
const {nombre1, ...rest} = dicio1;
console.log(nombre1);
console.log(rest);
console.groupEnd("2ndo");

//Reestructutracipon con cambio de alias
console.group("3ero");
const dicio2 = { nombre2: "rato",edad2: 15, genero2: "Cabra"};
const {nombre2:NN,edad2:años,genero2:animal} = dicio2;
console.log(NN);
console.log(años);
console.log(animal);
console.groupEnd("3ro");

//De-estructuracion anidada
console.group("4to");
const venechuela = {nom: "Chamo", lenguas:{nativa:"Veneco",extranjera:"Ingles"}};
const {nom,lenguas:{nativa,extranjera}} = venechuela;
console.log(nom);
console.log(nativa);
console.log(extranjera);
console.groupEnd("4to");

//Sets
console.group("Sets");
const PrimerSet = new Set ([1,2,3,4, "Venezuela"]);
console.log(PrimerSet);
//Diferentes methodos de sets
PrimerSet.delete(4)
console.log(PrimerSet);
console.log(PrimerSet.has("Venezuela"));
console.log(PrimerSet.size);
PrimerSet.clear()
console.log(PrimerSet.size);
console.groupEnd("Sets")

//Map
console.group("MAP")
//Uso del set para poner claves
const miMapa = new Map();
miMapa.set('nombre', 'Ana');
miMapa.set('edad', 25);
console.log(miMapa);
//Uso del get para obtener datos
console.log(miMapa.get('nombre'));
//uso del has para identificar si lo contiene
console.log(miMapa.has('edad'));
//Uso del delete para borrar
miMapa.delete('edad');
console.log(miMapa);
//Uso del clear para lkimpiar todo
miMapa.clear();
console.log(miMapa);
//El size
console.log(miMapa.size);

//Iteraciones
const colores = new Map([
    ['rojo', '#FF0000'],
    ['verde', '#00FF00'],
    ['azul', '#0000FF']
  ]);

// for of
for (const [i, x] of colores) {
    console.log(`Clave: ${i}, Valor: ${x}`);
}
//For each
colores.forEach((i, x) => {
    console.log(`Clave: ${i}, Valor: ${x}`);
  });