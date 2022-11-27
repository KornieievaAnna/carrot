const stones = [
    { name: "Смарагд", price: 1300, quantity: 4 },
    { name: "Діамант", price: 2700, quantity: 6 },
    { name: "Сапфір", price: 400, quantity: 7 },
    { name: "Щебінь", price: 150, quantity: 100 },
  ];
  

// const total = stones.reduce((total, {price,quantity}) => {
//    total+= price * quantity
//    return total
// }, 0)
// console.log(total)
let 
const quantityUp = stones.forEach(stone => stone.quantity + 10)

<<<<<<< HEAD
console.log(quantityUp)
console.log(stone.quantity)
=======

 const totalPrice = stones.reduce((total,{price,quantity}) => {
    total += price * quantity
    return total
 }, 0) 
 console.log(totalPrice)



 
>>>>>>> c75e320536b88595c0014b3df364ba2b554f86ab
