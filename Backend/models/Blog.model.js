import mongoose from "mongoose";
const blogSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);
export const Blog = mongoose.model("Blog", blogSchema);
