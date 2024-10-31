class TransbordadorEspacial {
    constructor(planeta) {
        this.planeta = planeta;
    }
}

class Mascota{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

var zeus = new TransbordadorEspacial("Jupiter");
console.log(zeus.planeta);

var miMascota = new Mascota("Yoshi", 12);

//Getter y Setters

class Libro{
    constructor(autor){
        this._autor = autor; //Cuando se pone el guion bajo significa por convencion una propiedad privada
    }
    get autor(){
        return this._autor;
    }

    set autor(nuevoAutor){
        this._autor = nuevoAutor;
    }
}

const libro = new Libro("anonimo");
console.log(libro.autor)


var datos = document.getElementById("datos");

datos.innerHTML = "<h1>Jose Gerardo Hernandez Macias<h1>";


function GuawMiaw(num){
    var array = [];
    for (let i = 1; i <= num; i++){
      if (i%3 == 0){
        if(i%5 == 0){
          array[i-1] = "guawmiaw";
        }else{
          array[i-1] ="guaw";
        }
      }else{
        if(i%5 == 0){
          array[i-1] ="miaw";
        }else{
          array[i-1] = i;
        }
      }
    }
  
    return array;
  }

var arreglo = GuawMiaw(20);

for (let i = 0; i<arreglo.length;i++){
    datos.innerHTML += `<br><strong>${arreglo[i]}</strong>`;
} 