// Iterate over object & log the property and the value of that object using for in loop.
const object = { a: 1, b: 2, c: 3 };


for (let properties in object) {
    console.log(`${properties} : ${object[properties]}`);
}
