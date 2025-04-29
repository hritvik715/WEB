const person = {
    name: "John Doe",
    age: 30,
    gender: "male",
    country: "USA",
};

// Your task is to use object destructuring to extract the name, age, and country properties from the person object.
// After extracting the properties, log each variable's value to the console.


const { name, age, country } = person;
// const { country, name, age } = person;
// const { huxn, name, age } = person;//imp-> it will give error  kuki huxn naame se koi variable nhi hai
console.log(name, age, country);

console.log(age, country);