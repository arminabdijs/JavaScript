let $ = document;

let usernameInput =$.getElementById("username")



usernameInput.addEventListener("keydown" , ()=>{
    console.log("keydown")// اول اجرا keydown میشه
})

usernameInput.addEventListener("keypress" , ()=>{
    console.log("keypress")// دوم اجرا keypress میشه این برای بعضی از دکمه های shift tab backspace و... رخ نمی دهد
})

usernameInput.addEventListener("keyup" , ()=>{
    console.log("keyup")// سوم اجرا keyup میشهدر زمان نگه داشتن انگشت روی یک دکمه تا بر نداری اجرا نمی شه و روی tab هم کار نمی کنه
})