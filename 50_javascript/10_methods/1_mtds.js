function greet() {
    return `hello name is ${person.name} i am ${person.age} yrs old`
}


const person = {
    name: 'john',
    age: 30,
    greet,//imp-> this is method
}

console.log(person.greet());