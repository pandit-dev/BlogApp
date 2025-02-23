import React, { useEffect, useState } from "react";
import API from "../services/api.js";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await API.get("/contact/");
      if (response?.data?.success) {
        setMessages(response?.data?.contactMessage);
        toast.success(response?.data?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to fetch messages. Please try again.");
    }finally{
      setLoading(false)
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="text-lg text-green-600 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <h2 className="text-lg mb-2">Contact Messages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages &&
          messages.map((msg) => (
            <div
              key={msg._id}
              className="border rounded shadow-md p-4 bg-white"
            >
              <h3 className="text-lg font-semibold mb-2">{msg.subject}</h3>
              <p>
                <strong>Name:</strong> {msg.name}
              </p>
              <p>
                <strong>Email:</strong> {msg.email}
              </p>
              <p>
                <strong>Phone Number:</strong> {msg.phone}
              </p>
              <p>
                <strong>Message:</strong> {msg.message}
              </p>
              <p className="text-gray-600 text-sm mt-4">
                <strong>Date:</strong>{" "}
                {new Date(msg.createdAt).toLocaleDateString("en-GB")}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
