// Every javascript object has a anonymous property called prototype
// Remember functions & arrays are also a object
// that prototype will be the parent of that object, prototype property is object by itself, which have some special properties & methods

// Every object is associated with another object.
// The object (a) is associated with [[Prototype]] Object
// -> which means a object will inherit all properties of Object.prototype || [[Prototype]]

// We can check the prototype of something in 3 ways:
// --> obj.__proto__
// --> obj.constructor.prototype
// --> Object.getPrototypeOf(a)//imp->a=object_name



const obj = {};
console.log(obj);//imp-> see on console

console.log(obj.__proto__);
console.log(obj.__proto__.__proto__);//null dega ye kuki abb koi proto nhi hai


console.log(obj.constructor.prototype)

console.log(Object.getPrototypeOf(obj))


