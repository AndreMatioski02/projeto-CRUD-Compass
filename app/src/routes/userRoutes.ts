import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router
  .get("/users", UserController.showUsers)
  .get("/users/:id", UserController.showUserById)
  .post("/users", UserController.addUser)
  .put("/users/:id", UserController.updateUser)
  .delete("/users/:id", UserController.deleteUser)

export default router;   