import { Router } from "express";
import { GameController } from "../controllers/gameController.js";

const gamesRoutes = Router();
const controller = new GameController();

gamesRoutes.get("/", controller.getAll);
gamesRoutes.post("/", controller.createGame);
gamesRoutes.delete("/:id", controller.deleteGame);
export { gamesRoutes };
