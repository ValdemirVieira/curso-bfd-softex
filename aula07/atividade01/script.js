function calcularSoma() {
    let numeros = [10, 20, 30, 40, 50];
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    }
    
    document.getElementById("resultado").innerText = "A soma dos elementos é: " + soma;
}