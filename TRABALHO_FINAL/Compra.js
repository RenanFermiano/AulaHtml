function adicionarAoCarrinho(id, nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produto = { id, nome, preco, quantidade: 1 };

    // Verifica se o produto já está no carrinho
    const index = carrinho.findIndex(item => item.id === id);
    if (index !== -1) {
        carrinho[index].quantidade += 1;
    } else {
        carrinho.push(produto);
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
}

function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoDiv = document.getElementById('carrinho');
    const mensagemCarrinhoVazio = document.getElementById('mensagem-carrinho-vazio');

    carrinhoDiv.innerHTML = '';

    if (carrinho.length === 0) {
        mensagemCarrinhoVazio.style.display = 'block';
        return;
    }

    mensagemCarrinhoVazio.style.display = 'none';

    carrinho.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.className = 'produto';
        produtoDiv.innerHTML = `
            <h2>${produto.nome}</h2>
            <p>

            function carregarResumoCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const resumoDiv = document.getElementById('resumo-carrinho');

    if (carrinho.length === 0) {
        resumoDiv.innerHTML = '<p>O carrinho está vazio.</p>';
        return;
    }

    resumoDiv.innerHTML = '<h2>Resumo do Carrinho</h2>';

    carrinho.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.className = 'produto';
        produtoDiv.innerHTML = `
            <h2>${produto.nome}</h2>
            <p>Preço: €${produto.preco}</p>
            <p>Quantidade: ${produto.quantidade}</p>;
        resumoDiv.appendChild(produtoDiv);
    });
}

function processarPagamento() {
    // Aqui você pode adicionar validações e processar o pagamento
    alert('Compra finalizada com sucesso!');
    localStorage.removeItem('carrinho');
    window.location.href = 'Indice.html'; // Redireciona para a página inicial após a compra
    return false; // Evita o recarregamento da página
}

// Carrega o resumo do carrinho ao abrir a página de finalização
document.addEventListener('DOMContentLoaded', carregarResumoCarrinho);
