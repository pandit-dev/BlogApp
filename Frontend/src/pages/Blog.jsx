import React, { useEffect, useState } from "react";
import BlogItem from "../components/BlogItem.jsx";
import BlogForm from "./BlogForm.jsx";
import API from "../services/api.js";
import toast from "react-hot-toast";
import checkAdmin from "../hooks/checkAdmin.js";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();

    const admin = checkAdmin();
    setIsAdmin(admin);
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await API.get("/blogs/");
      setBlogs(response.data.blogs);
    } catch (error) {
      toast.error("Connect to Internet");
      console.error(
        "Error fetching blogs:",
        error.message || "An error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  const handelDelete = async (id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete the blog ?"
      );
      if (confirmed) {
        const response = await API.delete(`/blogs/${id}`);
        toast.success(response?.data?.message);
        fetchBlogs();
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to delete the blog."
      );
    }
  };

  const handelEdit = (id) => {
    const blogToEdit = blogs.find((blog) => blog._id === id);
    if (blogToEdit) {
      setEditingBlog(blogToEdit);
      setShowForm(true);
    } else {
      toast.error("Blog not found for editing.");
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingBlog(null);
    fetchBlogs();
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="text-lg text-green-600 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Blogs</h1>
      {isAdmin && (
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        >
          Add New
        </button>
      )}

      {showForm ? (
        <BlogForm existingBlog={editingBlog} onFormClose={handleFormClose} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogItem
              key={blog._id}
              blog={blog}
              onDelete={handelDelete}
              onEdit={handelEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
