import express from "express"
import { getContactMessage, sendContactMessage } from "../controllers/contactController.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
const router = express.Router();

router.post('/',isLoggedIn, sendContactMessage);
router.get('/', getContactMessage);

export default router;
