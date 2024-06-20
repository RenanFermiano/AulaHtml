function addToCart(product) {
    alert(product + " foi adicionado ao carrinho!");
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('data/products.json')
        .then(response => response.json())
        .then(products => {
            const productsContainer = document.querySelector('.products');
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Preço: €${product.price}</p>
                    <button onclick="addToCart('${product.name}')">Adicionar ao Carrinho</button>
                `;
                productsContainer.appendChild(productElement);
            });
        });
});