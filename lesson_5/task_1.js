// Створіть функцію, яка отримує функцію як аргумент і виконує її через 2 секунди

function delayFunction(callback) {
    setTimeout(callback, 2000)
}

function foo(){
    console.log('Hello world');
};

delayFunction(foo);