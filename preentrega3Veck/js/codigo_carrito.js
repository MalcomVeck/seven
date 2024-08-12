function renderCarrito() {
    const carrito = cargarCarritoLS();
    let contenidoHTML;

    if (totalProductos() > 0 ) {
        contenidoHTML= `<table class="table">
        <tbody>
        <tr>
        <td class="text-end" colspan="6"><button class="btn btn-danger btn-sm" onclick="vaciarCarrito();">Vaciar Carrito <i class="bi bi-recycle"></i></button></td>
        </tr>`;

        for (const producto of carrito) {
            contenidoHTML += `<tr>
            <th><img src="assets/${producto.imagen}" alt="${producto.nombre}" width="80"></th>
            <th class="align-middle">${producto.nombre}</th>
            <th class="text-center align-middle">Cantidad<br> ${producto.cantidad}</th>
            <th class="text-center align-middle"><span class="text-danger">Unidad<br>$${producto.precio} ARS</span></th>
            <th class="text-center align-middle"><span class="text-danger">subTotal<br>$${producto.precio * producto.cantidad} ARS</span></th>
            <th class="text-end align-middle"><button class="btn btn-danger btn-sm" onclick="eliminarProducto(${producto.id})">Eliminar <i class="bi bi-trash3"></i></button></th>
            </tr>`;
        }

        contenidoHTML += `</tbody>
        </table>`;
    } else {
        contenidoHTML = `<div class="alert alert-dark my-5 text-center" role="alert">
        <h2>❌</h2>
        <h3>No se encontraron productos en el carrito!</h3>
        </div>`
    }
    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderCarrito();
renderBotonCarrito();
