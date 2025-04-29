// 1. Create a person constructor which has parameters of (name, age, gender)
// 2. Access parameter values to the call object.
// 3. Create a method name (info), which will just print the info.
// 4. Create a few instances
// 5. Access each property


function Person(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    this.info = function () {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
}


//creating object insatnces
const person1 = new Person("golu", 22, "male")
const person2 = new Person("mohan", 65, "male")
console.log(person1.name)
console.log(person2.name)


person1.info();

person2.info();