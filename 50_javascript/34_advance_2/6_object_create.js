// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.


let person = {
    greet: function () {//imp->object kay andar fxn ko create karne ko hi method kehte hai
        console.log(`hello my name is ${this.firstName} ${this.lastName}`)
    }
}

const huxn = Object.create(person)

huxn.firstName = "huxn"
huxn.lastName = "web dev"
huxn.greet();

let john = Object.create(person, {
    firstName: { value: "john" },
    lastName: { value: "Doe" }
})

console.log(john)

john.greet();