'use strict' 

var arreglo = ["Gerardo","Raymundo","Javier","Natalia","Luis",22,true];
console.log(arreglo);
console.log(arreglo[2]);
console.log(arreglo.length);

//Recorrer arreglo con ForEach
arreglo.forEach((elemento, index, data)=> {
    document.write("<li>"+index+"-"+elemento+"</li>");
});

//Recorrer arreglo con For
for(var i = 0; i < arreglo.length; i++){
    document.write("<li>"+arreglo[i]+"</li>");
}

//Recorrer arreglo con For in
for (var elements in arreglo){
    document.write("<li>"+arreglo[elements]+"</li>");
}

//Buscar en un Array

var busqueda = arreglo.find(elementos => elementos == "Gerardo");

console.log(busqueda);

