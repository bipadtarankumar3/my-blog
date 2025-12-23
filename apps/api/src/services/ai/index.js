let ai;

if (process.env.AI_PROVIDER === "ollama") {
  ai = await import("./articleAI.ollama.js");
} else {
  ai = await import("./articleAI.js"); // OpenAI
}

export const generateFullPost = ai.generateFullPost;
