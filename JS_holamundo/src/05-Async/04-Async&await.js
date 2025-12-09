// Declaramos un array con datos de frutas
// Este array simula información que podría venir de una API o base de datos
let data = ["banano", "fresa", "chiripulin"];

// Función que retorna una Promesa
// Simula una operación asíncrona como consultar un servidor o base de datos
function datafetch() {
    // Creamos y retornamos una nueva Promesa
    // resolve: función que se llama cuando la operación es exitosa
    // reject: función que se llama cuando ocurre un error
    return new Promise((resolve, reject) => {
        
        // Validación: Verificamos si el array tiene elementos
        // Si está vacío, rechazamos la promesa con un error
        if (data.length === 0) {
            // reject() indica que algo salió mal y detiene la ejecución
            reject(new Error("Epa socio no hay nada"));
        };
        
        // setTimeout simula un retraso de red o tiempo de procesamiento
        // Esperamos 1500ms (1.5 segundos) antes de devolver los datos
        setTimeout(() => {
            // resolve() indica que la operación fue exitosa
            // Devolvemos el array de datos como resultado
            resolve(data);
        }, 1500);
    });
};

// Función asíncrona que obtiene y muestra los datos
// 'async' permite usar 'await' para esperar promesas de forma más legible
async function obtenerData() {
    // 'await' pausa la ejecución aquí hasta que datafetch() se resuelva
    // El valor resuelto se almacena en 'resultado'
    const resultado = await datafetch();
    
    // Mostramos los datos en consola
    // Esto se ejecuta después de que la promesa se resuelva (1.5 segundos después)
    console.log(resultado);
};

// Llamamos a la función para iniciar todo el proceso
// Salida esperada después de 1.5 segundos: ["banano", "fresa", "chiripulin"], si no hay nada el reject no sirve por lo cual se rompe la aplicacion
obtenerData();
