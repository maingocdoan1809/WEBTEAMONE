import express from "express";
import mysql from "mysql";
import { DBResultLogin } from "../types/DBResult";

const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  const username = req.body.username as string;
  const password = req.body.password as string;
  // online
  const connection = mysql.createConnection(process.env.SQL_STR!);
  // local
  // const connection = mysql.createConnection({
  //   host: "localhost",
  //   port: 3306,
  //   database: "test",
  //   user: "root",
  //   password: "",
  // });
  connection.connect((err) => {
    if (err) {
      console.log("error: " + err.message);
    } else {
      connection.query(
        `Select * from Accounts where username = '${username}' and password = '${password}'`,
        (err, result, fields) => {
          if (err) {
            console.log("error: " + err.message);
            res.send({ err: true, accept: false } as DBResultLogin);
          } else {
            res.send({
              err: false,
              accept: result.length > 0,
              username: username,
            } as DBResultLogin);
          }
        }
      );
      connection.end();
    }
  });
});

export default loginRouter;
