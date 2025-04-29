import express from "express";
const app = express();

//imp-> Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the (req.params) object, with the name of the route parameter specified in the path as their respective keys.

//imp->The colon (:) before category and id in the route definition is used to define route parameters in Express.js.

// Getting Route Params 👇
// app.get("/student/delete/:id", (req, res) => {
//   // res.send("User deleted");
//   // res.send(req.params.id);//imp-> id data will be stored on req.param
//   // console.log(req.params);
//   res.send(`Student No: ${req.params.id} delete.`);
// });

//imp-> now visit => http://localhost:8000/student/delete/:12 => it will work fine on POSTMAN too

// Destructuring Route Params
// app.get("/student/delete/:id", (req, res) => {
//   const { id } = req.params;
//   res.send(`Student No: ${id} delete.`);
// });

// Passing Multiple Route Params
// app.get("/product/:category/:id", (req, res) => {
//   const { category, id } = req.params;
//   res.send(`Product Category: (${category}), Product Id: (${id})`);
// });

// Complexcity
// app.get("/product/order/:day/:month/:year", (req, res) => {
//   const { day, month, year } = req.params;
//   res.send(`Product was ordered on: ${day}/${month}/${year}`);
// });

//imp-> now visit => http://localhost:8000/product/order/:10/:5/:2025
//imp-> now visit => http://localhost:8000/product/order/10/5/2025

// -----------------------
// The app.params() function is used to add the callback triggers to route parameters.
// It is commonly used to check for the existence of the data requested related to the route param.
// app.param(name, callback)


// app.param("id", (req, res, next, id) => {
//   console.log(`id: ${id}`);
//   next();
// });

// Thid code will not work 👇
app.param("year", (req, res, next, year) => {
  console.log(`year: ${year}`);
  next();
});

app.get("/user/:id", (req, res) => {
  console.log("This is User ID Path");
  res.send("Response Ok");
});
// -----------------------

app.listen(8000, () => console.log("Server Up!"));




//start from 1:08:00
