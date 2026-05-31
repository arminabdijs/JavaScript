let $ = document;

let formLogin = $.getElementById("form__login")
let username = $.getElementById("username")
let link = $.getElementById("link")

formLogin.addEventListener("submit", (event) => {
    event.preventDefault() // برای جلوگیری از رفتار دیفالت هستش از زمانی میتونیم که cancelable اون المنت true باشه

    console.log(event)
})


username.addEventListener("keydown", (event)=>{
    event.preventDefault()

    console.log(event)
})

link.addEventListener("click", (event)=>{
    event.preventDefault()

    console.log(event)
})