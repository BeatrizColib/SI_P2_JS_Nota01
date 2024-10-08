let aluno = {
    nome: '',
    notas: [], //ar vaz
    media: function() {
        let soma = 0; //vai somando
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
};

function calcularMedia() {
    aluno.nome = document.getElementById('nomeAluno').value;
    aluno.notas = [
        parseFloat(document.getElementById('nota1').value),
        parseFloat(document.getElementById('nota2').value),
        parseFloat(document.getElementById('nota3').value)
    ];

    let media = aluno.media();
    document.getElementById('resultado').textContent = `A média da criatura - ${aluno.nome} - é ${media.toFixed(2)}.`;
};
