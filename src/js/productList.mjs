import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

export default async function productList(selector = ".product-list", category = "tents"){
    // get the element we will insert the list into from the selector
    productListContainer = document.querySelector(selector);
    // get the list of products 
    const products = await getData(category);
    console.log(products)
    // render out the product list to the element
    //products.map((product) => productListItem(product));
    //productListContainer.innerHTML = products.join("");
    renderListWithTemplate(productListItem, productListContainer, products)
}

function productListItem(item) {
    const newItem = `<li class="product-card">
        <a href="#" class="card_image">
            <img
                src="${item.Image}"
                alt="${item.Name}"
            />
        </a>
    <h3 class="card_brand">${item.Brand}</h3>
    <h2 class="card_name">${item.Name}</h2>
    <p class="product-card_price">$${item.FinalPrice}</p>
    </li>`;
    return newItem;
    }

