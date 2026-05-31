let $ = document;

const weightRange = $.getElementById('weight__range');
const weightRangeLable = $.getElementById('weight__range--lable');

const heightRange = $.getElementById('height__range');
const heightRangeLable = $.getElementById('height__range--lable');

const resultBMI = $.querySelector('.result__BMI');
const alert__BMI = $.querySelector('.alert__BMI');
const body = $.body;

function bmi() {
  let weight = weightRange.value.trim();
  let height = heightRange.value.trim();

  weightRangeLable.innerText = `${weight} KG`;
  heightRangeLable.innerText = `${height} CM`;

  let result = weight / Math.pow(height / 100, 2);

  resultBMI.innerText = result.toFixed(1);

  if (result < 18.5) {
    alert__BMI.innerText = 'Underweight';
    alert__BMI.style.color = 'var(--color-yellow)';
    resultBMI.style.color = 'var(--color-yellow)';
    body.style.backgroundColor = 'var(--color-yellow)';
  } else if (result >= 18.5 && result <= 24.9) {
    alert__BMI.innerText = 'Normalweight';
    alert__BMI.style.color = 'var(--color-green)';
    resultBMI.style.color = 'var(--color-green)';
    body.style.backgroundColor = 'var(--color-green)';
  } else if (result >= 25 && result <= 29.9) {
    alert__BMI.innerText = 'Overweight';
    alert__BMI.style.color = 'var(--color-pink)';
    resultBMI.style.color = 'var(--color-pink)';
    body.style.backgroundColor = 'var(--color-pink)';
  } else if (result >= 30 && result <= 34.9) {
    alert__BMI.innerText = 'Obesity class I';
    alert__BMI.style.color = 'var(--color-red)';
    resultBMI.style.color = 'var(--color-red)';
    body.style.backgroundColor = 'var(--color-red)';
  } else if (result >= 35 && result <= 39.9) {
    alert__BMI.innerText = 'Obesity class II';
    alert__BMI.style.color = 'var(--color-blackred)';
    resultBMI.style.color = 'var(--color-blackred)';
    body.style.backgroundColor = 'var(--color-blackred)';
  } else {
    alert__BMI.innerText = 'Obesity class III (Severe Obesity)';
    alert__BMI.style.color = 'var(--color-black)';
    resultBMI.style.color = 'var(--color-black)';
    body.style.backgroundColor = 'var(--color-black)';
  }
}

weightRange.addEventListener('input', bmi);
heightRange.addEventListener('input', bmi);
