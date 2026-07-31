import { existEnterprise } from "../models/enterpriseModel.js";
import {
  deleteGameQuery,
  editGameQuery,
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
    if (!req.body.enterpriseId) {
      return res
        .status(400)
        .json({ message: "Precisa ter uma empresa para cadastrar o jogo" });
    }
    const enterpriseId = req.body.enterpriseId;
    const enterpriseInDatabase = existEnterprise(enterpriseId);
    console.log(enterpriseInDatabase);
    if (!enterpriseInDatabase) {
      return res
        .status(400)
        .json({ message: "Empresa não existe no banco de dados" });
    }
    const game = insertGame(req.body);
    return res.status(201).json(game);
  }

  async deleteGame(req, res) {
    const id = req.params.id;
    await deleteGameQuery(id);
    return res.json({ message: "jogo deletado" });
  }

  async editGame(req, res) {
    const gameToEdit = req.body;
    const gameEdited = editGameQuery(gameToEdit);
    return res.json(gameEdited);
  }
}
