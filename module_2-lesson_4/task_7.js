// Напишіть функцію calAverage()
// яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
// Усі аргументи будуть лише числами.


// console.log(calAverage(1, 2, 3, 4));// 2.5
// console.log(calAverage(14, 8, 2));// 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2 ``

let total = 0
let numbersArray = [];
let result = 0
function calAverage( ) {
    for (let i = 0; i < arguments.length; i += 1){
        numbersArray [i] = arguments[i]
    }
    console.log(numbersArray)


    for (let i = 0; i < numbersArray.length; i += 1){
        total += numbersArray [i]
    }
    console.log(total)
    result = total / numbersArray.length
    
    console.log(result)
    return   result
 }


calAverage(1, 2, 3, 4);// 2.5
calAverage((14, 8, 2));// 8
calAverage((27, 43, 2, 8, 36)); // 23.2 

