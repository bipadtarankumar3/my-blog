import Post from "../db/models/Post.js";
import Category from "../db/models/Category.js";
import { getTrendingNews } from "../services/news/googleNews.js";
import { rewriteNews } from "../services/ai/newsAI.js";
import { generateSlug } from "../services/seo.service.js";

/**
 * Generate trending news posts
 */
export async function generateTrendingNews() {
  const newsList = await getTrendingNews(5);

  const newsCategory = await Category.findOne({
    where: { slug: "news" }
  });

  if (!newsCategory) {
    console.log("⚠️ News category not found");
    return;
  }

  for (const news of newsList) {
    const slug = generateSlug(news.title);

    // ❌ Prevent duplicate news
    const exists = await Post.findOne({ where: { slug } });
    if (exists) continue;

    const content = await rewriteNews(news, "en");

    await Post.create({
      title: news.title,
      slug,
      content,
      categoryId: newsCategory.id,
      type: "news",
      source: news.source,
      sourceUrl: news.link,
      status: "published"
    });

    console.log("📰 Trending news published:", news.title);
  }
}
