function renderCarrito() {
    const carrito = cargarCarritoLS();
    let contenidoHTML= `<table class="table">
    <tbody>`;

    for (const producto of carrito) {
        contenidoHTML += `<tr>
        <th><img src="../assets/${producto.imagen}" alt="${producto.nombre}" width="80"></th>
        <th class="align-middle">${producto.nombre}</th>
        <th class="text-center align-middle"><span class="text-danger">$${producto.precio} ARS</span></th>
        <th class="text-end align-middle"><button class="btn btn-danger">Eliminar [-]</button></th>
        </tr>`;
    }

    contenidoHTML += `</tbody>
    </table>`;
    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderCarrito();
