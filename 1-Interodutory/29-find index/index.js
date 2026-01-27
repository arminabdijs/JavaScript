const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan", "Ali", "Zahra"]

//It searches for an item and returns its index
let userIndex = users.findIndex((user) => {
    return user === "Amin";
});

console.log(userIndex);