import React, { useEffect, useState } from "react";
import BlogItem from "../components/BlogItem";
import BlogForm from "../components/BlogForm";
import API from "../services/api";
import toast from "react-hot-toast";
import checkAdmin from "../hooks/checkAdmin";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

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
      console.error("Error fetching blogs:", error.message || "An error occurred.");
    }
  };

  const handelDelete = async (id) => {
    try {
      const response = await API.delete(`/blogs/${id}`); // Dynamic id
      toast.success(response.data.message);
      fetchBlogs();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to delete the blog.");
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
