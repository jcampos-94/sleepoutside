// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  const dataArray = JSON.parse(localStorage.getItem(key)) || [];
  dataArray.push(data);
  localStorage.setItem(key, JSON.stringify(dataArray));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// URL Parameters
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlString = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlString.join(""));
}

function renderWithTemplate(
  templateFn,
  parentElement,
  data,
  callback,
  position = "afterbegin",
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, templateFn);
  if(callback) {
      callback(data);
  }
}

function loadTemplate(path) {
  return async function () {
      const res = await fetch(path);
      if (res.ok) {
      const html = await res.text();
      return html;
      }
  };
}

export async function loadHeaderFooter() {
  //added await to headerTemplateFn and footerTemplateFn because loadTemplate returns an async function
  const headerTemplateFn = await loadTemplate("/partials/header.html")();
  const footerTemplateFn = await loadTemplate("/partials/footer.html")();

  const mainHeader = document.querySelector("#main-header");
  const mainFooter = document.querySelector("#main-footer");

  renderWithTemplate(headerTemplateFn, mainHeader);
  renderWithTemplate(footerTemplateFn, mainFooter);
}