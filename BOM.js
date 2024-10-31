'use strict'

//BOM - Browser Object Model

//Tamaño de la pantalla del navegador
function getBOM(){
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.location.href);
}

//Redireccionar tu URL
function redirect(url){
    window.location.href = url;
}

//Abrir otra ventana con una URL
function openWindow(url){
    window.open(url,"");
}

getBOM();