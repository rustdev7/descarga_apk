document.addEventListener('DOMContentLoaded', () => {
    const status = document.getElementById('status');
    const box = document.getElementById('box');

    status.innerText = "JavaScript cargado correctamente";
    status.style.color = "green";

    // Animación simple al hacer click
    box.addEventListener('click', () => {
        box.classList.toggle('active');
        console.log("¡Click detectado en el JS externo!");
    });
});