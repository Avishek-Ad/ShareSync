import express from "express";
import {
  uploadFile,
  downloadFile,
  analyzeFile,
} from "../controllers/fileShare.controller.js";

const router = express.Router();

router.route("/analyze").get(analyzeFile);
router.route("/upload").post(uploadFile);
router.route("/download/:fileId").get(downloadFile);

export default router;
