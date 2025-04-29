import express from "express";
const app = express();

// A query string is the part of a URL that follows the question mark (?).
// It is used to pass data from the client to the server.
// The query string consists of one or more key-value pairs separated by ampersands (&), where each key is separated from its value by an equals sign (=).


//imp->it used to send data from client to the server by using qry string


// app.get("/product", (req, res) => {
//   console.log(req.query);
//   res.send(`Response Ok ${req.query.category}`);
// });

//imp-> now visiot => GET => http://localhost:8000/product?category=apple



// Destructuring
// app.get("/product", (req, res) => {
//   const { category } = req.query;
//   res.send(`Product Category ${category}`);
// });

// Multiple Query String
app.get("/product", (req, res) => {
  const { category, id } = req.query;
  res.send(`Product Category ${category} & Product ID: ${id}`);
});
//imp-> now visit => http://localhost:8000/product?category=apple&id=12

app.listen(8000, () => console.log("Server Up!"));


