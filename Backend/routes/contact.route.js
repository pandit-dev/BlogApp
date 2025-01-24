import express from "express"
import { getContactMessage, sendContactMessage } from "../controllers/contactController.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { adminAuth } from "../middlewares/auth.js";
const router = express.Router();

router.post('/',isLoggedIn, sendContactMessage);
router.get('/',isLoggedIn, isAdmin, getContactMessage);

export default router;
