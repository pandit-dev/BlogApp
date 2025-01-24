import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import API from "../services/api";

const BlogForm = ({ existingBlog, onFormClose }) => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    if (existingBlog) {
      setUrl(existingBlog.url);
      setTitle(existingBlog.title);
      setContent(existingBlog.content);
    }
  }, [existingBlog]);

  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const blogData = { url, title, content };

    try {
      if (existingBlog) {
        const response = await API.patch(`/blogs/${existingBlog._id}`, blogData);
        toast.success(response.data.message);
      } else {
        const response = await API.post("/blogs/create", blogData);
        toast.success(response.data.message);
      }
      onFormClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{existingBlog ? "Edit Blog" : "Add Blog"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : existingBlog ? "Update Blog" : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
