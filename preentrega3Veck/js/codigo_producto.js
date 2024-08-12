function renderProducto() {
    const producto = cargarProductoLS();
    let htmlImagenProducto = `<img src="./assets/${producto.imagen}" class="img-fluid" alt=${producto.nombre} />`;
    let htmlDetalleProducto = `<h1>${producto.nombre}</h1>
    <h5><b>Cantidad: ${producto.cantidad}</b></h5>
    <h5 class="text-danger fs-3">$${producto.precio}</h5>
    <p>${producto.descripcion}</p>
    <p class="card-text"><button id="botonAgregar" class="btn btn-dark rounded-pill" onclick="agregarProducto(${producto.id});">AGREGAR (+)</button></p>`;
    document.getElementById("imagenProducto").innerHTML = htmlImagenProducto;
    document.getElementById("detalleProducto").innerHTML = htmlDetalleProducto;
}

renderProducto();
renderBotonCarrito();