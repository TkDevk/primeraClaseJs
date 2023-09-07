function sumar(){
    var num1 = parseInt(document.getElementById("num1").value); //Asigno valores, (document) significa que  recibe de las cajas de texto el punto hacer referencia a un capturador que seria Get
    //Si quiero que me lo CAPTURE le pongo punto y le escribo value
   //En este caso mis input son text, por eso uso parseInt
   var num2 = parseInt(document.getElementById("num2").value);

   var resultado = num1+num2;

   document.getElementById("resultado").textContent = resultado;//ctrl+space

}//ctrl+k  + c