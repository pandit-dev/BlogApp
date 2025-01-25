import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await API.post("/auth/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Register Failed");
    } 
    finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-3xl mx-auto my-28 p-6 bg-slate-50 shadow-lg rounded-xl">
      <h1 className="text-4xl font-bold mb-4">Register</h1>
      <form
        onSubmit={handleSubmit}
        className="p-6 space-y-4"
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-2 border border-gray-300 focus:border-green-500 rounded-xl outline-none"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 focus:border-green-500 rounded-xl outline-none"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 focus:border-green-500 rounded-xl outline-none"
          onChange={handleChange}
        />
        <button
          type="submit"
          className={`bg-green-500 text-white px-4 py-2 rounded ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
          }`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Register"}
        </button>
        <div className="text-center">
          All ready have account ?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
