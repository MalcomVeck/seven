//producto = "seven up";

//alert(producto)

//string = "cadena de texto"
//Number = 88
//booleano = true, false;


//VARIABLES

//var, let, const;

//var numero = 88; "NO limita el alcance de la varible a solo un bloque"

//let = "SI Limita el alcance de la variable al bloque en el que esta se ejecuta"

//const = "La constante es constante siempre no se limita su alcance en ningun caso"

//let numero;

//numero = 3; 

//alert (numero);

//prompt("decime tu nombre") Crea tipo un alert con opcion a interacción. 

// USAR UNA CONSTANTE let DE UNA MANERA MUY PIOLA :

//let nombre = prompt ("Ingrese su nombre")

//alert ("Hola " + nombre);


//BACKTICKS

//nombre = "Malcom Veck";

//frase = `Soy ${nombre} y fui a caminar por la playa`;

//document.write(frase);

// Un " = " asigna;
// Dos " == " pregunta si son iguales en dato; (true or false)
// Tres " === " pregunta si son iguales en tipo/propiedad y dato; (true or false)

//OPERADORES

// let valor = true;
// let valor2 = true;

// let resultado = valor && valor2; (con && es true si las dos condiciones son verdaderas, si son falsas las dos devuelve false)

// let resultado2 = valor || valor2; (con || si una de las dos es false or true devuelve ese valor, osea vendria a ser un "or")

// let resultado3 = !valor; (el ! devuelve lo contrario a lo que se expone, si es false devuelve true y viseversa)

// document.write(resultado3);

//CAMEL CASE (siempre la primera palabra comienza con minúscula y el resto de palabras van sin espacio y empiezan con mayúscula)

// ej : parseInt ;


// CONDICIONALES 

// nombre = "Malcom";

// if (nombre == "zedekiel") {
//     alert ("Tu nombre es original")
// }
// else if (nombre == "Malcom") {
//     alert ("Tu nombre esta muy bueno")
// }

// else {
//     alert ("Tu nombre es común")
// }



//----------------------------------------------------------------------------------------------------------------------------------▼
//----------------------------------------------------------------------------------------------------------------------------------♠

// dineroMalcom = prompt("¿Cuanto dinero tienes Malcom?");
// dineroBrandon = prompt("¿Cuanto dinero tienes Brandon?");
// dineroAlan = prompt("¿Cuanto dinero tienes Alan?");

//dineroMalcom = parseInt(dineroMalcom);

// if (dineroMalcom >= 0.6 && dineroMalcom < 1) {
//     alert ("Malcom, podes comprarte un Helado de agua");
//     alert ("y te sobran" + (dineroMalcom - 0.6));
// } 
// else if (dineroMalcom >= 1 && dineroMalcom < 1.6) {
//     alert ("Malcom, podes comprarte un Helado de crema");
//     alert ("y te sobran" + (dineroMalcom - 1));
// }
// else if (dineroMalcom >= 1.6 && dineroMalcom < 1.7) {
//     alert ("Malcom, podes comprarte un Helado Magic");
//     alert ("y te sobran" + (dineroMalcom - 1.6));
// }
// else if (dineroMalcom >= 1.7 && dineroMalcom < 1.8) {
//     alert ("Malcom, podes comprarte un Helado Seitu");
//     alert ("y te sobran" + (dineroMalcom - 1.7));
// }
// else if (dineroMalcom >= 1.8 && dineroMalcom < 2.9) {
//     alert ("Malcom, podes comprarte un Helado Coffler");
//     alert ("y te sobran" + (dineroMalcom - 1.8));
// }
// else if (dineroMalcom >= 2.9){ 
//     alert ("Malcom, podes comprarte un Helado Águila o 1/4 del Artesanal");
//     alert ("y te sobran" + (dineroMalcom - 2.9));
// }else {
//     alert ("Malcom, no te alcanza para ningún helado, normal");
// }

// if (dineroBrandon >= 0.6 && dineroBrandon < 1) {
//     alert ("Brandon, podes comprarte un Helado de agua")
// } 
// else if (dineroBrandon >= 1 && dineroBrandon < 1.6) {
//     alert ("Brandon, podes comprarte un Helado de crema")
// }
// else if (dineroBrandon >= 1.6 && dineroBrandon < 1.7) {
//     alert ("Brandon, podes comprarte un Helado Magic")
// }
// else if (dineroBrandon >= 1.7 && dineroBrandon < 1.8) {
//     alert ("Brandon, podes comprarte un Helado Seitu")
// }
// else if (dineroBrandon >= 1.8 && dineroBrandon < 2.9) {
//     alert ("Brandon, podes comprarte un Helado Coffler")
// }
// else if (dineroBrandon >= 2.9){ 
//     alert ("Brandon, podes comprarte un Helado Águila o 1/4 del Artesanal")
// }else {
//     alert ("Brandon, no te alcanza para ningún helado, normal")
// }

