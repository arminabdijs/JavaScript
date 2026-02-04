/* let title= document.querySelector(".title");

title.addEventListener("click", () => {
    title.textContent = "Title Changed!";
    title.style.color = "blue";
    title.style.cursor = "pointer";
    title.style.userSelect = "none";
    title.style.textAlign="center";
}); */

// =============================================================

/* let title= document.querySelector(".title");

title.addEventListener("click",changeTitle);

let changeTitle =  () => {
    title.textContent = "Title Changed!";
    title.style.color = "blue";
    title.style.cursor = "pointer";
    title.style.userSelect = "none";
    title.style.textAlign="center";
} */

// =============================================================
let listItems=document.getElementsByClassName("list__item");

for(let i=0; i<listItems.length; i++){
    listItems[i].style.color="purple";
    listItems[i].style.fontSize="18px";
    listItems[i].style.margin="5px 0";
    listItems[i].style.padding="5px 10px";
    listItems[i].style.borderBottom="1px solid #ccc";
    listItems[i].style.cursor="pointer";
    listItems[i].addEventListener("mouseover", function(){
        this.style.backgroundColor="#e0e0e0";
    });
    listItems[i].addEventListener("mouseout", function(){
        this.style.backgroundColor="transparent";
    });
}