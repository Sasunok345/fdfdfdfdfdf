const products = [
    { id: 1, name: 'Товар 1', price: 100 },
    { id: 2, name: 'Товар 2', price: 200 },
    { id: 3, name: 'Товар 3', price: 300 },
];

let cart = [];

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = 
            <span>${product.name} - ${product.price}₽</span>
            <button onclick="addToCart(${product.id})">Добавить в корзину</button>
        ;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(${product.name} добавлен в корзину!);
}

function showCart() {
    alert('Корзина:n' + cart.map(item => ${item.name} - ${item.price}₽).join('n'));
}

function showProfile() {
    alert('Профиль пользователя');
}

// Инициализация
renderProducts();
