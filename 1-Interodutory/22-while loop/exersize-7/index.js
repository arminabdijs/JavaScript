const secretNumber = Math.floor(Math.random() * 100) + 1;

let guess;
let attempts = 0;

alert('به بازی عدد مخفی خوش آمدید!  \n\n\n یک عدد بین 1 تا 100 را حدس بزنید.');

while (guess !== secretNumber) {
  guess = +prompt('حدس شما چیست؟');
 
  attempts++;

  if (guess < secretNumber) {
    alert('عدد شما خیلی کم است. دوباره تلاش کنید.');
  } else if (guess > secretNumber) {
    alert('عدد شما خیلی زیاد است. دوباره تلاش کنید.');
  } else {
    alert(`آفرین! ${secretNumber} عدد مخفی بود. \n\n\n شما در ${attempts} تلاش موفق شدید.`);
  }
}
