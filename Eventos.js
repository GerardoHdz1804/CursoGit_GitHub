//Eventos del Raton
function CambiarColorCaja(){
    boton.style.background="green";

}
var boton = document.getElementById("miBoton");
boton.addEventListener('click', function(){CambiarColorCaja()});


//Mouse Over
boton.addEventListener('mouseover', function(){
    boton.style.background = "red";
});

//Mouse Out
boton.addEventListener('mouseout', function(){
    boton.style.background = "black";
});

