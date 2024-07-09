
// ENTRADA DE DATOS
let nombreCliente = prompt("Ingrese su Nombre y Apellido: (ESC para salir)");

while (nombreCliente != "ESC") {
    let DNI = prompt("Ingrese su Número de DNI:");
    let Ncelular = prompt("Ingrese su Número de Teléfono Móvil:");
    let textcantidadPersonas = "Ingrese la cantidad de personas:\n";
    textcantidadPersonas += "1 - 1 Persona\n";
    textcantidadPersonas += "2 - 2 Personas\n";
    textcantidadPersonas += "3 - 3 Personas\n";
    textcantidadPersonas += "4 - 4 Personas\n";
    textcantidadPersonas += "5 - 5 Personas\n";
    textcantidadPersonas += "6 - 6 Personas\n";
    textcantidadPersonas += "7 - 7 Personas\n";
    let cantidadPersonas = parseInt(prompt(textcantidadPersonas));
    let cantidadDias = parseInt(prompt("Ingrese la Cantidad de días de Estadía:\n"));
    let textoPlazo = "Ingrese el Plazo de Pago:\n";
    textoPlazo += "1- En un Pago\n";
    textoPlazo += "2- En 6 Cuotas\n";
    textoPlazo += "3- En 12 Cuotas";
    let plazo = parseInt(prompt(textoPlazo));
    let valorPersona = 6000; 

    //PROCESAMIENTO DE DATOS
    let valorPersonas = calcularValorPersonas(cantidadPersonas, valorPersona);
    let valorEstadia= calcularValorEstadia(valorPersonas, cantidadDias);
    let valorCuotas= calcularValorCuotas(valorEstadia, plazo);
    
    // SALIDA DE DATO
    alert("Cliente: " + nombreCliente + "\nDNI: "+ DNI + "\nNúmero de Teléfono Móvil: " + Ncelular + "\nValor por día: $" + valorPersonas + " Pesos Argentinos" + "\nCantidad de Días: "  + cantidadDias + "\nValor Total de la Estadía: $" + valorEstadia + " Pesos Argentinos" + "\nOpción de Plazo N°: " + plazo + "\nValor a Pagar: $" + valorCuotas + " Pesos Argentinos");
    nombreCliente = prompt("Ingrese otro Nombre y Apellido: (ESC para salir)");
    }

function calcularValorPersonas(cantidadPersonas, valorPersona){
    if (cantidadPersonas <= 7 ){
        return cantidadPersonas * valorPersona;
    }else {
        return "Divida la cantidad de personas por familia";
    }
}
function calcularValorEstadia(valorPersonas, cantidadDias){
    if (valorPersonas >= 6000){
        return valorPersonas * cantidadDias;
    }else {
        return "Ingrese bien los datos solicitados"
    }
}

function calcularValorCuotas(valorEstadia, plazo){
    if (plazo === 1) {
        return valorEstadia * plazo;
    }else if (plazo === 2) {
        return valorEstadia * 1.2 / 6;
    }else if (plazo === 3) {
        return valorEstadia * 1.5 / 12;
    } else {
        "No existe el plazo seleccionado"
    }
}