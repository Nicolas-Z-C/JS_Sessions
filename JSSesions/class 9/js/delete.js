fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "DELETE",
})
    .then(response => {
        if (response.ok) console.log("Usuario eliminado");
    })
    .catch(error => console.error("Error:", error));