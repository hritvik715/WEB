// Classes are one of the features introduced in the ES6 version of JavaScript.
// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house.

// Since many houses can be made from the same description, we can create many objects from a class.

// Class Declaration



class Person {
    constructor(firstName, lastName, age) {
        //Instance members
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.printUserInfo = function () {
            return `name ${this.firstName} ${this.lastName} age: ${this.age}`
        }
    }
    //ProtoType Members
    greet() {//imp-> it is a protypical member so it will be present inside a prototype
        return `hello there ${this.firstName} ${this.lastName}`
    }
}


const john = new Person("huxn", "web dev", 19)
console.log(john)
console.log(john.greet())
console.log(john.printUserInfo())



