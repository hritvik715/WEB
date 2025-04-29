//imp-> initially install the node modules by using => npm install --save-dev nodemon (ye npm kay site mey hai) 






//imp-> now u created ur own script in .json file like  start and dev in json file
//now simple open terminal and type npm run dev => server start ho jaayega


import http from "http";

//imp-> Creating Server
const server = http.createServer((req, res) => {
    // res.writeHead(202, "Good", { "Content-Type": "text/plain" });
    res.writeHead(202, "Good", { "Content-Type": "text/html" });

    res.write("<h1>SERVER STARTS </h1>");

});

server.listen(5050, () => console.log(`Server running on port 8000`));