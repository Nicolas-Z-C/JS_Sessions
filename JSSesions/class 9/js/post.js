fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Juan Pérez", email: "juan@example.com" }),
})
    .then(response => response.json())
    .then(data => console.log("Usuario creado:", data))
    .catch(error => console.error("Error:", error));