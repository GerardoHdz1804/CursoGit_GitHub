'use strict'
var dato;
var array=[];
for (var i = 0 ; i < 6; i++){
    dato = prompt("Introduce un dato: ");
    array[i] = dato;
}

array.forEach((elemento, indice) => {
    document.write("<li>"+indice+"-"+elemento+"</li>");
    console.log(elemento);
});

document.write("<h1>ARREGLO ORDENANDO</h1>");
array.sort();
array.forEach((elemento, indice) => {
    document.write("<li>"+indice+"-"+elemento+"</li>");
});

document.write("<h1>ARREGLO INVERTIDO</h1>");
array.reverse();
array.forEach((elemento,indice) => {
    document.write("<li>"+indice+"-"+elemento+"</li>");
});

console.log(array.length);