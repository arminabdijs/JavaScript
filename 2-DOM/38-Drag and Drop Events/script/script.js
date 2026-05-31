const h1Elem = document.querySelectorAll('h1');
const dropElem = document.querySelectorAll('.drop')[0];

/* 
function dragStarHandler(event) {
    // console.log('drag');
    // console.log(event);
    // console.log(event.target.id);

    event.dataTransfer.setData("elemId",event.target.id)
}

function dropHandler(event) {
    // console.log('drop');
    // console.log(event.dataTransfer.getData("elemId"));

    let targetId=event.dataTransfer.getData("elemId")
    let targetElem=document.getElementById(targetId)
    dropElem.appendChild(targetElem)

}

function dragOverHandler(event) {
    event.preventDefault()
    // console.log('DragOver');
}


h1Elem.forEach((element) => {
    element.addEventListener('dragstart', dragStarHandler)
});

dropElem.addEventListener('drop', dropHandler)

dropElem.addEventListener('dragover', dragOverHandler) 
*/



//Dragged ==> dragstart - drag -  dragend
//Dropped ==> dragenter - dragover - dragleave - drop