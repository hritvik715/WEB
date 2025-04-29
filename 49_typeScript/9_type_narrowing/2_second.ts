class Dog {
    bark(): void {
        console.log(`woff woff`)
    }
}

class Cat {
    meow(): void {
        console.log(`meow meow`)
    }
}

function animalSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}

const myDog = new Dog()
const myCat = new Cat()


console.log(myDog)
console.log(myCat)

animalSound(myDog)//woff woff
animalSound(myCat)//meow