// if (dineroAlan >= 0.6 && dineroAlan < 1) {
//     alert ("Alan, podes comprarte un Helado de Agua")
// } 
// else if (dineroAlan >= 1 && dineroAlan < 1.6) {
//     alert ("Alan, podes comprarte un Helado de crema")
// }
// else if (dineroAlan >= 1.6 && dineroAlan < 1.7) {
//     alert ("Alan, podes comprarte un Helado Magic")
// }
// else if (dineroAlan >= 1.7 && dineroAlan < 1.8) {
//     alert ("Alan, podes comprarte un Helado Seitu")
// }
// else if (dineroAlan >= 1.8 && dineroAlan < 2.9) {
//     alert ("Alan, podes comprarte un Helado Coffler")
// }
// else if (dineroAlan >= 2.9){ 
//     alert ("Alan, podes comprarte un Helado Águila o 1/4 del Artesanal")
// }else {
//     alert ("Alan, no te alcanza para ningún helado, normal")
// }

//------------------------------------------------------------------------------------------------▼
//------------------------------------------------------------------------------------------------▼

// "use strict";

// const definirCompra = (n)=>{
//     let din = prompt("Dinero de ${n}");
//     if (din >= 0.6 && din < 1) return ("${n}: Helado de Agua");
//     if (din >= 1 && din < 1.6) return ("${n}: Helado de Crema");
//     if (din >= 1.6 && din < 1.7) return ("${n}: Helado Magic");
//     if (din >= 1.7 && din < 1.8) return ("${n}: Helado Seitu");
//     if (din >= 1.8 && din < 2.9) return ("${n}: Helado Coffler");
//     if (din >= 2.9) return ("${n}: Helado Águila o 1/4 del Artesanal");
//     else return ("${n}: No te alcanza para ningún helado, normal");
// }

// console.log(definirCompra("Malcom"));
// console.log(definirCompra("Brandon"));
// console.log(definirCompra("Alan"));

//------------------------------------------------------------------------------------------------▼
//------------------------------------------------------------------------------------------------▼

//ARRAYS

//let surfin = ["Surfer", "Tabla de Surf", "Quillas", "Parafina", "Greep", "Leash"];

//document.write(surfin[5]);

//------------------------------------------------------

// let surfer1 = {
//     nombre: "Kelly Slater",
//     nivel: "Profesional",
//     foot: "Regular",
//     worldTitles: "11"
// };

// document.write(surfer1["nombre"]);

//------------------------------------------------------------------------------------------------▼

//```````````

//PROGRAMA DE ASISTENCIA

// let cantidad = prompt ("¿Cuantos alumnos son?");
// let alumnosTotales = [];

// for (i= 0; i < cantidad; i++) {
//     alumnosTotales[i] = [prompt("Nombre del Alumno" + (i+1)),0];
// }

// const tomarAsistencia = (nombre, p)=>{
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P") {
//         alumnosTotales [p][1]++;
//     }
// }

// for (i = 0; i <br 30; i++) {
//     for (alumno in alumnosTotales) {
//     tomarAsistencia(alumnosTotales[alumno][0],alumno);
//     }
// }

// for (alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//     _________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
//     _________Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b>`;
//     if (30 - alumnosTotales[alumno][1] > 18) {
//     resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
//     } else {
//     resultado+= "<br><br>"
//     }
//     document.write(resultado)
// }

//------------------------------------------------------------------------------------------------▼

//CALCULADORA

// const sumar = (num1,num2)=>{
// 	return parseInt(num1) + parseInt(num2);
// }
// const restar = (num1,num2)=>{
// 	return parseInt(num1) - parseInt(num2);
// }
// const dividir = (num1,num2)=>{
// 	return parseInt(num1) / parseInt(num2);
// }
// const multiplicar = (num1,num2)=>{
// 	return parseInt(num1) * parseInt(num2);
// }


