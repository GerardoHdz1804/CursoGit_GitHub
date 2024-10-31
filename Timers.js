window.addEventListener('load', () =>{
    //Timers
    function Intervalo(){
        var tiempo = setInterval(function(){
            console.log("Set Interval ejecutando");
            var titulo = document.getElementById("miTitulo");
            if(titulo.style.fontSize == "50px"){
                titulo.style.fontSize = "2em";
            }else{
                titulo.style.fontSize = "50px";
            }
        }, 1000);

        return tiempo;
    }
    
    tiempo = Intervalo();
    var botonStop = document.getElementById("stop");
    var botonStart = document.getElementById("start");

    botonStop.addEventListener("click", () =>{
        alert("setInterval detenido")
        clearInterval(tiempo);
    });

    botonStart.addEventListener("click", () =>{
        alert("setInterval iniciado")
        tiempo = Intervalo();
    });
});