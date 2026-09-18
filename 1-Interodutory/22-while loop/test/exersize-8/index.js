let countdownNumber = +prompt('یک عدد برای شروع شمارش معکوس وارد کنید:');

console.log(`شروع شمارش معکوس از ${countdownNumber}...`);

while (countdownNumber > 0) {
  console.log(countdownNumber);
  countdownNumber--;
}

console.log(' :boom: BOOM!');
