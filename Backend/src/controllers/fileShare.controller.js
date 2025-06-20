import File from "../models/file.model.js";
import cloudinary from "../libs/cloudinary.js";
import { nanoid } from "nanoid";
import axios from "axios";

const uploadFile = async (req, res) => {
  try {
    const { fileName, fileData, fileType, fileExtension, fileSize } = req.body;
    let cloudinaryResponse;

    if (!fileName || !fileData || !fileType || !fileExtension || !fileSize) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (fileSize > 20) {
      // 20MB
      return res
        .status(400)
        .json({ message: "File size should be less than 20MB" });
    }
    try {
      cloudinaryResponse = await cloudinary.uploader.upload(fileData, {
        folder: fileType,
        resource_type: "auto",
      });
    } catch (uploadError) {
      console.error("Cloudinary upload error:", uploadError.message || uploadError);
      return res.status(500).json({ message: "Error uploading file to Cloudinary" });
    }
    const shortId = nanoid(5);

    const file = await File.create({
      fileId: shortId,
      fileName: fileName,
      filePath: cloudinaryResponse.secure_url,
      fileType: fileType,
      fileExtension: fileExtension,
      fileSize: fileSize,
    });

    res.status(200).json({ message: "File uploaded successfully", file });
  } catch (error) {
    console.log("Error in uploadFile controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const downloadFile = async (req, res) => {
  try {
    const { fileId } = req.params;
    const file = await File.findOne({ fileId });
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }
    // Fetch the file from Cloudinary
    const response = await axios({
      url: file.filePath,
      method: "GET",
      responseType: "stream", // Stream the file for large downloads
    });

    // Set the response headers for the file download
    res.setHeader("Content-Disposition", `attachment; filename="${file.fileName}.${file.fileExtension}"`);
    res.setHeader("Content-Type", response.headers["content-type"]);

    // Increase the download count
    file.downloads += 1;
    await file.save();

    response.data.pipe(res);
  } catch (error) {
    console.log("Error in downloadFile controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const analyzeFile = async (req, res) => {
  try {
    const { fileId } = req.params;
    const file = await File.findOne({ fileId });
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }
    res.status(200).json({ message: "File analyzed successfully", file });
  } catch (error) {
    console.log("Error in analyzeFile controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { uploadFile, downloadFile };
