function gerarTabuada() {
    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');
    
    if (numero > 0) { /*loop p/ mult de 1 a 10*/
        let tabuada = '';
        for (let i = 1; i <= 10; i++) {
            tabuada += `${numero} x ${i} = ${numero * i}\n`;
        }
        resultado.textContent = tabuada;
    } else {
        resultado.textContent = "Eu disse positivo, ou seja, acima de 0, dã";
    }
}
