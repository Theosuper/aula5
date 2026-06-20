import {
  deleteGameQuery,
  getAllGames,
  insertGame,
} from "../models/gameModel.js";

export class GameController {
  getAll(req, res) {
    //chamando o banco de dados a função getAllGames
    const games = getAllGames();
    //enviando a resposta da função como um json
    return res.json(games);
  }
  async createGame(req, res) {
    const game = insertGame(req.body);
    return res.status(201).json(game);
  }

  async deleteGame(req, res) {
    const id = req.params.id;
    await deleteGameQuery(id);
    return res.json({ message: "jogo deletado" });
  }
}
