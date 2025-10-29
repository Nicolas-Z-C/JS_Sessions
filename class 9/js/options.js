fetch("https://jsonplaceholder.typicode.com/users", {
    method: "OPTIONS",
})
    .then(response => console.log("Métodos permitidos:", response.headers.get("Allow")))
    .catch(error => console.error("Error:", error));