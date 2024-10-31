'use strict'
//DOM - Document Object Model

function cambiaColor(color){
    caja.style.background = color;
}
//Conseguir elemento por su id
var caja = document.getElementById("miCaja");
var cajaDos = document.querySelector("#miCaja");

caja.innerHTML = "Aqui estoy agregando el texto con JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";

//Conseguir elemento por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
var contenidoTexto = todosLosDivs[2].textContent;
console.log(contenidoTexto);


//Conseguir elementos por su clase css
var objetoClase = document.getElementsByClassName("miClase");
console.log(objetoClase);

console.log(caja);
