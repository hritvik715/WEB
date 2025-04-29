//imp->to install json file => type in terminal => npm init abd dont provide any name keep hitting enter






// New way to import stuff.

// If we write code like this our compiler will gives us error ⚠️
// If you wanna use modern import statment in your projects there are
// two ways you can use that.

// 1️⃣ Change the file name from .js to (.mjs)
//   If you change the extention to .mjs you will no longer have
//   access to (require(thing)) (__dirname) (__filename) etc.
// 2️⃣ Change the type to (module) using npm init.



//imp-> here you have to specify .js extension
import greet from "./greet.js";
import { p1, p2, p3 } from "./people.js"
greet("golu");
console.log(p1, p2, p3);










//imp-> skip this
// console.log(path.basename(__filename))
// console.log(path.basename("c://huxn/courses"));
