let bulbImage = document.getElementById("bulbImage");
let button=document.getElementById("button");

let isOnBulb = false;

let srcON = "./images/bulb-on.jpg";
let srcOff = "./images/bulb-off.jpg";

let TurnBulbOnAndOff = () => {
  if (isOnBulb) {
    bulbImage.src = srcOff;
    button.style.backgroundColor = "#4CAF50"; 
    button.innerText = "Turn On"; 
    isOnBulb = false;
  } else {
    bulbImage.src = srcON;
    button.style.backgroundColor = "#f44336"; 
    button.innerText = "Turn Off"; 
    isOnBulb = true;
  }
};

button.style.cursor = "pointer";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#4CAF50";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.boxShadow = "0 4px #999";