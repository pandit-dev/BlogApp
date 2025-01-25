import Cookies from "js-cookie";

const isUserLoggedIn = () => {
  const token = Cookies.get("token");
  // console.log("Token:", token);
  if (token) {
    return token;
  }
};

export default isUserLoggedIn;
