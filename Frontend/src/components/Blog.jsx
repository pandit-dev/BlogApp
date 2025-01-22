import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import API from "../services/api";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await API.get("/blogs/");
        // console.log(response.data);
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs && blogs.map((blog) => <BlogItem key={blog._id} blog={blog} />)}
      </div>
    </div>
  );
};

export default Blog;
