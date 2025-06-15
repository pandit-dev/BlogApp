import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import API from "../services/api.js";
import isUserLoggedIn from "../hooks/isUserLoggedIn.js";
import toast from "react-hot-toast";
import checkAdmin from "../hooks/checkAdmin.js";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const user = isUserLoggedIn();
    setIsLoggedIn(user);

    const admin = checkAdmin();
    setIsAdmin(admin);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await API.post("/auth/logout");

      if (response.data.success) {
        localStorage.removeItem("user");
        window.location.href = "/login";
        toast.success(response?.data?.message);
      } 
    } catch (error) {
      console.error("Logout Error:", error);
      toast.error("An error occurred while logging out.");
    }
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blog App</h1>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-2xl md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`fixed z-10 py-8 top-16 left-0 w-full h-auto bg-gray-900 flex flex-col items-center justify-center space-y-8 transform md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:space-y-0 md:space-x-6 md:py-0 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "text-green-400 underline" : "hover:text-gray-400"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "text-green-400 underline" : "hover:text-gray-400"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "text-green-400 underline" : "hover:text-gray-400"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "text-green-400 underline" : "hover:text-gray-400"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>
          {isAdmin && (
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `text-lg ${
                    isActive ? "text-green-400 underline" : "hover:text-gray-400"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </NavLink>
            </li>
          )}
          {isLoggedIn ? (
            <li
              onClick={handleLogout}
              className="text-lg text-red-400 hover:text-red-500 cursor-pointer"
            >
              Logout
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-lg ${
                    isActive ? "text-green-400 underline" : "text-green-500"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
