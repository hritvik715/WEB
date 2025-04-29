let person = {
    name: 'golu',
    age: 19,
    gender: 'male'
}
const clone = { ...person };//imp-> isse clone ban jaayega (yaad rhe curly braces mey hi daaleneg)
const more = { ...person, work: 'programmer', location: 'idk' }

console.log(clone);
console.log(person);
console.log(more);