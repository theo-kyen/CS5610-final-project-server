import mongoose from "mongoose";

const songSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    id: { type: Number, required: true, unique: true },
    cover: { type: String, required: true },
    artist: { type: String, required: true },
    duration: { type: Number, required: true },
  },
  { collection: "songs" }
);

export default songSchema;