// alert("¿Que operación deseas realizar?");
// let operacion = prompt("1: Suma,  2: Resta,  3: División,  4: Multiplicación");

// if (operacion == 1) {
// 	let numero1 = prompt("primer número para sumar");
// 	let numero2 = prompt("segundo número para sumar");
// 	resultado = sumar(numero1,numero2);
// 	alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 2) {
// 	let numero1 = prompt("primer número para restar");
// 	let numero2 = prompt("segundo número para restar");
// 	resultado = restar(numero1,numero2)
// 	alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 3) {
// 	let numero1 = prompt("primer número para dividir");
// 	let numero2 = prompt("segundo número para dividir");
// 	resultado = dividir(numero1,numero2)
// 	alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 4) {
// 	let numero1 = prompt("primer número para multiplicar");
// 	let numero2 = prompt("segundo número para multiplicar");
// 	resultado = multiplicar(numero1,numero2)
// 	alert(`tu resultado es ${resultado}`);
// }

// else {
// 	alert("No se ha encontrado la operación")
// }

//------------------------------------------------------------------------------------------------▼

// class Animal {
//     constructor (especie, raza, edad, color){
//         this.especie = especie;
//         this.raza = raza; 
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, de tipo ${this.raza}, tengo ${this.edad} años, y soy de color ${this.color}`;
//     }
//     verInfo (){
//         document.write(this.info + "<br>")
//     }
// }

// class Gato extends Animal {
//     constructor (nombre, especie, raza, edad, color){
//         super (especie, raza, edad, color);
//         this.nombre = nombre;
//     }
//     apodo(){
//         alert(`${this.nombre}`)
//     }
//     mahullar(){
//         alert("¡Miau!");
//     }
// }

// const perro = new Animal ("Perro","PitBull",4,"Negro");
// const gato = new Gato ("Indio", "Gato","Atigrado",3,"Blanco, Negro y Gris");
// const ave = new Animal ("Ave","Colibrí",1,"Naranja, Amarillo y Rojo");

// perro.verInfo();
// gato.apodo();
// gato.mahullar();
// ave.verInfo();

//------------------------------------------------------------------------------------------------▼

// class Celular {
// 	constructor(color,peso,tamaño,rdc,ram){
// 		this.color = color;
// 		this.peso = peso;
// 		this.tamaño = tamaño;
// 		this.resolucionDeCamara = rdc;
// 		this.memoriaRam = ram;
// 		this.encendido = false;
// 	}
// 	presionarBotonEncendido(){
// 		if (this.encendido == false) {
// 			alert("celular prendido");
// 			this.encendido = true;
// 		} else {
// 			alert("celular apagado");
// 			this.encendido = false;
// 		}
// 	}

// 	reiniciar(){
// 		if (this.encendido == true) {
// 			alert("reiniciando celular");
// 		} else {
// 			alert("el celular está apagado");
// 		}
// 	}
// 	tomarFoto(){
// 		alert(`foto tomada en una resolución de: ${this.resolucionDeCamara}`);
// 	}
// 	grabarVideo(){
// 		alert(`grabando video en ${this.resolucionDeCamara}`);
// 	}
// 	mobileInfo(){
// 		return `
// 		Color: <b>${this.color}</b></br>
// 		Peso: <b>${this.peso}</b></br>
// 		Tamaño: <b>${this.tamaño}</b></br>
// 		Resolución de Video: <b>${this.resolucionDeCamara}</b></br>
// 		Memoria Ram: <b>${this.memoriaRam}</b></br>
// 		`;
// 	}
// }

// class CelularAltaGama extends Celular{
//     constructor(color,peso,tamaño,rdc,ram, rdce){
//         super(color,peso,tamaño,rdc,ram);
//         this.ResolucionDeCamaraExtra = rdce;
//     }
//     grabarVideoLento(){
//         alert("Estás grabando en cámara lenta");
//     }
//     reconocimientoFacial(){
//         alert("Estás accediendo por reconocimiento facial");
//     }
//     infoAltaGama(){
//         return this.mobileInfo() + `Resolución de cámara Extra: ${this.ResolucionDeCamaraExtra}`;
//     }
// }


//celular1 = new Celular("rojo","150g","5'","hd","1GB");
//celular2 = new Celular("negro","155g","5.4'","full hd","2GB");
//celular3 = new Celular("blanco","15046g","5.9'","full hd","2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

// celular1 = new CelularAltaGama("Naranja","1650g","5.5'","ULTRAHD","3GB","HD");
// celular2 = new CelularAltaGama("Celeste","175g","6''","4k","4GB","FULLHD");


