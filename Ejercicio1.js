'use strict'
//Programa que pida dos numeros y me diga si es mayor, el menor o si son iguales.

var numOne = parseInt(prompt("Ingresa un numero:", 0));
var numTwo = parseInt(prompt("Ingresa un numero:", 0));

if(numOne > numTwo){
    alert("el numero uno es mayor: "+ numOne);
}else if(numOne == numTwo){
        alert("Los numeros son iguales");
    }else{
        alert("El numero dos es mayor: "+ numTwo);
    }
