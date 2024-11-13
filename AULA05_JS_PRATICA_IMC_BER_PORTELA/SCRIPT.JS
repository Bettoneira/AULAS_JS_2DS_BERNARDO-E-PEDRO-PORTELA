var peso;
var altura;
var imc;
var resultado;

// Função que recebe o evento
function calcular(event) {
    // Prevenir o refresh do input
    event.preventDefault();

    // Recebendo os dados digitados pelo usuário
    peso = parseFloat(document.getElementById('peso').value);
    altura = parseFloat(document.getElementById('altura').value);

    // Calcular o IMC
    imc = peso / (altura * altura);

    // Testando a recepção dos valores de peso, altura e o cálculo do IMC
    console.log(peso);
    console.log(altura);
    console.log(imc);

    resultado = document.getElementById('resultado');

    // Condições baseadas no valor do IMC
    if (imc < 17) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br>Cuidado, você está muito abaixo do peso.';
    } else if (imc >= 17 && imc < 18.5) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br>Você está abaixo do peso.';
    } else if (imc >= 18.5 && imc < 24.99) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br>Você está no peso normal.';
    } else if (imc >= 25 && imc < 29.99) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br>Você está acima do peso.';
    } else {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br>Você está obeso.';
    }
}