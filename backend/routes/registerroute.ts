import express from "express";
import bcrypt from "bcrypt";
import { sha256 } from "js-sha256";
const registerRoute = express.Router();

registerRoute.post("/", (req, res) => {
  res.send(req.body);
});

export default registerRoute;
