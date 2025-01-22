export const isAdmin = (req, res, next) => {
    try {
      const user = req.userId;
      // console.log(req.userId);      
      
      // Check if the user's role is 'admin'
      if (user.role !== 'admin') {
        return res.status(403).json({ success: false, message: "Access denied. Admins only." });
      }
      next();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: "Internal server error." });
    }
  };
  