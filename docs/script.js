// funcionalidad login
document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector(".input-submit");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Función para verificar el login
    function checkLogin() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === "admin" && password === "doris") {
            alert("Login exitoso"); // Cambia esto por la acción que quieras realizar después del login exitoso
            //form.reset(); // Reinicia el formulario
            window.location.href = "story.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    }

    // Escuchar el evento click en el botón de login
    loginButton.addEventListener("click", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe
        checkLogin();
    });

    // Escuchar el evento keypress en los campos de texto
    usernameInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita que el formulario se envíe
            checkLogin();
        }
    });

    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita que el formulario se envíe
            checkLogin();
        }
    });
});

// olvidar contraseña
document.addEventListener("DOMContentLoaded", function() {
    const forgotPasswordLink = document.getElementById("forgotPassword");

    forgotPasswordLink.addEventListener("click", function(event) {
        event.preventDefault();
        alert("El amor de mi vida");
    });
});

// registrar
document.addEventListener("DOMContentLoaded", function() {
    const registerLink = document.getElementById("registerLink");

    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Como que registrar, si eres la única.");
    });
});

// remember me
document.addEventListener("DOMContentLoaded", function() {
    const rememberCheckbox = document.getElementById("remember");

    rememberCheckbox.addEventListener("change", function() {
        if (rememberCheckbox.checked) {
            window.location.href = "https://www.instagram.com/jorge.orozcodk/";
        }
    });
});










