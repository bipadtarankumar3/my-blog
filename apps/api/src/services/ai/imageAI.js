export async function generateImage(title) {
  // For now using placeholder image with text
  return `https://dummyimage.com/1200x630/0f172a/ffffff&text=${encodeURIComponent(
    title
  )}`;
}
