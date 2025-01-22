import React from 'react'

const Home = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D')" }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Blog</h1>
        <p className="text-lg mb-8">Discover the latest insights, stories, and trends in our dynamic blogs.</p>
        <a href="/blog" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
          Explore Blogs
        </a>
      </div>
    </div>
  );
}

export default Home
