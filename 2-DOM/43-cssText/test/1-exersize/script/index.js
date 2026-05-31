let $ = document;


const blurLayer = $.querySelector('.blur-layer');
const photoSlider = $.querySelector('.photo-slider');
const iconPrev = $.querySelector('.icon-prev');
const iconNext = $.querySelector('.icon-next');

const imageSources = [
  'assets/images/a7244f3907a4b4a09e053f29dcf7cb02.jpg',
  'assets/images/akaza-demon-slayer-3840x2160-25671.jpg',
  'assets/images/black-asta-black-3840x2160-22972.jpg',
  'assets/images/download (26).jfif',
  'assets/images/goku-black-and-3840x2160-20871.png',
  'assets/images/goku-perfected-3840x2160-25454.jpg',
  'assets/images/goku-ultra-instinct-3840x2160-22575.png',
  'assets/images/gon-freecss-green-3840x2160-22503.jpg',
  'assets/images/guts-drawing-3840x2160-13853.jpg',
  'assets/images/ichigo-kurosaki-3840x2160-10528.png',
  'assets/images/igris-solo-leveling-3840x2160-14646.jpg',
  'assets/images/itachi-uchiha-3840x2160-25576.png',
  'assets/images/itachi-uchiha-dark-3840x2160-20031.jpg',
  'assets/images/itachi-uchiha-red-3840x2160-25017.png',
  'assets/images/kaiju-no-8-3d-model-3840x2160-20434.jpg',
  'assets/images/kaiju-no-8-5k-fan-3840x2160-20504.jpg',
  'assets/images/kaiju-no-8-anime-3840x2160-24391.jpg',
  'assets/images/levi-ackerman-3840x2160-10446.jpg',
  'assets/images/MIKASA.jfif',
  'assets/images/minato-namikaze-3840x2160-24353.png',
  'assets/images/muichiro-tokito-3840x2160-22499.png',
  'assets/images/Nezuko Kamado ❤️.jfif',
  'assets/images/saitama-ok-one-3840x2160-20909.jpg',
  'assets/images/samurai-silhouette-3840x2160-24349.png',
  'assets/images/satoru-gojo-pop-art-3840x2160-14158.jpg',
  'assets/images/solo-leveling-3840x2160-14657.jpg',
  'assets/images/solo-leveling-sung-jinwoo-3840x2160-14670.jpg',
  'assets/images/straw-hat-luffy-one-3840x2160-22500.jpg',
  'assets/images/sukuna-electric-3840x2160-22504.jpg',
  'assets/images/sukuna-red-3840x2160-19862.jpg',
  'assets/images/sung-jinwoo-3840x2160-21523.jpg',
  'assets/images/sung-jinwoo-angry-3840x2160-21322.jpg',
  'assets/images/sung-jinwoo-anime-3840x2160-22581.jpg',
  'assets/images/sung-jinwoo-artwork-3840x2160-14671.jpg',
  'assets/images/sung-jinwoo-blue-3840x2160-20312.jpg',
  'assets/images/sung-jinwoo-dope-3840x2160-20241.jpg',
  'assets/images/sung-jinwoo-hunter-3840x2160-14669.jpeg',
  'assets/images/sung-jinwoo-movie-3840x2160-20245.jpg',
  'assets/images/sung-jinwoo-purple-3840x2160-21363.jpg',
  'assets/images/sung-jinwoo-season-3840x2160-23604.jpg',
  'assets/images/tanjiro-kamado-4334x2160-20019.jpg',
  'assets/images/tougen-anki-3840x2160-23222.jpg',
  'assets/images/tougen-anki-anime-3840x2160-23052.jpg',
  'assets/images/tougen-anki-dark-3840x2160-23269.jpg',
  'assets/images/turbo-granny-okarun-3840x2160-19414.jpg',
  'assets/images/uwp4977619.jpeg',
  'assets/images/uwp4977627.jpeg',
  'assets/images/uwp4977630.jpeg',
  'assets/images/uwp4977632.jpeg',
  'assets/images/uwp4977635.jpeg',
  'assets/images/uwp4978710.jpeg',
  'assets/images/uwp4978711.jpeg',
  'assets/images/uwp4978712.jpeg',
  'assets/images/uwp4978715.jpeg',
  'assets/images/uwp4978718.jpeg',
  'assets/images/uwp4978719.jpeg',
  'assets/images/uwp4978721.jpeg',
  'assets/images/uwp4978722.jpeg',
  'assets/images/uwp4978723.jpeg',
  'assets/images/uwp4978727.jpeg',
  'assets/images/uwp4979169.jpeg',
  'assets/images/uwp4979219.jpeg',
  'assets/images/uwp4979221.jpeg',
  'assets/images/uwp4979237.jpeg',
  'assets/images/uwp4979245.jpeg',
  'assets/images/uwp4980261.jpeg',
  'assets/images/uwp4980265.jpeg',
  'assets/images/uwp4980266.jpeg',
  'assets/images/uwp4985552.jpeg',
  'assets/images/wp9612420-4k-anime-computer-wallpapers.jpg',
  'assets/images/wp13115877-anime-8k-city-wallpapers.jpg',
  'assets/images/wp13665013-anime-pc-8k-wallpapers.jpg',
  'assets/images/wriothesley-genshin-3840x2160-19470.jpg',
  'assets/images/yu-nishinoya-3840x2160-14068.png',
  'assets/images/yuji-itadori-choso-3840x2160-25230.jpg',
  'assets/images/yuji-itadori-season-3840x2160-25220.jpg',
];

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
