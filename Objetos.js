var coleccionesDeDiscos = {
    7853: {
      tituloAlbum: "Bee Gees Greatest",
      artista : "Bee Gees",
      canciones: ["Stayin Alive"]
    },
    5439: {
      tituloDelAlbum: "ABBA Gold"
    }
  };
  
  function ActualizarDiscos(objDiscos, id, propiedad, valor){
    if (valor === ""){
      if(objDiscos[id].hasOwnProperty(propiedad)){
        delete objDiscos[id][propiedad];
      }else{
        console.log("Esa propiedad no existe para borrar");
      }
    }else{
      if (propiedad === "canciones"){
        if(objDiscos[id].hasOwnProperty(propiedad)){
          objDiscos[id][propiedad].push(valor);
        }else{
          objDiscos[id][propiedad] = [];
          objDiscos[id][propiedad].push(valor);
        }
        
      }else{
          objDiscos[id][propiedad] = valor;
      }
    }
  }
  
  console.log(coleccionesDeDiscos[7853].anio);
  ActualizarDiscos(coleccionesDeDiscos,7853,"anio","1975");
  console.log(coleccionesDeDiscos[7853].anio);
  