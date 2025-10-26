import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

sequelize.authenticate()
  .then(() => console.log("✅ Connected to Database"))
  .catch(err => console.error("❌ DB connection error:", err));

sequelize.sync({ alter: true });

app.use("/api/posts", postRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
});
