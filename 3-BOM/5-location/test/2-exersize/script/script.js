async function loadProducts() {
  const response = await fetch('../data/products.json');
  const products = await response.json();
  renderProducts(products);
}

let $ = document;

let cardContainer = $.querySelector('.card-container');

function renderProducts(products) {
  products.forEach((product) =>
    cardContainer.insertAdjacentHTML(
      'beforeend',
      `
     <div class="card">
        <div class="img-wrap">
          <img src="${product.imgSrc}" alt="${product.title}" />
        </div>
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="price">$${product.price}</div>
        <a  onclick='redirctPageProduct(${product.id})' href="#" class="btn">
          SEE MORE
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M13 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>`,
    ),
  );
}

function redirctPageProduct(id) {
  location.href =
    `http://0.0.0.0:8000/view/product.html?id=${id}` ||
    `http://127.0.0.1:5501/view/product.html?id=${id}`;
}

loadProducts();
