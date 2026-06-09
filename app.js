document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('items-container');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const confirmButton = document.getElementById('confirm-button');
    const totalItemsElement = document.getElementById('total-items');

    let cart = [];
    let total = 0;

    const items = [
        { id: 1, name: 'Shoe', price: 10.00, image: 'Shoe.png' },
        { id: 2, name: 'Bag', price: 20.00, image: 'Bag.png' },
        { id: 3, name: 'football', price: 30.00, image: 'football.png' },
        { id: 4, name: 'laptop', price: 150.00, image: 'laptop.png' },
        { id: 5, name: 'shirt', price: 5.00, image: 'shirt.png' }
    ];

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        itemsContainer.appendChild(itemElement);
    });

    window.addToCart = (itemId) => {
        const item = items.find(i => i.id === itemId);
        if (item) {
            const existingCartItem = cart.find(cartItem => cartItem.id === itemId);
            if (existingCartItem) {
                existingCartItem.quantity += 1;
            } else {
                cart.push({ ...item, quantity: 1 });
            }
            total += item.price;
            updateCart();
            updateTotalItems();
        }
    };

    window.confirmSelection = () => {
        hideItems(); 
        disableAddToCartButtons(); 
        confirmButton.style.display = 'none'; 
    };

    const updateCart = () => {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <p>${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</p>
            `;
            cartItems.appendChild(cartItem);
        });
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    };

    const hideItems = () => {
        itemsContainer.style.display = 'none'; 
    };

    const disableAddToCartButtons = () => {
        const addToCartButtons = document.querySelectorAll('.item button');
        addToCartButtons.forEach(button => {
            button.disabled = true; 
        });
    };

    const updateTotalItems = () => {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        totalItemsElement.textContent = totalItems;
    };
});
