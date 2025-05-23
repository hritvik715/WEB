// Symbol is a unique and immutable primitive data type introduced in ECMAScript 6 (ES6). A symbol is often used as an identifier for object properties to avoid potential naming conflicts.

// Unlike strings or numbers, symbols are guaranteed to be unique. When you create a symbol, it is unique and cannot be recreated or changed. This uniqueness ensures that symbols will not collide with other property names, even if they have the same string representation.



const mySymbol1 = Symbol("name");
const mySymbol2 = Symbol("name");


const obj = {};
obj[mySymbol1] = "value1 1";
obj[mySymbol2] = "value 2";

console.log(obj);