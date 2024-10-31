var contactos = [
    {
      "nombre": "Gerardo",
      "apellido": "Hernandez",
      "numero":"123456789",
      "gustos":["Comer", "Programacion"]
    },
    {
        "nombre" : "Harry",
        "apellido" : "Potter",
        "numero":"789456123",
        "gustos":["Hogwarts", "Magia"]

    },
    {
        "nombre":"Obi-Wan",
        "apellido":"Kenobi",
        "numero":"456123789",
        "gustos":["La Fuerza", "Los sables"]
    }
];

var flag = false;

function BuscarPerfil(nombre, propiedad){
    for (let i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre === nombre){
            if(contactos[i].hasOwnProperty(propiedad)){
                console.log(contactos[i].nombre);
                console.log(contactos[i][propiedad]);
                flag = true;
                break;
            }else{
                console.log("Esa propiedad no existe");
                break;
            }
        }
    }

    if(!flag){
        console.log("No se encontro el nombre seleccionado");
    }
}



BuscarPerfil("Paco", "apellido");