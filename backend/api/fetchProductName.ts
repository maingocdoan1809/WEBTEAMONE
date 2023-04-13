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
          res.status(503).send([]);
        } else {
          res.send(result);
        }
      }
    );
  } catch (err) {
    res.status(503).send([]);
  }
});

export default fetchProductNameRoute;
