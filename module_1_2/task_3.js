//При завантаженні сторінки користувачеві пропонується
//В prompt ввести число. Введення додається до значення
//Змінної total.
//Операція введення числа триває до того часу,
//Поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
let message = prompt('Add number!');
let total = 0;
let flag = false;

do {
  if (message) {
    flag = true;
    total += Number(message);
    message = prompt('Add number!');
  } else {
    flag = false;
    alert(`Загальна сума введених чисел дорівнює ${total}.`);
  }
} while (flag)
