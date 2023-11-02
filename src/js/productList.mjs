import { getProductsByCategory } from "./externalServices.mjs";
import { renderListWithTemplate } from "./utils.mjs";

export default async function productList(selector = ".product-list", category = "tents"){
    // get the element we will insert the list into from the selector
    let productListContainer = document.querySelector(selector);
    // get the list of products 
    const products = await getProductsByCategory(category);
    // render out the product list to the element
    renderListWithTemplate(productCardTemplate, productListContainer, products)
}

function productCardTemplate(product) {
    const newItem = `<li class="product-card">
            <a href="../product_pages/index.html?product=${product.Id}" class="card_image">
                <img
                    src="${product.Images.PrimaryMedium}"
                    alt="Image of ${product.Name}"
                />
            </a>
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.Name}</h2>
        <p class="product-card__price">$${product.FinalPrice}</p>
        </li>`;
        return newItem;
}

