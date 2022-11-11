// Example 1 - Індекс маси тіла
// Напиши функцію  яка розраховує та повертає індекс маси тіла.
//  Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

const userWeight = Number(prompt("введіть вашу вагу в кг"));
const userHeight = Number(prompt("введіть ваш зріст в м"));

function weightIndex(weight, height) {
  const heightPow = Math.pow(height, 2);
  const indexResult = weight / heightPow;
  // console.log(indexResult)
  // console.log(typeof userWeight)
  // console.log(typeof userHeight)

  return indexResult.toFixed(1);
}

let userIndex = weightIndex(userWeight, userHeight);

console.log(userIndex);
