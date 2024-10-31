'use strict'

//Transformacion de textos

var numero = 444;
var texto1 = "Bienvenido al curso de Javascript con Gerita eae";
var texto2 = "Es muy buen curso";

//Convertir numero en texto
var dato = numero.toString();
//Texto a Minusculas
dato = texto1.toLowerCase();
//Texto a Mayusculas
dato = texto2.toUpperCase();
console.log(dato);

//Calcula longitud de un texto
var nombre  = "";
console.log(nombre.length);

// Metodos de Busqueda en cadenas
var Busqueda = texto1.indexOf("curso");
var Busqueda2 = texto1.search("curso");
console.log(Busqueda);

var text = texto1.split(" ");
console.log(text);

