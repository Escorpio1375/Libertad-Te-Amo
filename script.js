const fechaInicio = new Date("2025-08-14T00:00:00");

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);
function verificarClave() {
    const claveCorrecta = "13755731"; 
    const claveIngresada = document.getElementById("clave").value;
    const mensaje = document.getElementById("mensaje-oculto");

    if (claveIngresada === claveCorrecta) {
        mensaje.style.display = "block";
        setTimeout(() => {
            mensaje.classList.add("visible");
        }, 50);
    } else {
        alert("Como te vas a olvidar Libertad💔");
    }
}
let reproduciendo = false;

function toggleMusica() {
    const musica = document.getElementById("musicaFondo");
    const boton = document.querySelector(".btn-musica");

    if (!reproduciendo) {
        musica.play();
        boton.textContent = "⏸ Pausar música";
        reproduciendo = true;
    } else {
        musica.pause();
        boton.textContent = "🎶 Reproducir música";
        reproduciendo = false;
    }
}
