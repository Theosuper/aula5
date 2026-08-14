import express from "express";
import cors from "cors";
import "./database/database.js";
import { enterpriseRoutes } from "./routes/enterpriseRoutes.js";
import { gamesRoutes } from "./routes/gameRoutes.js";
import { authRouter } from "./routes/authRoutes.js";
import { uploadRoutes } from "./routes/uploadRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/upload", uploadRoutes);

app.use("/api/enterprises", enterpriseRoutes);

app.use("/api/games", gamesRoutes);

app.use("/aviso", (req, res) => {
  res.json({ aviso: "você foi avisado" });
});

app.use("/", (req, res) => {
  res.json({ message: "meu servidor" });
});
app.listen(8080, () => {
  console.log("aplicativo rodando na porta 8080");
});
