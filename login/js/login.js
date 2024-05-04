


document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Aquí puedes realizar la lógica para conectarte con la API y verificar las credenciales
    // Por ejemplo, podrías usar fetch para enviar una solicitud POST a la API

    try {
        const response = await fetch("URL_DE_TU_API_AQUI", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();

        // Verificar la respuesta de la API
        if (response.ok) {
            // Login exitoso, redirigir a otra página o realizar otras acciones
            console.log("Login exitoso!");
        } else {
            // Mostrar mensaje de error
            document.getElementById("error").textContent = data.message;
            document.getElementById("error").classList.remove("hidden");
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("error").textContent = "Hubo un error al intentar iniciar sesión.";
        document.getElementById("error").classList.remove("hidden");
    }
});
