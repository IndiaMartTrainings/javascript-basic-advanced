class Person {
    constructor(){

    }

    getPerson(){
        return "This is Parents getPerson Method"
    }
}
class Student extends Person {
    constructor(firstName, lastName){
        super()
        this.firstName = firstName
        this.lastName =lastName
    }
}

const student1 = new Student("Scott", "Desatnick")
const student2 = new Student("Adam", "Colson")
const student3 = new Student("Tuan", "Bui")

console.log(student1)
console.log(student2)
console.log(student3)
console.log(student3.getPerson())