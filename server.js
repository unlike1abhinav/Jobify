import 'express-async-errors';

import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';

//routes
import jobs from "./routes/jobs.js";
import auth from "./routes/auth.js";
import user from "./routes/user.js";

//middleware
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';
import { authenticateUser} from './middlewares/authMiddleware.js';

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const dbUrl = process.env.DB_URL;
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch(() => {
    console.log("Mongo Error");
  });

// app.use(express.static(path.resolve(__dirname, "./client/dist")));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "Data received", data: req.body });
});

app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' });
});
app.use('/api/v1/jobs', authenticateUser, jobs);
app.use('/api/v1/users', authenticateUser, user);
app.use('/api/v1/auth', auth);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5100;

app.listen(5100, () => {
  console.log(`server running on port ${port}`);
});
