import express from "express";
import {
  getPosts,
  getPostBySlug,
  createPost,
  updatePost,
  deletePost
} from "../services/post.service.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = express.Router();

/** PUBLIC */
router.get("/", async (_, res) => {
  res.json(await getPosts());
});

router.get("/:slug", async (req, res) => {
  res.json(await getPostBySlug(req.params.slug));
});

/** ADMIN */
router.post("/", auth, async (req, res) => {
  const post = await createPost(req.body);
  res.json(post);
});

router.put("/:id", auth, async (req, res) => {
  const post = await updatePost(req.params.id, req.body);
  res.json(post);
});

router.delete("/:id", auth, async (req, res) => {
  await deletePost(req.params.id);
  res.json({ success: true });
});

export default router;
