const DOC = document;

const _querySelector = (q) => DOC.querySelector(q);

const hours = _querySelector('.hours');
const minutes = _querySelector('.minutes');
const seconds = _querySelector('.seconds');


const timer = setInterval(() => {
  const newDate = new Date();
  const newHours = newDate.getHours();
  const newMinutes = newDate.getMinutes();
  const newSeconds = newDate.getSeconds();

  hours.innerText = newHours < 10 ? '0' + newHours : newHours;
  minutes.innerText = newMinutes < 10 ? '0' + newMinutes : newMinutes;
  seconds.innerText = newSeconds < 10 ? '0' + newSeconds : newSeconds;
}, 1000);
