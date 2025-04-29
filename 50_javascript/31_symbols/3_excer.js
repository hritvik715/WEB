// 1. Create a symbol provide a value of "foo"
// 2. Check the type of that symbol.
// 3. Create empty object
// 4. Store symbol as the property to that object.
// 5. Iterate over Symbol.

//task 1
let symbol1 = Symbol('foo')

console.log(typeof symbol1)
console.log(`=================`)

//task 2
const obj = {
    firstName: 'alex',
    lastName: 'mead',
}

obj[Symbol('foo')] = 'some value for foo';

console.log(obj);
console.log(`=================`)

//task 3
for (let i in obj) {
    console.log(i);
}