// document.write(`
// 	${celular1.infoAltaGama()} <br><br>
// 	${celular2.infoAltaGama()} <br>
// 	`);

//------------------------------------------------------------------------------------------------▼

// class App {
//     constructor(descargas, puntuacion,peso){
//         this.descargas = descargas;
//         this.puntuacion = puntuacion;
//         this.peso = peso;
//         this.iniciada = false;
//         this.instalada = false; 
//     }
    
//     instalar(){
//         if(this.instalada == false) {
//             this.instalada = true;
//             alert("App Instalada Correctamente");
//         }
//     }
//     desinstalar(){
//         if(this.instalada == true) {
//             this.instalada = false;
//             alert("App Desinstalada Correctamente");
//         }
//     }
//     abrir(){
//         if(this.iniciada == false && this.instalada == true) {
//             this.iniciada = true;
//             alert("App Iniciada");
//         }
//     }
//     cerrar(){
//         if(this.iniciada == true && this.instalada == true) {
//             this.iniciada = false;
//             alert("App Cerrada");
//         }
//     }
//     appInfo(){
//         return `
//         Descargas: <b>${this.descargas}</b></br>
//         Puntuación: <b>${this.puntuacion}</b></br>
//         Peso: <b>${this.peso}</b></br>
//     `}
// }

// app = new App("16.000","5 Estrellas","900mb");
// app2 = new App("15.000","5 Estrellas","800mb");
// app3 = new App("14.000","4 Estrellas","700mb");
// app4 = new App("13.000","4 Estrellas","600mb");
// app5 = new App("12.000","3 Estrellas","600mb");
// app6 = new App("11.000","3 Estrellas","500mb");
// app7 = new App("10.000","2 Estrellas","550mb");

// document.write(`
//     ${app.appInfo()} <br>
//     ${app2.appInfo()} <br>
//     ${app3.appInfo()} <br>
//     ${app4.appInfo()} <br>
//     ${app5.appInfo()} <br>
//     ${app6.appInfo()} <br>
//     ${app7.appInfo()} <br>
//     `);

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();

//------------------------------------------------------------------------------------------------▼
//```````````

//  CADENAS ---

// .concat() = Une dos cadenas.

// let cadena = "Cadena de prueba";
// let cadena2 = " Cadena dos";

// resultado = cadena.concat(cadena2);

// document.write(resultado); 

//----------------------------------------------->

//padStart() = Rellena al inicio con lo indicado 
//padEnd() = Lo mismo pero al final 

// let cadena = "Abc";
// let cadena2 = "";

// resultado = cadena.padStart(11,"z");

// document.write(resultado); 

//----------------------------------------------->

//.repeat() = Repite las veces indicadas en el()

// let cadena = "123 ";
// let cadena2 = "";

// resultado = cadena.repeat(3);

// document.write(resultado); 

//----------------------------------------------->

// .split() = Divide la cadena, el vididor va a ser siempre lo indicado en los ()

// let cadena = "Hola, que onda, como estás?";

// resultado = cadena.split(",");

// document.write(resultado[2]); 

//----------------------------------------------->

// .substring() = Crea un nuevo string o comienzo, incicando el orden en los ()

// let cadena = "Abcdefg";

// resultado = cadena.substring(1,5);

// document.write(resultado); 

//----------------------------------------------->

// .toLowerCase() = Convierte una cadena a minúscula  

// let cadena = "MALCOM";

// resultado = cadena.toLowerCase();

// document.write(resultado);

//----------------------------------------------->

// .toUpperCase() = Convierte una cadena a mayúscula

// let cadena = "malcom";

// resultado = cadena.toUpperCase();

// document.write(resultado);

//----------------------------------------------->

// .toString() = Combierte a string

// let cadena = "333";

// let resultado = cadena;

// document.write(resultado * 3);

//----------------------------------------------->

// .trim() = Elimina los espacios en general
// .trimStart() = Elimina los espacios de adelante
// .trimEnd() = Elimina los espacios de atras

// let cadena = "  FKJ  ";

// let resultado = cadena.trim();

// document.write(resultado);

//----------------------------------------------->

// ARRAYS ---

// .pop() = Elimina el último elemento del Array y lo devuelve (devuelve quiere decir "mostrar")
// .shift() = Elimina el primer elemento del Array y lo devuelve 

