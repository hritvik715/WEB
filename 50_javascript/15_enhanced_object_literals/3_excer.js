// obj.a = 1, obj.b = 2, obj.c = 3
// -------------------------------
// ES5 code
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   },
// };

// console.log(lib.sum(2, 3)); // 5
// console.log(lib.mult(2, 3)); // 6
// -------------------------------

// -------------------------------
// ES6 code

const lib = {
    sum: (a, b) => a + b,
    mult: (a, b) => a * b
};

console.log(lib.sum(2, 3)); // 5
console.log(lib.mult(2, 3)); // 6