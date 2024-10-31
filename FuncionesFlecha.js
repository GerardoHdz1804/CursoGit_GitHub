const fecha = () => new Date();

const sumarTres = (x) => x+3;

console.log(sumarTres(4));


const concatenarArreglos = (arr1, arr2) => arr1.concat(arr2);

console.log(concatenarArreglos([1,2,3], [4,5,6]));

const sumar = (a,b) => {
    let num = 5;
    return a + b + num;
};

console.log(sumar(5,5));

//Parametros por defecto en funciones flecha
const incrementar = (num, valor=1) => num + valor;

console.log(incrementar(4)); // 5
console.log(incrementar(4,3));// 7
