// Toggle Mobile Menu
const navbar = document.getElementById("navbar");
const mobileMenu = document.getElementById("mobile");
const closeMenu = document.getElementById("close");
const barIcon = document.getElementById("bar");

if (barIcon) {
    barIcon.addEventListener("click", () => {
        navbar.classList.add("active");
    });
}

if (closeMenu) {
    closeMenu.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
}

// Cart Functionality
let cart = [];
const cartIcon = document.querySelector("#lg-bag a");
const shopNowButtons = document.querySelectorAll("#shopNowBtn");
const addToWishlistButtons = document.querySelectorAll("#addToWishlistBtn");

// Add to Cart
shopNowButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const product = e.target.closest(".pro");
        const productName = product.querySelector("h5").innerText;
        const productPrice = product.querySelector("h4").innerText;

        const item = {
            name: productName,
            price: productPrice,
        };

        cart.push(item);
        updateCartIcon();
        alert(`${productName} added to cart!`);
    });
});

// Add to Wishlist
addToWishlistButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const product = e.target.closest(".pro");
        const productName = product.querySelector("h5").innerText;
        alert(`${productName} added to wishlist!`);
    });
});

// Update Cart Icon
function updateCartIcon() {
    const cartCount = cart.length;
    if (cartCount > 0) {
        cartIcon.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> (${cartCount})`;
    } else {
        cartIcon.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
    }
}

// Pagination
const paginationLinks = document.querySelectorAll("#pagination a");
paginationLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        alert(`Loading page: ${link.innerText}`);
    });
});

// Smooth Scrolling for Footer Links
const footerLinks = document.querySelectorAll(".footer-section a");
footerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Social Media Icons Hover Effect
const socialIcons = document.querySelectorAll(".social-icons i");
socialIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
        icon.style.color = "#ff3f6c"; // Change color on hover
    });
    icon.addEventListener("mouseleave", () => {
        icon.style.color = ""; // Reset color
    });
});

// Product Click Redirection
const productContainers = document.querySelectorAll(".pro-container .pro");
productContainers.forEach((product) => {
    product.addEventListener("click", () => {
        window.location.href = "singleproduct.html"; // Redirect to product details page
    });
});

// Login Button Functionality
const loginButton = document.querySelector(".login-btn");
if (loginButton) {
    loginButton.addEventListener("click", () => {
        window.location.href = "login.html"; // Redirect to login page
    });
}