function calcularTotalEstoque() {
    //pega os inp
    let produto1 = {
        nome: document.getElementById('nome1').value,
        preco: parseFloat(document.getElementById('preco1').value),
        quantidade: parseInt(document.getElementById('quantidade1').value)
    };

    let produto2 = {
        nome: document.getElementById('nome2').value,
        preco: parseFloat(document.getElementById('preco2').value),
        quantidade: parseInt(document.getElementById('quantidade2').value)
    };

    let produto3 = {
        nome: document.getElementById('nome3').value,
        preco: parseFloat(document.getElementById('preco3').value),
        quantidade: parseInt(document.getElementById('quantidade3').value)
    };

    let produtos = [produto1, produto2, produto3];
    
    let totalEstoque = 0;
    let resultadoTexto = '';

    //for p/ mostrar subtotais de cada um
    for (let i = 0; i < produtos.length; i++) {
        let subtotal = produtos[i].preco * produtos[i].quantidade;
        totalEstoque += subtotal;
        resultadoTexto += `${produtos[i].nome}: R$ ${produtos[i].preco.toFixed(2)} x ${produtos[i].quantidade} = R$ ${subtotal.toFixed(2)}\n`;
    }

    resultadoTexto += `\nValor total do estoque: R$ ${totalEstoque.toFixed(2)}`;
    document.getElementById('resultado').textContent = resultadoTexto;
    console.log(resultadoTexto);
}
