import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    fileId: String,
    fileName: String,
    filePath: String,
    fileType: String,
    fileExtension: String,
    fileSize: Number,
    downloads: {
      type: Number,
      default: 0,
    },
    expiresAt: {
      type: Date,
      default: new Date(Date.now() + 2 * 60 * 60 * 1000),
    },
  },
  { timestamps: true }
);

export default mongoose.model("File", fileSchema);
