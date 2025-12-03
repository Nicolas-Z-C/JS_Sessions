let accion = 'A';

switch(accion){

    case 'A':
        console.log('FF');             
        break;

    case 'B':
        console.log('F2');
        break;
    default:
        console.log("Accion no definida");
};

/*Si no se agrega el break, js sigue pasando por
los otros casos lo que genera que tambien sean 
verdaderos y se impriman */