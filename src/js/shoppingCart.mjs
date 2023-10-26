import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

export default function ShoppingCart() {
  const cartItems = getLocalStorage("so-cart");
  //Check if cartItems is not an array or if it's an empty array
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return; //Do nothing and exit the function
  }
  //If not an empty array, it will proceed as usual
  const output = document.querySelector(".product-list");
  renderListWithTemplate(cartItemTemplate, output, cartItems);
  totalCost();
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function totalCost(){
  const cardPrices = document.querySelectorAll(".cart-card__price");
  const cartTotal = document.querySelector(".cart-total");
  let totalSum = 0.00;
  cardPrices.forEach(function (card){
    let cardCost = card.innerText.split("$").join("");
    let cardCostInt = parseFloat(cardCost);
    totalSum += cardCostInt;
    return totalSum;
  }) ;
  console.log(totalSum); 
    cartTotal.innerText = "Total: $" + totalSum;
  } 