let numStr = prompt('لطفاً یک عدد وارد کنید:'); 

let reversedStr = ''; 
let i = numStr.length - 1; 

while (i >= 0) {
  reversedStr += numStr[i];
  i--; 
}

if (numStr === reversedStr) {
  console.log(`عدد ${numStr} آینه‌ای است.`);
} else {
  console.log(`عدد ${numStr} آینه‌ای نیست.`);
}
