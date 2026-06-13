import express from "express";
import cors from "cors";
import "./database/database.js";
import { gamesRoutes } from "./routes/gameRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

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
