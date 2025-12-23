
import { extractJson } from "./jsonExtractor.js";


export async function generateFullPost(category, language = "en") {
  const prompt = `
You MUST return ONLY valid JSON.
DO NOT add explanation, notes, markdown, or HTML outside JSON.
DO NOT wrap JSON in <p> or text.

JSON FORMAT (STRICT):
{
  "title": "string",
  "content": "string (HTML allowed)"
}

Write a SEO blog post for Indian readers.

Category: ${category}
Language: ${language}

Rules:
- Minimum 600 words
- Human tone
- No AI mention
- HTML allowed ONLY inside "content"
`;

  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama3",
      prompt,
      stream: false
    })
  });

  const data = await res.json();

  return extractJson(data.response);
}
