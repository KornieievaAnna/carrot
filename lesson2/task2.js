const stones = [
    { name: "Смарагд", price: 1300, quantity: 4 },
    { name: "Діамант", price: 2700, quantity: 6 },
    { name: "Сапфір", price: 400, quantity: 7 },
    { name: "Щебінь", price: 150, quantity: 100 },
  ];
  const min = 10000
  const chosenarray = stones.filter(stone=>stone.price*stone.quantity>min)
console.log(chosenarray);