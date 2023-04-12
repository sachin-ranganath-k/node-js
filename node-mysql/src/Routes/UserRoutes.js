const express = require("express");
const bodyParser = require("body-parser");
const con = require("../Database/Database");

const app = express();
const router = express.Router();
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH"
//   );
//    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

router.post("/user/add", (req, res) => {
  let data = { userName: req.body.userName, email: req.body.email };
  let query = "INSERT into user SET ?";
  let queryExec = con.query(query, data, (error, result) => {
    if (error) {
      res.status(400).json({
        status: 400,
        message: "Error...!",
      });
    }
    res.status(200).json({
      status: 200,
      error: null,
      responseData: {
        userName: req.body.userName,
        email: req.body.email,
      },
      responseResult: result,
      message: "Added Successfully..!",
    });
  });
});

router.get("/user/viewAll", (req, res) => {
  const sql = "SELECT * from user";
  const queryExec = con.query(sql, (error, result) => {
    if (error) {
      res.status(400).json({
        status: 400,
        message: "Error...!",
      });
    }
    res.status(200).json({
      status: 200,
      error: null,
      responseData: result,
      message: "Fetched Successfully..!",
    });
  });
});

router.get("/user/fetchUser/:id", (req, res) => {
  const sql = "SELECT * FROM user WHERE userId=?";
  const values = [req.params.id];
  con.query(sql, values, (error, result) => {
    if (error) {
      res.status(400).json({
        status: 400,
        message: "Error fetching user data",
      });
    } else {
      res.status(200).json({
        status: 200,
        responseData: result,
        message: `Fetched data with user id ${req.params.id}`,
      });
    }
  });
});

router.put("/user/updateUser/:id", (req, res) => {
  const id = req.params.id;
  const userName = req.body.userName;
  const email = req.body.email;
  const sql = `UPDATE user SET userName='${userName}', email='${email}' WHERE userId=${id}`;
  con.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).json({
        status: 400,
        message: "Error updating user data",
      });
    } else {
      // console.log(req.body)
      res.status(200).json({
        status: 200,
        responseData: req.body,
        message: `Updated data with user id ${id}`,
      });
    }
  });
});

module.exports = router;
