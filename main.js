
document.addEventListener('submit', function(e) {
    e.preventDefault();
    greaterNum();
})

function greaterNum() {

    var valor1 = document.getElementById('numero1').value;
    var valor2 = document.getElementById('numero2').value;

    if (parseFloat(valor1) > parseFloat(valor2))
        alert("Valor inválido") 
    else {
        alert ("Valor válido")
    }}