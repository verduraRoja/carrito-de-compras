
function agregarAlCarrito(id, nombre, precio) {
    const producto = { id, nombre, precio };
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${nombre} agregado al carrito`);
}
function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedor = document.getElementById('lista-carrito');

    if (carrito.length === 0){
        contenedor.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }
    let total = 0;
    contenedor.innerHTML = '<ul>';
    carrito.forEach((producto, index) => {
        contenedor.innerHTML += `
            <li>
                ${producto.nombre} - $${producto.precio.toFixed(2)} 
                <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
            </li>`;
        total += producto.precio;
    });
    contenedor.innerHTML += '</ul>';
    contenedor.innerHTML += `<p><strong>Total: $${total.toFixed(2)}</strong></p>`;
}

function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(producto => producto.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}
