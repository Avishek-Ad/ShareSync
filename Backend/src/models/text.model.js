import mongoose from "mongoose";

const textSchema = new mongoose.Schema(
  {
    text: String,
    shortId: String,
    clicks: {
      type: Number,
      default: 0,
    },
    expiresAt: {
      type: Date,
      default: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
  },
  { timestamps: true }
);

export default mongoose.model("Text", textSchema);
