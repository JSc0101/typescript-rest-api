import { Router } from "express";
import {initialApp, getUsers, findUserById, saveUser, deleteUser} from "../controllers/index.controllers"
const router = Router();
router.get("/", initialApp);
router.get("/users", getUsers);
router.get("/users/:id", findUserById);
router.post("/users", saveUser);
// router.put("/users/:id", (req, res) => res.send("hello world"));
router.delete("/users/:id", deleteUser);
export default router;
