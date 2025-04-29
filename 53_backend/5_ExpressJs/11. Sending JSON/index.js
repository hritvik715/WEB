import express from "express";
import products from "./products.js";
const app = express();

//imp-> now we will learning how to send data from backend to the frontend(client)

// Install this extenction 👇
// https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa/related

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(8000, () => console.log("Server Up!"));



