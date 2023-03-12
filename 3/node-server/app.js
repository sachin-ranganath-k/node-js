const http = require("http");

const server = http.createServer((req, res) => {
  //  console.log(req.url, req.headers, req.method);
  //   process.exit()  //Exits from the server execution

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head></head>");
  res.write("<body>From Node JS server..!</body>");
  res.write("</html>");
  res.end();
  // res.write();  //We can't. Because it ended at the above line
});

server.listen(3000);

//We can get the console output by running localhost:3000 in the browser
