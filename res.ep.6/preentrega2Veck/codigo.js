
// ENTRADA DE DATOS
// let nombreCliente = prompt("Ingrese su Nombre y Apellido: (ESC para salir)");

// while (nombreCliente != "ESC") {
//     let DNI = prompt("Ingrese su Número de DNI:");
//     let numCel = prompt("Ingrese su Número de Teléfono Móvil:");
//     let textcantidadPersonas = "Ingrese la cantidad de personas:\n";
//     textcantidadPersonas += "1 - 1 Persona\n";
//     textcantidadPersonas += "2 - 2 Personas\n";
//     textcantidadPersonas += "3 - 3 Personas\n";
//     textcantidadPersonas += "4 - 4 Personas\n";
//     textcantidadPersonas += "5 - 5 Personas\n";
//     textcantidadPersonas += "6 - 6 Personas\n";
//     textcantidadPersonas += "7 - 7 Personas\n";
//     let cantidadPersonas = parseInt(prompt(textcantidadPersonas));
//     let cantidadDias = parseInt(prompt("Ingrese la Cantidad de días de Estadía:\n"));
//     let textoPlazo = "Ingrese el Plazo de Pago:\n";
//     textoPlazo += "1- En un Pago\n";
//     textoPlazo += "2- En 6 Cuotas\n";
//     textoPlazo += "3- En 12 Cuotas";
//     let plazo = parseInt(prompt(textoPlazo));
//     let valorPersona = 6000; 

//     //PROCESAMIENTO DE DATOS
//     let valorPersonas = calcularValorPersonas(cantidadPersonas, valorPersona);
//     let valorEstadia= calcularValorEstadia(valorPersonas, cantidadDias);
//     let valorCuotas= calcularValorCuotas(valorEstadia, plazo);
    
//     // SALIDA DE DATO
//     console.log("Cliente: " + nombreCliente + "\nDNI: "+ DNI + "\nNúmero de Teléfono Móvil: " + numCel + "\nValor por día: $" + valorPersonas + " Pesos Argentinos" + "\nCantidad de Días: "  + cantidadDias + "\nValor Total de la Estadía: $" + valorEstadia + " Pesos Argentinos" + "\nOpción de Plazo N°: " + plazo + "\nValor a Pagar: $" + valorCuotas + " Pesos Argentinos");
//     }

// function calcularValorPersonas(cantidadPersonas, valorPersona){
//     if (cantidadPersonas <= 7 ){
//         return cantidadPersonas * valorPersona;
//     }else {
//         return "Divida la cantidad de personas por familia";
//     }
// }
// function calcularValorEstadia(valorPersonas, cantidadDias){
//     if (valorPersonas >= 6000){
//         return valorPersonas * cantidadDias;
//     }else {
//         return "Ingrese bien los datos solicitados"
//     }
// }

// function calcularValorCuotas(valorEstadia, plazo){
//     if (plazo === 1) {
//         return valorEstadia * plazo;
//     }else if (plazo === 2) {
//         return valorEstadia * 1.2 / 6;
//     }else if (plazo === 3) {
//         return valorEstadia * 1.5 / 12;
//     } else {
//         "No existe el plazo seleccionado"
//     }
// }

let nombreCliente = prompt("Ingrese su Nombre:");
let DNI = parseFloat(prompt("Ingrese su número DNI:"));
let numCel = parseFloat(prompt("Ingrese su número de Celular:"));

const clientes = [
    {id:1, nombre: `${nombreCliente}, DNI: ${DNI}, CELULAR: ${numCel}`}
];

class clienteS {
    constructor(clienteS) {
        this.clientes = clienteS;
    }

    agregarCliente(nombreCliente, DNI, numCel) {
        const cliente = {id:this.generarId(), nombre:nombreCliente, Dni:DNI, celular:numCel}; // Crear un nuevo objeto Cliente
        this.clientes.push(cliente); // Agregando al Array clientes de la Clase ClienteS, el nuevo objeto cliente creado
        console.log("Cliente agregado!");
    }

    buscarCliente(id) {
        return this.clientes.find(cliente => cliente.id == id)
    }

    obtenerClientes() {
        return this.clientes;
    }

    listarClientes() {
        let salida = "";

        for (const cliente of this.clientes) {
            salida += `${cliente.id} - ${cliente.nombreCliente} - ${cliente.DNI} - ${cliente.numCel}\n`;
        }

        alert(salida);
    }

    totalClientes() {
        return this.clientes.length;
    }

    generarId() {
        let max = 0;
        this.clientes.forEach(cliente => {
            if (cliente.id > max) {
                max = cliente.id;
            }
        });

        return max + 1;
    }
    //eliminarCliente(id) {
        // Opción #1 - Eliminar con método splice
        //let pos = this.items.findIndex(item => item.id == id); // Busqué la posición del elemento a eliminar en el array items (2)
        //this.items.splice(pos, 1); // Eliminar el elemento de la posición "pos"
        
        //console.log("Se eliminó el Cliente: #" + id);
    //}
}

// Crea una nueva instancia de la Clase de clientes
const listaClientes = new clienteS(clientes)

listaClientes.agregarCliente(nombreCliente, DNI, numCel);

// Agregar cliente
//listaClientes.agregarCliente("Mariano Ramirez", 35455699, 2257604020);
//console.log(listaClientes.obtenerClientes());

// Eliminar cliente
//listaClientes.eliminarClientes(2);

// Obtengo el array de clientes
console.log(listaClientes.obtenerClientes());


// Listar los clientes
//listaClientes.listarClientes();

// Cuantos clientes tengo en mi lista de clientes?
//console.log("Total Clientes: " + listaClientes.totalClientes());







//.toUpperCase(Hace todo el texto mayuscula)
//.trim(elimina los espacios en general)


//Recorda usar arrays y metodos de busqueda y filtrado.
//Podrias tratar de agregar un arr con tipos de habitaciones y precios,
//entonces de ahi las personas eligen y vos podrias aplicar un metodo de arr para encontrar lo que deceanSin mas