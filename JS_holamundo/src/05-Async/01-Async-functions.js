async function example(){
    await new Promise(resolve => {
        setTimeout(() => {
            console.log("Chanchito feliz");
        }, 1000);
    });
    console.log("Chanchito feliz por2")
}

/* La 