// let nombres = ["Miguel","Luzbel","Raziel"]; 

// let resultado = nombres.shift() 

// document.write(resultado);

//--------------------------------------------->

// .push() es lo opuesto a pop() -- ya que .push() AGREGA un elemento al final de la lista y .pop() por el contrario lo ELIMINA y lo muestra.
// .unshift() es el opuesto a .shift() -- ya que .unshift() Agrega un elemento al principio de la lista y .shift() por el contrario lo ELIMINA y lo muestra.

//--------------------------------------------->

// .push() = Agrega un elemento del Array al final de la lista
// .unshift() = Agrega un elemento del Array al principio de la lista 

// let nombres = ["Miguel","Luzbel","Raziel"]; 

// document.write (nombres + "<br>");

// let resultado = nombres.push("Gabriel", "Uriel"); 

// document.write(nombres);

//--------------------------------------------->

// .reverse() = Invierte el orden de los elementos del Array

// let numeros = [1,2,3,4,5]; 

// document.write (numeros + "<br>");

// numeros.reverse();

// document.write(numeros);

//--------------------------------------------->

// .sort() = Ordena los elementos de un Array localmente y devuelve el arreglo ordenado

// let numeros = [1,3,2,5,4,7,9,8]; 

// document.write (numeros + "<br>");

// numeros.sort();

// document.write(numeros);

//--------------------------------------------->

// .splice() = Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.  

// let nombres = ["Raul", "Ramiro", "Federico", "Johanna", "Erica"]; 

// document.write (nombres + "<br>");

// nombres.splice(0,2,"Lionel");

// document.write(nombres);

//--------------------------------------------->

//ACCESORES ---

// .join() = Une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.

// let nombres = ["Raul", "Ramiro", "Federico", "Johni", "Elias"];

// document.write(nombres + "<br>");

// let resultado = nombres.join(" - ");

// document.write(resultado);

//--------------------------------------------->

// .slice() = Devuelve una parte del array dentro de un nuevo array empezando por el inicio hasta el fin (fin no incluido).
// En criollo : Indicando los números dentro del () indica un punto de partida y uno de salida, y devuelve lo ubicado entre esos dos puntos. 
//Digamos que si .substring() hace el mismo con caracteres, este .slice() lo hace con elementos.

// let nombres = ["Raul", "Ramiro", "Federico", "Johni", "Elias", "Tamara"];

// document.write(nombres + "<br>");

// let resultado = nombres.slice(3,6);

// document.write(resultado);

//Métodos ya vistos anteriormente que tienen que ver con la búsqueda y identificación de los elementos ( .toString() -- .indexOf() -- .includes() ). 

//--------------------------------------------->

// DE REPETICIÓN ---

// .filter() = Crea un nuevo array con todos los elementos que cumplan la condición. (Es como un fuckin bucle).

// let nombres = ["Rashim", "Ramiro", "Israel", "Epicteto", "Hercules", "Tamara"];

// // nombres.filter(nombres => document.write(nombres + "<br>")) ej:1

// resultado = nombres.filter(nombres => nombres.length > 6) ej:2

// document.write(resultado); 

//--------------------------------------------->

// .forEach() = Ejecuta la función indicada una vez por cada elemento del array. 

// let nombres = ["Rashim", "Ramiro", "Israel", "Epicteto", "Hercules", "Tamara"];

// nombres.forEach(nombres => document.write(nombres + "<br>"));


//------------------------------------------------------------------------------------------------▼
//```````````

// OBJET MATH - BASIC

// METODOS --

// Siempre es Math. adelante ( ej Math.sqrt() ).

// .sqrt() = Devuelve la raiz cuadrada positiva de un número.
// .cbrt() = Devuelve la raiz cúbica de un número.
// .max() = Devuelve el mayor de cero o más números.
// .min() = Devuelve el más pequeño de cero o más números.
// .random() = Devuelve un número pseudo- aleatorio entre 0 y 1.
// .round() = Devuelve el valor de un número redondeado al número entero mas cercano. (Redondea para arriba o abajo dependiendo el dígito fraccioando)
// .fround() = Devuelve la representacion flotante de precisión simple mas cercana de un número.
// .floor() = Devuelve el mayor entero menor que o igual a un número.
// .trunc() = Devuelve la parte entera del número X, la eliminación de los digitos fraccionarios. (Elimina el dígito fraccionado)

//------------------------------------------------------------------------------------------------▼
//```````````

