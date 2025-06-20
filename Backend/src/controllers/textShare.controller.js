import { nanoid } from "nanoid";
import Text from "../models/text.model.js";

const uploadText = async(req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ message: "Text is required" });
        }
        const shortId = nanoid(5);

        const textData = await Text.create({
            text,
            shortId,
        });

        const responseJson = {
            text: textData.text,
            shortId: textData.shortId,
            clicks: textData.clicks,
            expiresAt: textData.expiresAt,
            createdAt: textData.createdAt
        }

        res.status(200).json({ message: "Text uploaded successfully", responseJson });
    } catch (error) {
        console.log("Error in uploadText controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getText = (req, res) => {
    try {
        const { textId } = req.params;

        const text = Text.findOne({ shortId: textId });
        if (!text) {
            return res.status(404).json({ message: "Text not found" });
        }

        const responseJson = {
            text: text.text,
        }

        res.status(200).json({ message: "Text fetched successfully", responseJson });
    } catch (error) {
        console.log("Error in getText controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }    
}

export { uploadText, getText }