var contador = 0; //0 porque va ir cambiando

function contarClick(){
  //Inicializo variable
     contador++; //Es como si dijera contador+1
     
     document.getElementById("contador").textContent = contador;
    //  se puede resumir todo asi > document.getElementById("count").textContent = counter++; 
}