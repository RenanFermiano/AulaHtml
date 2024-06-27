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
    carrinhoDiv.innerHTML = '';

    if (carrinho.length === 0) {
        carrinhoDiv.innerHTML = '<p>O carrinho está vazio.</p>';
        return;
    }

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

document.addEventListener('DOMContentLoaded', () => {
    const botoesAdicionarCarrinho = document.querySelectorAll('.adicionar-carrinho');

    botoesAdicionarCarrinho.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            const produto = evento.target.parentElement;
            const produtoId = produto.getAttribute('data-id');
            const produtoNome = produto.querySelector('p').innerText;

            adicionarAoCarrinho(produtoId, produtoNome);
            mostrarCarrinho();
        });
    });

    function adicionarAoCarrinho(produtoId, produtoNome) {
        const listaCarrinho = document.getElementById('lista-carrinho');
        const itemCarrinho = document.createElement('li');
        itemCarrinho.textContent = `ID: ${produtoId} - ${produtoNome}`;
        listaCarrinho.appendChild(itemCarrinho);

        // Remove a mensagem de carrinho vazio
        const mensagemCarrinhoVazio = document.getElementById('mensagem-carrinho-vazio');
        if (mensagemCarrinhoVazio) {
            mensagemCarrinhoVazio.style.display = 'none';
        }
    }

    function mostrarCarrinho() {
        document.getElementById('catalogo').style.display = 'none';
        document.getElementById('carrinho').style.display = 'block';
    }
});
