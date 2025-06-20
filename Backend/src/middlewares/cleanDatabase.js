import cron from "node-cron";
import URL from "../models/url.model.js";
import File from "../models/file.model.js";
import Text from "../models/text.model.js";

// clean URL every 24 hrs
cron.schedule("0 0 * * *", async () => {
  try {
    console.log("Running cleanup for expired urls...");

    const result = await URL.deleteMany({ expiresAt: { $lt: new Date() } });

    console.log(`Deleted ${result.deletedCount} expired urls.`);
  } catch (error) {
    console.error("Error in cleanup (URL) cron job:", error);
  }
});

// clean File every 2 hrs
cron.schedule("0 */2 * * *", async () => {
  try {
    console.log("Running cleanup for expired files...");

    const result = await File.deleteMany({ expiresAt: { $lt: new Date() } });

    console.log(`Deleted ${result.deletedCount} expired files.`);
  } catch (error) {
    console.error("Error in cleanup cron (File) job:", error);
  }
});

// clean Text every day
cron.schedule("0 0 * * *", async () => {
  try {
    console.log("Running cleanup for expired Texts...");

    const result = await Text.deleteMany({ expiresAt: { $lt: new Date() } });

    console.log(`Deleted ${result.deletedCount} expired Texts.`);
  } catch (error) {
    console.error("Error in cleanup (Text) cron job:", error);
  }
});
