let minutes = Number(prompt("enter your time (minutes) : ", 0));

let minuteToHours = minutes / 60;

if (isNaN(minutes)) {
    console.log("Please enter a number");
} else {
    console.log(minuteToHours + " Hours");
}