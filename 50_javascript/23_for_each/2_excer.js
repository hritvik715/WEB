// 1. Create an array of numbers.
// 2. Create a variable to hold the sum.
// 3. Create the adder function which takes the parameter of
//    number & add that with sum variable.
// 4. Loop over the array, incrementing the sum variable except
//    this time a function gets referenced in the forEach
// 5. print the sum variable.




const arr = [1, 2, 3];
let sum = 0;
arr.forEach(x => sum += x);
console.log(sum);


//imp-> second way
let numbers = [1, 2, 3];
let sum1 = 0;
function adder(number) {
    sum1 += number;
}
numbers.forEach(adder);
console.log(sum1);

