import express from "express";
import mongoConnect from "./libs/mongoConnect.js";
import urlShortnerRouter from "./routers/url.router.js";
import fileShareRouter from "./routers/fileShare.router.js";
import textShareRouter from "./routers/textShare.router.js";
import cors from "cors";

// Cleaning the database every day at 00:00
import "./middlewares/cleanDatabase.js";

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//router
app.use("/", urlShortnerRouter);
app.use("/file", fileShareRouter);
app.use("/text", textShareRouter);

const PORT = 3000;

const startServer = async() => {
    try {
        await mongoConnect();
        app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
    } catch (error) {
        console.log("Error in starting the server", error.message);
    }
}

startServer();