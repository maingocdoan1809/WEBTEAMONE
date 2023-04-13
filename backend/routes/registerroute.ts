import express from "express";
import bcrypt from "bcrypt";
import { sha256 } from "js-sha256";
import { queryToDB } from "../models/database/mySqlInstance";
const registerRoute = express.Router();

registerRoute.post("/", (req, res) => {
  const infor = req.body;
  console.log(infor);

  queryToDB(
    `Insert into Account(username, password, fullname, email, phonenumber) values ('${infor.username}','${infor.password}', '${infor.fullname}', '${infor.email}','${infor.phonenumber}')`,
    (err, result, fields) => {
      if (err) {
        res.status(406).send();
        console.log(err);
      } else {
        res.status(201).send({
          fullname: infor.fullname,
          username: infor.username,
        });
      }
    }
  );
});

export default registerRoute;
