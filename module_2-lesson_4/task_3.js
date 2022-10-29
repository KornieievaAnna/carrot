
//  Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
// значення яких будуть передані до параметра dimensions у вигляді рядки.
// Значення гарантовано розділені пробілом.

function getRectArea(dimensions) {
  const sides = dimensions.split(" ")
  const sideA = Number(sides[0])
  const sideB = Number(sides[1])
  let RectArea = sideA * sideB

  



  console.log( sideA,typeof sideA , sideB, typeof  sideB )
 
  console.log( `${sides} square: ${RectArea}`)
 }

getRectArea('8 11')
     
getRectArea('10 13')




