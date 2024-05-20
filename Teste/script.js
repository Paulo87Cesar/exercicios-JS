function calcular() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos");
        return;
    }

    var soma = num1 + num2;

    // Exibir o resultado
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('hidden'); // Mostrar o resultado
    document.getElementById('valorResultado').textContent = soma; // Preencher o valor do resultado
}
