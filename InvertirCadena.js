function InvertString(string){
    var invertedString = [];
    var invertedStringTwo = "";
    var stringLen = string.length;

    for (let i = 0; i < string.length; i++) {
        invertedString[i] = string[stringLen-1];
        invertedStringTwo+=string[stringLen-1];
        stringLen--;
    }

    //return invertedString.join(""); 
    return invertedStringTwo;
}

function Fibonacci(num){
  var fibonacci = [0,1];
  var sumatoria = 0, total=0;
  for(let i = 0; i < num; i++){
    sumatoria = fibonacci[i] + fibonacci[i+1];
    total+=sumatoria;
    fibonacci.push(sumatoria);
  }

  console.log("El total de la serie fibonacci es: "+total);
  console.log(fibonacci.join(","));

}

console.log(InvertString("Jose Gerardo Hernandez Macias"));

function GuawMiaw(num){
    for (let i = 1; i <= num; i++){
      if (i%3 == 0){
        if(i%5 == 0){
          console.log("guawmiaw");
        }else{
          console.log("guaw");
        }
      }else{
        if(i%5 == 0){
          console.log("miaw");
        }else{
          console.log(i);
        }
      }
    }
  }

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
  
    for(let i = 0; i<array.length; i++){
      console.log(array[i]);
    }
  }