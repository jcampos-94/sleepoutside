import productList from "./productList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

const param = getParam("category");
productList(".product-list", param);
loadHeaderFooter();

function toTitleCase(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
document.querySelector("h2").innerHTML = "Top Products: " + toTitleCase(param);
