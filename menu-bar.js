// Working on the function of the select options of the menu-bar

// Assuming shopItemsData is defined in cart-data.js and included in your HTML

// Get references to the category elements
const allCategory = document.querySelector("#allCategory a");
const fabricsCategory = document.querySelector("#fabricsCategory a");
const readyToWearCategory = document.querySelector("#readyToWearCategory a");
const bagsCategory = document.querySelector("#bagsCategory a");

// Function to generate shop items based on a category filter
const generateFilteredShop = (category) => {
    // Get the shop container to display filtered items
    let shopContainer = document.getElementById("shop");

    // Filter items by category
    let filteredItems;
    if (category === "all") {
        filteredItems = shopItemsData; // Show all items
    } else {
        filteredItems = shopItemsData.filter((item) => item.category === category);
    }

    // Generate HTML for filtered items
    shopContainer.innerHTML = filteredItems
        .map((x) => {
            let { id, name, description, category, originalPrice, imageUrl } = x;
            let search = basket.find((x) => x.id === id) || [];
            return `
            <div id=product-id-${id} class="item">
                <img src="${imageUrl}" alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${description}</p> 
                    <p>${category}</p>
                    <div class="price-quantity"> 
                        <h3>N${originalPrice}</h3>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id="${id}" class="quantity">
                                ${search.item === undefined ? 0 : search.item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
        })
        .join("");
};

// Add event listeners for category filtering
allCategory.addEventListener("click", () => generateFilteredShop("all"));
fabricsCategory.addEventListener("click", () => generateFilteredShop("Fabrics"));
readyToWearCategory.addEventListener("click", () => generateFilteredShop("Ready-to-wear"));
bagsCategory.addEventListener("click", () => generateFilteredShop("Bags"));
