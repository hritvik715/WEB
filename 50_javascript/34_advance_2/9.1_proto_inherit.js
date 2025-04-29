
function Animal(name) {
    this.name = name
}

Animal.prototype.sound = function () {//creating a method
    return `Animal Sound`
}

const animal = new Animal("frog")
console.log(animal);//imp-> here in the console u can see prototype mey sound method aa gya hoga
console.log(animal.sound());








function Dog(name, breed) {
    //imp-> now without creating sound method we will inherit the property for Dog fxn
    Animal.call(this, name)//imp->call method se inherit ho gya phir iske baad Object.create karna hoga to get that method
    this.breed = breed;
}

//imp-> we cant call sound method for Dog bcz vo methods sirf animal kay liye banaya tha toh hame abb banana hoga alag se sound method for Dog






//imp->The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.


Dog.prototype = Object.create(Animal.prototype)//imp-> existing object is Animal here ussi se ham bna rhe hai


Dog.prototype.bark = function () {
    return "woof!";
}


const dog1 = new Dog("buddy", "Genus")
console.log(dog1)
console.log(dog1.sound())

console.log(dog1.bark())