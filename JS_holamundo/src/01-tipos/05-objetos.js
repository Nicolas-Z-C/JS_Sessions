let object={
    nombre:"juan",
    edad:30,
}

console.log(object);
console.log(object.nombre);
console.log(object.edad);

object.nombre="pedro";
object.edad=25;

console.log(object);

object["nombre"]="maria";
object["edad"]=28;

console.log(object);

let newname="nombre";
object[newname]="lucia";

delete object.edad;

console.log(object);