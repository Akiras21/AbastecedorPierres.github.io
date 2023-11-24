const botones = ["btninventario", "btnfacturacion", "btnacerca", "btnreportes"];
const imagenFondo = document.getElementById("imagenFondo");

botones.forEach((buttonId) => {
    const button = document.getElementById(buttonId);

    button.addEventListener('mouseenter', () => {
        const imageUrl = button.getAttribute('data-image');
        imagenFondo.style.backgroundImage = `url(${imageUrl})`;
        imagenFondo.style.display = 'block';
    });

    button.addEventListener('mouseleave', () => {
        imagenFondo.style.display = 'none';
    });
});

function redirecionindex() {
    window.location.href = 'inventario.html';
}
document.getElementById("btninventario").addEventListener('click', redirecionindex);

function redireccionventas() {
    window.location.href = 'facturacion.html';
}
document.getElementById("btnfacturacion").addEventListener('click', redireccionventas);

function redireccionacerca() {
    window.location.href = 'acercami.html';
}
document.getElementById("btnacerca").addEventListener('click', redireccionacerca);

