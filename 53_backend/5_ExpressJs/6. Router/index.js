import express from "express";
import students from "./routes/student.js";//imp-> dont forget to include (.js)
import teachers from "./routes/teacher.js";

const app = express();

// First check this link out 👇
// http://expressjs.com/en/5x/api.html#router

// 1. Create routes folder and put your routes in a seperate file.
// 2. Create instance of express.Router()
// 3. Instead of app.method change that to "router.method"
// 4. Export router from a specific file
// 5. Import route in index.js file
// 6. use the (app.use) built-in middleware & provide your routes.

// Load Router Modules
app.use("/student", students);//this app.use allows us to run our middleware for every route
app.use("/teacher", teachers);

app.listen(8000, () => console.log("Server Up!"));



//now visit => http://localhost:8000/student/all
//now visit => http://localhost:8000/student/create => isse tum browser mey open nhi kar sakte bcz ye POST method hai
//now visit => http://localhost:8000/student/put => isse tum browser mey open nhi kar sakte bcz ye PUT method hai
//now visit => http://localhost:8000/student/delete => isse tum browser mey open nhi kar sakte bcz ye delete  method hai
//to open all of them open in postman

//imp-> 56:00:00 (very important point)