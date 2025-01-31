// Sample cart items
const cartItems = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 39.99 },
    { id: 3, name: "Product 3", price: 49.99 },
];

// Function to render cart items
function renderCart() {
    const cartTable = document.getElementById("cart-items");
    cartTable.innerHTML = ""; // Clear existing items

    cartItems.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><input type="checkbox" class="item-select" data-id="${item.id}"></td>
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><button class="remove-item" data-id="${item.id}">Remove</button></td>
        `;
        cartTable.appendChild(row);
    });
}

// Function to buy selected items
function buySelected() {
    const selectedItems = Array.from(document.querySelectorAll(".item-select:checked"));
    if (selectedItems.length === 0) {
        alert("No items selected for purchase.");
        return;
    }

    const selectedIds = selectedItems.map(item => item.getAttribute("data-id"));
    alert(`Buying items with IDs: ${selectedIds.join(", ")}`);
    // Here you can add your logic to process the purchase
}

// Function to buy all items
function buyAll() {
    alert("Buying all items in the cart.");
    // Here you can add your logic to process the purchase
}

// Function to clear the cart
function clearCart() {
    cartItems.length = 0; // Clear the cart items array
    renderCart(); // Re-render the cart
}

// Event listeners
document.getElementById("buy-selected").addEventListener("click", buySelected);
document.getElementById("buy-all").addEventListener("click", buyAll);
document.getElement