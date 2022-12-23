/*
 * Функція startTimer повинна логувати кожен елемент масиву один раз на секунду.
 * Коли черга дійде до останнього елемента масиву, продовжити логувати у зворотному порядку
 * поки не дійде до першого елемента, потім зупинити процес.
 * 
 */

const startTimer = (arr) => {
    let index = 0;
    let isReversed = false;
    const timerId = setInterval(() => {
        console.log(arr[index]);
        if (index === arr.length-1 && !isReversed) {
            arr.reverse(); 
            isReversed = true;
            index = 0;
        }
        if (index === arr.length - 1 && isReversed) {
            clearInterval(timerId);
        }
        index += 1;

  }, 1000);
}

 startTimer(["a", "b", "c", "d", "e", "f"]);
