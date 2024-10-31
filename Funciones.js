'use strict'

//Funciones

function calculadora(){
    return "Hola soy la calculadora";
}

function Operaciones(num1, num2, mostrar = false){

    if(!mostrar){
    console.log("Suma: "+(num1+num2))
    console.log("Resta: "+(num1-num2))
    console.log("Mult: "+(num1*num2))
    console.log("Division: "+(num1/num2))
    console.log(mostrar)
    }else{
        document.write("Suma: "+(num1+num2)+"<br>")
        document.write("Resta: "+(num1-num2)+"<br>")
        document.write("Mult: "+(num1*num2)+"<br>")
        document.write("Division: "+(num1/num2)+"<br>")
    }

}

//Parametros Opcionales
Operaciones(10,15);
Operaciones(10,15,true);


