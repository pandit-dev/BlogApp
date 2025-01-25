import React, { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form fields
  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Email is invalid";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      formErrors.phone = "Phone number must be 10 digits";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.message) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await API.post("/contact/", formData);
        toast.success(response?.data?.message)
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to send message")
        navigate("/login");
      }
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-8 space-y-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700">
          We'd love to hear from you! Reach out to us using the form below or
          visit us at our office in Medinipur, West Bengal.
        </p>
      </div>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto my-28 p-6 bg-slate-50 shadow-lg rounded-md">
        <h2 className="text-2xl font-semibold mb-3">Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg outline-none"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg outline-none"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Customer Support Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Customer Support</h2>
        <p className="text-gray-700">
          Our customer support team is here to help you 24/7. You can reach us
          via:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-3">
          <li>Email: support@ourblog.com</li>
          <li>Phone: +91 123-456-7890</li>
          <li>Live Chat: Available on our website</li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
