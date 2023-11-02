import { loadHeaderFooter } from "./utils.mjs";
import shoppingCart from "./shoppingCart.mjs";

const navigateButton = document.getElementById("checkoutButton");
navigateButton.addEventListener("click", function() {
    window.location.href = "/checkout/index.html";
});

loadHeaderFooter();
shoppingCart();
