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
            <p>Preço: €${produto.preco}</p>
            <p>Quantidade: ${produto.quantidade}</p>
        `;
        carrinhoDiv.appendChild(produtoDiv);
    });
}

function finalizarCompra() {
    alert('Compra finalizada!');
    localStorage.removeItem('carrinho');
    carregarCarrinho();
}

// Carrega o carrinho quando a página do carrinho é aberta
if (document.getElementById('carrinho')) {
    carregarCarrinho();
}
