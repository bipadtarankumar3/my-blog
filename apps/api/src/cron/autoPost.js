import cron from "node-cron";
import Category from "../db/models/Category.js";
import Post from "../db/models/Post.js";
import { generateFullPost } from "../services/ai/index.js";

import { generateImage } from "../services/ai/imageAI.js";
import { generateSlug } from "../services/seo.service.js";

async function generatePosts() {
  try {
    const category = await Category.findOne({
      where: { parentId: null }
    });

    if (!category) return [];

    // 🔥 SINGLE OPENAI CALL
    const aiPost = await generateFullPost(category.name, "en");

    const slug = generateSlug(aiPost.title);
    const exists = await Post.findOne({ where: { slug } });
    if (exists) return [];

    const post = await Post.create({
      title: aiPost.title,
      slug,
      content: aiPost.content,
      meta: aiPost.meta,
      tags: aiPost.tags,
      image: await generateImage(aiPost.title),
      categoryId: category.id,
      status: "published"
    });

    console.log("✅ AI post created:", post.title);
    return [post];

  } catch (err) {
    console.error("❌ AI auto-post error:", err.message);
    return [];
  }
}

export function startAutoPostCron() {
  cron.schedule("* * * * *", async () => {
    await generatePosts();
  });
}

export async function runAutoPostManually() {
  return await generatePosts();
}
