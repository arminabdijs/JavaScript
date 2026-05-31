let $ = document;

let resumeContent = $.querySelector('.resume-content');
let preloader = $.querySelector('.preloader');
let okCloseBtn = $.querySelector('.ok__close');
let noOpenBtn = $.querySelector('.no__open');
let content = $.querySelector('.content');
let alert = $.querySelector('.alert');
let email = $.getElementById('email');
let phone = $.getElementById('phone');


let loadedWebsite = function () {
    setTimeout(() => {
        preloader.className = 'preloader hidden';
        resumeContent.className = 'resume-content visible';
    }, 1000);
};

window.addEventListener('load', loadedWebsite);

noOpenBtn.addEventListener('click', (event) => {
    event.preventDefault();
    model.className = 'model';
    alert.className = 'alert';
    resumeContent.style.opacity = 1

});


okCloseBtn.addEventListener('click', (event) => {
    event.preventDefault();
    model.className = 'model';
    alert.className = 'alert';
    resumeContent.style.opacity = 1

});

function setAnimation(event) {
    model.className = 'model active';
    content.style.animation = 'fadeIn 2.3s ease-out 3'
    resumeContent.style.opacity = .5
    alert.className = 'alert active';
    event.preventDefault();
}

function animationStart() {
    alert.innerHTML='animation start'
    content.style.backgroundColor="pink"
}

function animationEnd() {
    alert.innerHTML='animation End'
    content.style.backgroundColor="#fff"
}


function animationIteration() {
    alert.innerHTML='animation Repeat'
    content.style.backgroundColor="#5eee5e"

}

phone.addEventListener('click', setAnimation)
email.addEventListener('click', setAnimation)


content.addEventListener('animationstart', animationStart)

content.addEventListener('animationiteration', animationIteration)

content.addEventListener('animationend', animationEnd)
