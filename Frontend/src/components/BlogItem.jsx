import React, { useEffect, useState } from "react";
import checkAdmin from "../hooks/checkAdmin";

const BlogItem = ({ blog, onDelete, onEdit }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const admin = checkAdmin();
    setIsAdmin(admin);
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={blog.url}
        alt={blog.title}
      />

      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{blog.title}</h2>
        <p className="text-gray-700 text-base">
          {blog.content.length > 100
            ? `${blog.content.substring(0, 100)}...`
            : blog.content}
        </p>
      </div>

      <div className="px-6 pt-4 pb-2 text-sm text-gray-600">
        <span>
          Created: {new Date(blog.createdAt).toLocaleDateString("en-GB")}
        </span>
        <br />
        <span>
          Updated: {new Date(blog.updatedAt).toLocaleDateString("en-GB")}
        </span>
      </div>

      <div className="flex gap-2 mt-2 px-6 pb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Read More
        </button>
        {isAdmin && (
          <div>
            <button
              onClick={() => onEdit(blog._id)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(blog._id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
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
