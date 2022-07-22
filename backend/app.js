import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
import { config } from "dotenv";

const app = express();
config();

app.use(cors());
app.use(express.json());

app.use("/api/user", router);
//http://localhost:3000/api/user/
app.use("/api/blog", blogRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(3000))
  .then(() => console.log("Working and listenign to localhost 3000"))
  .catch((err) => console.log(err));
