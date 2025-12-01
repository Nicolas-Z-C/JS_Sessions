fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "HEAD",
})
    .then(response => console.log("Encabezados:", response.headers))
    .catch(error => console.error("Error:", error));