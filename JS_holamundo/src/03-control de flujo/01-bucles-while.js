//Existen dos tipos de while
let i=0;
while (i<5){
    console.log(`El valor de i actualmente es ${i}`);
    i++; 
}
//En este tipo de bucles se realiza la iteracion solo y solo si la condicion se cumple, si i hubiese sido mayor que 5 desde el principio no se hace nada

i=6;
do {
    console.log(`El valor de i es${i}`);
    i++;
} while(i>8);

/* En este caso, a pesar de que i no es mayor que 8
la iteracion del bucle sigue haciendoce, esto es lo 
que genera el do while, que si o si se realice al 
menos una vez */ 