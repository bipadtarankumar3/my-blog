import openai from "./openai.js";

export async function generateTopic(category) {
  const prompt = `
Give ONE SEO-friendly blog title for Indian audience.

Category: ${category}

Rules:
- Indian context
- Trending topic
- Blog title only
- No quotes
`;

  const response = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL,
    messages: [
      { role: "system", content: "You are a professional SEO blogger." },
      { role: "user", content: prompt }
    ],
    temperature: 0.7
  });

  return response.choices[0].message.content.trim();
}
