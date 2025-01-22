import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
};
export default generateToken;
