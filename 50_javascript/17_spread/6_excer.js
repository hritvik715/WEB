// 1. Make a clone of "arr, arr2" by using spread operator


// -----------------------------
// spread operator doing the concat job
let arr = [1, 2, 3];
let arr2 = [4, 5];



let clone = [...arr, ...arr2];
console.log(clone);


// 2. Make a clone of "user" object using spread operator
const user = {
    name: "Jen",
    age: 22,
};

const objClone = { ...user };
console.log(objClone);




