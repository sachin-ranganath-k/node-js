const express = require("express");
const UserRoutes = require("./src/Routes/UserRoutes");
const TaskRoutes = require("./src/Routes/TaskRoutes");

const app = express();
app.use(UserRoutes);
app.use(TaskRoutes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
