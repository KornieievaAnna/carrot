//Напиши клас Notes який управляє колекцією нотаток у
//Властивості items.
//Нотатка це об'єкт із властивостями text, priority
//Додай класу статичну властивість Priopity,
//у якому зберігатиметься об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)


class Notes {
    static Priority = { hight: 'hight', low: 'low' };

    constructor() {
        this.items = [];
    }

    addNote(note) {
        this.items.push(note);
    }

    removeNote(noteText) {
        const index = this.items.findIndex(({ text }) => text === noteText);
        this.items.splice(index, 1);
    }

    updatePriority({ text, priority }) {
        const index = this.items.findIndex(item  => item.text === text);
        this.items[index].priority = priority;
    }

}

const newNote = new Notes();

console.log(newNote.addNote({ text: "Mango", priority: Notes.Priority.hight }));
console.log(newNote);
newNote.updatePriority({ text: "Mango", priority: Notes.Priority.low });
console.log(newNote);
newNote.removeNote("Mango");
console.log(newNote);

