import express from "express";
import dotenv from "dotenv";
import { DBResultLogin } from "./types/DBTypes";
import loginRouter from "./routes/loginroute";
import fetchProductNameRoute from "./api/fetchProductName";
import registerRoute from "./routes/registerroute";
// config .env file.
dotenv.config();
// create express app.
const app = express();
// use middleware, accept all headers.
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.json());

// use Login router.
app.use("/login", loginRouter);
app.use("/product", fetchProductNameRoute);
app.use("/register", registerRoute);
// server listen to request.
app.listen(3000, () => {
  console.log("App starting on port 3000");
});
