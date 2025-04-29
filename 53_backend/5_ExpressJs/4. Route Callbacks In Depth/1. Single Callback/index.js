import express from "express";
const app = express();

// Route callback can be in the form of
//  - Single Callback Function
//  - More then one callback
//  - Array Of Function
//  - Combination Of Both





// ----------------------------
// One Callback Function 🛫
// app.get("/", (req, res) => res.send("Single Callback"));
// app.get("/single-cb", (req, res) => res.send("Single Callback"));
// app.get(
//   "/double-cb",
//   (req, res) => {
//     // res.send("Single Callback");
//     console.log("First callback");
//   },
//   (req, res) => {
//     res.send("second callback");
//   }
// );
// ----------------------------













// ----------------------------
// More Then One Callback
//  - You cannot post response two times ❌
//  - Don't forget to pass the "next" function ⚠️
//  - (next) function will allows us to run another cb. 🏃‍♂️
//  - here in the first callback you can put your (logic) 🗯️


//imp-> u dont have to worry about next() fxn now , u will get to know in middleware
app.get(
  "/cbexample2",
  (req, res, next) => {
    console.log("First callback");
    next();
  },
  (req, res) => {
    res.send("More then one callback");
  }
);
// ----------------------------

app.listen(8000, () => console.log("Server Up!"));
