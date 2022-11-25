//Напишіть функцію конструктора (або клас) Student для створення користувача з такими властивостями
// name -  стрічка
// faculty - стрічка
//Додайте метод getInfo(), який повертає рядок:
//`Студент [ім`я] вчиться на факультеті [факультет]`
// Створіть студентів:
// Harry Potter Gryffindor
// Draco Malfoy Slytherin


class Student {
   constructor(fullname, faculty) {
      this.fullname = fullname;
      this.faculty = faculty;
   }

   getInfo() {
      return `Студент ${this.fullname} вчиться на факультеті ${this.faculty}`
   }
}

const Harry = new Student('Harry Potter', 'Gryffindor');
const Draco = new Student('Draco Malfoy', 'Slytherin');

console.log(Harry.getInfo());
console.log(Draco.getInfo());

// Student.__proto__ === Function.prototype

// Harry.__proto__ ==== Student.prototype
