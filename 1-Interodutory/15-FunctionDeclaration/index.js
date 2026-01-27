// Using destructuring to get log method from console
// const { log } = console;
// import {log} from 'console';
const {log} = require('console');

// ================================================================

// Function Declaration
// This function will print a greeting


/*function sayHi() {
    console.log("Hello");
}

sayHi();*/

// ===============================================================
// Function with parameters and return value
/*function addNumber(num1, num2) {
    return num1 + num2;
}

console.log(addNumber(5, 7));*/


// ===============================================================

// Function with default parameters
/*function multiplyNumber(num1, num2 = 0) {
    return num1 * num2;
}

log(multiplyNumber(4));*/

//================================================================

// Function to check army eligibility
/*let i = 0

function armyCheck(age, gender) {
    function checkEligibility() {
        if (gender === 'female') {
            return "You are not eligible for army";
        } else if (age < 18) {
            return "You are not eligible for army";
        } else if (age >= 40) {
            return "You are not eligible for army";
        } else {
            return "You are eligible for army";
        }
    }

    return checkEligibility();
}

log(armyCheck(25, 'male'), ++i);

log(armyCheck(25, 'male'), ++i);
log(armyCheck(17, 'male'), ++i);
log(armyCheck(30, 'female'), ++i);
log(armyCheck(45, 'male'), ++i);
log(armyCheck(18, 'male'), ++i);
log(armyCheck(40, 'female'), ++i);
log(armyCheck(39, 'female'), ++i);
log(armyCheck(22, 'male'), ++i);*/

// ================================================================
// Enhanced army eligibility check with health status
/*
function armyCheck(age, gender, healthStatus) {
    function checkGender() {
        if (gender === 'female') {
            return "You are not eligible for army";
        } else {
            return checkAge();
        }
    }

    function checkAge() {
        if (age < 18 || age >= 40) {
            return "You are not eligible for army";
        } else {
            return checkHealth();
        }
    }

    function checkHealth() {
        if (healthStatus === 'unfit') {
            return "You are not eligible for army";
        } else {
            return "You are eligible for army";
        }
    }

    return checkGender();
}

i = 0;
log(armyCheck(25, 'male', 'fit'), ++i);
log(armyCheck(17, 'male', 'fit'), ++i);
log(armyCheck(30, 'female', 'fit'), ++i);
log(armyCheck(45, 'male', 'fit'), ++i);
log(armyCheck(18, 'male', 'fit'), ++i);
log(armyCheck(40, 'female', 'fit'), ++i);
log(armyCheck(39, 'female', 'fit'), ++i);
log(armyCheck(22, 'male', 'fit'), ++i);
log(armyCheck(22, 'male', 'unfit'), ++i);*/
