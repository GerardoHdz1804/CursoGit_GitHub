const usuario = {
    nombre: "Gerardo Hernandez",
    edad : 29
};

//const{nombre,edad} = usuario; //Se crea entre corchetes dos variables que coincidan con el nombre de la propiedad del objeto y se asignan automaticamente

console.log(nombre);

//Desestructuracion con objetos anidados
const usuarioDos = {
    johnDoe: {
        edad : 27,
        correo: "johnDoe@freecodecamp.com"
    }
};

const{johnDoe: {edad,correo}} = usuarioDos;
const{johnDoe: {edad: edadDelUsuario, correo:correoDelUsuario}} = usuarioDos; //Para cambiar el nombre de variables

