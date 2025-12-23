import Post from "../db/models/Post.js";
import Category from "../db/models/Category.js";

export async function getPosts() {
  return Post.findAll({
    include: Category,
    order: [["createdAt", "DESC"]]
  });
}

export async function getPostBySlug(slug) {
  return Post.findOne({ where: { slug }, include: Category });
}

export async function createPost(data) {
  return Post.create(data);
}

export async function updatePost(id, data) {
  const post = await Post.findByPk(id);
  if (!post) throw new Error("Post not found");
  return post.update(data);
}

export async function deletePost(id) {
  const post = await Post.findByPk(id);
  if (!post) throw new Error("Post not found");
  return post.destroy();
}
