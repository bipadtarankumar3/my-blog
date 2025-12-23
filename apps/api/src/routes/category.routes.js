import express from "express";
import Category from "../db/models/Category.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = express.Router();

/** PUBLIC – category tree */
router.get("/", async (_, res) => {
  const categories = await Category.findAll({
    where: { parentId: null },
    include: { model: Category, as: "children" }
  });
  res.json(categories);
});

/** ADMIN */
router.post("/", auth, async (req, res) => {
  const category = await Category.create(req.body);
  res.json(category);
});

export default router;
