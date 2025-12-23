import openai from "./openai.js";

export async function generateArticle(title) {
  const prompt = `
Write a long-form SEO blog article.

Title: ${title}

Target:
- Indian readers
- Simple English
- Human tone
- No AI mention

Structure:
- Introduction
- Multiple H2 headings
- Bullet points
- Conclusion

Output:
- Valid HTML only
- Use <h2>, <p>, <ul>, <li>
`;

  const response = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL,
    messages: [
      { role: "system", content: "You are an expert Indian content writer." },
      { role: "user", content: prompt }
    ],
    temperature: 0.6,
    max_tokens: 1500
  });

  return response.choices[0].message.content;
}


export async function generateFullPost(category, language = "en") {
  const prompt = `
Create ONE complete blog post for Indian readers.

Category: ${category}
Language: ${language}

Return JSON ONLY in this format:
{
  "title": "",
  "content": "<h2>...</h2><p>...</p>",
  "meta": "",
  "tags": ["", ""]
}

Rules:
- SEO friendly
- Human tone
- No AI mention
- HTML content
- Minimum 800 words
`;

  const response = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL,
    messages: [
      { role: "system", content: "You are an expert Indian blogger." },
      { role: "user", content: prompt }
    ],
    temperature: 0.6,
    max_tokens: 1800
  });

  return JSON.parse(response.choices[0].message.content);
}

