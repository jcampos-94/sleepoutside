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
  displayTotalElement();
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

function displayTotalElement() {
    // Create a div element to hold the cart footer
    const cartFooter = document.createElement("div");
    cartFooter.className = "cart-footer hide"; // Add the "hide" class to hide it by default
  
    // Create a paragraph element for the cart total
    const cartTotal = document.createElement("p");
    cartTotal.className = "cart-total";
    cartTotal.textContent = "Total: $0.00";
  
    // Append the cartTotal paragraph to the cartFooter div
    cartFooter.prepend(cartTotal);
  
    // Append the cartFooter to the body of the HTML document
    const mainElement = document.querySelector("main");
    mainElement.appendChild(cartFooter);
  }