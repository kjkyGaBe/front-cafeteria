let nomeAdicionado = false; // Variável para controlar se o nome foi adicionado

function adicionarNome() {
    const nomeInput = document.getElementById('nome');
    const nome = nomeInput.value.trim(); 

    if (nome) {
        const nomesDiv = document.getElementById('nomesAdicionados');
        nomesDiv.innerHTML += `<p>${nome}</p>`;
        nomeInput.value = '';
        nomeAdicionado = true; // marca se o nome foi colocado
    } else {
        alert("Por favor, insira seu nome."); // Alerta se o nome estiver vazio
    }
}

function proximaTela() {
    if (!nomeAdicionado) {
        alert("Por favor, adicione seu nome antes de prosseguir."); // pede pelo nome
        return; // Não avança se o nome não foi adicionado
    }

    window.location.href = 'cardapio.html'; // Avança para a próxima tela
}

// Torna o botão clicável para fazer o pedido.
function selecionarItem(item) {
    const items = document.querySelectorAll('.item');
    items.forEach(i => i.classList.remove('selecionado'));
    item.classList.add('selecionado');
}

// Nome dos dois abaixo é auto-explicativo.
function confirmarPedido() {
    const itemsSelecionados = document.querySelectorAll('.item.selecionado'); // Seleciona os itens com a classe 'selecionado'

    if (itemsSelecionados.length === 0) {
        alert("Por favor, selecione pelo menos um item para finalizar o pedido."); // pede para pessoa selecionar um pedido
        return; // Não avança se nenhum item estiver selecionado
    }

    window.location.href = 'agradecimento.html'; // joga pra tela de carregamento
}

function cancelarPedido() {
    const items = document.querySelectorAll('.item');
    items.forEach(i => i.classList.remove('selecionado'));
}