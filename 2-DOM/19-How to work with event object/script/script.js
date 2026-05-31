let $ = document;

let username = $.getElementById("username")
let btnSubmit = $.getElementById("submit")

btnSubmit.addEventListener("click", (event) => {
    console.log(event.target)
})


username.addEventListener("keydown", (event) => {
    console.log(event.key)
})


username.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        console.log("Enter down")
    }
})





username.addEventListener("keydown", (event) => {
    console.log(event.keyCode)
})




username.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        console.log("Enter down")
    }
})


