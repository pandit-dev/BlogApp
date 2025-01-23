import React from 'react';

const BlogItem = ({ blog }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Blog Image */}
      <img className="w-full h-48 object-cover" src={blog.url} alt={blog.title} />
      
      <div className="px-6 py-4">
        {/* Blog Title */}
        <h2 className="font-bold text-xl mb-2">{blog.title}</h2>
        
        {/* Blog Content */}
        <p className="text-gray-700 text-base">
          {blog.content.length > 100 ? `${blog.content.substring(0, 100)}...` : blog.content}
        </p>
      </div>
      
      <div className="px-6 pt-4 pb-2">
        {/* Blog Metadata */}
        <span className="text-sm text-gray-600">
          Created: {new Date(blog.createdAt).toLocaleDateString("en-GB")}
        </span>
        <br />
        <span className="text-sm text-gray-600">
          Updated: {new Date(blog.updatedAt).toLocaleDateString("en-GB")}
        </span>
      </div>
    </div>
  );
}

export default BlogItem;
