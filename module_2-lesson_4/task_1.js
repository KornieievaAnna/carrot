// Example 1 - Індекс маси тіла
// Напиши функцію  яка розраховує та повертає індекс маси тіла.
//  Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;


const userWeight = prompt('введіть вашу вагу в кг');
const userHeight = prompt('введіть ваш зріст в м');

function weightIndex (weight, height) {
    const heightPow = Math.pow(height, 2);
const indexResult = weight / heightPow  ;
 
    return indexResult.toFixed(1);

 
} 

const userIndexResult = weightIndex(weight, height);

console.log(userIndexResult)










// calcBMI(53, 1.55)