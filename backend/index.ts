import express from "express";
import mongoose, { Mongoose } from "mongoose";
import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();
const connection = mysql.createConnection(process.env.SQL_STR!);

const app = express();

app.get("/thanhtoan", (req, res) => {
  // lam cai gii day
  res.send({
    isOk: "OK Nha",
  });
});
app.listen(3000, () => {
  console.log("App starting on port 3000");
});
