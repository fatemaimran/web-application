let cart = [];
let total = 0;

// Function to add items to the cart
function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    cartItems.innerHTML = '';

    cart.forEach((cartItem, index) => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - $${cartItem.price.toFixed(2)}`;
        
        // Add remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeFromCart(index);
        li.appendChild(removeBtn);

        cartItems.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);
}

// Function to remove items from the cart
function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

// Function to simulate checkout with customer details
function checkout() {
    const name = document.getElementById('customer-name').value.trim();
    const email = document.getElementById('customer-email').value.trim();
    const address = document.getElementById('customer-address').value.trim();

    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    if (!name || !email || !address) {
        alert('Please fill in all customer details before checking out.');
        return;
    }

    alert(`Thank you, ${name}! Your order has been placed.\nTotal: $${total.toFixed(2)}\nDelivery to: ${address}`);
    
    // Clear cart and reset form after checkout
    cart = [];
    total = 0;
    updateCart();
    document.getElementById('customer-form').reset();
}
