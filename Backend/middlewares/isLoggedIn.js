import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "You need to login first",
        success: false,
      });
    }
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "Invalid user",
        success: false,
      });
    }
    req.userRole = decode.role;
    // console.log(userId);
    
    next();
  } catch (error) {
    console.log(error);
  }
};

export default isLoggedIn;
