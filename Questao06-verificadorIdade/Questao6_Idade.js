function verificarIdades() {
    let pessoas = [ //armazena os dados
        { nome: document.getElementById('nome1').value, idade: parseInt(document.getElementById('idade1').value) },
        { nome: document.getElementById('nome2').value, idade: parseInt(document.getElementById('idade2').value) },
        { nome: document.getElementById('nome3').value, idade: parseInt(document.getElementById('idade3').value) },
        { nome: document.getElementById('nome4').value, idade: parseInt(document.getElementById('idade4').value) },
        { nome: document.getElementById('nome5').value, idade: parseInt(document.getElementById('idade5').value) }
    ];

    // guarda so os +18
    let maioresDeIdade = '';

    //loop p/ verificação
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade > 18) {
            maioresDeIdade += `${pessoas[i].nome} tem + de 18 anos e pode ser presa/o.\n`;
        }
    }

    //print final
    document.getElementById('resultado').textContent = maioresDeIdade ? maioresDeIdade : 'Nenhuma pessoa com mais de 18 anos. Só tem enzo';
}
