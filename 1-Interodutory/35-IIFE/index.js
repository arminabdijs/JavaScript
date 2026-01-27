// IIFE function ==> Immediately Invoked Function Expression

const {log} = console;

(function () {
    log("hello");
})();

// ===========================================================

(function () {
    log("hello");
}());

// ===========================================================

log((function () {
    return (function () {
        return "this is a test function";
    })()
})())
