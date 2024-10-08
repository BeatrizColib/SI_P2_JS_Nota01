function calculadora() {

    //pega os num do input
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    //pega a oper
    let operacao = document.getElementById('operacao').value;
    let resultado;

    //validar núm
    if (isNaN(numero1) || isNaN(numero2)) {
        resultado = "Por favor, insira dois números válidos.";
    } else { //cód
        switch (operacao) {
            case 'soma':
                resultado = numero1 + numero2;
                break;
            case 'subtracao':
                resultado = numero1 - numero2;
                break;
            case 'multiplicacao':
                resultado = numero1 * numero2;
                break;
            case 'divisao':
                //apenas aqui, pq não é possivel dividir por zero
                if (numero2 === 0) {
                    resultado = "Não existe divisão por zero. Dã";
                } else {
                    resultado = numero1 / numero2;
                }
                break;
            default:
                resultado = "Operação não existe. Selecione uma das quatro";
        }
    }

    //printa o result.
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}