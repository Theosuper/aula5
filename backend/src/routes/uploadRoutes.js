import { Router } from "express";
import multer from "multer";
import path from "path";
import { store } from "../controllers/uploadController.js";

const uploadRoutes = Router();

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });

uploadRoutes.post("/", upload.single("image"), store);

export { uploadRoutes };
