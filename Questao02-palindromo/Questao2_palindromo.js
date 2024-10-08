function verificarPalindromo() {
    //deixa minusc a palavra
    let palavra = document.getElementById('palavra').value.toLowerCase();
    
    //divide - reverse p/ inverter e junta tudo
    let palavraInvertida = palavra.split('').reverse().join('');
    
    //compara as duas
    if (palavra === palavraInvertida) {
        document.getElementById('resultado').textContent = `"${palavra}" é um palíndromo. Acertouuu`;
    } else {
        document.getElementById('resultado').textContent = `"${palavra}" não é um palíndromo. Errouu, não tente novamente...`; 
    }
}
