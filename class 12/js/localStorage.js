export function write( dbName, data ){
    const dataString = JSON.stringify(data);
    localStorage.setItem(dbName, dataString);
}

export function read(dbName){
    const dataObject = localStorage.getItem(dbName);
    const data = dataObject == null ? [] : JSON.parse(dataObject);
    return data;
}

export function init(dbName){
   /* if (localStorage.getItem(dbName) = null){
        localStorage.setItem(dbName, {});
        console.log(`La DB "${dbName}" ha sido iniciada`)
    }
    else{
        console.log(`La DB "${dbName}" ya fue iniciada, si desea modificarla use otro metodo`)
    } */
    localStorage.getItem(dbName) === null ? localStorage.setItem(dbName,""):console.log(`La DB "${dbName}" ya fue iniciada, si desea modificarla use otro metodo`);
}