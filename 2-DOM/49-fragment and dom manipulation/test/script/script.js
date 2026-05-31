let $ = document;

function _id(id) {
  return $.getElementById(id);
}

function _createElement(eleName) {
  return $.createElement(eleName);
}
function _fragment() {
  return $.createDocumentFragment();
}

const container = _id('product__container');
const list = _id('card__list');
const totalEl = _id('final__total');

let containerFragment = _fragment();
let cardListFragment = _fragment();

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
  container.innerHTML = '';
  products.forEach((product) => {
    let card = _createElement('div');
    card.classList.add('card');

    let btnFav = $.createElementNS('http://www.w3.org/2000/svg', 'svg');
    btnFav.classList.add('btn-fav');
    btnFav.setAttribute('width', '24');
    btnFav.setAttribute('height', '24');
    btnFav.setAttribute('viewBox', '0 0 24 24');
    btnFav.setAttribute('fill', 'currentColor');
    btnFav.setAttribute('stroke', '#ccc');
    btnFav.innerHTML = ` <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>`;
    btnFav.onclick = function () {
      this.classList.toggle('active');
    };

    let cardImg = _createElement('img');
    cardImg.classList.add('card__img');
    cardImg.src = product.img;
    cardImg.alt = product.name;

    let wrapperCardInfo = _createElement('div');
    wrapperCardInfo.classList.add('wrapper__card-info');

    let cardTitle = _createElement('h3');
    cardTitle.classList.add('card__title');
    cardTitle.innerText = product.name;

    let cardPrice = _createElement('p');
    cardPrice.classList.add('card__price');
    cardPrice.innerText = `${product.price.toLocaleString()} تومان`;

    wrapperCardInfo.append(cardTitle, cardPrice);

    let btn = _createElement('button');
    btn.classList.add('btn-action');
    btn.setAttribute('type', 'submit');
    btn.style.cssText =
      'background-color: var(--primary); color: white ;margin: 2rem auto 0 auto ;';
    btn.innerText = 'افزودن به سبد خرید';
    btn.onclick = () => addToCard(product.id);

    card.append(btnFav, cardImg, wrapperCardInfo, btn);
    containerFragment.appendChild(card);
  });
  container.append(containerFragment);
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
  list.innerHTML = '';

  cart.forEach((item) => {
    totalPrice += item.price * item.qty;

    let cardItem = _createElement('div');
    cardItem.classList.add('card-item');

    let cardItemImg = _createElement('img');
    cardItemImg.classList.add('card-item__img');
    cardItemImg.src = item.img;
    cardItemImg.alt = item.name;

    let itemName = _createElement('span');
    itemName.classList.add('card-item__title');
    itemName.innerText = item.name;

    let qtyContainer = _createElement('div');
    qtyContainer.classList.add('qty-container');

    let plus = $.createElement('button');
    plus.classList.add('btn-action');
    plus.style.backgroundColor = 'rgb(18 255 167)';
    plus.textContent = '+';
    plus.onclick = () => changeQty(item.id, 1);

    let qtyText = $.createElement('span');
    qtyText.textContent = item.qty;

    let minus = $.createElement('button');
    minus.classList.add('btn-action');
    minus.style.backgroundColor = '#ff3312';
    minus.textContent = '-';
    minus.onclick = () => changeQty(item.id, -1);

    qtyContainer.append(plus, qtyText, minus);

    let removeBtn = $.createElement('button');
    removeBtn.classList.add('btn-action');
    removeBtn.style.cssText = 'background-color: #ff3312; margin: 0';
    removeBtn.textContent = 'حذف';
    removeBtn.onclick = () => removeItem(item.id);

    cardItem.append(cardItemImg, itemName, qtyContainer, removeBtn);
    cardListFragment.appendChild(cardItem);
  });

  list.append(cardListFragment);

  totalEl.innerText = `جمع کل : ${totalPrice.toLocaleString()} تومان`;
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
