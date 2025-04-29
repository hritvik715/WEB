// 1. npm init -y
// 2. Install express (npm install express --save)
// 3. Get Express Into Your Project (require("express"))
// 4. Create instance of Express (const app = express())
// 5. Provide port (app.listen(5000, () => console.log("port 5000")))
// 6. basic rout (app.get(path, callback))

import express from 'express'

const app = express();//this create a server

// 👇 Don't worry about this code
app.use((req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => console.log("Listening on port 5000"));
