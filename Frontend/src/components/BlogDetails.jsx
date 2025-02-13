import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api.js";
import toast from "react-hot-toast";
import DOMPurify from "dompurify";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchOneBlog();
  }, [id]);

  const fetchOneBlog = async () => {
    try {
      const response = await API.get(`/blogs/${id}`);
      setBlog(response?.data?.blog);
    } catch (error) {
      console.error("Error fetching blog:", error);
      toast.error(error?.response?.data?.message || "Error loading blog");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

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
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{blog.title}</h1>
      <div className="pb-2 text-sm text-gray-500">
        Posted on: {new Date(blog.createdAt).toLocaleDateString("en-GB")}
      </div>

      {blog.url ? (
        <img
          className="w-full h-96 object-cover rounded-md mb-6"
          src={blog.url}
          alt={blog.title}
        />
      ) : (
        <div className="w-full h-96 bg-gray-200 flex justify-center items-center rounded-md mb-6">
          <p className="text-gray-500">No Image Available</p>
        </div>
      )}

      <div
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }}
      ></div>

      <div className="mt-8">
        <button
          onClick={() => navigate("/blog")}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          &larr; Back
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
