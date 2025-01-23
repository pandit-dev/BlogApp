
export const adminAuth = async(req, res, next) => {
  
  
  if (req.userId && req.userId.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied: Admins only' });
  }
};
