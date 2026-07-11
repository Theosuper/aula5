import express from "express";
import cors from "cors";
import "./database/database.js";
import { enterprisesRoutes } from "./routes/enterpriseRoutes.js";
import { enterprisesRouter } from "./routes/enterprisesRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/enterprises", enterprisesRoutes);

app.use("/api/enterprises", enterprisesRoutes);

app.use("/aviso", (req, res) => {
  res.json({ aviso: "você foi avisado" });
});

app.use("/api/enterprises", enterprisesRouter);
app.use("/", (req, res) => {
  res.json({ message: "meu servidor" });
});
app.listen(8080, () => {
  console.log("aplicativo rodando na porta 8080");
});
