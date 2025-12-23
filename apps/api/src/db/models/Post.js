import { DataTypes } from "sequelize";
import sequelize from "../postgres.js";
import Category from "./Category.js";

const Post = sequelize.define("Post", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING },
  slug: { type: DataTypes.STRING, unique: true },
  content: { type: DataTypes.TEXT },
  image: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING, defaultValue: "published" }
}, {
  tableName: "posts",
  timestamps: true
});

Post.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Post, { foreignKey: "categoryId" });

export default Post;
