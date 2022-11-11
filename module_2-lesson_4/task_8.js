// Example 8 - Форматування часу
// Напиши функцію formatTime(minutes)
//  яка переведе значення minutes(кількість хвилин)
//   у рядок у форматі годин та хвилин HH: MM.

function formatTime(minutes) {
  const hoursTotal = Math.floor(minutes / 60);
  const minutesTotal = minutes % 60;
  console.log(hoursTotal);
  console.log(minutesTotal);

  const digitalHoursTotal = String(hoursTotal).padStart(2, 0);
  const digitalMinutesTotal = String(minutesTotal).padStart(2, 0);
  console.log(digitalHoursTotal);
  console.log(digitalMinutesTotal);

  let time = `${digitalHoursTotal} : ${digitalMinutesTotal} `;

  return time;
}
const currentTime1 = formatTime(70); // "01:10"
const currentTime2 = formatTime(450); // "07:30"
const currentTime3 = formatTime(1441); // "24:01"

console.log(currentTime1);
console.log(currentTime2);
console.log(currentTime3);
