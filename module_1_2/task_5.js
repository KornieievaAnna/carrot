//Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

const abc = 'abcde'
// for (const letter of abc) {
//     if (letter === 'a') {
//         alert('yes');
      
//     }
//     else {
//         alert('no');
//     }
//     break;
// }

// if (abc[0] === "a") {
//     alert('yes');
// }
// else {
//     alert('no');
// }
abc[0] === "a"?  alert('yes'):alert('no');