// 1. Create array with random numbers.
// 2. Map over each item in that array, & multiply each item by 10

let arr = [1, 2, 3, 4, 5];
let newArr1 = arr.map(elelmnt => elelmnt * 10);
console.log(newArr1);

//or
const numbers = [65, 44, 12, 4];

function myFunction(num) {
    return num * 10;
}

const newArr = numbers.map(myFunction);
console.log(newArr);
