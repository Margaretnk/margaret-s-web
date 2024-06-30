// JavaScript code for managing products and cart functionality

// Array containing product information
const products = [
    {
        id: 1,
        name: "Adire",
        description: "A beautiful cotton fabric with vibrant Adire patterns. (6yrds)",
        category: "fabrics",
        originalPrice: 9500,
        discountPercentage: 10,
        imageUrl: "./fabrics-collection/adire2-8500.jpg",
        rating: 4,
        reviews: [
            { user: "User1", comment: "Great fabric!", stars: 5 },
            { user: "User2", comment: "Nice design.", stars: 4 },
            { user: "User3", comment: "Somewhat nice.", stars: 3 },
            { user: "User2", comment: "Mixed feelings.", stars: 2 }
        ]
    },
    
    {
        id: 2,
        name: "Adire",
        description: "A beautiful cotton fabric with vibrant Adire patterns. (6yrds)",
        category: "fabrics",
        originalPrice: 9500,
        discountPercentage: 10,
        // img: "./images/1st-item.jpeg",
        imageUrl: "./fabrics-collection/adire2-8500.jpg",
        rating: 4,
        reviews: [
            { user: "User1", comment: "Great fabric!", stars: 5 },
            { user: "User2", comment: "Nice design.", stars: 4 },
            { user: "User3", comment: "Somewhat nice.", stars: 3 },
            { user: "User2", comment: "Mixed feelings.", stars: 2 }
        ]
    },
];
// Function to calculate discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice * (1 - discountPercentage / 100);
}

// Function to generate HTML for each product
function generateProductHTML(product) {
    const discountedPrice = calculateDiscountedPrice(product.originalPrice, product.discountPercentage);

    return `
        <!-- Product card -->
        <div class="col col-md-3 hover-scale position-relative" style="cursor: pointer;">
            <img src="${product.imageUrl}" alt="${product.name}" class="rounded-2 img-fluid">
            <div class="text-start name mt-1" style="font-size: 14px;">
                ${product.name}
            </div>
            <!-- Price and discount information -->
            <div class="price" style="font-size: 13px;">
                <div class="d-flex align-items-center">
                    <div class="text-start discounted-price" style="font-weight: bold;">N ${discountedPrice.toFixed(2)}</div>
                    ${product.discountPercentage > 0 ? `<div class="text-start original-price text-decoration-line-through" style="opacity: 0.7; margin-left: 5px;">N ${product.originalPrice}</div>` : ""}
                    ${product.discountPercentage > 0 ? `<div class="discount-badge" style="background-color: #FEF3E9; color: #F68B1E; padding: 0.25rem 0.5rem; font-size: 12px; border-radius: 0.25rem; margin-left: 5px;">-${product.discountPercentage}%</div>` : ""}
                </div>
            </div>
            <!-- Star rating -->
            <div class="star-rating">
                ${'&#9733;'.repeat(product.rating)}
                ${'&#9733;'.repeat(5 - product.rating)}
                <span class="rating-number">(${product.reviews.length})</span>
            </div>
            <!-- Review section -->
            <div class="review-section">
                <button class="btn btn-link" onclick="showReviewForm(${product.id})">Add Review</button>
            </div>
            <!-- Add to Cart button -->
            <div class="add-to-cart-btn">
                <button class="btn btn-warning text-white" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
}

// Function to render products on page load
function renderProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = products.map(generateProductHTML).join('');
}

// Event listener to render products when the DOM content is loaded
document.addEventListener('DOMContentLoaded', renderProducts);

// Array to store cart items
const cart = [];

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartDisplay();
    }
}

// Function to update the cart display
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-container');
    // Calculate total price of items in cart
    const totalPrice = cart.reduce((total, product) => total + calculateDiscountedPrice(product.originalPrice, product.discountPercentage), 0);
    // Generate HTML for cart items
    cartContainer.innerHTML = `
        <h5>Cart</h5>
        <ul>
            ${cart.map(product => `<li>${product.name} - N ${calculateDiscountedPrice(product.originalPrice, product.discountPercentage).toFixed(2)}</li>`).join('')}
        </ul>
        <div>Total: N ${totalPrice.toFixed(2)}</div>
    `;
}

// Function to show review form for a product
function showReviewForm(productId) {
    // Placeholder function for showing a review form
}
