import express from "express";
import { runAutoPostManually } from "../cron/autoPost.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = express.Router();

/**
 * MANUAL AI POST TRIGGER (ADMIN ONLY)
 * POST /api/ai/run
 */
router.post("/run", auth, async (req, res) => {
  try {
    // ✅ Role check
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const result = await runAutoPostManually();

    res.json({
      success: true,
      message: "AI post generated successfully",
      created: result
    });
  } catch (err) {
    console.error("❌ AI route error:", err);
    res.status(500).json({ message: "AI generation failed" });
  }
});

export default router;
