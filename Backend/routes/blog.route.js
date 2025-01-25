import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getOneBlog,
  updateBlog,
} from "../controllers/blogController.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/create", isLoggedIn, isAdmin, createBlog);
router.get("/:id", isLoggedIn, getOneBlog);
router.patch("/:id", isLoggedIn, isAdmin, updateBlog);
router.delete("/:id", isLoggedIn, isAdmin, deleteBlog);

export default router;
