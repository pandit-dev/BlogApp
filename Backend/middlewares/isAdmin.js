export const isAdmin = (req, res, next) => {
    try {
      // Assuming the `isLoggedIn` middleware sets `req.user` to the logged-in user's data
      const user = req.userId;
      // console.log(req.userId);      
      
      // Check if the user's role is 'admin'
      if (user.role !== 'admin') {
        return res.status(403).json({ success: false, message: "Access denied. Admins only." });
      }
  
      // Proceed to the next middleware/route handler
      next();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: "Internal server error." });
    }
  };
  