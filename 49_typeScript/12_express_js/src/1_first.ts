//imp-> to install expressjs => (npm i express)  in terminal

import express, { Request, Response } from "express"


const app = express()
const port = 3000


app.get('/', (request: Request, response: Response) => {
    response.send("hello , Typescript with Express !")
})//imp-> starting mey jo slash hai uska mtlb parent folder mey jaana hai

app.listen(port, () => console.log(`server running on ${port}`));


//imp-> in terminal type => npm start
//imp-> now type in chrome => localhost:3000