// const materias = {
//     Programacion: [" Lopez"," Facundo"," Brian"," Lionel"," Jesica"," Agustina"," Carolina"],
//     Logica: ["Sosa"," Alexis"," Juan"," Maira"," Carolina"," Facundo"," Brian"],
//     Matematica: ["Telechea"," Camila"," Jesica"," Agustina"," Matias"," Thiago"],
//     Fisica: ["Ramirez"," Alexis"," Juan"," Maira"," Carolina"," Damian"," Carlos"],
//     Quimica: ["DRossi"," Damian"," Carlos"," Leila"," Lihuen"," Diana"," Facundo"],
//     Geografia: ["Elias-Calo"," Camila"," Jesica"," Agustina"," Matias"," Thiago"," Alexis"],
//     Geomancia: ["Veck"," Camila"," Jesica"," Agustina"," Matias"," Thiago"," Lihuen"],
//     Astrofisica: ["Newton"," Alexis"," Juan"," Maira"," Matias"," Thiago"," Carolina"]
// }


// const obtenerInformacion = (materia)=>{
	
// 	if (materias[materia] !== undefined){
// 		return [materias[materia],materia,materias];
// 	} else {
// 		return materias;
// 	}
// }

// const mostrarInformacion = (materia)=>{
//     let informacion = obtenerInformacion(materia);

//     if (informacion !== false) {
//     let profesor = informacion[0][0];
//     alumnos = informacion[0];
//     alumnos.shift();
//     document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
//     Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
//     `);
// }
// }

// const cantidadDeClases = (alumno)=>{
//     let informacion = obtenerInformacion();
//     let clasesPresentes = [];
//     let cantidadTotal = 0;
//     for (info in informacion) {
//         if (informacion[info].includes(alumno)) {
//             cantidadTotal++;
//             clasesPresentes.push(" "+ info);
//         }
//     }   
//     return `<b style='color:blue'>${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b><br><br>
//     `;
// }

// mostrarInformacion("Programacion");
// mostrarInformacion("Logica");
// mostrarInformacion("Matematica");
// mostrarInformacion("Fisica");
// mostrarInformacion("Quimica");
// mostrarInformacion("Geografia");
// mostrarInformacion("Geomancia");
// mostrarInformacion("Astrofisica");

// document.write(cantidadDeClases(" Camila"))
// document.write(cantidadDeClases(" Carolina"))

//------------------------------------------------------------------------------------------------▼
//```````````

//CONSOLA

//TODOS VAN CON EL | console | POR DELANTE EJ: console.log() -- 

//FUNCIONES DE REGISTRO
// - .log() - Muestra un mensaje en la Consola Web (o del intérprete JavaScript).
// - .clear() - Limpia la consola.
// - .warn() - Imprime un mensaje de advertencia en la Consola Web. 
// - .error() - Muestra un mensaje de Error en la Consola Web . 
// - .info() - Emite un mensaje informativo a la Consola Web .
// - .dir() - Despliega una lista interactiva de las propiedades del objeto JavaScript especificado.
// - .table() - Esta funcion toma un argumento aleatorio: Data que debe ser un Array o un objeto, y un parametro adicional: Columns y nos muestra una tabla en la consola.
// - .assert() - Aparece un mensaje de error en la consola si la afirmacion es falsa. Si la afirmacion es verdadera, no aparecerá nada. 

//FUNCIONES DE CONTEO 
// - .count() - Registra el número de veces que se llama a .count(). Esta funcion toma como argumento opcional una etiqueta.
// - .countReset() - Resetea el contador console.count()

//FUNCIONES DE AGRUPACION 
// - .group() - Crea un nuevo grupo en linea en el registro de la Consola Web .
// - .groupEnd() - Remueve un grupo en linea en el registro de la Consola Web . 
// - .groupCollapsed() - Crea un grupo en linea pero contraido, el usuario debe expandirlo para verlo.

//FUNCIONES DE TEMPORIZACION
// - .time() - Inicia un temporizador.
// - .timeLog() - Registra el valor actual de un temporizador.
// - .timeEnd() - Detiene un temporizador.

//------------------------------------------------------------------------------------------------▼
//```````````

// const materias = {
// 	fisica: [90,6,3,"fisica"],
// 	matematica: [84,8,2,"matematica"],
// 	logica: [92,8,4,"logica"],
// 	quimica: [96,8,4,"quimica"],
// 	calculo: [91,6,3,"calculo"],
// 	programacion: [79,7,4,"programacion"],
// 	biologia: [75,9,2,"biologia"],
// 	bbdd: [98,9,1,"bbdd"],
// 	algebra: [100,10,4,"algebra"]
// }

