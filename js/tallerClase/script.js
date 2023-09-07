let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);



function sumar(){
   resultado=num1+num2; //primero donde va acumular
   let resultado = document.getElementById("resultado").textContent;
}
function restar(){
    resultado=num1-num2; //primero donde va acumular
   let resultado = document.getElementById("resultado").textContent;
}
function multiplicar(){
    resultado=num1*num2; //primero donde va acumular
   let resultado = document.getElementById("resultado").textContent;
}
function dividir(){
    resultado=num1/num2; //primero donde va acumular
   let resultado = document.getElementById("resultado").textContent;
}