const http = require("http");

const server = http.createServer((req, res) => {
  //  console.log(req.url, req.headers, req.method);
  //   process.exit()  //Exits from the server execution

/*
    Matches the URL with /. And output will be form.
    Once click on Send button, output will be From Node JS server..!. Because matches the line which are after if()
*/
if(req.url==="/"){
    res.write("<html>");
    res.write("<head></head>");
    res.write("<body><form action=/message><input type=text><button type=submit>Send</button></form></body>");
    res.write("</html>");
    return res.end(); //return: will execute the next lines of code. if not return, will not execute other lines of code
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