// const aprobo = ()=>{
//     for (materia in materias){
//         let asistencias = materias[materia][0];
//         let promedio = materias[materia][1];
//         let trabajos = materias[materia][2];

//         console.log(materias[materia][3]);

//         if (asistencias >= 90){
//             console.log("%c   Asistencias en Orden", "color:green");
//         }else{
//             console.log("%c   Falta de Asistencias", "color:red");
//         }
//         if (promedio >= 7) {
//             console.log("%c   Promedio en Orden", "color:green");
//         }else{
//             console.log("%c   Desaprobado", "color:red")
//         }
//         if (trabajos >= 3) {
//             console.log("%c   Trabajos Practicos en Orden", "color:green");
//         }else{
//             console.log("%c   Faltan Trabajos Practicos", "color:red"); 
//         }
//     }
// }

// aprobo()

//------------------------------------------------------------------------------------------------▼
//```````````

// DOM (Document Objet Model)

// Nodo = Un nodo en el DOM es cualquier etiqueta del cuerpo, como un párrafo, el mismo body o incluso las etiquetas de una lista. 
// * document = El nodo document es el nodo raiz, a partir del cual derivan el resto de nodos. 
// * element = Nodos definidos por etiquetas html. 
// * text = El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo texto (text).
// * attribute = los atributos de las etiquetas definen nodos, (en JavaScript no los veremos como nodos, sino como información asociada al nodo tipo element). 
// * comentarios y otros = Los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos. 


// METODOS DE SELECCION DE ELEMENTOS : (Siempre con el | document. | Por delante ej: document.getElementById() )
// - .getElementById() - Selecciona un elemento por ID.
// - .getElementByTagName() - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
// - .querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores.
// - .querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores.

//METODOS PARA DEFINIR, OBTENER Y ELIMINAR VALORES DE ATRIBUTOS. (Estos siempre se ejecutan con un | element. | por delante ej: element.getAttribute() )
// - setAttribute() - Modifica el valor de un atributo.
// - getAttribute() - Obtiene el valor de un atributo.
// - removeAttribute() - Remueve el valor de un atributo.

//ATRIBUTOS GLOBALES 
// - class - Lista de clases del elemento separadas por epacios.
// - contenteditable -  Indica si el elemento puede ser modificado por el usuario (bool) 
// - dir - Indica la direccionalidad del texto.
// - hidden - Indica si el elemento aun no es, o ya es, relevante. 
// - id - Define un identificador único. 
// - style - Contiene declaraciones de estilo CSS para ser aplicadas al elemento. 
// - tabindex - Indica si el elemento puede obtener un focus de input. 
// - title - Contiene un texto con informacion relacionada al elemento al que pertenece.

//-------------------------------------------♦

// DOM PRACTICA

// const rangoPoder = document.querySelector(".rangoPoder");

// rangoPoder.setAttribute("type","text"); //El primer parametro ("type") selecciona la cualidad a modificar y el segundo ("text") por lo que se modifica. 

// document.write(rangoPoder);

//-------------------------------------------♦

// ATRIBUTOS DE INPUTS

// - .className 

// const input = document.querySelector(".input-normal");

// document.write(input.className); //Accede directo con el input. y lo que le siga al punto es lo que modifica y devuelve. En este caso un className.


// - Ejemplos de input. (range, color, etc)

// const input = document.querySelector(".input-normal");

// input.type = "color";

// Partiendo de esos ejemplos se puede aplicar:

// - className - Antes visto
// - value- Le da un valor determinado
// + type - Que marca una propiedad
// - accept - Que marca que acepte un archivo en particular (ej: jpeg)
// + form - Permite ejecutar un input dentro de un form (ideal para formularios y eso)
// + minLength - Marca la mínima cantidad de caracteres que tiene que tener un input (ideal para contraseñas corte min.8 caracteres)
// + placeholder - Pone un ejemplo en color gris para hacer de guia al usuario (como cuando en un formulario te ponen "Ingrese nombre aqui y te pone uno de ejemplo") Que se desaparece una vez que le escribir encima.
// - required - Le marca al usuario que es un campo requerido u obligatorio (Como cuando pones tu gmail y te pide la contraseña, sin completar el campo contraseña no podes ingresar. Por que es un required)

