const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //  console.log(req.url, req.headers, req.method);
  //   process.exit()  //Exits from the server execution
  const url = req.url;
  const method = req.method;

  /*
    Matches the URL with /. And output will be form.
    Once click on Send button, output will be From Node JS server..!. Because matches the line which are after if()
*/
  if (url === "/") {
    res.write("<html>");
    res.write("<head></head>");
    res.write(
      "<body><form action=/message method=POST><input type=text name=message><button type=submit>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end(); //return: will execute the next lines of code. if not return, will not execute other lines of code
  }

  if (url === "/message" && method === "POST") {
    //req.on('data) : Executes for every chunk as it comes. (it can come once or multiple times)
    //And we push each chunk as it comes into the request body.
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    //Add all chunks into the bosy
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      //console.log(parsedBody)  //Prints the entered text in the textbox
      const msg = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", msg);
    });

    //fs.writeFileSync("message.txt", "Dummy Text");
    res.statusCode = 302;
    //302 : Indicates that the resource requested has been temporarily moved to the URL given by the Location header.
    //Can be seen in Network tab
    res.setHeader("Location", "/");
    return res.end();
  }

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
