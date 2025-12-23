import cron from "node-cron";
import { generateTrendingNews } from "./trendingNews.js";

/**
 * Runs every 30 minutes
 */
export function startTrendingNewsCron() {
  cron.schedule("*/30 * * * *", async () => {
    console.log("🕒 Checking trending news...");
    await generateTrendingNews();
  });
}
