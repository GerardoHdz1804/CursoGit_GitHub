'use strict'

var nombre = prompt("Ingresa nombre");
var apellido = prompt("Ingresa apellido:");

var texto = ` 
    <h1> Hola que tal</h1>
    <h3> Mi nombre es: ${nombre} </h3>
    <h3> Mis apellidos son: ${apellido}</h3>

`;

document.write(texto);

