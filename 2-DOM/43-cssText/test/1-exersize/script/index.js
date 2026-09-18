let $ = document;


const blurLayer = $.querySelector('.blur-layer');
const photoSlider = $.querySelector('.photo-slider');
const iconPrev = $.querySelector('.icon-prev');
const iconNext = $.querySelector('.icon-next');

const imageSources = ['./assets/images/a7244f3907a4b4a09e053f29dcf7cb02.webp', './assets/images/akaza-demon-slayer-3840x2160-25671.webp', './assets/images/black-asta-black-3840x2160-22972.webp', './assets/images/download (26).webp', './assets/images/goku-black-and-3840x2160-20871.webp', './assets/images/goku-perfected-3840x2160-25454.webp', './assets/images/goku-ultra-instinct-3840x2160-22575.webp', './assets/images/gon-freecss-green-3840x2160-22503.webp', './assets/images/guts-drawing-3840x2160-13853.webp', './assets/images/ichigo-kurosaki-3840x2160-10528.webp', './assets/images/igris-solo-leveling-3840x2160-14646.webp', './assets/images/itachi-uchiha-3840x2160-25576.webp', './assets/images/itachi-uchiha-dark-3840x2160-20031.webp', './assets/images/itachi-uchiha-red-3840x2160-25017.webp', './assets/images/kaiju-no-8-3d-model-3840x2160-20434.webp', './assets/images/kaiju-no-8-5k-fan-3840x2160-20504.webp', './assets/images/kaiju-no-8-anime-3840x2160-24391.webp', './assets/images/levi-ackerman-3840x2160-10446.webp', './assets/images/MIKASA.webp', './assets/images/minato-namikaze-3840x2160-24353.webp', './assets/images/muichiro-tokito-3840x2160-22499.webp', './assets/images/Nezuko Kamado ❤️.webp', './assets/images/saitama-ok-one-3840x2160-20909.webp', './assets/images/samurai-silhouette-3840x2160-24349.webp', './assets/images/satoru-gojo-pop-art-3840x2160-14158.webp', './assets/images/solo-leveling-3840x2160-14657.webp', './assets/images/solo-leveling-sung-jinwoo-3840x2160-14670.webp', './assets/images/straw-hat-luffy-one-3840x2160-22500.webp', './assets/images/sukuna-electric-3840x2160-22504.webp', './assets/images/sukuna-red-3840x2160-19862.webp', './assets/images/sung-jinwoo-3840x2160-21523.webp', './assets/images/sung-jinwoo-angry-3840x2160-21322.webp', './assets/images/sung-jinwoo-anime-3840x2160-22581.webp', './assets/images/sung-jinwoo-artwork-3840x2160-14671.webp', './assets/images/sung-jinwoo-blue-3840x2160-20312.webp', './assets/images/sung-jinwoo-dope-3840x2160-20241.webp', './assets/images/sung-jinwoo-hunter-3840x2160-14669.webp', './assets/images/sung-jinwoo-movie-3840x2160-20245.webp', './assets/images/sung-jinwoo-purple-3840x2160-21363.webp', './assets/images/sung-jinwoo-season-3840x2160-23604.webp', './assets/images/tanjiro-kamado-4334x2160-20019.webp', './assets/images/tougen-anki-3840x2160-23222.webp', './assets/images/tougen-anki-anime-3840x2160-23052.webp', './assets/images/tougen-anki-dark-3840x2160-23269.webp', './assets/images/turbo-granny-okarun-3840x2160-19414.webp', './assets/images/uwp4977619.webp', './assets/images/uwp4977627.webp', './assets/images/uwp4977630.webp', './assets/images/uwp4977632.webp', './assets/images/uwp4977635.webp', './assets/images/uwp4978710.webp', './assets/images/uwp4978711.webp', './assets/images/uwp4978712.webp', './assets/images/uwp4978715.webp', './assets/images/uwp4978718.webp', './assets/images/uwp4978719.webp', './assets/images/uwp4978721.webp', './assets/images/uwp4978722.webp', './assets/images/uwp4978723.webp', './assets/images/uwp4978727.webp', './assets/images/uwp4979169.webp', './assets/images/uwp4979219.webp', './assets/images/uwp4979221.webp', './assets/images/uwp4979237.webp', './assets/images/uwp4979245.webp', './assets/images/uwp4980261.webp', './assets/images/uwp4980265.webp', './assets/images/uwp4980266.webp', './assets/images/uwp4985552.webp', './assets/images/wp9612420-4k-anime-computer-wallpapers.webp', './assets/images/wp13115877-anime-8k-city-wallpapers.webp', './assets/images/wp13665013-anime-pc-8k-wallpapers.webp', './assets/images/wriothesley-genshin-3840x2160-19470.webp', './assets/images/yu-nishinoya-3840x2160-14068.webp', './assets/images/yuji-itadori-choso-3840x2160-25230.webp', './assets/images/yuji-itadori-season-3840x2160-25220.webp'];


let index = 0;

function changeImage() {
  photoSlider.src = imageSources[index];
  blurLayer.src = imageSources[index];
  setTimeout(() => {
    photoSlider.style.cssText = 'transform: scale(1.2);';
  }, 1500);
  photoSlider.style.cssText = 'transform: scale(1);';
}

function nextImage() {
  index++;
  if (index > imageSources.length - 1) {
    index = 0;
  }
  changeImage();
}

function prevImage() {
  index--;
  if (index < 0) {
    index = imageSources.length - 1;
  }
  changeImage();
}

setInterval(() => {
  nextImage();
}, 5000);

changeImage();

iconPrev.addEventListener('click', prevImage);

iconNext.addEventListener('click', nextImage);
