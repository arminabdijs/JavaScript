let DOC = document;

const _querySelector = (q) => DOC.querySelector(q);
const _querySelectorAll = (q) => DOC.querySelectorAll(q);
const _id = (id) => DOC.getElementById(id);

let colorText = _querySelector('.color-text');
let imgMain = _querySelector('.img__main');
let cardColors = _querySelectorAll('.card-color');
let imgSmalls = _querySelectorAll('.img__small');
let discountContainer = _id('discount-container');
let countdown = _id('countdown');


const productData = {
  purple: { title: 'بنفش', path: './assets/images/purple.jpg' },
  blue: { title: 'آبی', path: './assets/images/blue.jpg' },
  black: { title: 'مشکی', path: './assets/images/black.jpg' },
};

function updateProduct(colorKey) {
  const data = productData[colorKey];
  if (data) {
    colorText.innerText = data.title;
    imgMain.src = data.path;
    _querySelector('.color-Active')?.classList.remove('color-Active');
    _querySelector(`.card-color--${colorKey}`)?.classList.add('color-Active');
  }
}

cardColors.forEach((colorBtn) => {
  colorBtn.addEventListener('click', (event) => {
    const selectedColor = event.target.dataset.color;
    updateProduct(selectedColor);
  });
});

imgSmalls.forEach((img) => {
  img.addEventListener('click', (event) => {
    const colorKey = event.target.dataset.color;
    updateProduct(colorKey);
  });
});

const durationHours = .022;
const durationMs = durationHours * 60 * 60 * 1000;

let endTime = localStorage.getItem('discountEndTime');

if (!endTime) {
  endTime = new Date().getTime() + durationMs;
  localStorage.setItem('discountEndTime', endTime);
} else {
  endTime = parseInt(endTime);
}

const timer = setInterval(() => {
  const now = new Date().getTime();
  const remaining = endTime - now;

  if (remaining <= 0) {
    discountContainer.style.display = 'none';
    localStorage.removeItem('discountEndTime');
    return;
  }

  const hours = Math.floor(remaining / (1000 * 60 * 60));
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  countdown.innerText =
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
  
}, 1000);
