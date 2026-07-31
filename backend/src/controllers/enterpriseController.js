import {
  deleteEnterpriseQuery,
  editEnterpriseQuery,
  getAllEnterprise,
  insertEnterprise,
} from "../models/enterpriseModel.js";

export class EnterpriseController {
  getAll(req, res) {
    console.log("chegou ao servidor");
    //chamando o banco de dados a função getAllGames
    const enterprise = getAllEnterprise();
    //enviando a resposta da função como um json
    return res.json(enterprise);
  }
  async createEnterprise(req, res) {
    const enterprise = insertEnterprise(req.body);
    return res.status(201).json(enterprise);
  }

  async deleteEnterprise(req, res) {
    const id = req.params.id;
    await deleteEnterpriseQuery(id);
    return res.json({ message: "empresa deletada" });
  }

  async editEnterprise(req, res) {
    const enterpriseToEdit = req.body;
    const enterpriseEdited = editEnterpriseQuery(enterpriseToEdit);
    return req.json(enterpriseEdited);
  }
}
