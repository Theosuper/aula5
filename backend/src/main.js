import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

const jaCadastrados = [
  {
    name: "Sonic",
    year: 1992,
    sells: 12000000,
    protagonist: "Sonic",
  },
  {
    name: "Mario",
    year: 1982,
    sells: 999020000,
    protagonist: "Mario",
  },
  {
    name: "Donkey Kong",
    year: 1987,
    sells: 81231223,
    protagonist: "Donkey Kong",
  },
  {
    name: "Final Fantasy",
    year: 2006,
    sells: 1231223,
    protagonist: "Vaan",
  },
];

app.use(express.json());

app.use("/jogos", (req, res) => {
  res.json(jaCadastrados);
});

app.use("/aviso", (req, res) => {
  res.json({ aviso: "você foi avisado" });
});
app.use("/", (req, res) => {
  res.json({ message: "meu servidor" });
});

app.listen(8080, () => {
  console.log("aplicativo rodando na porta 8080");
});
