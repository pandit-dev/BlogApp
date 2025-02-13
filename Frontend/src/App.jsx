import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { Toaster } from "react-hot-toast";
import AdminRoute from './components/AdminRoute.jsx';
import Dashboard from './pages/Dashboard.jsx';
import BlogDetails from './components/BlogDetails.jsx';

function App() {
  
  return (
    <>
    <Toaster />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<AdminRoute><Dashboard/></AdminRoute>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App
