import { getAllGames } from "../models/gameModel.js";

export class GameController {
  getAll(req, res) {
    //chamando o banco de dados a função getAllGames
    const games = getAllGames();
    //enviando a resposta da função como um json
    return res.json(games);
  }
}
