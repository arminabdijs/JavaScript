let enterTheMinutes = Number(prompt("enter the minutes : "));
let enterTheseconds = Number(prompt("enter the seconds : "));

let convertMinutesToSeconds = enterTheMinutes * 60;

let SumOfSecondsAndMinutesConvertedToSeconds =
  convertMinutesToSeconds + enterTheseconds;

let timer = setInterval(() => {
  console.log(SumOfSecondsAndMinutesConvertedToSeconds);
  if (SumOfSecondsAndMinutesConvertedToSeconds === 0) {
    clearInterval(timer);
    console.log("time Out");
  }
  SumOfSecondsAndMinutesConvertedToSeconds--;
}, 1000);