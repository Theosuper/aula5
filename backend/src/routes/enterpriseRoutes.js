import { Router } from "express";
import { EnterpriseController } from "../controllers/enterpriseController.js";

const enterpriseRoutes = Router();
const controller = new EnterpriseController();

enterpriseRoutes.get("/", controller.getAll);
enterpriseRoutes.post("/", controller.createEnterprise);
enterpriseRoutes.delete("/:id", controller.deleteEnterprise);
enterpriseRoutes.put("/", controller.editEnterprise);
export { enterpriseRoutes };
