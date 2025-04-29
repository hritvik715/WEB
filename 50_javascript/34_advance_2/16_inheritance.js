// //ES5 Code

// function Animal(name) {
//     this.name = name
// }



// //method shared among all Animal instances
// Animal.prototype.makeSound = function () {
//     return "Unknown Sound"
// }

// //subclass constructor inheriting from Animal
// function Dog(name) {
//     Animal.call(this, name);
// }

// //setup prototype chain for Dog to inherit from Animal
// Dog.prototype = Object.create(Animal.prototype)


// //method specific to Dog
// Dog.prototype.makeSound = function () {
//     return "woof!"
// }

// //creating instances of the classes
// const genericAnimal = new Animal("generic animal")
// // console.log(genericAnimal.name) 
// // console.log(genericAnimal.makeSound())


// const dog = new Dog("Buddy")
// console.log(dog);
// console.log(dog.makeSound());



//imp->superclass
class Animal {
    constructor(name) {
        this.name = name;
    }
    makesSound() {
        return "unknown sound"
    }
}

//subclass inheriting from Animal
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    makesSound() {
        return "woof"
    }
}

const genericAnimal = new Animal("generic animal");
console.log(genericAnimal.makesSound())

const dog = new Dog("Buddy")
console.log(dog.makesSound())
console.log(dog)




