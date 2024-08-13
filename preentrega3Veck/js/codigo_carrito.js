function renderCarrito() {
    const carrito = cargarCarritoLS();
    let contenidoHTML;

    if (totalProductos() > 0 ) {
        contenidoHTML= `<table class="table">
        <tbody>`;
        for (const producto of carrito) {
            contenidoHTML += `<tr>
            <th><img src="assets/${producto.imagen}" alt="${producto.nombre}" width="80"></th>
            <th class="align-middle"><h4>${producto.nombre}</h4></th>
            <th class="text-center align-middle"><h5>Cantidad<br>${producto.cantidad}</h5></th>
            <th class="text-center align-middle"><h5>Unidad<br>$${producto.precio} ARS</h5></th>
            <th class="text-center align-middle"><h5 class="text-danger">subTotal<br>$${producto.precio * producto.cantidad} ARS</h5></th>
            <th class="text-end align-middle"><button class="btn btn-danger btn-sm" onclick="eliminarProducto(${producto.id})">Eliminar <i class="bi bi-trash3"></i></button></th>
            </tr>`;
            }
        contenidoHTML += `</tbody>
        <tfooter>
        <td class="text-end align-middle" colspan="2"><button class="btn btn-danger btn-md" onclick="vaciarCarrito();">Vaciar Carrito <i class="bi bi-recycle"></i></button></td>
        <td class="text-end align-middle" colspan="3"><h4 class="text-danger" id="mostrarTotal"></h4></td>
        <td class="text-end" colspan="4"><button class="btn btn-success btn-lg" onclick="comprar();">COMPRAR <i class="bi bi-credit-card"></i></button></td>
        </tfooter>
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
actualizarTotal();

