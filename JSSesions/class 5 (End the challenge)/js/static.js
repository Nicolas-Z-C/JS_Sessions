import *  as logic from "./promises.js"
//Promesas
const Query = new Promise((resolve,reject)=>{
    const esTomasGey = true;
    if (esTomasGey) {
        resolve("A Tomas le gustan las vergas grandes y gordas");
    } 
    else{
        reject("Tomas sigue siendo gey pero se esta curando");
    }
})
Query
.then((resultado) => {
    console.log(resultado)
})
.catch((error) =>{
    console.log(error)
})

//Heroes
let rta = logic.HeroID(2)
console.log(rta)
