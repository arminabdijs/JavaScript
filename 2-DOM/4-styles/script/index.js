let title=document.getElementById("title");
title.style.color="blue";
title.style.fontSize="40px";
title.style.textAlign="center";

// ===========================================================


let paragraph=document.getElementsByClassName("paragraph");
paragraph[0].style.color="green";
paragraph[0].style.fontSize="20px";
paragraph[0].style.textAlign="justify";
paragraph[0].style.padding="10px";
paragraph[0].style.border="2px solid black";
paragraph[0].style.borderRadius="5px";
paragraph[0].style.backgroundColor="#f0f0f0";
paragraph[0].style.boxShadow="2px 2px 5px rgba(0, 0, 0, 0.1)";
paragraph[0].style.fontFamily="Arial, sans-serif";
paragraph[0].style.width="550px";
paragraph[0].style.margin="20px auto";
paragraph[0].style.lineHeight="1.6";
paragraph[0].style.letterSpacing="0.5px";

// ===========================================================

let listItems=document.getElementsByClassName("list__item");
for(let i=0; i<listItems.length; i++){
    listItems[i].style.color="purple";
    listItems[i].style.fontSize="18px";
    listItems[i].style.margin="5px 0";
    listItems[i].style.padding="5px 10px";
    listItems[i].style.borderBottom="1px solid #ccc";
    listItems[i].style.cursor="pointer";
}