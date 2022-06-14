function respuesta(num_pregunta, seleccionada){
    //Guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;


    id="p" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    
    seleccionada.parentNodes.style.backgroundColor = "cec#0fc";
}


function corregir(){
    cantidad_correctas=0;
    for(i=0;i<correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }

    document.getElementById("resultado").innerHTML = cantidad_correctas;
}