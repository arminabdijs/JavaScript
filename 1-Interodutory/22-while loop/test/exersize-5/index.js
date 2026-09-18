let i = 1; 

while (i <= 100) {

  if (i % 7 !== 0 && !i.toString().includes('7')) {

    console.log(i);
  }

  i++;
}
