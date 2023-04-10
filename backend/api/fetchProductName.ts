import express from "express";
import { queryToDB } from "../models/database/mySqlInstance";

const fetchProductNameRoute = express.Router();
fetchProductNameRoute.get("/", (req, res) => {
  const userPromt = req.query.productname;

  try {
    queryToDB(
      `Select productName from MockData where productName like '${userPromt}%'`,
      (err, result, fields) => {
        if (err) {
          throw err;
        } else {
          res.send(result);
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.send([]);
  }
});

export default fetchProductNameRoute;
