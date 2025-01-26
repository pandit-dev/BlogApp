import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import checkAdmin from "../hooks/checkAdmin";
import { useNavigate } from "react-router-dom";

const BlogItem = ({ blog, onDelete, onEdit }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAdmin(checkAdmin());
  }, []);

  const handleReadMore = () => {
    navigate(`/blog/${blog._id}`);
  };

  const createdDate = new Date(blog?.createdAt).toLocaleDateString("en-GB");
  const updatedDate = new Date(blog?.updatedAt).toLocaleDateString("en-GB");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Blog Image */}
      <img
        className="w-full h-48 object-cover"
        src={blog?.url || "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"}
        alt={blog?.title || "Blog Image"}
        loading="lazy"
      />

      {/* Blog Content */}
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{blog?.title}</h2>
        <p
          className="text-gray-700 text-base"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              blog?.content.length > 150
                ? `${blog?.content.substring(0, 150)}...`
                : blog?.content
            ),
          }}
        ></p>
      </div>

      {/* Date */}
      <div className="px-6 pt-4 pb-2 text-sm text-gray-600">
        <span>Created: {createdDate}</span>
        <br />
        <span>Updated: {updatedDate}</span>
      </div>

      {/* Buttons */}
      <div className="flex justify-evenly mt-2 px-6 pb-4">
        <button
          onClick={handleReadMore}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          aria-label="Read More"
        >
          Read More
        </button>
        {isAdmin && (
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(blog?._id)}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
              aria-label="Edit Blog"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(blog?._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              aria-label="Delete Blog"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogItem;
