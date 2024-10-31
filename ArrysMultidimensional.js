'use strict'

var categories = ["Action", "Terror","Drama"];
var movies = ["Bourne Supremacy", "Insidious", "La dolce vita"];

var Cinema = [categories, movies];

console.log(Cinema[0][1]);

//Agregar elementos al arreglo
movies.push("Batman");
console.log(movies);

//Eliminar elementos del arreglo
movies.pop();

//Convertir un arreglo en un string
var moviesString = movies.join();

console.log(moviesString);

//Convertir un string en un arreglo
var text = "text1, texto2, texto3";
var stringArray = text.split(", ");

console.log(stringArray);

//Ordenar un Array
categories.sort();
console.log(categories);