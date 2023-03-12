const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
//   process.exit()  //Exits from the server execution
});

server.listen(3000);

//We can get the console output by running localhost:3000 in the browser