// STYLE 
//Se utiliza en camelCase osea en vez de poner font-size es fontSize y así con todo.

// const titulo = document.querySelector(".titulo");

// titulo.style.padding = "30px";
// titulo.style.fontSize = "30px";
// titulo.style.backgroundColor = "#48e"

//-------------------------------------------♦

// CLASES, CLASSLIST Y METODOS DE CLASSLIST 

// A todos estos metodos se le debe agregar el | classList. | por delante (ej: class.classList.add() ) 

//- add() - Añade una clase
// - remove() - Remueve una clase  
// - item() - Remueve la clase del índice especificado
// - contains() - Verifica si ese elemento posee o no, la clase especificada 
// - replace() - Reemplaza una clase por otra
// - toggle() - Si no tiene la clase especificada, la agrega, si ya la posee, la elimina.

//-------------------------------------------♦

// OBTENCION Y MODIFICACION DE ELEMENTOS

// - textContent - Devuelve el texto de cualquier nodo
// - innerHTML - Devuelve el contenido HTML de un elemento
// - outerHTML - Devuelve el codigo HTML completo del elemento

//-------------------------------------------♦

// CREACION DE ELEMENTOS

// - createElements() 
// - createTextNode()
// - createDocumentFragment() + Recomendado 

// Ejemplo (obvio antes habiendo creado  el class contenedor en html para poder ser llamado en js)

// const contenedor = document.querySelector(".contenedor");

// const fragmento = document.createDocumentFragment();

// for (i = 0; i < 6; i ++){
//     const item = document.createElement("LI");
//     item.InnerHTML = "Este es un ítem de la lista";
//     fragmento.appendChild(item);
// }

// contenedor.appendChild(fragmento);

// console.log(contenedor);

//-------------------------------------------♦

// OBTENCION Y MODIFICACION DE CHILDS (hijos)

// - firstChild - Devuelve el primer hijo
// - lastChild - Devuelve el último hijo
// + firstElementChild - Lo mismo que los de arriba pero recomendados
// + lastElementChild - Lo mismo que los de arriba pero recomendados
// - childNodes - Devuelve TODOS los hijos del nodo
// - children - 

// --------

// Para los primeros 4 ↓
// const contenedor = document.querySelector(".contenedor");

// const primerHijo = contenedor.firstElementChild;

// console.log(primerHijo);

// ----------

// Para childNodes: Al ser un objeto y no un array se puede recorrer con .forEach() 

// const contenedor = document.querySelector(".contenedor");

// const hijos = contenedor.childNodes;

// hijos.forEach(hijo=> console.log(hijo));

// console.log(hijos);

// --------------

// Para children() :

// const contenedor = document.querySelector(".contenedor");

// const hijos = contenedor.children;

// for (hijo of hijos){    // "in"  es de índice y "of" devuelve contenido
//     console.log(hijo);
// }

// ----------------------------------

// METODOS DE CHILDS (hijos)

// - .replaceChild() - Reemplaza un elemento hijo
// - .removeChild() - Remueve un elemento hijo
// - .hasChildNodes() - Te devuelve un elemento hijo (lo "busca")

// Ej para .replaceChild() :   El resto que la chupen es mas o menos lo mismo.

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo =  document.createElement("H2");
// h2_nuevo.innerHTML = "Título";

// h2_antiguo = document.querySelector(".h2");

// contenedor.replaceChild(h2_nuevo, h2_antiguo);  //Acá se pondria .removeChild() para eliminarlo hay que especificar el archivo en los (). 

// ----------------------------

// PROPIEDADES DE PARENTS (padres)

// - parentElement() 

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo =  document.createElement("H2");

// const h2_antiguo = document.querySelector(".h2");

// console.log(h2_antiguo.parentElement); 

// --------------------------

// PROPIEDADES SIBLINGS (hermanos)

// - nextSiblings() - Devuelve el hermano siguiente
// - previousSibling() - Devuelve el hermano posterior
// + nextElementSibling() - Devuelve el elemento hermano siguiente (recomendado)
// + previousElementSibling() - Devuelve el elemento hermano posterior (recomendado)

// const contenedor = document.querySelector(".contenedor");
// const h2_nuevo = document.querySelector(".h2_nuevo")

// console.log(h2_nuevo.nextElementSibling); 

//------------------------------------------------------------------------------------------------▼
//```````````

