let container = document.getElementById('container');
let bulbImage = document.getElementById('bulbImage');
let button = document.getElementById('button');

let isOnBulb = false;

let srcON = './images/pic_bulbon.gif';
let srcOff = './images/pic_bulboff.gif';

let TurnBulbOnAndOff = () => {
  if (isOnBulb) {
    bulbImage.src = srcOff;
    button.style.backgroundColor = '#4CAF50';
    button.innerText = 'Turn On';
    isOnBulb = false;
  } else {
    bulbImage.src = srcON;
    button.style.backgroundColor = '#f44336';
    button.innerText = 'Turn Off';
    isOnBulb = true;
  }
};

container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.height = '100vh';
container.style.backgroundColor = '#f0f0f0';
container.style.fontFamily = 'Arial, sans-serif';
container.style.gap = '20px';

button.style.cursor = 'pointer';
button.style.padding = '20px 30px';
button.style.fontSize = '24px';
button.style.backgroundColor = '#4CAF50';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.boxShadow = '0 4px #999';
button.style.transition = 'background-color 0.3s, transform 0.1s';
button.style.width = '150px';
button.style.textAlign = 'center';

