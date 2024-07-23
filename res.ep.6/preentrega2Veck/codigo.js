

const consultarValor = () => {
    const valorPersona = document.getElementById("eleccion").value;
    const cantidadPersonas = document.getElementById("cantPers").value;
    const cantidadDias = document.getElementById("cantDias").value;
    let valorPersonas = calcularValorPersonas(cantidadPersonas, valorPersona);
    let valorEstadia = calcularValorEstadia(valorPersonas, cantidadDias);
    let informarValor = `El valor total de la Estadía es: ${valorEstadia} Pesos`;
    alert(informarValor);
}

function calcularValorPersonas(cantidadPersonas, valorPersona){
    if (cantidadPersonas <= 8 ){
        return cantidadPersonas * valorPersona;
    }else {
        return "Divida la cantidad de personas por familia";
    }
}

function calcularValorEstadia(valorPersonas, cantidadDias){
    if (valorPersonas >= 8000){
        return valorPersonas * cantidadDias;
    }else {
        return "Ingrese bien los datos solicitados"
    }
}

document.getElementById("btnConsultar").addEventListener("click", consultarValor);


const guardarDatos = () => {
    guardarCliente();
    vaciarCampos();
}

const recuperarDatos = () => {
    let cliente = recuperarCliente();
    document.getElementById("nombre").value = cliente.nombre;
    document.getElementById("dni").value = cliente.dni;
    document.getElementById("cel").value = cliente.cel;
    document.getElementById("vehi").value = cliente.vehi;
    console.log("Los datos se recuperaron correctamente!");
}

const borrarDatos = () => {
    vaciarCampos();
    localStorage.removeItem("cliente");
    console.log("Los datos se vaciaron correctamente!");
}

const vaciarCampos = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("cel").value = "";
    document.getElementById("vehi").value = "";
}

const guardarCliente = () => {
    let nombre = document.getElementById("nombre").value;
    let dni = document.getElementById("dni").value;
    let cel = document.getElementById("cel").value;
    let vehi = document.getElementById("vehi").value;
    const cliente = {nombre:nombre, dni:dni, cel:cel, vehi:vehi };
    localStorage.setItem("cliente", JSON.stringify(cliente));
}

const recuperarCliente = () => {
    return JSON.parse(localStorage.cliente);
}

document.getElementById("btnGuardar").addEventListener("click", guardarDatos);
document.getElementById("btnRecuperar").addEventListener("click", recuperarDatos);
document.getElementById("btnBorrar").onclick = borrarDatos;
