import express from "express";
import connectDB from "./db/connectdb.js";//imp-> you have to write (.js) extension manually
const app = express();
const port = process.env.PORT || 8000;//imp->env file vaala port aayega pehle agar any error occur then port 8000 khulega
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";//imp-> first URL is from .env file and second is local URL

connectDB(DATABASE_URL);//imp-> type-> connectDB and press enter

// INSTALL THSE 👇
// npm i express
// npm i nodemon
// npm i mongoose
// npm i dotenv

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


//imp-> in terminal => npm run dev