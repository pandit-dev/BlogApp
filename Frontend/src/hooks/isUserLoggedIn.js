import Cookies from 'js-cookie';

const isUserLoggedIn = () => {
  const token = Cookies.get("token");
  // console.log("Token:", token);
  return token;
};

export default isUserLoggedIn;

  

  