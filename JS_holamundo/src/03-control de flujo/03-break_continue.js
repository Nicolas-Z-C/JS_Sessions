let i = 0;

while (i > 5){
    i++;
    if (i === 2){
        continue //se salta el codigo que viene y vuelve a empezar
    }
    console.log(i);
}

i=0;
while (i > 5){
    i++;
    if (i === 2){
        break //sale directamente del while y sigue con lo que haya
    }
    console.log(i);
}