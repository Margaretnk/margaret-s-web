// addressing the shop for the product display saving it in a variable shop
let shop = document.getElementById("shop")
// console.log(shop);


/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

// making a basket so that any time one select a card, it stores it inside d basket (e.g cart)[|| means or]
let basket = JSON.parse(localStorage.getItem("data")) || []; 
//To get the item saved on the local storage meaning if we have data it retrieves it, if no data it leaves it empty


// Make an array. Storing an object inside an array. created in a new page(data.js)
/**let shopItemsData = [
{
    id: "aa",
    name: "gown",
    originalPrice: 5000,
    description : "my clothes",
    category: "fabrics",
    imageUrl: "Ready-to-wear/bigmadambubu-22k.jpg",
},
 {
    id: "ab",
    name: "adire",
    originalPrice: 5000,
    category: "bag",
    description : "my clothes",
    imageUrl: "Ready-to-wear/bigmadambubu-22k.jpg",
 },
 {
    id: "ac",
    name: "material",
    originalPrice: 8000,
    category: "Readu-to-wear",
    description : "my clothes",
    imageUrl: "Bags-Collection/ankara-chainbag-18k.jpg",
 },
 {
    id: "ad",
    name: "bag",
    originalPrice: 2000,
    description : "my clothes",
    category: "bag",
    imageUrl: "Ready-to-wear/bigmadambubu-22k.jpg",
} 
];  // having 4 items to sell **/



// Getting my ess arrow function (regular function: function abcd (){} ) using map function to target all d data in d array
let generateShop =()=>{     //Defining the function to generate the item using js
return (shop.innerHTML= shopItemsData
    .map((x)=>{
    let {id, name, description, category, originalPrice, imageUrl} = x // instead of using ${x.name},etc
    let search = basket.find((x)=>x.id === id) || []
    // To set so that when d page is refreshed, the data is not wiped off the page
    //checks for the id one by one
    //means if we dont find anything, return an empty array
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
              ${search.item === undefined? 0: search.item}
              </div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
` ;
//id is added to quantity so that everytime we increment or decrement an item, it targets its id
})
.join("")); // to remove d comma and allow the list display 4 it
};

// Invoking the function
generateShop();



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
};


// Calculation to add or subtract all the numbers and display it inside the cart
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