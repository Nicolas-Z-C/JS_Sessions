
let data = ["banano", "fresa", "chiripulin"];

function datafetch() {
    return new Promise((resolve, reject) => {

        if (data.length === 0) {
            reject(new Error("Epa socio no hay nada"));
        };

        setTimeout(() => {
            resolve(data);
        }, 1500);
    });
};

async function obtenerData() {
    try{
        const resultado = await datafetch();
        console.log(resultado);
    }
    catch(e){
        console.log(e.message)
    }
};
//La diferencia esque este codigo si acepta el reject, pues sin el try,catch un error romperia la aplicacion    
obtenerData();
