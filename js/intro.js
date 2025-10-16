
let A = console.time("Script completo")
let r = [
    {F1:"Alex", edad:80},
    {F2:"Romero", edad:15}
]
console.log("RAHHHHHHHHHHHHHH externo")
console.group("Error messages or alike")
console.warn("waning")
console.error("Error")
console.info("Pinfo")
console.groupEnd()
console.group("Tables")
console.log(r)
console.table(r)
console.timeEnd("Script completo")
console.log(A)
console.group("User shit")
let age = prompt("Ingrese su edad");
if (age > 18){
    alert(`Tienes ${Age} años eres un mayor de edad`);
}
else if (age <18 & age > 0){
    alert(`Tienes ${age} años eres un menor de edad`)
}
else {
    alert(`Ingrese un valor real porfavor`)
    console.error("EL USUARIO ES UN IDIOTA")
}
Swal.fire("SweetAlert2 is working!");
console.log("VENECOOO")

