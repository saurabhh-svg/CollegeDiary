import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
import { config } from "dotenv";
import path from "path";
//import { request } from "http";

const __dirname = path.resolve();
const app = express();
config();

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

app.use("/api/user", router);
//http://localhost:3000/api/user/
app.use("/api/blog", blogRouter);
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(3000))
  .then(() => console.log("Working and Listening to Localhost 3000"))
  .catch((err) => console.log(err));
