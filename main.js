document.addEventListener("DOMContentLoaded", () => {
    const productosLink = document.querySelector('nav a[href="#productos"]');
    productosLink.addEventListener("click", (e) => {
        e.preventDefault();
        alert("¡Has hecho clic en Productos!");
    });
});
