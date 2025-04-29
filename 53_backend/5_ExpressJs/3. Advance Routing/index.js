import express from "express";
const app = express();

// In path area you can either pass simple Strings or Regular Expressions

// --------------------------------------
// String Pattern Path
// app.get("/ab?cd", (req, res) => {
//   res.send("If the user hit (acd) or (abcd) then this code will run.");
// });
//imp-> now visit => http://localhost:8080/abcd or  http://localhost:8080/acd

// --------------------------------------

// --------------------------------------





// Regular Expression (Regex) Path
// app.get(/x/, (req, res) => {
//   res.send("If the path includes the letter (x) it will work");
// });
//imp-> http://localhost:8080/apple => it wont work bcz apple mey x nhi hai  but http://localhost:8080/huxn  => it will work cz huxn mey x hai







// Matches requests to /users/ followed by any 4-digit number
//imp-> /users/1234  (user with 4 digit number then only it will work)
app.get(/^\/users\/[0-9]{4}$/, function (req, res) {
  res.send("Working");
});

//imp-> http://localhost:8080/users/1234

// --------------------------------------








app.get('/product/iphone', (req, res) => {
  res.send("this code will only run if you provide /product/iphone")
})

//imp-> In this case
//  only this will work =>http://localhost:8080/product/iphone
//this wont work => http://localhost:8080/
//this wont work => http://localhost:8080/prduct
//this wont work => http://localhost:8080/product/6546




app.listen(8080, () => console.log("Server Up!"));
