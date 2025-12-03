
/*
for (inicializacion;comparacion;exprecionfinal){
    codigo x que se realiza cada iteracion
}
*/
for (let i=0;i<2;i++){
    console.log(`El valor de i es ${i}`)
}

//for of, este permite iterar de manera mas simple
let array1 = ['p1','p2','p3','p4'];
for (let i of array1){
    console.log(i);
};
//for in, lo mismo que of pero para diccionarios y se muestra es la
//propiedad no el valor de este

let diccio1={
    almeja:"No",
    almeja2:"So",
    almeja3:"Sa",
    almeja4:"Su",
};

for (let prop in diccio1){
    console.log(prop /*propiedad*/, diccio1[prop]/*valor de la propiedad*/);
};
//Es mejor usar for in pero igual tmb sirve el for of
let array2 = ['f1','f2','f3'];
for (let index in array2){
    console.log(index, array2[index]);
}