/* let title = document.getElementById("title");
title.addEventListener("click",()=>{
    title.setAttribute("class","red");
}) */

//================================================

/* let title = document.getElementById("title");

title.addEventListener("click",()=>{
    title.classList.add("red");
    title.classList.remove("blue");
}) */

//================================================

/* let title = document.getElementById("title");

let isClassRed = false;

title.addEventListener("click",()=>{
    if(isClassRed){
        title.classList.remove("red");
        title.classList.add("blue");
        isClassRed = false;
    } else {
        title.classList.remove("blue");
        title.classList.add("red");
        isClassRed = true;
    }
}) */

//================================================

let title = document.getElementById("title");

title.addEventListener("click",()=>{
    title.classList.toggle("red");
    // title.classList.toggle("blue");
    title.style.userSelect = "none";
});