const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes.handler);

server.listen(3000);

//We can get the console output by running localhost:3000 in the browser
