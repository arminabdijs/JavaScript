const {log} = console;
let usernames = ["Ali", "Amin", "Roz", "Babak"];

usernames.forEach(function (user) {
    log(user);
});


// ===========================================================



log(function () {
    return "Anonymous Function";
})