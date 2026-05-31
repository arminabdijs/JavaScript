let $ = document;

let titleWebsite = $.querySelector('title')
let body = $.body;
let changeTheme = $.querySelector('.change-theme');
let title = $.getElementById("title")
let eventKey = $.getElementById("event-key")
let eventLocation = $.getElementById("event-location")
let eventWhich = $.getElementById("event-which")
let eventCode = $.getElementById("event-code")
let pressKey = $.querySelector(".press-key")
let container = $.querySelector(".container")

changeTheme.addEventListener('click', () => {
    body.classList.toggle('dark-theme')
})

body.addEventListener("keydown", (event) => {
    console.log(event)
    event.preventDefault()
    eventKey.innerHTML = event.key;
    eventLocation.innerHTML = event.location;
    eventWhich.innerHTML = event.which;
    title.innerHTML = event.which;
    titleWebsite.innerHTML =`  ${event.which}  JavaScript Event KeyCodes` ;
    eventCode.innerHTML = event.code
    pressKey.style.display = 'none'
    container.style.display = 'block'
})