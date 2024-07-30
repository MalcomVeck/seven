const productos = [
    {id:1, nombre:"Neoprene Hombre 4/3 Furnace CZ Full", descripcion:"Traje con cierre en el pecho para hombre está confeccionado con costuras soldadas impermeables y cuello de piel deslizante.", precio:799.999, imagen:"neoprene-furnase-hombre.jpg", categoria:"trajes"},
    {id:2, nombre:"Neoprene Hombre 4/3 Absolute Cz", descripcion:"Este traje de hombre está confeccionado con el material Pro Stretch, espuma SMART y Graphene ganador del Premio Nobel con Silicone Stretch", precio:599.999, imagen:"neoprene-absolute-hombre.jpg", categoria:"trajes"},
    {id:3, nombre:"Neoprene Mujer Synergy BZ 4/3 Full", descripcion:"Traje de mujer fabricado con neopreno Superlight elástico, combinado con costuras externas selladas y pegadas.", precio:529.999, imagen:"neoprene-synergy-mujer.jpg", categoria:"trajes"},
    {id:4, nombre:"Neoprene Mujer 4/3 Salty Dayz", descripcion:" Traje de mujer con cierre en el pecho y un forro térmico Graphene Recycler en el interior del pecho y los paneles traseros", precio:499.999, imagen:"neoprene-saltydayz-mujer.jpg", categoria:"trajes"},
]

function agregarProducto(id){
    const producto = productos.find(item => item.id == id);
    const carrito = cargarCarritoLS();
    carrito.push(producto);
    guardarCarritoLS(carrito);
    renderBotonCarrito();
    console.log("El producto se agregó al carrito");
}

function eliminarProducto(id) {
    const carrito = cargarCarritoLS();
    const carritoActualizado = carrito.filter(item => item.id !=id);
    guardarCarritoLS(carritoActualizado)
    renderCarrito();
    renderBotonCarrito();
}

function renderBotonCarrito() {
    let total = totalProductos();
    document.getElementById("totalCarrito").innerHTML = total;
}

function totalProductos() {
    const carrito = cargarCarritoLS();
    return carrito.length;
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
}

function cargarProductoLS() {
    let id = JSON.parse(localStorage.getItem("producto"));
    const producto = productos.find(item => item.id == id);
    return producto;
}

function guardarProductoLS(id) {
    localStorage.setItem("producto", JSON.stringify(id));
}