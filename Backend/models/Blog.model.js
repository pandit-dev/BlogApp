import mongoose from "mongoose";
const blogSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    // author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
export const Blog = mongoose.model("Blog", blogSchema);
