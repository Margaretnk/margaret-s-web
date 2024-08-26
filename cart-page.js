//Working with the id in the cart-page.html
let label = document.getElementById("label")
let shoppingCart = document.getElementById("shopping-cart")



//Since d datas are saved in d basked in d shopping cart.js, it has to be drawn back here
// making a basket so that any time one select a card, it stores it inside d basket (e.g cart)[|| means or]
let basket = JSON.parse(localStorage.getItem("data")) || []; 
//To get the item saved on the local storage meaning if we have data it retrieves it, if no data it leaves it empty
// console.log(basket);



// Calculation to add or subtract all the numbers and display it inside the cart gotten also from the shopping-cart.js
let calculation =()=>{
    let cartIcon = document.getElementById("cartAmount"); //Addressing/selecting d icon and adding d selection in d variable
    
    //x and y. x is the previous number here and y is d next number added
  //console.log(basket.map((x) =>x.item).reduce((x,y) =>x+y,0)); // to get only the numbers/items (0 means its a default no)
  //this add the calculation with + and reduce with -
  
  
  //to display inside the icon in the browser with the increment and decrement function but when refreshed, data is gone
cartIcon.innerHTML = basket.map((x) =>x.item).reduce((x,y) =>x+y,0);
}
  
//invocking the calculation so that all the time d app loads, it will run and print d data on d cart icon
calculation();


// actions that will take place when cart is empty and when it is not (!== is not)
// the else storage works when d local storage is empty and the if works when the local storage is not empty
let generateCartItems = () => {
if (basket.length !==0){
  //console.log("it is working")
  return (shoppingCart.innerHTML = basket
    .map((x)=> {
      //console.log(x)
      let {id, item} = x; 
      //the id is from d basket array and y from the cart-page.js
      //making a search function
      let search = shopItemsData.find((y)=>y.id === id) || []; //matching both ids
      //if u find something, return it, if nothing is found, return an empty array
      // let {imageUrl, name, originalPrice} = search
      return `
      <div class="cart-item">
        <img class="picture" width= "" src=${search.imageUrl} alt="" />
        <div class="details">
          <div class="title-price-x">
            <h4 class="title-price">
              <p>${search.name}</p>
              <p class="cart-item-price">N${search.originalPrice}</p>
              <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
            </h4>
            
          </div>

          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id="${id}" class="quantity">${item}</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>

          <h3>${item * search.originalPrice}</h3>
        </div>
      </div>
      `;
  }).join("")); //To remove d comma on d browser
} else {
    
    shoppingCart.innerHTML = ``;
    //console.log("dont change")

    // styling the html label
    label.innerHTML = `
    <h2> Cart is Empty </h2>
    <a href= "indexcart.html">
      <button class="HomeBtn">Back to Home</button>
    </a>
    `;
 }

};

generateCartItems();

// Function to increment (+) and decrement (-)
let increment = (id) =>{
  let selectedItem = id; // console.log(selectedItem.id); // To address the id inside the array not just that of the html
  // adding the search (find) function to increase only added item on the basket
  let search = basket.find((x)=> x.id === selectedItem.id); // searching for 1 item selected if it exist or not in d basket

  //if we dont find what we are trying to find, only then we add to the basket
  if(search === undefined){
    // ensuring that when an item is added to cart, it is added to the cart
  basket.push({
  id:selectedItem.id,
  item: 1,
  });

  } // unique id here is selectedItem.id
  //if found just increase d quantity if it doesnt exist, then add
  else{
    search.item +=1 ;
  }

  generateCartItems(); /**adds d number on cartpage */
  // console.log(basket);
  update(selectedItem.id);

  // saving the array to the local storage(setting item inside d local storage)
  localStorage.setItem("data", JSON.stringify(basket)); // Data is the key

};


// the decrement sign
let decrement = (id) => {
  let selectedItem = id; // console.log(selectedItem.id); // To address the id inside the array not just that of the html
  // adding the search (find) function to increase only added item on the basket
  let search = basket.find((x)=> x.id === selectedItem.id); // searching for 1 item selected if it exist or not in d basket

  // Everytime d search is undefined, let the app do nothing to remove d error of the - sign in d console
  if (search === undefined) return;

  //if we dont find what we are trying to find, only then we add to the basket
  else if(search.item === 0) return;
    //[seeing from console.log shows id and item. so once the item reaches 0, i stop the decrement and remain 0]
  

  //if found just increase d quantity if it doesnt exist, then add
  else{
    search.item -=1 ;
  }


  // console.log(basket);
  update(selectedItem.id); /* it has to be placed above so d basket content can reduce down to 0*/

  
  //To filter so that when d item chosen earlier is reduced to 0, the basket wont have d data(data erases)
  basket = basket.filter((x) =>x.item !== 0);  /*(!== is not equal to) */

  generateCartItems(); // This removes the item on cartpage when it gets to 0

  // saving the array to the local storage(setting item inside d local storage) i.e things in d basket is saved
  localStorage.setItem("data", JSON.stringify(basket));
    
};

// Defining the update function to run everytime we click the - or +
let update = (id) => {
  // making d search function
  let search = basket.find((x)=>x.id === id);
  // console.log(search.item); //This increment only the number 

  //To display on the browser counter
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};


// Function to remove the function using the X on the cart noting the id of d item on d cart
let removeItem =(id)=>{
  let selectedItem = id
  //console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
   // This targets the id in d cart clicked and remove the item from d cart and update d basket

   generateCartItems(); /**automatically reloads page without refreshing */

   TotalAmount();
   calculation();

   localStorage.setItem("data", JSON.stringify(basket)); /** it update when d page is update */
};


// Function to calculate the total amount of our bill
let TotalAmount = () => {
  //when we have data on the local storage
  if (basket.length !==0) {
    //map is mainly used search inside d array using d id to get d price and  multiply with d item

    let amount = basket.map((x) => {
      let {item,id} = x; /**using d id searching through d database/basket */
      let search = shopItemsData.find((y) => y.id === id) || []; /**search d id against d database/array */
      return item * search.originalPrice;
    }).reduce((x,y) => x+y,0) //x is d previous number and y is next number added on d cart and start from 0
    //console.log(amount);
    label.innerHTML = `
    <h2>Total Bill : N ${amount}</h2>
    <button class="checkout">Checkout</button>
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    `
  } else return;
};

// Clear cart function
let clearCart = () =>{
  basket = []; /**means whatever is inside d basket / total cart should be removed */
  generateCartItems ();
  calculation(); /**to clear d data also on the cart icon */
  localStorage.setItem("data", JSON.stringify(basket));
};

//Invoking the function of total amount
TotalAmount();