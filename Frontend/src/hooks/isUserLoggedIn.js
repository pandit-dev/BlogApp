import Cookies from "js-cookie";
// import { Navigate } from "react-router-dom";
// import Home from "../components/Home";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

const isUserLoggedIn = () => {
  const token = Cookies.get("token");
  // console.log("Token:", token);
  if (token) {
    return token;

  }
  //  else {
  //   return <Home />;
    // navigate("/");
  // }
};
// isUserLoggedIn();
export default isUserLoggedIn;
