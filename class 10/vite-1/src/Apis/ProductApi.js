const URL_API = "https://68dc49297cd1948060a9eb99.mockapi.io/";
const myHeaders = new Headers({
    "Content-Type": "application/json"
});
const getProduct = async() => {
    try {
        const respuesta = await fetch(`${URL_API}/products`);
		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
		} else if(respuesta.status === 401){
            console.log('La url no es correcta');
		} else if(respuesta.status === 404){
            console.log('El URL  no existe');
		} else {
            console.log('Se presento un error en la peticion consulte al Administrador');
		} 
	} catch(error){
        console.log(error);
	}
    
}
const postProduct = async (datos) => {
    try {
        return await fetch(`${URL_API}/Productos`, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(datos)
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }
}
const patchProduct = async (datos,id) =>{

    try {
        return await fetch(`${URL_API}/Productos/${id}`, {
            method: "PATCH",
            headers: myHeaders,
            body: JSON.stringify(datos)
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }

}
const putProduct = async (datos,id) =>{

    try {
        return await fetch(`${URL_API}/Productos/${id}`, {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(datos)
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }

}
const deleteProduct = async (id) =>{

    try {
        return await fetch(`${URL_API}/Productos/${id}`, {
            method: "DELETE",
            headers: myHeaders,
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }

}
export {
    getProduct as getProduct,
    postProduct as postProduct,
    patchProduct as patchProduct,
    putProduct as putProduct,
    deleteProduct as deleteProduct
};