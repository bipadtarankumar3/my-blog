import Parser from "rss-parser";

const parser = new Parser();

/**
 * Fetch trending Indian news
 */
export async function getTrendingNews(limit = 5) {
  const feed = await parser.parseURL(
    "https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en"
  );

  return feed.items.slice(0, limit).map(item => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    source: item.source?.title || "Google News"
  }));
}
