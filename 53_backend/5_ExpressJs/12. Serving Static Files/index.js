// import express from "express";
// import path from 'path';



//imp->Good catch removing "type": "module" — that's the right step! But based on your screenshot, you're still using import statements like this:

// import express from "express";
// import path from "path";
// 👉 This means your code is still using ESM syntax, which doesn’t support __dirname by default — even if "type": "module" is removed.


// You need to switch to CommonJS syntax fully.
// Change all your imports to use require like this:
const express = require("express");//imp-> import vaala tariqa yha kaam nhi krega
const path = require("path");



const app = express();

// app.use(express.static)
// express.static is a built-in middleware, which allow us to serve our static files.

app.use(express.static("./public"));//imp-> this is built in middle ware and it allow us to serve our static files

app.get("/", (req, res) => {
  // res.sendFile();
  // res.sendFile(path.join(process.cwd(), './public/index.html'));//imp->we will be using sendFile here not only send
  res.sendFile(path.join(__dirname, './public/index.html'));

});
//imp-> join method join together the strings || cwd = current working directory

app.listen(5000, () => console.log("Listening on port 5000"));
