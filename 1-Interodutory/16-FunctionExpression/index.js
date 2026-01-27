const {log} = require("console");

// Function Expression

/*let sayHi = function () {
    console.log("Hello");
};

sayHi();*/

// ===============================================================

// Function with parameters and return value
/*let addNumber = function (num1, num2) {
    return num1 + num2;
};

log(addNumber(5, 7));*/

// ================================================================

// Function with default parameters

/*let multiplyNumber = function (num1 = 0, num2 = 0) {
    return num1 * num2;
};

log(multiplyNumber(4, 5));*/

//================================================================

// Function to check army eligibility
/*let i = 0;
let armyCheck = function (age, gender) {
    let checkEligibility = function () {
        if (gender === "female") {
            return "You are not eligible for army";
        } else if (age < 18) {
            return "You are not eligible for army";
        } else if (age >= 40) {
            return "You are not eligible for army";
        } else {
            return "You are eligible for army";
        }
    };

    return checkEligibility();
};

log(armyCheck(25, "male"), ++i);
log(armyCheck(25, "male"), ++i);
log(armyCheck(17, "male"), ++i);
log(armyCheck(30, "female"), ++i);
log(armyCheck(45, "male"), ++i);
log(armyCheck(18, "male"), ++i);
log(armyCheck(40, "female"), ++i);
log(armyCheck(39, "female"), ++i);
log(armyCheck(22, "male"), ++i);*/

// ================================================================

// Enhanced army eligibility check with health status
/*let armyCheck2 = function (age, gender, healthStatus) {
    let checkGender = function () {
        if (gender === "female") {
            return "You are not eligible for army";
        } else {
            return checkAge();
        }
    };

    let checkAge = function () {
        if (age < 18 || age >= 40) {
            return "You are not eligible for army";
        } else {
            return checkHealth();
        }
    };
    let checkHealth = function () {
        if (healthStatus === "unfit") {
            return "You are not eligible for army";
        } else {
            return "You are eligible for army";
        }
    };
    return checkGender();
};
i = 0;
log(armyCheck2(25, "male", "fit"), ++i);
log(armyCheck2(17, "male", "fit"), ++i);
log(armyCheck2(30, "female", "fit"), ++i);
log(armyCheck2(45, "male", "fit"), ++i);
log(armyCheck2(18, "male", "fit"), ++i);
log(armyCheck2(40, "female", "fit"), ++i);
log(armyCheck2(39, "female", "fit"), ++i);
log(armyCheck2(22, "male", "fit"), ++i);
log(armyCheck2(22, "male", "unfit"), ++i);*/

// ================================================================

// Enhanced army eligibility check with health status

/*
let armyCheck3 = function (age, gender, healthStatus) {
    let checkGender = function () {
        if (gender === "female") {
            return "You are not eligible for army";
        } else {
            return checkAge();
        }
    };

    let checkAge = function () {
        if (age < 18 || age >= 40) {
            return "You are not eligible for army";
        } else {
            return checkHealth();
        }
    };
    let checkHealth = function () {
        if (healthStatus === "unfit") {
            return "You are not eligible for army";
        } else {
            return "You are eligible for army";
        }
    };
    return checkGender();
};

log(armyCheck3(Number(prompt("Please enter your age (make sure to enter a number) : ")), prompt("Please enter your gender. Please select either 'male' OR 'female'."), prompt("Health Status : Disabled ? Choose 'Unfit'. Otherwise 'fit'.")));
*/


