async function loadProducts() {
  const response = await fetch('../data/products.json');
  const products = await response.json();
  getProductIdFromUrl(products);
}

let $ = document;
let productPageContainer = $.querySelector('.product-page-container');

function getProductIdFromUrl(products) {
  let params = new URLSearchParams(location.search);
  let idInParams = parseInt(params.get('id'));

  let findInProduct = products.find((product) => {
    return product.id === idInParams;
  });

  if (!findInProduct) {
    location.href = 'http://0.0.0.0:8000/index.html' || `http://127.0.0.1:5501/index.html`;
  }

  productPageContainer.innerHTML = `
    <div class="back-button-container">
        <a onclick='history.back()' class="back-btn">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 12h-14"></path>
            <path d="M11 5l-7 7 7 7"></path>
          </svg>Back
        </a>
      </div>
      <div class="product-content">
        <div class="product-info">
          <h3>${findInProduct.title}</h3>
          <p>
           ${findInProduct.description}
          </p>
          <div class="cta-button-container">
            <a href="#" class="cta-btn">Shop Now</a>
          </div>
        </div>
        <div class="product-image-container">
          <img src=".${findInProduct.imgSrc}" alt="${findInProduct.title}"/>
        </div>
      </div>
    `;
}

loadProducts();
