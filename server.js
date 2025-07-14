 const http = require("http");

// Http requests & responses
const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end('<h1>Home Page</h1>');
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
         res.end('<h3>404 Not Found</h3>');
    }
  })
  
  server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
  });
