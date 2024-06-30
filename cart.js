let ShoppingCart = document.getElementById("shopping-cart");
let label = document.getElementById("label");

// Basket to hold all the selected items
let basket = JSON.parse(localStorage.getItem("nk-stitches-cart")) || [];

// Function to calculate total amount of selected Items
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

// Function to generate the Cart Page with product cards
let generateCartItems = () => {
  if (basket.length !== 0) {
    ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || {};
        let { img, price, name } = search;
        return `
          <div class="cart-item">
            <img width="100" src=${img} alt="${name}" />

            <div class="details">
              <div class="title-price-x">
                <h4 class="title-price">
                  <p>${name}</p>
                  <p class="cart-item-price">₦ ${price.toLocaleString()}</p>
                </h4>
                <i onclick="removeItem('${id}')" class="bi bi-x-lg"></i>
              </div>

              <div class="cart-buttons">
                <div class="buttons">
                  <i onclick="decrement('${id}')" class="bi bi-dash-lg"></i>
                  <div id=${id} class="quantity">${item}</div>
                  <i onclick="increment('${id}')" class="bi bi-plus-lg"></i>
                </div>
              </div>

              <h3>₦ ${(item * price).toLocaleString()}</h3>
            </div>
          </div>
        `;
      })
      .join("");
  } else {
    ShoppingCart.innerHTML = "";
    label.innerHTML = `
      <h2>Cart is Empty</h2>
      <a href="index.html">
        <button class="HomeBtn">Back to Home</button>
      </a>
    `;
  }
};

generateCartItems();

// Function to increase the selected product item quantity by 1
let increment = (id) => {
  let search = basket.find((x) => x.id === id);

  if (search === undefined) {
    basket.push({ id, item: 1 });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(id);
  localStorage.setItem("nk-stitches-cart", JSON.stringify(basket));
};

// Function to decrease the selected product item quantity by 1
let decrement = (id) => {
  let search = basket.find((x) => x.id === id);

  if (search === undefined || search.item === 0) return;
  else {
    search.item -= 1;
  }

  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  update(id);
  localStorage.setItem("nk-stitches-cart", JSON.stringify(basket));
};

// Function to update the quantity of items on each card
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

// Function to remove a selected product card from basket
let removeItem = (id) => {
  basket = basket.filter((x) => x.id !== id);
  generateCartItems();
  calculation();
  TotalAmount();
  localStorage.setItem("nk-stitches-cart", JSON.stringify(basket));
};

// Function to calculate total amount of selected Products
let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id, item } = x;
        let product = shopItemsData.find((y) => y.id === id) || {};
        return product.price * item;
      })
      .reduce((x, y) => x + y, 0);

    label.innerHTML = `
      <h2>Total Bill : ₦ ${amount.toLocaleString()}</h2>
      <button class="checkout">Checkout</button>
      <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    `;
  } else {
    label.innerHTML = '';
  }
};

TotalAmount();

// Function to clear cart and remove everything from local storage
let clearCart = () => {
  basket = [];
  generateCartItems();
  calculation();
  localStorage.setItem("nk-stitches-cart", JSON.stringify(basket));
};
