import express from "express";
import mysql from "mysql";
import { DBResultLogin } from "../types/DBTypes";
import { queryToDB } from "../models/database/mySqlInstance";

const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  const username = req.body.username as string;
  const password = req.body.password as string;
  try {
    queryToDB(
      `Select * from Accounts where username = '${username}' and password = '${password}'`,
      (err, result, fields) => {
        if (err) {
          throw err;
        } else {
          res.send({
            err: false,
            accept: result.length > 0,
            username: username,
          } as DBResultLogin);
        }
      }
    );
  } catch (err) {
    res.send({ err: true, accept: false } as DBResultLogin);
  }
});

export default loginRouter;
