let products = [
    { name: "Boucles Sakura", category: "earrings", price: 15.99, image: "images/sakura.jpg" },
    { name: "Boucles Soleil", category: "earrings", price: 18.99, image: "images/soleil.jpg" },
    { name: "Boucles Étoile", category: "earrings", price: 12.99, image: "images/etoile.jpg" },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">€${product.price.toFixed(2)}</p>
                <button onclick="addToCart('${product.name}')">Ajouter au panier</button>
            </div>
        `;
    });
}

function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${productName} ajouté au panier !`);
}

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
}

document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    updateCartCount();
});
