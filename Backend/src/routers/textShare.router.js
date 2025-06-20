import express from "express";
import { uploadText, getText } from "../controllers/textShare.controller.js";

const router = express.Router();

router.route("/upload").post(uploadText);
router.route("/download/:textId").get(getText);

export default router;