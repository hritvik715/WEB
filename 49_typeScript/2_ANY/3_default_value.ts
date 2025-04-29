function greet(person = "Anonymous") {//imp->When a default value is assigned to a parameter (person = "Anonymous"), TypeScript infers(guess) the type of the parameter from the type of the default value. Since "Anonymous" is a string, TypeScript infers that person is of type string.


    // function greet(person: number = "Anonymous") {
    // function greet(person: string = "Anonymous") {
    return `Hello ${person}`
}

const res22 = greet();
console.log(res22);



