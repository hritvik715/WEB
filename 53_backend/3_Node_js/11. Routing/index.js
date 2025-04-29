//imp-> routing se intergrated terminal open kro then type on terminal => mode index.js  => isse file path vaali error nhi aayegi


import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end("<h1> Home </h1>");
    // res.end("<a href='/contact'> Contact Page</a>")
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end("<h2> About section</h2>");
  } else if (req.url === "/contact") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end("<h3> Contact </h3>")
  }
  else {
    //imp-> write head samjhne kay liye inspect mey jaake network kay status code mey dekho chaaro kaa
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    res.end("<h3> 404 Page Not Found :( </h3>");
  }
});

server.listen(8080, () => console.log("Server running on port 8000"));
//imp-> now visit => localhost:port/
//imp-> now visit => localhost:port/about

