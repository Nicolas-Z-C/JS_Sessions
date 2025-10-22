import *  as data from "./data.js"
export const HeroID = (id) => { return new Promise ((resolve,reject)=>{
    data.heroes.find((i) => {
        if (i.id === id){
            resolve(`El heroe ${i.name} a sido encontrado`);
        }
    })
})};

