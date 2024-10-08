const contenedor = document.querySelector(".flex-container");

function crearTabla(nombre,modelo,precio){
    img = img = "<img class='tablita-img' src='tablita.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio:   <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}

let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 20; i++){
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let tabla = crearTabla(`tabla ${i}`,`modelo ${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
    document.querySelector(".tabla-data").value = modeloRandom
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = tabla[0] + tabla[1] + tabla[2] + tabla[3];
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);