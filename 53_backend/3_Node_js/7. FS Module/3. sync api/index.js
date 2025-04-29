// File System - Callback API
import * as fs from "fs";


//imp-> promise will allow us to run code asynchronously and sync allow us to run code synchronously


//imp-> here we dont need try,catch block and also no need of callback function

//imp->The fs.mkdir() function requires a callback function when used in non-promise mode.
// Since no callback is provided, Node.js throws an error.
//Since you're working with sync API, use fs.mkdirSync() instead of fs.mkdir():


// Creating Directory
// fs.mkdirSync("c:\\nodejs");

// Creating Directory - Path not required
// fs.mkdirSync("c:\\nodejs\\test\\demo", { recursive: true });

// Read content of directory
// const files = fs.readdirSync("c:\\nodejs\\");
// for (const file of files) {
//   console.log(file);
// }

// Remove Directory - Directory should be empty.
fs.rmdirSync("c:\\nodejs\\test\\demo");

// Create & Write File
// fs.writeFileSync("readme.txt", "Hello Nodejs");

// Read File
// const result = fs.readFileSync("readme.txt", "utf-8");
// console.log(result);

// Append data into file
// fs.appendFileSync("readme.txt", "HuXn WebDev");

// Copy File
// fs.copyFileSync("readme.txt", "info.txt");

// Get file information
// const stats = fs.statSync("info.txt");
// console.log(stats.isDirectory());
// console.log(stats.isFile());
// console.log(stats);
