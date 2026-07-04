import { getUserByEmail, registerUser } from "../models/userModel.js";

export class AuthController {
  async register(req, res) {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Está faltando algum campo a ser preenchido!",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "As Senhas não coincidem",
      });
    }

    const userExists = await getUserByEmail(email);
    if (userExists) {
      return res.status(409).json({
        mesage: "Já existe um usuário com esse email",
      });
    }

    const user = await registerUser({
      name,
      email,
      password,
    });

    return res.status(201).json(user);
  }
}
