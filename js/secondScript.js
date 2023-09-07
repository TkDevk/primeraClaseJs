//Insercion de los colores a proyectar en el fondo
var colores = ["red", "green", "blue", "yellow", "purple"]; //arreglo
//Se trabaja mendiante posiciones [0 1 2 3 4 ]

//Inicializacion de la posicion en 0
var indice = 0;


//Inicializamos la funcion
function cambiarColorFondo(){

    //Cambiar el color de fondo del elmento body
    document.body.style.backgroundColor=colores[indice];
    //Entro a documento html, despues indico que retorne body luego que quiero un estilo y estilo seria el backgroundColor, le asigno la opcion a colores(indice indicaria que el array esta en 0 osea red)
    
    //Incremento el indice y asegurarse de que vuelva a 0. cuando alcance al el final, de la lista de colores

    indice= (indice+1) % colores.length; //Cuantos colores hay dentro del arreglo
    
} 