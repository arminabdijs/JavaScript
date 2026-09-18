let userBirthDate = Number(prompt("enter your Birth Date : ", 2002));
let dateOfTheDay = Number(prompt("enter date of the day : ", 2024));

let userAge = dateOfTheDay - userBirthDate;

if (isNaN(userBirthDate)) {
    console.log("Please enter the date of birth as a number");
} else if (isNaN(dateOfTheDay)) {
    console.log("Please enter the date and number");
} else if (userAge <= 0) {
    console.log("The date entered is not correct");
} else {
    console.log("your Age is : " + userAge);
}