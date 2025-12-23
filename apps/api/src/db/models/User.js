import { DataTypes } from "sequelize";
import sequelize from "../postgres.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: DataTypes.STRING,

  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

  role: {
    type: DataTypes.STRING,
    defaultValue: "admin"
  }
}, {
  tableName: "users",
  timestamps: true
});

export default User;
