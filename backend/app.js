import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", router);
//http://localhost:3000/api/user/
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://Diary:Diary123@cluster0.wl1td.mongodb.net/Diary?retryWrites=true&w=majority"
  )
  .then(() => app.listen(3000))
  .then(() => console.log("Working and listenign to localhost 3000"))
  .catch((err) => console.log(err));
