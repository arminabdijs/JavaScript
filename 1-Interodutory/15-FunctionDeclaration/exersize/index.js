function checkEligibility(age, gender, healthStatus, trainingScore) {

  function checkGender() {
    if (gender === 'female') return "You are not eligible for army";
    return checkAge();
  }

  function checkAge() {
    if (age < 18 || age >= 40) return "You are not eligible for army";
    return checkHealth();
  }

  function checkHealth() {
    if (healthStatus === 'unfit') return "You are not eligible for army";
    return checkTraining();
  }

  function checkTraining() {
    if (trainingScore < 50) return "You are not eligible for army";
    return "You are eligible for army";
  }

  return checkGender();
}

console.log("1. Ali (male, 25 years old, health: fit, score: 85):", checkEligibility(25, 'male', 'fit', 85));
console.log("2. Sara (female, 30 years old, health: fit, score: 90):", checkEligibility(30, 'female', 'fit', 90));
console.log("3. Reza (male, 17 years old, health: fit, score: 70):", checkEligibility(17, 'male', 'fit', 70));
console.log("4. Maryam (female, 22 years old, health: unfit, score: 60):", checkEligibility(22, 'female', 'unfit', 60));
console.log("5. Hossein (male, 39 years old, health: fit, score: 45):", checkEligibility(39, 'male', 'fit', 45));
console.log("6. Nima (male, 28 years old, health: fit, score: 95):", checkEligibility(28, 'male', 'fit', 95));

// محاسبه تعداد eligible
let eligibleCount = 0;
if (checkEligibility(25, 'male', 'fit', 85) === "You are eligible for army") eligibleCount++;
if (checkEligibility(30, 'female', 'fit', 90) === "You are eligible for army") eligibleCount++;
if (checkEligibility(17, 'male', 'fit', 70) === "You are eligible for army") eligibleCount++;
if (checkEligibility(22, 'female', 'unfit', 60) === "You are eligible for army") eligibleCount++;
if (checkEligibility(39, 'male', 'fit', 45) === "You are eligible for army") eligibleCount++;
if (checkEligibility(28, 'male', 'fit', 95) === "You are eligible for army") eligibleCount++;

console.log("Total eligible soldiers:", eligibleCount);
