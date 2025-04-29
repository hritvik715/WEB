//imp-> BTS ko integrtd termial mey khol and (node index.js) daal isse  file path vaala error nhi aayega




// 👉 Blocking 👈
//imp-> try this on console
// console.log("Start");
// alert("Block");
// console.log("End");

// 👉- Non-Blocking 👈
//imp-> try this on console
// console.log("Start");
// setTimeout(() => {
//     alert("Non-Blocking");
// }, 1000);
// console.log("End");






// ****************************************************
// Without Callback
// import fs from "fs"

// console.log("Start");

// let data = fs.readFileSync("./test.txt");
// console.log(data.toString());

// console.log("End ");

// -------------------------------------
// With Callback


import fs from "fs";



console.log("Program Start");
//imp-> utf-8 use nhi kroge toh buffer value dega
fs.readFile("./test.txt", "utf-8", (err, res) =>
    // fs.readFile("./test.txt", (err, res) =>
    err ? console.log(err) : console.log(res.toString())
);

console.log("Program Ended");
// ****************************************************


//imp-> 2:41:00