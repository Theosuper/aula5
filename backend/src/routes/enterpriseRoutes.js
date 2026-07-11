import { Router } from "express";
import { EnterpriseController } from "../controllers/enterpriseController.js";

const enterpriseRoutes = Router();
const controller = new EnterpriseController();

enterpriseRoutes.get("/", controller.getAll);
enterpriseRoutes.post("/", controller.createenterprise);
enterpriseRoutes.delete("/:id", controller.deleteenterprise);
enterpriseRoutes.put("/", controller.editenterprise);
export { enterpriseRoutes };
