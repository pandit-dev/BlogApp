export const isAdmin = (req, res, next) => {
    try {
      const user = req.userRole;
      console.log(user);      
      
      // Check if the user's role is 'admin'
      if (user !== 'admin') {
        return res.status(403).json({ success: false, message: "Access denied. Admins only." });
      }
      next();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: "Internal server error." });
    }
  };
  