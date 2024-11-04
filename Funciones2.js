'use strict'

//Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    
}

listadoFrutas("Manzana","Sandia","Jicama","Piña","Tu culo")
var frutas = ["Naranja","Manzana"];
listadoFrutas(...frutas,"Sandia","Pera");

//Funciones Anonimas
var pelicula = function(nombre){
    return "La pelicula es: "+ nombre;
};

var pelicula2 = function(nombre){
    return "La pelicula dos es: "+ nombre;
};

function sumame(num1, num2, sumaMuestra, sumaDos, sumaTres){
    var sumar = num1 + num2;
    sumaMuestra(sumar);
    sumaDos(sumar);
    sumaTres(sumar+1)
    return sumar;
}

function restame(num1, num2, restaMuestra, restaDos, restaTres){
    var restar = num1 - num2;
    restaMuestra(restar);
    restaDos(restar);
    restaTres(restar-1)
    return restar;
}

//Funciones Flecha
sumame(5,7, dato => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("La suma por dos es", (dato*2));
});


