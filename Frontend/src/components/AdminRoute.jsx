import { Navigate } from "react-router-dom";
import checkAdmin from "../hooks/checkAdmin.js";

const AdminRoute = ({ children }) => {
  const admin = checkAdmin();
  if (!admin) {
    return <Navigate to="/" />;
  }
  return children;
};

export default AdminRoute;
