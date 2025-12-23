export function extractJson(text) {
  try {
    // Extract first JSON object from text
    const match = text.match(/\{[\s\S]*\}/);

    if (!match) {
      throw new Error("No JSON found in AI response");
    }

    return JSON.parse(match[0]);
  } catch (err) {
    console.error("❌ JSON extract failed");
    console.error(text);

    // 🔥 Fallback (never break cron)
    return {
      title: "Latest Updates in India",
      content: `<p>${text}</p>`
    };
  }
}
