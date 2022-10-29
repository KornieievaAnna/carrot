
//  Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
// значення яких будуть передані до параметра dimensions у вигляді рядки.
// Значення гарантовано розділені пробілом.

function getRectArea(dimensions) {
  const sides = dimensions.split(" ")     //створюємо масив 
  const sideA = Number(sides[0])         //приводимо кожен індекс до числа */
  const sideB = Number(sides[1])
  let RectArea = sideA * sideB            // множим перший індекс на другий

  
  return RectArea                          // повертаєм значення в функцію 
 }

let square1 = getRectArea('8 11')           //створюємо змінну яка буде дорівнювати значенню функції
let square2 = getRectArea('10 13')
console.log(`площа: ${square1}` )           //вивидимо змінну в консоль 
console.log(`площа: ${square2}` )  










// Другий спосіб 

function getRectArea(dimensions) {
  let dimensionsArea = dimensions.split(" ")        // створюємо новий  пустий масив 
  let sides = []


  for (let i = 0; i < dimensionsArea.length; i += 1){   // на кожній ітерації приводимо  кожен елемент до числа  
    sides.push(Number(dimensionsArea[i]))               // додаємо елемент в новий пустий масив 
}
  let square = sides[0]* sides[1]                   // множимо значення першого індексу на другий 

  return square
   
}


let Areasquare1 = getRectArea('8 11')
let Areasquare2 = getRectArea('20 11')
console.log( `Загальна площа: ${Areasquare1}`)
console.log(   `Загальна площа: ${Areasquare2}`)