import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

export default async function productList(selector = ".product-list", category = "tents"){
    // get the element we will insert the list into from the selector
    let productListContainer = document.querySelector(selector);
    // get the list of products 
    const products = await getData(category);
    // render out the product list to the element
    //products.map((product) => productListItem(product));
    //productListContainer.innerHTML = products.join("");
    renderListWithTemplate(productCardTemplate, productListContainer, products)
}

function productCardTemplate(product) {
    if (product.Id === "880RR" || product.Id === "985RF" || product.Id === "985PR" || product.Id === "344YJ") {
        const newItem = `<li class="product-card">
            <a href="product_pages/index.html?product=${product.Id}" class="card_image">
                <img
                    src="${product.Image}"
                    alt="Image of ${product.Name}"
                />
            </a>
        <h3 class="card_brand">${product.Brand.Name}</h3>
        <h2 class="card_name">${product.Name}</h2>
        <p class="product-card_price">$${product.FinalPrice}</p>
        </li>`;
        return newItem;
    }
}

