import openai from "./openai.js";

/**
 * Rewrite trending news safely
 */
export async function rewriteNews(news, language = "en") {
  const prompt = `
Rewrite the following trending news for Indian readers.

Headline: ${news.title}
Source: ${news.source}

Rules:
- Do NOT invent facts
- Do NOT claim breaking news
- Neutral journalistic tone
- SEO friendly
- Explain clearly
- Language: ${language}
- Mention "According to reports" if needed
- Output valid HTML only
`;

  const response = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL,
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3,
    max_tokens: 1200
  });

  return response.choices[0].message.content;
}
