import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Post = sequelize.define("Post", {
  title: { type: DataTypes.STRING, allowNull: false },
  summary: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT },
  image: { type: DataTypes.STRING }
});

export default Post;
