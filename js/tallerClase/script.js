//El error estaba en que cuando click la variable se va a recargar entonces si son globales no se van a recargar con el valor de la funcion sino globalmente por lo que no pueden recoger el valor de funcion

function sumar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 + num2; //primero donde va acumular
    document.getElementById("resultado").textContent = resultado;
}
function restar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 - num2; //primero donde va acumular
    document.getElementById("resultado").textContent = resultado;
}
function multiplicar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 * num2; //primero donde va acumular
    document.getElementById("resultado").textContent = resultado;
}
function dividir() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 / num2; //primero donde va acumular
    document.getElementById("resultado").textContent = resultado;
}

//shift+alt+f