import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";

const app = express();

app.use(express.json());

app.use("/api/user", router);
//http://localhost:5000/api/user/

mongoose
  .connect(
    "mongodb+srv://Diary:Diary123@cluster0.wl1td.mongodb.net/Diary?retryWrites=true&w=majority"
  )
  .then(() => app.listen(3000))
  .then(() => console.log("Working and listenign to localhost 3000"))
  .catch((err) => console.log(err));
