/*const user = {
    id: 1,
    name: 'John Doe',
    age: 25
}

const id=user.id
const name=user.name
const age=user.age

console.log(id,name,age)*/

// ===========================================================

/*const user = {
    id: 1,
    name: 'John Doe',
    age: 25
}

const {id,name,age}=user

console.log(id,name,age)*/

// ===========================================================

/*const user = {
    id: 1,
    name: 'John Doe',
    age: 25
}

const {id: userId, name = "Ali", age = 12, email = "armin@gmai.com"} = user

console.log(userId, name, age,email)*/

// ===========================================================

/*const userLogger = (user) => {
    console.log("ID: " + user.id + "\nName: " + user.name + "\nAge: " + user.age + "\nEmail: " + user.email);
}

userLogger({id: 1, name: "Armin", age: 12, email: "armin@gmail.com"});*/

// ===========================================================

/*const userLogger = (user) => {
    const {id, name, age, email} = user
    console.log("ID: " + id + "\nName: " + name + "\nAge: " + age + "\nEmail: " + email);
}

userLogger({id: 1, name: "Armin", age: 12, email: "armin@gmail.com"});*/

// ===========================================================

const userLogger = ({id, name, age, email}) => {
    console.log("ID: " + id + "\nName: " + name + "\nAge: " + age + "\nEmail: " + email);
}

userLogger({id: 1, name: "Armin", age: 12, email: "armin@gmail.com"});