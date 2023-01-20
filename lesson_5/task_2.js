//Напишіть функцію, яка виводитиме числа від min до max із затримкою в 1 секунду між кожним значенням

function counter(min, max) {
    let value = min 
    const counterId = setInterval(() => {
        console.log(value)
        if (value === max) {
             clearInterval(counterId)
        }
        value+=1
   },1000) 
        

}
counter(1,20)