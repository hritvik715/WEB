import express from "express";
import web from "./routes/web.js";
import bodyParser from "body-parser";
const app = express();


//imp-> hum require use nhi kar sakte kuki we are using ES6 module

//imp-> now we will talk about template engine => visit express site => resources => template engine
//imp-> we are learning EJS template engine


app.set("view engine", "ejs");
app.use("/", web);
app.use(bodyParser.json());

app.post('/post', (req, res) => {//imp-> use thunder client
    // res.send("data posted");
    const { name, youtube, age } = req.body;
    res.send(`${name} , ${youtube} , ${age}`);
})

app.listen(8000, () => console.log("Server Up!"));


//imp-> direct run krega toh error aa jaayega so npm run dev karke chla it will run fine


//imp-> 2:22:00 => how to send data from postman to vs code(index.js)