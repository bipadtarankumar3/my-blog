import "dotenv/config";   // ✅ MUST BE FIRST


import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import sequelize from "./db/postgres.js";

import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import { startAutoPostCron } from "./cron/autoPost.js";

const app = express();
const PORT = process.env.PORT || 4000;

/* =======================
   APP CONFIG
======================= */
app.set("trust proxy", 1); // ✅ required for cookies behind proxy

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

/* =======================
   ROUTES
======================= */
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (_, res) => {
  res.send("🚀 AI Blog API is running");
});

/* =======================
   ERROR HANDLER
======================= */
app.use((err, req, res, next) => {
  console.error("❌ API Error:", err);
  res.status(500).json({ message: "Internal server error" });
});

/* =======================
   START SERVER
======================= */
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connected");

    await sequelize.sync({ alter: true }); // ⚠️ use migrations in prod
    console.log("✅ Database synced");

    app.listen(PORT, () => {
      console.log(`🚀 API running on http://localhost:${PORT}`);
    });

    // 🔥 START AI AUTO POST CRON
    startAutoPostCron();
    console.log("⏰ AI auto-post cron started");

  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  }
})();
