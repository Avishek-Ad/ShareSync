import express from "express";
import {shortenURL, handleShortURL} from "../controllers/url.controller.js";

const router = express.Router();

router.route("/url").post(shortenURL);
router.route("/:shortId").get(handleShortURL);

export default router;