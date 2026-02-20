let Users = [
    { id: 1, name: "armin", family: "abdi", age: 21, email: "email@gmail.com" },
    { id: 2, name: "mohammd", family: "abdi", age: 21, email: "email@gmail.com" },
    { id: 3, name: "ali", family: "abdi", age: 21, email: "email@gmail.com" },
];

let userName = prompt("enter your Name");
let userFamily = prompt("enter your Family");
let userAge = Number(prompt("enter your Age"));
let userEmail = prompt("enter your Email");

if (userName.length < 3 || userName.length > 10) {
    console.log(
        "The name must have at least 3 characters and a maximum of 10 characters"
    );
} else if (userFamily.length < 3 || userFamily.length > 15) {
    console.log(
        "family must have at least 3 characters and maximum 15 characters"
    );
} else if (userAge.length > 3 || isNaN(userAge)) {
    console.log("Age must be a number and maximum 3 digits");
} else {
    let newUser = Object.assign({}, Users[Users.length - 1]);

    newUser.name = userName;
    newUser.family = userFamily;
    newUser.age = userAge;
    newUser.email = userEmail;
    newUser.id = newUser.id + 1;

    Users.push(newUser);

    console.log(Users);
}