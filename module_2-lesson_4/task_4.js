// Напиши функцію logItems(items),
// яка отримує масив та використовує цикл for,
//   який для кожного елемента масиву буде виводити в консоль повідомлення форматі < номер елемента > - <значення елемента >.
//   Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 – Mango, а для індексу 2 виведе 3 – Ajax.

// ``js function logItems(items) {}











 const friends = ['Mango', 'Poly', 'Ajax'];
const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];



function logItems(items) {
  for (let i = 0; i < items.length; i += 1){
    let number = i+1
    console.log( `${number} - ${items[i]} `)
  }

}

logItems(fruits);
logItems(friends);