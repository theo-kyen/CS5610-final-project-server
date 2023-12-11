import express from "express";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";
import SearchRoutes from "./home/routes.js";
import UserRoutes from "./users/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING);

const app = express();

const corsOptions = {
  credentials: true,
  origin: process.env.FRONTEND_URL,
};
app.use(cors(corsOptions));

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

app.use(express.json());

SearchRoutes(app);
UserRoutes(app);

app.listen(4000, () => console.log("Listening at 4000"));
