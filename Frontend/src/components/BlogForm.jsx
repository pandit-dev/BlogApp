import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import API from "../services/api";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
        toast.success(response?.data?.message);
      } else {
        const response = await API.post("/blogs/create", blogData);
        toast.success(response?.data?.message);
      }
      onFormClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        {existingBlog ? "Edit Blog" : "Add Blog"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="url" className="block text-lg font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md outline-none shadow-sm focus:border-blue-500"
            placeholder="Enter image URL"
            required
          />
        </div>

        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md outline-none shadow-sm focus:border-blue-500"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">
            Content
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setContent(data);
            }}
          />
        </div>

        <button
          type="submit"
          className={`w-full py-3 text-lg font-medium text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
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
