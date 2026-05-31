let $ = document;

function _id(id_name) {
    return $.getElementById(id_name)
}

function _class(class_name) {
    return $.getElementsByClassName(class_name)
}


let passwordInput = _id('passwordInput')
let togglePassword = _class('togglePassword')[0]


togglePassword.addEventListener("click", () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.classList.add('active')
    } else {
        passwordInput.type = 'password';
        togglePassword.classList.remove('active')
    }
})