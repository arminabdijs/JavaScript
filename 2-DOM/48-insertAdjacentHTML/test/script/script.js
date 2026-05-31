/* let $ = document;

function _id(id) {
  return $.getElementById(id);
}

const container = _id('product__container');
const list = _id('card__list');
const totalEl = _id('final__total');

let totalPrice;

const products = [
  { id: 1, name: 'اذران پی وی سی', price: 250000, img: './assets/images/product-1.jpg' },
  { id: 2, name: 'آینه دکوراتیو', price: 500000, img: './assets/images/product-2.jpg' },
  { id: 3, name: 'تایل 60*60', price: 300000, img: './assets/images/product-3.jpg' },
  { id: 4, name: 'دیوار پوش', price: 150000, img: './assets/images/product-4.jpg' },
  { id: 5, name: 'کابینت کاری', price: 200000, img: './assets/images/product-5.jpg' },
  { id: 6, name: 'کاغذ دیواری', price: 600000, img: './assets/images/product-6.jpg' },
  { id: 7, name: 'کف پوش', price: 800000, img: './assets/images/product-8.jpg' },
  { id: 8, name: 'نرده استیل', price: 800000, img: './assets/images/product-10.jpg' },
];

let cart = [];

function renderProducts() {
  container.innerHTML = products
    .map(
      (product) =>
        `<div class="card">
          <svg onclick="this.classList.toggle(&quot;active&quot;)" class="btn-fav" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="#ccc">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
          </svg>
         <img src="${product.img}" alt="${product.name}" class="card__img">
          <div class="wrapper__card-info">
            <h3 class="card__title">${product.name}</h3>
           <p class="card__price">${product.price}</p>
          </div>
          <button onclick="addToCard(${product.id})" style="background-color: var(--primary); color: white ;margin: 2rem auto 0 auto ;" type="submit" class="btn-action">افزودن به سبد</button>
        </div>`,
    )
    .join('');
}

function addToCard(id) {
  let product = products.find((i) => i.id === id);
  let exists = cart.find((i) => i.id === id);

  if (exists) exists.qty++;
  else cart.push({ ...product, qty: 1 });
  updateCart();
}

function updateCart() {
  totalPrice = 0;

  list.innerHTML = cart
    .map((item) => {
      totalPrice += item.price * item.qty;

      return `
        <div class="card-item">
            <img  class="card-item__img" src="${item.img}" alt="">
            <span>${item.name}</span>
            <div class="qty-ctrl">
              <button class="btn-action" onclick="changeQty(${item.id},1)">+</button>
              <span>${item.qty}</span>
              <button class="btn-action" onclick="changeQty(${item.id},-1)">-</button>
            </div>
            <button class="btn-action" onclick="removeItem(${item.id})">حذف</button>
          </div>`;
    })
    .join('');

  totalEl.innerText = `جمع کل: ${totalPrice} تومان`;
}

function changeQty(id, count) {
  let item = cart.find((i) => i.id === id);

  if (item) {
    item.qty += count;
    if (item.qty < 1) removeItem(id);
    else updateCart();
  }
}

function removeItem(id) {
  cart = cart.filter((i) => i.id !== id);
  updateCart();
}

renderProducts();
 */


let $ = document;

function _id(id)
{
  return $.getElementById(id);
}

function _createElement(eleName)
{
  return $.createElement(eleName);
}

const container = _id('product__container');
const list = _id('card__list');
const totalEl = _id('final__total');

let totalPrice;

const products = [
  { id: 1, name: 'اذران پی وی سی', price: 250000, img: './assets/images/product-1.jpg' },
  { id: 2, name: 'آینه دکوراتیو', price: 500000, img: './assets/images/product-2.jpg' },
  { id: 3, name: 'تایل 60*60', price: 300000, img: './assets/images/product-3.jpg' },
  { id: 4, name: 'دیوار پوش', price: 150000, img: './assets/images/product-4.jpg' },
  { id: 5, name: 'کابینت کاری', price: 200000, img: './assets/images/product-5.jpg' },
  { id: 6, name: 'کاغذ دیواری', price: 600000, img: './assets/images/product-6.jpg' },
  { id: 7, name: 'کف پوش', price: 800000, img: './assets/images/product-8.jpg' },
  { id: 8, name: 'نرده استیل', price: 800000, img: './assets/images/product-10.jpg' },
];

let cart = [];

function renderProducts()
{
  container.innerHTML = '';
  products.forEach((product) =>
  {
    container.insertAdjacentHTML(
      'beforeend',
      `<div class="card">
          <svg onclick="this.classList.toggle(&quot;active&quot;)" class="btn-fav" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="#ccc">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
          </svg>
         <img src="${product.img}" alt="${product.name}" class="card__img">
          <div class="wrapper__card-info">
            <h3 class="card__title">${product.name}</h3>
           <p class="card__price">${product.price.toLocaleString()}</p>
          </div>
          <button onclick="addToCard(${product.id})" style="background-color: var(--primary); color: white ;margin: 2rem auto 0 auto ;" type="submit" class="btn-action">افزودن به سبد</button>
        </div>`
    );
  });
}

function addToCard(id)
{
  let product = products.find((i) => i.id === id);
  let exists = cart.find((i) => i.id === id);

  if (exists) exists.qty++;
  else cart.push({ ...product, qty: 1 });
  updateCart();
}

function updateCart()
{
  totalPrice = 0;
  list.innerHTML = '';

  cart.forEach((item) =>
  {
    totalPrice += item.price * item.qty;

    list.insertAdjacentHTML(
      'beforeend',
      `
      <div class="card-item">
        <img  class="card-item__img" src="${item.img}" alt="${item.name}">
          <span class="card-item__title">${item.name}</span>
          <div class="qty-container">
            <button class="btn-action" onclick="changeQty(${item.id},1)" style="background-color: rgb(18, 255, 167);">+</button>
            <span>${item.qty}</span>
            <button class="btn-action"  onclick="changeQty(${item.id},-1)" style="background-color: rgb(255, 51, 18);">-</button>
          </div>
          <button class="btn-action" style="background-color: rgb(255, 51, 18); margin: 0px;"  onclick="removeItem(${item.id})">حذف</button>
  </div>`
    );
  });

  totalEl.innerText = `جمع کل : ${totalPrice.toLocaleString()} تومان`;
}

function changeQty(id, count)
{
  let item = cart.find((i) => i.id === id);
  if (item)
  {
    item.qty += count;
    if (item.qty < 1) removeItem(id);
    else updateCart();
  }
}

function removeItem(id)
{
  cart = cart.filter((i) => i.id !== id);
  updateCart();
}

renderProducts();
