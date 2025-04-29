import express from "express"
import userCredentials from '../13_2_middle_ware/log.js'
const app = express();

/*
  Request 🙂

  Middleware 🤘

  Response 🙂
*/

// A middleware is just a javascript function
// Which Takes 3 parameters (req, res, next)


// app.get("/", userCredentials, (req, res) => {//middleware is place in between
//   res.send("<h1>This is a homepage</h1>");
// });
//imp-> see in terminal after launching local host




app.use(userCredentials);//imp->agar app.use istemal kroge toh then u dont need to write middleware in between


// app.use('apple', userCredentials);//imp-> you can specify specific route if you wanted to (isse ignore kro ye code ka hissa nhi hai) => this user credential also run for this (apple) route 


app.get("/", (req, res) => {
  res.send("<h1>This is a homepage</h1>");
});




// ---------------------------------------
app.get('/admin', userCredentials, (req, res) => {
  res.send("<h2>Hello Admin </h2>")
})

app.get('/alex', userCredentials, (req, res) => {
  res.send("<h2>Hello Alex</h2>")
})
// ---------------------------------------

// // Refactored
// app.get("/admin", (req, res) => {
//   res.send("<h2>Hello Admin </h2>");
// });

app.listen(8000, () => console.log("Listening on port 8000"));

