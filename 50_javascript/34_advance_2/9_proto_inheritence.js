// Prototypal inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. It is a fundamental concept in the language and is based on the prototype model. In prototypal inheritance, objects can serve as prototypes for other objects, forming a hierarchical chain of inheritance.

// In JavaScript, every object has an internal property called [[Prototype]] (often referred to as __proto__), which points to its prototype object. When you access a property or method on an object, and that property or method is not found in the object itself, JavaScript looks for it in the object's prototype (and further up the prototype chain, if needed) until it finds the property or reaches the top of the prototype chain, which is usually the Object.prototype.


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
    this.name = name;
    this.breed = breed;
}

//imp-> we cant call sound method for Dog bcz vo methods sirf animal kay liye banaya tha toh hame abb banana hoga alag se sound method for Dog

console.log(dog1.sound());

Dog.prototype.sound = function () {//creating a method
    return `Animal Sound`
}


const dog1 = new Dog("buddy", "genius")
console.log(dog1);//u can see on the console sound method nhi aaya hoga
console.log(dog1.name);
console.log(dog1.sound());


