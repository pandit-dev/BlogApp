import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import API from "../services/api";
import isUserLoggedIn from "../hooks/isUserLoggedin";
import toast from "react-hot-toast";
import checkAdmin from "../hooks/checkAdmin";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = isUserLoggedIn();
    setIsLoggedIn(user);

    // Check if user role is 'admin'
    const admin = checkAdmin();
    setIsAdmin(admin);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await API.post("/auth/logout");
      // console.log(response);

      if (response.data.success) {
        localStorage.removeItem("user");
        window.location.href = "/login";
        toast.success(response.data.message);
      } else {
        toast.error(error.response.data.message);
      }
    } catch (error) {
      console.error("Logout Error:", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">Blog App</h2>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className="hover:text-gray-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-gray-400">
              About Us
            </NavLink>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-400">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Contact Us
            </Link>
          </li>
          {isAdmin && (
            <li>
              <Link to="/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
            </li>
          )}

          {isLoggedIn ? (
            <li
              onClick={handleLogout}
              className="text-red-400 hover:text-red-500 focus:outline-none cursor-pointer"
            >
              Logout
            </li>
          ) : (
            <li>
              <Link to="/login" className="text-green-400 hover:text-green-500">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
