//  Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача.
//  У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами.
//  Порядковий номер імен та телефонів у рядках вказують на відповідність.
//  Кількість імен та телефонів гарантовано однакове.





function printContactsInfo(names, phones) {
  const user = names.split(",")
  console.log(user)
  const phone = phones.split(",")
  console.log(phone)
  for (let i = 0; i < user.length; i += 1){
       console.log(`${user[i]} - ${phone[i]}`) 
  }   
}
printContactsInfo('Jacob, William, Solomon, Artemis', '89001234567,89001112233,890055566377,890055566300'); 
