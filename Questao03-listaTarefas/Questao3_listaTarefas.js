let tarefas = []; //array vazio

function adicionarTarefas() {
    // loop de 5 p/ usu digitar
    for (let i = 1; i <= 5; i++) {
        let tarefa = prompt(`Qual a tarefa ${i}ª mais importante:`);
        tarefas.push(tarefa);
    }

    //na ordem de inserçãop
    atualizarLista();

    // qual foi concluida?
    let tarefaConcluida = prompt("Qual número da tarefa você conseguiu realizar? (1 a 5)");
    
    //a que for concluida, sai 
    tarefas.splice(tarefaConcluida - 1, 1);

    //att com as que ja sairam
    atualizarLista();
}

function atualizarLista() {
    let listaTarefasElement = document.getElementById('listaTarefas');
    listaTarefasElement.innerHTML = ''; //limpa e att
    
    //retorna as tarefas p/ html
    tarefas.forEach((tarefa, index) => {
        listaTarefasElement.innerHTML += `<li>${index + 1}. ${tarefa}</li>`;
    });
}
