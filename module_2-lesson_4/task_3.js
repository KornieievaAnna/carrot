
//  Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, 
// значення яких будуть передані до параметра dimensions у вигляді рядки.
// Значення гарантовано розділені пробілом.

function getRectArea(dimensions) {
  // const sidesNumber = Number.parseInt(dimensions);
  const sides = dimensions.split(" ")
  let RectArea = sides[0] * sides[1]
  console.log(RectArea)
  



  console.log(typeof sides, RectArea)
  console.log(  sides [0] ,typeof  sides [0],   sides [1] ,typeof  sides [1] )
 
 }
  
 
 









getRectArea('8 11')
     
getRectArea('10 13')