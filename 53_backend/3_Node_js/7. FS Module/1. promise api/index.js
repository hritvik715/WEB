//imp-> initialyy install pkges using => npm init -y





// fs promise API
import * as fs from "fs/promises";

// Creating Directory - Path should be there. 🥂
//imp-> 👇 isse nodejs folder create ho jaayega file manager(C drive) mey
// try {
//   await fs.mkdir("c:\\nodejs");
//   console.log("Directory Created ...");
// } catch (error) {
//   console.log(error);
// }

// Path is not required 🥂
//imp-> isse nodejs kay andar ek courses ka folder create ho jaayega
// try {
//   await fs.mkdir("c:\\nodejs\\courses", { recursive: true });
//   console.log("Directory Created ...");
// } catch (error) {
//   console.log(error);
// }

// Read content of directory 🥂
// try {
//   const files = await fs.readdir("c:\\nodejs");
//   for (let file of files) {
//     console.log(file);
//   }
// } catch (error) {
//   console.log(error);
// }

// Remove Directory 🥂
// try {
//   await fs.rmdir("c:\\nodej\\courses");
//   console.log("Directory Removed...");
// } catch (error) {
//   console.log(error);
// }

// Create and Write File 😊
//imp-> isse run kro iske baad readme file generate ho jaayega lekin iss folder kay bahar generate hoga
try {
  await fs.writeFile("readme.md", "Hello Nodejs :)");
} catch (error) {
  console.log(error);
}

//imp-> to write inside this folder only you have to specify the path
// try {
//   await fs.writeFile("7. FS Module/readme.md", "Hello Nodejs :)");
// } catch (error) {
//   console.log(error);
// }


// Read File 😊
// try {
//   const data = await fs.readFile("readme.md");
//   console.log(data); // returns buffer ⚠️
// } catch (error) {
//   console.log(error);
// }

// try {
//   const data = await fs.readFile("readme.md", "utf-8"); // Actual Data
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// Append Data Into File
// try {
//   await fs.appendFile("readme.md", "hey hritivk");
// } catch (error) {
//   console.log(error);
// }

// Copy File 😊
try {
  // await fs.copyFile("readme.md", "c:\\nodejs\\fs\\info.txt");
  await fs.copyFile("readme.md", "info.txt");
  console.log("File Copied");
} catch (error) {
  console.log(error);
}

// Get File Information 😊
try {
  const info = await fs.stat("c:\\nodejs\\fs\\info.txt");
  console.log(info); // returns object
  console.log(info.isDirectory());
  console.log(info.isFile());
} catch (error) {
  console.log(error);
}
