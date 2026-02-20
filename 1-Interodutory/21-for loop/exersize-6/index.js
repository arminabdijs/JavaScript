let rows = 5; 
let repeat = 6; 

for (let r = 0; r < repeat; r++) {

  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }


  for (let i = rows - 1; i >= 1; i--) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }

  console.log(""); 
}
