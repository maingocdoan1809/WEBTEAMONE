import express from "express";
import mongoose, { Mongoose } from "mongoose";
mongoose
  .connect(
    "mongodb+srv://maingocdoan:280254581809@cluster0.4u81pgm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Cannot connect: " + err);
  });

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
