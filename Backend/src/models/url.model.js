import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalURL: String,
    shortId: String,
    clicks: {
        type: Number,
        default: 0
    },
    expiresAt: {
        type: Date,
        default: new Date(Date.now() + 24 * 60 * 60 * 1000)
    },
}, {timestamps: true});

export default mongoose.model("URL", urlSchema);