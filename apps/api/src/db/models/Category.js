import { DataTypes } from "sequelize";
import sequelize from "../postgres.js";

const Category = sequelize.define("Category", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

  name: { type: DataTypes.STRING, allowNull: false },
  slug: { type: DataTypes.STRING, unique: true },

  parentId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: "categories",
  timestamps: false
});

Category.hasMany(Category, { as: "children", foreignKey: "parentId" });
Category.belongsTo(Category, { as: "parent", foreignKey: "parentId" });

export default Category;
