let number = Number(prompt('یک عدد وارد کن:'));


let i = 1;
while (i <= number) {
  console.log('#'.repeat(i));
  i++;
}


let j = number - 1;
while (j >= 1) {
  console.log('#'.repeat(j));
  j--;
}
