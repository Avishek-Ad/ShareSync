import {nanoid} from "nanoid";
import URL from "../models/url.model.js";

const shortenURL = async (req, res) => {
  try {
    const { originalURL } = req.body;

    if (!originalURL) {
      return res.status(400).json({ message: "Original URL is required" });
    }

    // check if the url is already shortened
    const urlExists = await URL.findOne({ originalURL });
    if (urlExists) {
      const shortURL = `http://localhost:3000/${urlExists.shortId}`;
      const showInfo = {
        originalURL: urlExists.originalURL,
        shortId: urlExists.shortId,
        clicks: urlExists.clicks,
        expiresAt: urlExists.expiresAt,
        createdAt: urlExists.createdAt,
      };
      return res
        .status(200)
        .json({
          message: "URL already shortened",
          shortURL: shortURL,
          urlData: showInfo,
        });
    }

    // Generate a short URL
    const shortId = nanoid(5);
    const shortURL = `http://localhost:3000/${shortId}`;

    // Save the short URL in the database
    const newURL = await URL.create({ originalURL, shortId });
    const showInfo = {
      originalURL: newURL.originalURL,
      shortId: newURL.shortId,
      clicks: newURL.clicks,
      expiresAt: newURL.expiresAt,
      createdAt: newURL.createdAt,
    };

    res
      .status(201)
      .json({
        message: "Short URL created successfully",
        shortURL: shortURL,
        urlData: showInfo,
      });
  } catch (error) {
    console.log("Error in ShortenURL controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


const handleShortURL = async (req, res) => {
  try {
    const { shortId } = req.params;
    const url = await URL.findOne({ shortId });
    if (!url) {
      res.status(404).json({ message: "Short URL not found" });
    }
    const { originalURL } = url;

    // update the clicks
    url.clicks++;
    await url.save();

    res.redirect(originalURL);
  } catch (error) {
    console.log("Error in HandleShortURL controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { shortenURL, handleShortURL };
