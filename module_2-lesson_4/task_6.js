// Напиши функцію findLargestNumber(numbers) яка шукає найбільше число в масиві.

// ``js function findLargestNumber(numbers) {}

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37]))); // 94 console.log(findLargestNumber([49, 4, 7, 83, 12]))); // 83 ``




function findLargestNumber(numbers) {
    let LargestNumber = numbers[0];  // припустим перше значення найбільше 
    for (let i = 0; i < numbers.length; i += 1)    // перебираєм масив якщо наступне знвачення більше перезаписуєм значення в змінній 
        if (numbers[i] > LargestNumber) {
            LargestNumber = numbers[i]
        
        }
        return LargestNumber                
}

let LargestNumber1 = findLargestNumber([2, 17, 1, 23, 37,94])
let LargestNumber2 = findLargestNumber([49, 4, 7, 83, 12])


    console.log(LargestNumber1 )
    console.log(LargestNumber2)