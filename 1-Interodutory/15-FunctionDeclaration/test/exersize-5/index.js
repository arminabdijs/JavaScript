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

log(armyCheck(25, 'male', 'fit'));
log(armyCheck(17, 'male', 'fit'));
log(armyCheck(30, 'female', 'fit'));
log(armyCheck(45, 'male', 'fit'));
log(armyCheck(18, 'male', 'fit'));
log(armyCheck(40, 'female', 'fit'));
log(armyCheck(39, 'female', 'fit'));
log(armyCheck(22, 'male', 'fit'));
log(armyCheck(22, 'male', 'unfit'));