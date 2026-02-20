let Users = [
    { id: 1, name: "armin", family: "abdi", age: 21, email: "email@gmail.com" },
    { id: 2, name: "mohammd", family: "abdi", age: 21, email: "email@gmail.com" },
    { id: 3, name: "ali", family: "abdi", age: 21, email: "email@gmail.com" },
];

Users.forEach((user) =>
    console.log(`Name : ${user.name} || Family : ${user.family}`)
);