import Cookies from 'js-cookie';

const isUserLoggedIn = () => {
  const token = Cookies.get("token");
  // console.log("Token:", token);
  return token;
};
isUserLoggedIn()
export default isUserLoggedIn;

  

  