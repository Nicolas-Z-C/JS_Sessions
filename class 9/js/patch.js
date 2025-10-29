fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "nuevo.correo@example.com" }),
})
    .then(response => response.json())
    .then(data => console.log("Usuario parcialmente actualizado:", data))
    .catch(error => console.error("Error:", error));