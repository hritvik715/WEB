import express from "express";
import student from "./routes/student.js";
const app = express();

// Controllers can group related request handling logic seperately.
// Instead of defining all of your request handling logic as callback in route or
// in route files, you may wish to organize this behavior using controllers modules.

app.use("/student", student);

app.listen(8000, () => console.log("Server Up!"));



//imp-> now visit => get=> http://localhost:8000/student/all
//imp-> now visit =>post => http://localhost:8000/student/create
//imp-> now visit =>put => http://localhost:8000/student/update
