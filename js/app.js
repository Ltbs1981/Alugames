var totalJogosAlugados = 0;
let pessoasQueAlugaram = {}; // Novo objeto para armazenar quem alugou cada jogo

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    // Verifica se o usuário cancelou a operação
    if (botao.textContent === "Alugar") {
        let nomePessoa = prompt("Diga o  seu nome para alugar o jogo.");
        
        
        // Incrementa o total de jogos alugados apenas se a ação for "Alugar"
        if (nomePessoa !== null) {
            totalJogosAlugados++;
            pessoasQueAlugaram[nomeJogo.textContent] = nomePessoa; // Armazena quem alugou esse jogo
            alert(`Tudo bem ${nomePessoa}, já pode pegar o jogo ${nomeJogo.textContent}, no total da loja, ${totalJogosAlugados} já foram alugados.`);
        }
    } else if (botao.textContent === "Devolver") {
        // Verifica se a pessoa que está devolvendo é a mesma que alugou
        let nomeAluguel = prompt("Qual é o nome da pessoa que alugou o jogo?");
        
        if (nomeAluguel === null || nomeAluguel.toLowerCase() !== pessoasQueAlugaram[nomeJogo.textContent].toLowerCase()) {
            alert("Entre com o nome correto da pessoa que alugou o jogo, para que ele possa ser devolvido.");
            return;
        }

        botao.textContent = "Alugar";
        alert(`Tudo bem ${pessoasQueAlugaram[nomeJogo.textContent]}, obrigado por devolver o jogo ${nomeJogo.textContent}`);
    }

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}
