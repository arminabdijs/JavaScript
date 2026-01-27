//Object
// let newObject = new Object();
// let Object = {};

/*let user = {
    //In Objects, we can immediately put properties as pairs of "key: value" (key: value) inside {...}
    name: "Armin",
    Age: 22,
};
console.log(user.name); //Attribute values are accessed using the dot*/

// ===========================================================

/*
let users = [
    { name: "Armin", Age: 22 },
    { name: "Ali", Age: 40 },
    { name: "Sara", Age: 23 },
];

console.log(users);*/


// ===========================================================

//We can add an item by using the name of the item and a dot and key that we want to add and equal to the value of that key.
/*
let user = {
    name: "Armin",
    Age: 22,
};
user.isAdmin = true;
console.log(user);*/


// ===========================================================

//To delete an attribute, we use the delete operator
/*let user = {
    name: "Armin",
    Age: 22,
    isAdmin:true
};
delete user.isAdmin;
console.log(user);*/

// ===========================================================

// Multi-word attribute names must be enclosed in quotation marks
/*let newUser = {
  name: "Armin",
  age: 30,
  "likes birds": true,
};*/

// ===========================================================

/*
let newUser = {
  name: "Armin",
  age: 30
};

// newUser.likes birds = true //For multi-word attributes, dot access is not possible

newUser["likes birds"] = false; //There is an alternative method called "brackets" that works with any string
console.log(newUser);
delete newUser["likes birds"];
console.log(newUser);*/

// ===========================================================

/*let newUser = {
    name: "Armin",
    age: 30
};
let key=prompt("What do you want to know about the user?","name")
console.log(newUser[key])
console.log("name" in newUser);*/
// ===========================================================

/*
let fruit = prompt("Which fruit are you going to buy?", "apple");

let bag = {
  [fruit]: 5,
};

console.log( bag[fruit] );
console.log( bag.apple );*/

// ===========================================================

/*
function makeUser(name, age) {
  return {
   // name: name,
    name,
   // age: age,
   age,
  };
}
let user = makeUser(
  prompt("Please enter your name?", "Armin"),
  Number(prompt("Please enter your age?", 22))
);
console.log(user.name);*/

// ===========================================================

/*
let user = {
  name: "Armin",
  sizes: {
    width: 50,
    height: 180,
  },
};
console.log(user.sizes.height);*/

// ===========================================================

/*let user = {
    name: "Armin",
    sizes: {
        width: 50,
        height: 180,
    },
};
let Admin = { name: "mohammad", age: 22, isAdmin: true };
let newObject = {};
Object.assign(newObject, user, Admin); //This method copies several items inside the first item
console.log(newObject);*/

// ===========================================================

/*let user = {
  name: "Armin",
  sizes: {
    width: 50,
    height: 180,
  },
};

let clone = structuredClone(user); //copy

let clone2 = Object.assign({}, user);

clone.sizes.height = 178;
console.log(clone);

clone2.sizes.height = 40;
clone2.name = "Amir";
console.log(clone2);
console.log(user);*/

// ===========================================================

