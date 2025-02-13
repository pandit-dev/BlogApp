import { Blog } from "../models/Blog.model.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    return res.status(200).json({ blogs, success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to get all blogs." });
  }
};
export const getOneBlog = async (req, res) => {
  try {
    const { id } = req.params;
    
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ success:false, message: "Blog not found" });
    }
    return res.status(200).json({ blog, success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to get blog." });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { url, title, content } = req.body;

    if (!url || !title || !content) {
      return res.status(400).json({
        success: false,
        message: "Image URL, Title, and Content are required.",
      });
    }

    const blog = await Blog.create({ url, title, content });

    return res.status(201).json({
      success: true,
      message: "Blog created successfully.",
      blog,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to create new blog." });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { url, title, content } = req.body;
    
    const blog = await Blog.findByIdAndUpdate(
      id,
      { url, title, content },
      { new: true, runValidators: true }
    );
    
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found." });
    }

    return res.status(200).json({
      success: true,
      message: "Blog updated successfully.",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to update blog." });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found." });
    }

    return res
      .status(200)
      .json({ success: true, message: "Blog deleted successfully." });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to delete blog." });
  }
};
