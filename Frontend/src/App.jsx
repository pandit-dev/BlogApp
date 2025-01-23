import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from "react-hot-toast";
import AdminRoute from './components/AdminRoute';
import Dashboard from './components/Dashboard';

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<AdminRoute><Dashboard/></AdminRoute>} />
      </Routes>
    </Router>
    </>
  );
}

export default App
