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

export default mongoose;
