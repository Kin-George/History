document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "doris") {
            alert("Login exitoso"); // Cambia esto por la acción que quieras realizar después del login exitoso
            form.reset(); // Reinicia el formulario
            window.location.href = "story.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
});
