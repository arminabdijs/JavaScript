let groupUsers = [
  { id: 1, name: "Ali", age: 19 },
  { id: 2, name: "Amin", age: 22 },
  { id: 3, name: "Amir", age: 21 },
  { id: 4, name: "Akbar", age: 29 },
];

let isAll = groupUsers.every(function (user) {
  return user.age > 18;
});

if (isAll === true) {
  console.log("You can start your conference call");
} else {
  console.log("You are not allowed to make a conference call");
}