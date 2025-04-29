import express from "express";
const app = express();

// app.route returns a instance of a single route,
// which you can then use to handle HTTP verbs,
// with optional middleware.
// We use (app.route) to avoide duplicate code.

// Ugly Code 😝
// app.get('/student', (req, res) => {
//   res.send('All Student')
// })

// //imp->post => it allow us to create a DATA or insert a DATA in our database

// app.post('/student', (req, res) => {
//   res.send('Add new Student')
// })

// app.put('/student', (req, res) => {
//   res.send('Add new Student')
// })
// app.delete('/student', (req, res) => {
//   res.send('Delete student')
// })


//imp-> now go to postman and paste the localHost link and press send

//imp-> Refactor 🤗
//imp-> we use app.route to avoid duplicate codes
app
  .route("/student")
  .get((req, res) => res.send("All Students"))
  .post((req, res) => res.send("Add new Student"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Remove Student"));

app.listen(8000, () => console.log("Server Up!"));
