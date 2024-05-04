document.addEventListener('DOMContentLoaded', function() {
    // Supongamos que los datos del usuario se obtienen de una variable en JavaScript
    const usuario = {
        nombre: "Juan Pérez",
        correo: "juan@example.com",
        telefono: "1234567890"
        // Agrega más campos según sea necesario
    };

    // Mostrar los datos del usuario en la página
    document.getElementById('nombre').textContent = usuario.nombre;
    document.getElementById('correo').textContent = usuario.correo;
    document.getElementById('telefono').textContent = usuario.telefono;

    // Manejar el evento de click en el botón de eliminar cuenta
    document.getElementById('eliminar-cuenta').addEventListener('click', function() {
        // Mostrar el modal
        document.getElementById('modal').style.display = 'block';
    });

    // Manejar el evento de click en el botón de cerrar el modal
    document.querySelector('.close').addEventListener('click', function() {
        // Ocultar el modal
        document.getElementById('modal').style.display = 'none';
    });

    // Manejar el envío del formulario para eliminar cuenta
    document.getElementById('eliminar-cuenta-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de manera convencional

        const password = document.getElementById('password').value;

        // Verificar si la contraseña ingresada coincide con la contraseña en la base de datos
        // Aquí podrías hacer una solicitud AJAX a tu backend para verificar la contraseña
        // Por ahora, vamos a simularlo con una contraseña predefinida
        const contraseñaBaseDeDatos = "contraseña123"; // Reemplaza esto con la contraseña real de la base de datos

        if (password === contraseñaBaseDeDatos) {
            // Si la contraseña es correcta, confirmar la eliminación de la cuenta
            if (confirm("¿Estás seguro de que deseas eliminar tu cuenta?")) {
                alert("La cuenta ha sido eliminada exitosamente.");
                // Aquí podrías redirigir al usuario a la página de inicio de sesión, por ejemplo
                // window.location.href = "pagina-de-inicio.html";
            }
        } else {
            alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
        }

        // Limpiar el campo de contraseña después de intentar eliminar la cuenta
        document.getElementById('password').value = "";
        // Ocultar el modal después de intentar eliminar la cuenta
        document.getElementById('modal').style.display = 'none';
    });
});