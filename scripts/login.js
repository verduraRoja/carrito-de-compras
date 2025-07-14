document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;
    const mensaje = document.getElementById("mensaje");

    const usuariosValidos = [
        { usuario: "admin", contrasena: "1234" },
        { usuario: "cliente", contrasena: "verduras" }
    ];

    const usuarioValido = usuariosValidos.find(u => u.usuario === usuario && u.contrasena === contrasena);

    if (usuarioValido) {
        mensaje.style.color = "green";
        mensaje.textContent = "¡Inicio de sesión exitoso!";
        // Aquí puedes redirigir, por ejemplo:
        window.location.href = "panel1.html";
    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "Usuario o contraseña incorrectos.";
    }
});
