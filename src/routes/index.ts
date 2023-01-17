import { Router } from "express";
import {
  initialApp,
  getUsers,
  findUserById,
  saveUser,
  deleteUser,
  updateUser,
} from "../controllers/index.controllers";
const router = Router();
router.get("/", initialApp);
router.get("/users", getUsers);
router.get("/users/:id", findUserById);
router.post("/users", saveUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
export default router;
