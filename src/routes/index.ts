import { Router } from "express";
import {initialApp, getUsers} from "../controllers/index.controllers"
const router = Router();
router.get("/", initialApp);
router.get("/users", getUsers);
// router.get("/users/:id", (req, res) => res.send("hello world"));
// router.post("/users", (req, res) => res.send("hello world"));
// router.put("/users/:id", (req, res) => res.send("hello world"));
// router.delete("/users/:id", (req, res) => res.send("hello world"));
export default router;
