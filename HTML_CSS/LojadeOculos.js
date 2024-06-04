const products = [
    {
    id: 1,
    name: 'Óculos Aviador',
    image: 'https://via.placeholder.com/200',
    description: 'Óculos aviador clássico com lentes polarizadas.',
    price: 'R$ 199,99'
    },
    {
    id: 2,
    name: 'Óculos Redondo',
    image: 'https://via.placeholder.com/200',
    description: 'Óculos redondo retrô com armação de metal.',
    price: 'R$ 149,99'
    },
    {
    id: 3,
    name: 'Óculos Esportivo',
    image: 'https://via.placeholder.com/200',
    description: 'Óculos esportivo com proteção UV.',
    price: 'R$ 99,99'
    },
    // Adicione mais produtos conforme necessário
    ];
    function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('grid-item');
    productElement.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p>${product.price}</p>
    <a href="product.html?id=${product.id}">Ver Detalhes</a>
    `;
    productsContainer.appendChild(productElement);
    });
    }
    document.getElementById('searchBar').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filteredProducts);
    });
    document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    });