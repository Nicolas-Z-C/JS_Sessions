fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Juan Actualizado", email: "juan.updated@example.com" }),
})
    .then(response => response.json())
    .then(data => console.log("Usuario actualizado:", data))
    .catch(error => console.error("Error:", error));