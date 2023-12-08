import mongoose from "mongoose";
import songSchema from "../songs/schema";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    likedSongs: [songSchema],
  },
  { collection: "users" }
);

export default userSchema;
