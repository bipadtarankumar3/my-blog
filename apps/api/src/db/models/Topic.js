import { DataTypes } from "sequelize";
import sequelize from "../postgres.js";
import Category from "./Category.js";

const Topic = sequelize.define("Topic", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

  slug: {
    type: DataTypes.STRING,
    unique: true
  },

  prompt: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  type: {
    type: DataTypes.ENUM(
      "evergreen",
      "trending",
      "comparison",
      "howto",
      "question"
    ),
    defaultValue: "evergreen"
  },

  language: {
    type: DataTypes.ENUM("en", "hi"),
    defaultValue: "en"
  },

  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },

  used: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: "topics",
  timestamps: true
});

Topic.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Topic, { foreignKey: "categoryId" });

export default Topic;
