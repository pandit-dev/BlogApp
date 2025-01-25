import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
import blogRoutes from "./routes/blog.route.js"
import contactRoutes from "./routes/contact.route.js"
import connectDB from "./utils/db.js";

dotenv.config({});
const PORT = process.env.PORT || 5000;
const _dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);

app.use(express.static(path.join(_dirname, "/Frontend/dist")))
app.get('*', (_,res)=>{
  res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"))
})

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
