const productos = [
    {id:1, nombre:"Neoprene Hombre 4/3 Furnace CZ Full", descripcion:"Traje con cierre en el pecho para hombre está confeccionado con costuras soldadas impermeables y cuello de piel deslizante.", precio:799.999, imagen:"neoprene-furnase-hombre.jpg", categoria:"trajes"},
    {id:2, nombre:"Neoprene Hombre 4/3 Absolute Cz", descripcion:"Este traje de hombre está confeccionado con el material Pro Stretch, espuma SMART y Graphene ganador del Premio Nobel con Silicone Stretch", precio:599.999, imagen:"neoprene-absolute-hombre.jpg", categoria:"trajes"},
    {id:3, nombre:"Neoprene Mujer Synergy BZ 4/3 Full", descripcion:"Traje de mujer fabricado con neopreno Superlight elástico, combinado con costuras externas selladas y pegadas.", precio:529.999, imagen:"neoprene-synergy-mujer.jpg", categoria:"trajes"},
    {id:4, nombre:"Neoprene Mujer 4/3 Salty Dayz", descripcion:" Traje de mujer con cierre en el pecho y un forro térmico Graphene Recycler en el interior del pecho y los paneles traseros", precio:499.999, imagen:"neoprene-saltydayz-mujer.jpg", categoria:"trajes"},
]

function renderProductos(){
    let contenidoHTML= "";

    for (const producto of productos) {
        contenidoHTML += `<div class="col-md-3">
            <div class="card border-0">
                <img src="assets/${producto.imagen}" class="card-img-top" height=400 alt="${producto.nombre}">
                <div class="card-body text-center">
                    <p class="card-text">${producto.nombre}<br><span class="text-danger">${producto.precio}ARS</span></p>
                    <p class="card-text"><button class="btn btn-dark rounded-pill" onclick="agregarProducto(${producto.id});">Agregar (+)</button></p>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

function agregarProducto(id){
    const producto = productos.find(item => item.id == id);
    const carrito = cargarCarritoLS();
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log("El producto se agregó al carrito");
    totalCarrito();
}

function totalCarrito() {
    const carrito = cargarCarritoLS();
    document.getElementById("checkCarrito").innerHTML = carrito.length;
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

renderProductos();
totalCarrito();
