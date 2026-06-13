import { Router } from "express";
import { GameController } from "../controllers/gameController.js";

const gamesRoutes = Router();
const controller = new GameController();

gamesRoutes.get("/", controller.getAll);

export { gamesRoutes };
