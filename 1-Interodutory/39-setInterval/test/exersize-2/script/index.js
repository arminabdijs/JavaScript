let enterTheMinutes = Number(prompt("enter the minutes : "));
let enterTheseconds = Number(prompt("enter the seconds : "));

let timer = setInterval(() => {
  console.log("timer : " + enterTheMinutes + " of " + enterTheseconds);
  if (enterTheMinutes === 0 && enterTheseconds === 0) {
    clearInterval(timer);
    console.log("time Out");
  }
  if (enterTheseconds === 0) {
    enterTheMinutes--;
    enterTheseconds += 60;
  }
  enterTheseconds--;
}, 1000);